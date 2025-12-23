import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Lock, X, UserPlus } from 'lucide-react';
import { NewtonsCradle } from 'ldrs/react';

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const { signIn, signUp, isLoading } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteToken, setInviteToken] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isRegister) {
      if (!inviteToken) {
        setError('O Token de Convite é obrigatório para registro.');
        return;
      }
      const res = await signUp(email, password, inviteToken);
      if (res.error) {
        setError(res.error);
      } else {
        onClose();
      }
    } else {
      const res = await signIn(email, password);
      if (res.error) {
        setError(res.error);
      } else {
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
      <div className="bg-[#1a1d23] border border-gray-700 rounded-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
          <X size={20} />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          {isRegister ? <UserPlus className="text-green-500" /> : <Lock className="text-green-500" />}
          {isRegister ? 'Criar Conta' : 'Acesso Restrito'}
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="flex mb-6 border-b border-gray-700">
          <button 
            className={`flex-1 pb-2 text-sm font-medium ${!isRegister ? 'text-green-400 border-b-2 border-green-500' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={() => { setIsRegister(false); setError(''); }}
          >
            Login
          </button>
          <button 
            className={`flex-1 pb-2 text-sm font-medium ${isRegister ? 'text-green-400 border-b-2 border-green-500' : 'text-gray-500 hover:text-gray-300'}`}
            onClick={() => { setIsRegister(true); setError(''); }}
          >
            Registrar
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-gray-600 rounded px-3 py-2 text-white focus:border-green-500 outline-none transition-colors"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Senha</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-gray-600 rounded px-3 py-2 text-white focus:border-green-500 outline-none transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          {isRegister && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="block text-sm text-green-400 mb-1 font-bold">Token de Convite</label>
              <input 
                type="text" 
                value={inviteToken}
                onChange={(e) => setInviteToken(e.target.value)}
                className="w-full bg-green-900/10 border border-green-600/50 rounded px-3 py-2 text-white focus:border-green-400 outline-none transition-colors placeholder-green-700/50"
                placeholder="Cole seu token aqui"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Solicite um token a um administrador para criar sua conta.
              </p>
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded transition-all flex items-center justify-center gap-2 mt-6 h-10"
          >
            {isLoading ? (
              <div className="flex items-center justify-center scale-50">
                 <NewtonsCradle size="40" speed="1.4" color="white" />
              </div>
            ) : (
              isRegister ? 'Registrar' : 'Entrar'
            )}
          </button>
        </form>
        
        {!isRegister && (
          <div className="mt-4 text-xs text-center text-gray-500">
            <p>Admin Padrão: admin@brasilrp.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;