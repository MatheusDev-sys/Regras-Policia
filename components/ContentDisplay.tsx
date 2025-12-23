import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Edit2,
  Loader2,
  AlertTriangle
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useContent } from '../contexts/ContentContext';
import RichTextEditor from './RichTextEditor';
import IconPicker from './IconPicker';
import { IconName } from '../types';

interface ContentDisplayProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onBackToHome: () => void;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ activeTab, setActiveTab, onBackToHome }) => {
  const { data, chapters, isEditMode, updateContent, isLoading } = useContent();
  const { role } = useAuth();
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

  // 1. Handle Loading State
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0F1116] h-full text-gray-500 gap-2">
        <Loader2 className="animate-spin text-green-500" size={32} />
        <span className="text-sm font-medium">Carregando documentação...</span>
      </div>
    );
  }

  const currentData = data[activeTab] || data['introducao'];

  // 2. Safety Check: If data is missing (should not happen if loading is handled, but safe to add)
  if (!currentData) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#0F1116] h-full text-gray-500 gap-4">
        <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-full text-red-400">
          <AlertTriangle size={32} />
        </div>
        <h3 className="text-xl font-bold text-gray-300">Página não encontrada</h3>
        <p className="text-sm">O conteúdo "{activeTab}" não foi encontrado no sistema.</p>
        <button
          onClick={() => setActiveTab('introducao')}
          className="px-4 py-2 bg-[#1a1d23] hover:bg-gray-800 border border-gray-700 rounded text-sm text-white transition-colors"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  const canEdit = isEditMode && (role === 'admin' || role === 'dev');

  // Navigation Logic
  const orderedKeys: string[] = [];
  if (data['introducao']) orderedKeys.push('introducao');

  chapters.forEach(ch => {
    ch.items.forEach(itemKey => {
      if (data[itemKey] && itemKey !== 'introducao') orderedKeys.push(itemKey);
    });
  });

  const currentIndex = orderedKeys.indexOf(activeTab);
  const prevKey = currentIndex > 0 ? orderedKeys[currentIndex - 1] : null;
  const nextKey = currentIndex < orderedKeys.length - 1 ? orderedKeys[currentIndex + 1] : null;

  const IconComponent = (LucideIcons as any)[currentData.iconName] || LucideIcons.FileText;

  const handleIconUpdate = (iconName: IconName) => {
    updateContent(currentData.id, { iconName });
    setIsIconPickerOpen(false);
  };

  const handleTitleUpdate = (e: React.FormEvent<HTMLHeadingElement>) => {
    updateContent(currentData.id, { title: e.currentTarget.textContent || '' });
  };

  const handleContentSave = (html: string) => {
    updateContent(currentData.id, { contentHTML: html });
  };

  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent bg-[#0F1116]">
      {isIconPickerOpen && <IconPicker onSelect={handleIconUpdate} onClose={() => setIsIconPickerOpen(false)} />}

      <div className="max-w-4xl mx-auto px-6 py-10 md:px-12 md:py-16">

        {/* Breadcrumb: Início > Docs > Página */}
        <nav className="flex items-center text-sm text-gray-500 mb-8 select-none">
          <button
            onClick={onBackToHome}
            className="hover:text-green-400 transition-colors cursor-pointer font-medium"
          >
            Início
          </button>

          <ChevronRight size={14} className="mx-2 text-gray-700" />

          <span className="text-gray-300 font-medium">Docs</span>

          <ChevronRight size={14} className="mx-2 text-gray-700" />

          <span className="text-white font-bold truncate max-w-[200px] md:max-w-none">
            {currentData.title}
          </span>
        </nav>

        {/* Title Block */}
        <div className="mb-10 pb-6 border-b border-gray-800/60">
          <div className="flex items-center gap-4 mb-4 group">
            <div className="relative">
              <IconComponent size={40} className="text-green-500" />
              {canEdit && (
                <button
                  onClick={() => setIsIconPickerOpen(true)}
                  className="absolute -top-2 -right-2 bg-gray-700 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-500 text-white"
                  title="Alterar Ícone"
                >
                  <Edit2 size={12} />
                </button>
              )}
            </div>

            <h1
              className={`text-4xl md:text-5xl font-extrabold text-white tracking-tight ${canEdit ? 'hover:bg-white/5 rounded px-2 -ml-2 cursor-text border border-transparent hover:border-gray-700 focus:border-green-500 outline-none' : ''}`}
              contentEditable={canEdit}
              suppressContentEditableWarning={true}
              onBlur={handleTitleUpdate}
            >
              {currentData.title}
            </h1>
          </div>
          <p className="text-lg text-gray-400 leading-relaxed flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            {currentData.category}
          </p>
        </div>

        {/* Content Render / Editor */}
        <RichTextEditor
          key={activeTab}
          content={currentData.contentHTML}
          onChange={handleContentSave}
          editable={canEdit}
        />

        {/* Navigation Footer */}
        <div className="mt-24 pt-8 border-t border-gray-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevKey && data[prevKey] ? (
            <button
              onClick={() => setActiveTab(prevKey)}
              className="group flex flex-col items-start p-4 border border-gray-800 bg-[#1a1d23]/30 rounded-lg hover:border-green-500/50 hover:bg-[#1a1d23] transition-all text-left"
            >
              <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 flex items-center gap-1 group-hover:text-green-400">
                <ArrowLeft size={12} /> Anterior
              </span>
              <span className="text-lg font-bold text-gray-200 group-hover:text-white">
                {data[prevKey].title}
              </span>
            </button>
          ) : <div className="hidden sm:block"></div>}

          {nextKey && data[nextKey] ? (
            <button
              onClick={() => setActiveTab(nextKey)}
              className="group flex flex-col items-end p-4 border border-gray-800 bg-[#1a1d23]/30 rounded-lg hover:border-green-500/50 hover:bg-[#1a1d23] transition-all text-right"
            >
              <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 flex items-center gap-1 group-hover:text-green-400">
                Próximo <ArrowRight size={12} />
              </span>
              <span className="text-lg font-bold text-gray-200 group-hover:text-white">
                {data[nextKey].title}
              </span>
            </button>
          ) : <div></div>}
        </div>

      </div>
    </div>
  );
};

export default ContentDisplay;