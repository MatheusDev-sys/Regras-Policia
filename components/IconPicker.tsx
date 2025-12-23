import React, { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { X, Search } from 'lucide-react';
import { IconName } from '../types';

interface IconPickerProps {
  onSelect: (iconName: IconName) => void;
  onClose: () => void;
}

const IconPicker: React.FC<IconPickerProps> = ({ onSelect, onClose }) => {
  const [search, setSearch] = useState('');
  
  // Get a list of valid icon names memoized.
  // We filter out internal properties/components that aren't icons.
  const iconList = useMemo(() => {
    return Object.keys(LucideIcons).filter(key => {
      // Filter out non-component exports or internal flags
      return key !== 'createLucideIcon' && key !== 'default' && /^[A-Z]/.test(key);
    }) as IconName[];
  }, []);

  // Filter based on search
  const filteredIcons = useMemo(() => {
    if (!search) return iconList;
    return iconList.filter(name => 
      (name as string).toLowerCase().includes(search.toLowerCase())
    );
  }, [search, iconList]);

  // LIMIT RENDER: Pagination/Slice to prevent lag
  const displayIcons = filteredIcons.slice(0, 150);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-[#1a1d23] border border-gray-700 rounded-xl w-full max-w-3xl h-[600px] flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-700 flex justify-between items-center bg-[#0B0D12] rounded-t-xl">
          <div>
            <h3 className="text-white font-bold text-lg">Biblioteca de Ícones</h3>
            <p className="text-xs text-gray-400">Selecione um ícone para representar a página.</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Search */}
        <div className="p-4 bg-[#1a1d23] border-b border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Pesquisar ícone (ex: Shield, User, Car, Map)..."
              className="w-full bg-black/40 border border-gray-600 rounded-lg pl-10 pr-4 py-2.5 text-white focus:border-green-500 outline-none focus:ring-1 focus:ring-green-500/50 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          <div className="text-xs text-gray-500 mt-2 flex justify-between">
            <span>Exibindo {displayIcons.length} ícones</span>
            <span>Total: {filteredIcons.length}</span>
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#0F1116] rounded-b-xl">
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-3 custom-scrollbar content-start">
            {displayIcons.map(name => {
              const Icon = (LucideIcons as any)[name];
              if (!Icon) return null;
              return (
                <button
                  key={name as string}
                  onClick={() => onSelect(name)}
                  className="group flex flex-col items-center justify-center p-3 rounded-lg bg-[#1a1d23] border border-gray-800 hover:border-green-500 hover:bg-green-500/10 transition-all duration-200 aspect-square"
                  title={name as string}
                >
                  <Icon size={24} className="text-gray-400 group-hover:text-green-400 mb-2 transition-colors" />
                  <span className="text-[10px] text-gray-500 group-hover:text-green-300 truncate w-full text-center font-medium">
                    {name}
                  </span>
                </button>
              );
            })}
            
            {filteredIcons.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500">
                <Search size={40} className="mb-3 opacity-20" />
                <p>Nenhum ícone encontrado para "{search}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconPicker;