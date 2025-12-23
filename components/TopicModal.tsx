import React, { useState } from 'react';
import { X, FolderPlus, FilePlus, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import IconPicker from './IconPicker';
import { IconName } from '../types';

interface TopicModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: { title: string; isGroup: boolean; iconName?: IconName }) => void;
    mode: 'chapter' | 'item';
    initialData?: { title: string; isGroup?: boolean; iconName?: IconName };
}

const TopicModal: React.FC<TopicModalProps> = ({ isOpen, onClose, onSave, mode, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || '');
    const [isGroup, setIsGroup] = useState(initialData?.isGroup ?? (mode === 'chapter'));
    const [iconName, setIconName] = useState<IconName>(initialData?.iconName || 'FileText');
    const [showIconPicker, setShowIconPicker] = useState(false);
    const [errors, setErrors] = useState<{ title?: string }>({});

    if (!isOpen) return null;

    const validate = () => {
        const newErrors: { title?: string } = {};

        if (!title.trim()) {
            newErrors.title = 'O título é obrigatório';
        } else if (title.trim().length < 3) {
            newErrors.title = 'O título deve ter pelo menos 3 caracteres';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validate()) {
            onSave({ title: title.trim(), isGroup, iconName });
            handleClose();
        }
    };

    const handleClose = () => {
        setTitle('');
        setIsGroup(mode === 'chapter');
        setIconName('FileText');
        setErrors({});
        onClose();
    };

    return (
        <>
            {showIconPicker && (
                <IconPicker
                    onSelect={(icon) => {
                        setIconName(icon);
                        setShowIconPicker(false);
                    }}
                    onClose={() => setShowIconPicker(false)}
                />
            )}

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
                <div className="bg-[#1a1d23] border border-gray-700 rounded-xl shadow-2xl max-w-md w-full animate-in zoom-in-95 slide-in-from-bottom-4">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-600/20 rounded-lg text-green-400">
                                {mode === 'chapter' ? <FolderPlus size={24} /> : <FilePlus size={24} />}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    {initialData ? 'Editar' : 'Criar'} {mode === 'chapter' ? 'Capítulo' : 'Item'}
                                </h2>
                                <p className="text-sm text-gray-400">
                                    {mode === 'chapter' ? 'Organize seu conteúdo em capítulos' : 'Adicione um novo item'}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-6">
                        {/* Title Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Título *
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    if (errors.title) setErrors({ ...errors, title: undefined });
                                }}
                                className={`w-full px-4 py-3 bg-[#0B0D12] border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${errors.title
                                    ? 'border-red-500 focus:ring-red-500/50'
                                    : 'border-gray-600 focus:border-green-500 focus:ring-green-500/50'
                                    }`}
                                placeholder={mode === 'chapter' ? 'Ex: Capítulo I - Introdução' : 'Ex: Código Penal'}
                                autoFocus
                            />
                            {errors.title && (
                                <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-red-400"></span>
                                    {errors.title}
                                </p>
                            )}
                        </div>

                        {/* Type Toggle (only for chapters) */}
                        {mode === 'chapter' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-3">
                                    Tipo
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => setIsGroup(true)}
                                        className={`p-4 rounded-lg border-2 transition-all ${isGroup
                                            ? 'border-green-500 bg-green-500/10 text-green-400'
                                            : 'border-gray-700 bg-[#0B0D12] text-gray-400 hover:border-gray-600'
                                            }`}
                                    >
                                        <FolderPlus size={20} className="mx-auto mb-2" />
                                        <span className="text-sm font-medium">Grupo</span>
                                        <p className="text-xs mt-1 opacity-70">Contém vários itens</p>
                                    </button>
                                    <button
                                        onClick={() => setIsGroup(false)}
                                        className={`p-4 rounded-lg border-2 transition-all ${!isGroup
                                            ? 'border-green-500 bg-green-500/10 text-green-400'
                                            : 'border-gray-700 bg-[#0B0D12] text-gray-400 hover:border-gray-600'
                                            }`}
                                    >
                                        <FilePlus size={20} className="mx-auto mb-2" />
                                        <span className="text-sm font-medium">Item Único</span>
                                        <p className="text-xs mt-1 opacity-70">Página individual</p>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Icon Selector (only for items) */}
                        {mode === 'item' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Ícone
                                </label>
                                <button
                                    onClick={() => setShowIconPicker(true)}
                                    className="w-full flex items-center justify-between px-4 py-3 bg-[#0B0D12] border border-gray-600 rounded-lg text-white hover:border-green-500/50 transition-colors"
                                >
                                    <span className="flex items-center gap-2">
                                        {React.createElement((LucideIcons as any)[iconName] || LucideIcons.FileText, { size: 18 })}
                                        <span className="text-sm">{iconName}</span>
                                    </span>
                                    <span className="text-xs text-gray-500">Clique para alterar</span>
                                </button>
                            </div>
                        )}

                        {/* Preview */}
                        <div className="p-4 bg-[#0B0D12] border border-gray-700 rounded-lg">
                            <p className="text-xs text-gray-500 uppercase font-bold mb-2">Preview</p>
                            <div className="flex items-center gap-2 text-gray-300">
                                {mode === 'item' && React.createElement((LucideIcons as any)[iconName] || LucideIcons.FileText, { size: 16 })}
                                <span className={title ? 'text-white' : 'text-gray-600'}>
                                    {title || 'Digite um título...'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-700 bg-[#0B0D12]/50">
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                        >
                            <Check size={18} />
                            {initialData ? 'Salvar' : 'Criar'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopicModal;
