import React from 'react';
import { Menu } from 'lucide-react';

interface MobileHeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ setSidebarOpen }) => {
  return (
    <header className="h-16 border-b border-gray-800/60 flex items-center justify-between px-4 lg:hidden bg-[#0F1116] flex-shrink-0">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setSidebarOpen(true)} 
          className="p-2 text-gray-400 hover:bg-[#1a1d23] rounded-md"
        >
          <Menu size={24} />
        </button>
        <span className="font-bold text-white">Regras</span>
      </div>
    </header>
  );
};

export default MobileHeader;