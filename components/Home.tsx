import React from 'react';
import { BookOpen, Shield, ArrowRight, ExternalLink } from 'lucide-react';

interface HomeProps {
  onEnterDocs: () => void;
  version?: string;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ onEnterDocs, version = 'v3.2', onTermsClick, onPrivacyClick }) => {
  return (
    <div className="min-h-screen bg-[#0F1116] flex flex-col font-sans text-gray-100 overflow-hidden relative selection:bg-green-500/30">

      {/* Cover Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cover.png"
          alt="Brasil Roleplay Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1116]/70 via-[#0F1116]/85 to-[#0F1116]"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-green-900/10 to-transparent pointer-events-none z-[1]" />
      <div className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#0B0D12] to-transparent pointer-events-none z-[1]" />

      {/* Navbar Minimalista */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Brasil Roleplay Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-xl tracking-tight">Brasil Roleplay</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-green-400 transition-colors">Discord</a>
          <a href="#" className="hover:text-green-400 transition-colors">Loja</a>
          <button
            onClick={onEnterDocs}
            className="px-4 py-2 bg-[#1a1d23] border border-gray-700 hover:border-green-500/50 hover:text-green-400 rounded-md transition-all"
          >
            Área Policial
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 pb-20">

        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Portal Oficial
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]">
              Regulamento <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700">
                Policial
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Bem-vindo ao portal oficial de regras e procedimentos da força policial de Brasil Roleplay. Explore as diretrizes para manter a ordem e a justiça em nossa comunidade.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onEnterDocs}
                className="group relative px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Acessar Documentação <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <a
                href="https://ilegal.gitbook.io/brasil-roleplay"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#1a1d23]/50 border border-gray-700 text-gray-300 font-bold rounded-lg hover:bg-[#1a1d23] hover:text-white hover:border-gray-500 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                Sobre a Cidade <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Hero Image / Cards */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Main Visual Card */}
            <div className="relative w-full max-w-md aspect-[4/5] md:aspect-square bg-[#0B0D12] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={onEnterDocs}>

              {/* Image Layer */}
              <div className="absolute inset-0">
                <img
                  src="/cover.png"
                  alt="Brasil Roleplay - Regulamento da Polícia"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                {/* Fallback Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0B0D12] to-green-900/20 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="w-12 h-12 bg-green-600/20 backdrop-blur-md border border-green-500/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white text-green-400 transition-all duration-300">
                  <Shield size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Regulamento & Docs</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Acesse todas as regras, códigos penais, procedimentos de abordagem e hierarquia.
                </p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold group-hover:translate-x-2 transition-transform duration-300">
                  Ler Agora <ArrowRight size={16} />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur text-xs font-mono text-gray-400 border border-gray-800 rounded">
                {version}
              </div>
            </div>

            {/* Background Decor Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-green-500/20 rounded-2xl hidden md:block" />
            <div className="absolute -z-20 top-20 -right-20 w-full h-full border border-gray-800 rounded-2xl hidden md:block opacity-50" />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/60 bg-[#0B0D12] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <p>&copy; 2025 Brasil Roleplay. Todos os direitos reservados.</p>
            <span className="hidden md:inline">•</span>
            <a href="#" className="flex items-center gap-2 hover:text-green-400 transition-colors">
              <img src="/matheus-dev.jpg" alt="Matheus Dev" className="w-5 h-5 rounded-full" />
              <span>Desenvolvido por <strong>Matheus Dev</strong></span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onTermsClick} className="hover:text-white transition-colors">Termos</button>
            <button onClick={onPrivacyClick} className="hover:text-white transition-colors">Privacidade</button>
            <span className="flex items-center gap-2">
              Status: <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;