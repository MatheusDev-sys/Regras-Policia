import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Key, Copy, Check, Save, UserCog, Users, RefreshCw, Loader2, Lock, AlertTriangle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useContent } from '../contexts/ContentContext';
import { UserRole } from '../types';
import { supabase } from '../supabaseClient';
import { NewtonsCradle } from 'ldrs/react';

interface Profile {
  id: string;
  email?: string;
  role: UserRole;
  created_at?: string;
}

const Settings: React.FC = () => {
  const { role, generateInvite, user } = useAuth();
  const { version, updateVersion, hasDbError } = useContent();

  const [generatedToken, setGeneratedToken] = useState<string | null>(null);
  const [generatedTokenType, setGeneratedTokenType] = useState<UserRole | null>(null);
  const [copied, setCopied] = useState(false);
  const [localVersion, setLocalVersion] = useState(version);
  const [isSavingVersion, setIsSavingVersion] = useState(false);

  // Members State
  const [members, setMembers] = useState<Profile[]>([]);
  const [loadingMembers, setLoadingMembers] = useState(false);

  const fetchMembers = async () => {
    // Only Devs can see members
    if (role !== 'dev' || hasDbError) return;

    setLoadingMembers(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('role', { ascending: true });

      if (data) {
        setMembers(data as Profile[]);
      }
      if (error) {
        if (error.code !== '42P17') console.error("Erro ao buscar membros:", error);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMembers(false);
    }
  };

  useEffect(() => {
    if (role === 'dev') {
      fetchMembers();
    }
  }, [role]);

  const handleGenerateToken = async (targetRole: UserRole) => {
    if (role === 'admin' && targetRole === 'dev') {
      alert("Permissão negada: Administradores não podem criar Desenvolvedores.");
      return;
    }
    if (hasDbError) {
      alert("Impossível criar tokens: Banco de dados offline. Corrija o erro 42P17 primeiro.");
      return;
    }

    const token = await generateInvite(targetRole);
    if (token) {
      setGeneratedToken(token);
      setGeneratedTokenType(targetRole);
      setCopied(false);
    }
  };

  const copyToken = () => {
    if (generatedToken) {
      navigator.clipboard.writeText(generatedToken);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };

  const handleSaveVersion = async () => {
    setIsSavingVersion(true);
    await updateVersion(localVersion);
    setIsSavingVersion(false);
  };

  const getRoleBadgeColor = (r: string) => {
    switch (r) {
      case 'dev': return 'bg-blue-900/40 text-blue-400 border-blue-700/50';
      case 'admin': return 'bg-green-900/40 text-green-400 border-green-700/50';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  // Simple access check (Dev forced if db error)
  // This must be placed AFTER all hooks to prevent React Error #310
  if (role !== 'admin' && role !== 'dev') {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <p>Acesso negado.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent bg-[#0F1116] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">

        <header className="mb-10 pb-6 border-b border-gray-800">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <SettingsIcon className="text-green-500" />
            Configurações
          </h1>
          <p className="text-gray-400 mt-2">
            {role === 'dev' ? 'Painel de Desenvolvedor (Acesso Total)' : 'Painel Administrativo'}
          </p>
        </header>


        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ${hasDbError ? 'opacity-50 pointer-events-none grayscale' : ''}`}>


          {/* Convites / Tokens */}
          <section className="bg-[#1a1d23] border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-900/30 rounded text-indigo-400">
                <Key size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Gerar Convites</h2>
                <p className="text-sm text-gray-400">Crie tokens de acesso.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleGenerateToken('admin')}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded bg-gray-800 border border-gray-700 hover:border-green-500 hover:text-white transition-all text-gray-300 text-sm font-medium"
              >
                <UserCog size={18} />
                Token ADMIN
              </button>

              <button
                onClick={() => handleGenerateToken('dev')}
                disabled={role !== 'dev'}
                className={`flex flex-col items-center justify-center gap-2 p-3 rounded border transition-all text-sm font-medium ${role === 'dev' ? 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:text-white text-gray-300' : 'bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed'}`}
                title={role !== 'dev' ? "Apenas Desenvolvedores podem criar outros DEVs" : ""}
              >
                {role !== 'dev' ? <Lock size={18} /> : <UserCog size={18} />}
                Token DEV
              </button>
            </div>

            {generatedToken && (
              <div className="mt-6 p-4 bg-black/30 border border-green-500/30 rounded-lg animate-in slide-in-from-top-2">
                <p className="text-green-400 text-xs font-bold uppercase mb-2">
                  Token {generatedTokenType} Gerado
                </p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-black p-2 rounded font-mono text-sm text-white text-center tracking-widest select-all break-all">
                    {generatedToken}
                  </code>
                  <button
                    onClick={copyToken}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
                    title="Copiar"
                  >
                    {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Este token concederá permissões de <strong>{generatedTokenType?.toUpperCase()}</strong> ao novo usuário.
                </p>
              </div>
            )}
          </section>

          {/* Sistema / Versão */}
          <section className="bg-[#1a1d23] border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-900/30 rounded text-green-400">
                <Save size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Versão do Sistema</h2>
                <p className="text-sm text-gray-400">Exibida na barra lateral.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <input
                type="text"
                value={localVersion}
                onChange={(e) => setLocalVersion(e.target.value)}
                className="flex-1 bg-black/40 border border-gray-600 rounded px-4 py-2.5 text-white focus:border-green-500 outline-none"
                placeholder="ex: v3.2 Stable"
              />
              <button
                onClick={handleSaveVersion}
                disabled={isSavingVersion}
                className="px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded flex items-center gap-2 transition-all disabled:opacity-50 min-w-[60px] justify-center"
              >
                {isSavingVersion ? (
                  <div className="scale-50">
                    <NewtonsCradle size="30" speed="1.4" color="white" />
                  </div>
                ) : (
                  <Save size={18} />
                )}
              </button>
            </div>
          </section>
        </div>

        {/* Member Management - ONLY FOR DEVS */}
        {role === 'dev' && !hasDbError && (
          <section className="bg-[#1a1d23] border border-gray-700 rounded-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-800 rounded text-gray-400">
                  <Users size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Membros da Equipe</h2>
                  <p className="text-sm text-gray-400">Gestão exclusiva de desenvolvedores.</p>
                </div>
              </div>
              <button
                onClick={fetchMembers}
                disabled={loadingMembers}
                className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                title="Atualizar Lista"
              >
                <RefreshCw size={18} className={loadingMembers ? 'animate-spin' : ''} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="bg-[#0B0D12] uppercase font-bold text-xs text-gray-500">
                  <tr>
                    <th className="px-6 py-4">ID / Email</th>
                    <th className="px-6 py-4">Cargo</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {loadingMembers ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-8 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="animate-spin text-green-500" />
                          <span>Carregando membros...</span>
                        </div>
                      </td>
                    </tr>
                  ) : members.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-6 py-8 text-center text-gray-500 italic">
                        Nenhum membro encontrado ou erro de conexão.
                      </td>
                    </tr>
                  ) : (
                    members.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 text-white font-medium">
                          <div className="flex flex-col">
                            <span>{member.email || "Email Oculto"}</span>
                            <span className="text-xs text-gray-600 font-mono">{member.id.substring(0, 8)}... {member.id === user?.id && <span className="text-green-500 font-bold ml-1">(Você)</span>}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs border font-bold uppercase ${getRoleBadgeColor(member.role)}`}>
                            {member.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Ativo
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default Settings;