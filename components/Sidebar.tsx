import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  LogIn,
  LogOut,
  Edit,
  Eye,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Settings as SettingsIcon,
  FileText,
  AlertTriangle
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { DndContext, closestCenter, DragEndEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useAuth } from '../contexts/AuthContext';
import { useContent } from '../contexts/ContentContext';
import Login from './Login';
import SortableItem from './SortableItem';
import TopicModal from './TopicModal';
import { IconName } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  openChapters: Record<string, boolean>;
  toggleChapter: (id: string) => void;
  onGoToSettings: () => void;
  onBackToDocs: () => void;
  currentView: 'docs' | 'settings';
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  sidebarOpen,
  setSidebarOpen,
  searchQuery,
  setSearchQuery,
  openChapters,
  toggleChapter,
  onGoToSettings,
  onBackToDocs,
  currentView
}) => {
  const { user, role, signOut } = useAuth();
  const {
    data,
    chapters,
    version,
    isEditMode,
    toggleEditMode,
    addChapter,
    deleteChapter,
    addItemToChapter,
    moveChapter,
    reorderChapters,
    hasDbError
  } = useContent();

  const [showLogin, setShowLogin] = useState(false);
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [modalMode, setModalMode] = useState<'chapter' | 'item'>('chapter');
  const [currentChapterId, setCurrentChapterId] = useState<string>('');

  const canEdit = role === 'admin' || role === 'dev';

  // Drag and drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleTabClick = (id: string) => {
    if (currentView === 'settings') {
      onBackToDocs();
    }
    setActiveTab(id);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const handleAddChapter = () => {
    setModalMode('chapter');
    setShowTopicModal(true);
  };

  const handleAddPage = (e: React.MouseEvent, chapterId: string) => {
    e.stopPropagation();
    setCurrentChapterId(chapterId);
    setModalMode('item');
    setShowTopicModal(true);
  };

  const handleMoveChapter = (e: React.MouseEvent, id: string, dir: 'up' | 'down') => {
    e.stopPropagation();
    moveChapter(id, dir);
  };

  const handleDeleteChapter = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (confirm('Tem certeza que deseja excluir este tópico?')) {
      deleteChapter(id);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = chapters.findIndex(ch => ch.id === active.id);
    const newIndex = chapters.findIndex(ch => ch.id === over.id);

    const newOrder = arrayMove(chapters, oldIndex, newIndex);
    reorderChapters(newOrder);
  };

  const handleTopicSave = (data: { title: string; isGroup: boolean; iconName?: IconName }) => {
    if (modalMode === 'chapter') {
      addChapter(data.title, data.isGroup);
    } else {
      addItemToChapter(currentChapterId, '', data.title);
    }
  };

  return (
    <>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showTopicModal && (
        <TopicModal
          isOpen={showTopicModal}
          onClose={() => setShowTopicModal(false)}
          onSave={handleTopicSave}
          mode={modalMode}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0B0D12] border-r border-gray-800/60 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800/60 bg-[#0B0D12]">
            <div className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Brasil Roleplay" className="w-8 h-8 object-contain mr-3" />
              <span className="font-bold text-gray-200 tracking-tight">Regras</span>
            </div>
            {canEdit && (
              <button
                onClick={toggleEditMode}
                className={`p-1.5 rounded transition-colors ${isEditMode ? 'bg-green-500/20 text-green-400' : 'text-gray-500 hover:text-white'}`}
                title={isEditMode ? "Sair da Edição" : "Modo Edição"}
              >
                {isEditMode ? <Edit size={16} /> : <Eye size={16} />}
              </button>
            )}
          </div>

          {/* Search */}
          <div className="p-4">
            <div className="relative group">
              <Search className="absolute left-3 top-2.5 text-gray-500 group-focus-within:text-green-400 transition-colors" size={16} />
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#1a1d23] border border-gray-700/50 rounded-md text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
              />
            </div>

            {/* DB ERROR ALERT */}
            {hasDbError && (
              <div className="mt-4 p-3 bg-red-900/20 border border-red-500/50 rounded flex flex-col gap-2 animate-pulse">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase">
                  <AlertTriangle size={12} /> Erro Crítico
                </div>
                <p className="text-[10px] text-red-300 leading-tight">
                  Banco de dados em loop (42P17). O site está em modo offline.
                </p>
                <button onClick={onGoToSettings} className="bg-red-600 hover:bg-red-500 text-white text-xs py-1.5 rounded font-bold transition-colors">
                  CORRIGIR AGORA
                </button>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">

            {/* Introdução (Static/Initial) */}
            <div className="px-3 mb-2">
              <button
                onClick={() => handleTabClick('introducao')}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'introducao' && currentView === 'docs' ? 'bg-green-500/10 text-green-400' : 'text-gray-400 hover:bg-[#1a1d23] hover:text-white'}`}
              >
                <BookOpen size={18} /> Introdução
              </button>
            </div>

            {/* Dynamic Chapters Loop with Drag and Drop */}
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={chapters.map(ch => ch.id)}
                strategy={verticalListSortingStrategy}
                disabled={!isEditMode || !canEdit || hasDbError}
              >
                {chapters?.map((chapter) => (
                  <SortableItem
                    key={chapter.id}
                    id={chapter.id}
                    disabled={!isEditMode || !canEdit || hasDbError}
                  >
                    <div className="mb-1 relative group/chapter">
                      <div className="flex items-center justify-between px-6 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider hover:text-green-400 transition-colors">
                        <button
                          onClick={() => toggleChapter(chapter.id)}
                          className="flex-1 flex items-center justify-between text-left h-full"
                        >
                          <span className="truncate pr-2">{chapter.title}</span>
                          {chapter.isGroup && (openChapters[chapter.id] ? <ChevronDown size={14} className="shrink-0" /> : <ChevronRight size={14} className="shrink-0" />)}
                        </button>

                        {isEditMode && canEdit && !hasDbError && (
                          <div className="flex gap-1 ml-2 bg-[#0B0D12] pl-1">
                            <button onClick={(e) => handleMoveChapter(e, chapter.id, 'up')} className="p-1 text-gray-500 hover:text-white" title="Mover para Cima"><ArrowUp size={12} /></button>
                            <button onClick={(e) => handleMoveChapter(e, chapter.id, 'down')} className="p-1 text-gray-500 hover:text-white" title="Mover para Baixo"><ArrowDown size={12} /></button>
                            {chapter.isGroup && <button onClick={(e) => handleAddPage(e, chapter.id)} className="p-1 text-gray-500 hover:text-green-400" title="Adicionar Página"><Plus size={12} /></button>}
                            <button onClick={(e) => handleDeleteChapter(e, chapter.id)} className="p-1 text-gray-500 hover:text-red-500" title="Excluir"><Trash2 size={12} /></button>
                          </div>
                        )}
                      </div>

                      {(!chapter.isGroup || openChapters[chapter.id]) && (
                        <div className={`${chapter.isGroup ? 'mt-1 mb-2 bg-[#1a1d23]/30 py-1 border-l-2 border-gray-800 ml-6 rounded-r' : 'ml-0'}`}>
                          {chapter.items?.map(key => {
                            if (!data[key]) return null;
                            if (searchQuery && !data[key].title.toLowerCase().includes(searchQuery.toLowerCase())) return null;

                            const iconName = data[key].iconName;
                            const Icon = (LucideIcons as any)[iconName] || FileText;

                            return (
                              <button
                                key={key}
                                onClick={() => handleTabClick(key)}
                                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-all border-l-2 ${activeTab === key && currentView === 'docs'
                                  ? 'bg-green-500/10 text-green-400 border-green-500 font-medium'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white border-transparent'
                                  }`}
                              >
                                {Icon && <Icon size={16} className="shrink-0 opacity-70" />}
                                <span className="truncate">{data[key].title}</span>
                              </button>
                            );
                          })}
                          {chapter.items?.length === 0 && chapter.isGroup && (
                            <div className="px-4 py-2 text-xs text-gray-600 italic">Vazio</div>
                          )}
                        </div>
                      )}
                    </div>
                  </SortableItem>
                ))}
              </SortableContext>
            </DndContext>

            {isEditMode && canEdit && !hasDbError && (
              <button
                onClick={handleAddChapter}
                className="w-full py-3 flex items-center justify-center text-gray-500 hover:text-green-400 hover:bg-gray-800/50 border-t border-gray-800 mt-2 gap-2 text-sm transition-colors"
              >
                <Plus size={16} /> Novo Tópico
              </button>
            )}
          </div>

          {/* Footer Sidebar */}
          <div className="p-4 border-t border-gray-800/60 text-xs text-gray-600 bg-[#0B0D12] space-y-3">

            {/* Settings Link (Admin/Dev) */}
            {(canEdit || hasDbError) && (
              <button
                onClick={onGoToSettings}
                className={`w-full flex items-center gap-2 p-2 rounded transition-colors ${currentView === 'settings' ? 'bg-indigo-900/30 text-indigo-300 border border-indigo-500/30' : 'bg-[#1a1d23] hover:bg-gray-800 text-gray-400 hover:text-white'} ${hasDbError ? 'animate-pulse text-red-400 bg-red-900/10' : ''}`}
              >
                <SettingsIcon size={14} />
                <span>Configurações</span>
              </button>
            )}

            {/* Login/Logout Button */}
            <button
              onClick={() => user ? signOut() : setShowLogin(true)}
              className="w-full flex items-center justify-center gap-2 p-2 rounded bg-[#1a1d23] hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              {user ? (
                <>
                  <LogOut size={14} />
                  <span className="truncate max-w-[150px]">{user.email}</span>
                </>
              ) : (
                <>
                  <LogIn size={14} /> Login
                </>
              )}
            </button>

            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <span className={`flex h-2 w-2 relative ${hasDbError ? '' : ''}`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${hasDbError ? 'bg-red-400' : 'bg-green-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${hasDbError ? 'bg-red-500' : 'bg-green-500'}`}></span>
                </span>
                <span className={`text-gray-500 ${hasDbError ? 'text-red-400 font-bold' : ''}`}>
                  {hasDbError ? 'Offline Mode' : version}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-600">Brasil RP</span>
              </div>
            </div>

            {/* Developer Credits */}
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-800/30">
              <img src={`${import.meta.env.BASE_URL}matheus-dev.jpg`} alt="Matheus Dev" className="w-4 h-4 rounded-full" />
              <span className="text-[10px] text-gray-600">
                by <strong className="text-gray-500">Matheus Dev</strong>
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;