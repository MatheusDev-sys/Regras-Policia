import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  role: UserRole;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, inviteToken: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  generateInvite: (role: UserRole) => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<UserRole>('public');
  const [isLoading, setIsLoading] = useState(true);

  // Load user from session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          // Real Supabase Session Found
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', session.user.id)
            .single();
          
          let userRole: UserRole = 'public';

          if (error) {
             // 42P17 = Infinite Recursion in RLS Policy
             if (error.code === '42P17') {
                console.warn("⚠️ CRITICAL DB ERROR (42P17): Infinite Recursion detected in 'profiles' RLS policy.");
                
                // Fallback attempt: Use metadata if available
                if (session.user.user_metadata?.role) {
                   userRole = session.user.user_metadata.role as UserRole;
                } else {
                   // EMERGENCY FALLBACK: 
                   // If DB is broken (recursion) and we are logged in, default to 'dev' 
                   // so the user can access Settings to see the SQL fix instructions.
                   console.warn("ℹ️ Force-enabling DEV mode in UI to allow troubleshooting.");
                   userRole = 'dev';
                }
             }
             // PGRST116 = JSON object requested, multiple (or no) rows returned (Expected for new users)
             else if (error.code !== 'PGRST116') {
                console.error("Error fetching profile:", error);
             }
          } else {
             userRole = profile?.role || 'public';
          }

          setUser({ id: session.user.id, email: session.user.email!, role: userRole });
          setRole(userRole);
        }
      } catch (error: any) {
        console.error("Session check error", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        setIsLoading(false);
        return { error: error.message };
      }

      if (data.user) {
        // Try to fetch profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', data.user.id)
          .single();
        
        let fetchedRole: UserRole = 'public';

        if (profileError) {
           if (profileError.code === '42P17') {
             // Handle recursion error on login
             console.warn("⚠️ DB Recursion Error (42P17) on Login. Force-enabling DEV UI.");
             // Try metadata first, otherwise force dev
             fetchedRole = (data.user.user_metadata?.role as UserRole) || 'dev';
           } else if (profileError.code !== 'PGRST116') {
             console.error("Error fetching user role:", profileError);
           }
        } else {
           fetchedRole = profile?.role || 'public';
        }
          
        setUser({ id: data.user.id, email: data.user.email!, role: fetchedRole });
        setRole(fetchedRole);
        
        setIsLoading(false);
        return { error: null };
      }
      
      setIsLoading(false);
      return { error: "Login falhou: Usuário não encontrado." };
    } catch (e: any) {
      setIsLoading(false);
      return { error: e.message || "Erro inesperado ao fazer login." };
    }
  };

  const signUp = async (email: string, password: string, inviteToken: string) => {
    setIsLoading(true);
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            invite_token: inviteToken
          }
        }
      });

      if (authError) {
        setIsLoading(false);
        return { error: authError.message };
      }

      if (authData.user) {
        await new Promise(r => setTimeout(r, 1000));

        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', authData.user.id)
          .single();
        
        let fetchedRole: UserRole = 'public';

        if (profileError) {
          if (profileError.code === '42P17') {
            fetchedRole = (authData.user.user_metadata?.role as UserRole) || 'dev';
          }
        } else {
          fetchedRole = profile?.role || 'public';
        }

        setUser({ id: authData.user.id, email: authData.user.email!, role: fetchedRole });
        setRole(fetchedRole);
        
        setIsLoading(false);
        return { error: null };
      }

      setIsLoading(false);
      return { error: "Erro ao criar conta. Verifique seu token." };
    } catch (e: any) {
      setIsLoading(false);
      return { error: e.message || "Erro inesperado no registro." };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setRole('public');
  };

  const generateInvite = async (targetRole: UserRole): Promise<string | null> => {
    if (role !== 'admin' && role !== 'dev') return null;

    const token = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    
    try {
      const { error } = await supabase
        .from('registration_tokens')
        .insert([{ token, role: targetRole, created_by: user?.id }]);
      
      if (error) {
        console.error("Failed to generate token in DB:", error);
        if (error.code === '42P17') {
           alert("Erro: O banco de dados está em loop (Recursão Infinita 42P17). Veja a aba 'Configurações' para corrigir.");
        }
        return null;
      }
      return token;
    } catch (e) {
      console.error("Exception generating token:", e);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, isLoading, signIn, signUp, signOut, generateInvite }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};