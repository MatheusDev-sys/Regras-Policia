import React, { useState } from 'react';
import { X, Box, Plus } from 'lucide-react';

interface CardBuilderProps {
    isOpen: boolean;
    onClose: () => void;
    onInsert: (html: string) => void;
}

const CardBuilder: React.FC<CardBuilderProps> = ({ isOpen, onClose, onInsert }) => {
    const [cardType, setCardType] = useState<'info' | 'warning' | 'success' | 'error'>('info');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    if (!isOpen) return null;

    const colorMap = {
        info: { bg: 'bg-blue-900/20', border: 'border-blue-500', text: 'text-blue-400' },
        warning: { bg: 'bg-yellow-900/20', border: 'border-yellow-500', text: 'text-yellow-400' },
        success: { bg: 'bg-green-900/20', border: 'border-green-500', text: 'text-green-400' },
        error: { bg: 'bg-red-900/20', border: 'border-red-500', text: 'text-red-400' },
    };

    const generateCard = () => {
        const colors = colorMap[cardType];
        let html = `<div class="${colors.bg} border-l-4 ${colors.border} p-4 text-sm">`;

        if (title) {
            html += `<p class="font-bold ${colors.text} mb-1">${title}</p>`;
        }

        html += `<p>${content || 'Conteúdo do card'}</p>`;
        html += '</div>';

        return html;
    };

    const handleInsert = () => {
        onInsert(generateCard());
        onClose();
        setTitle('');
        setContent('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#1a1d23] border border-gray-700 rounded-xl shadow-2xl max-w-md w-full animate-in zoom-in-95">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-600/20 rounded-lg text-green-400">
                            <Box size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Criar Card</h2>
                            <p className="text-sm text-gray-400">Card de destaque estilizado</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                            Tipo de Card
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {(['info', 'warning', 'success', 'error'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setCardType(type)}
                                    className={`p-3 rounded-lg border-2 transition-all ${cardType === type
                                            ? `${colorMap[type].border} ${colorMap[type].bg}`
                                            : 'border-gray-700 bg-[#0B0D12] hover:border-gray-600'
                                        }`}
                                >
                                    <span className={`text-sm font-medium ${cardType === type ? colorMap[type].text : 'text-gray-400'}`}>
                                        {type === 'info' && 'Info'}
                                        {type === 'warning' && 'Aviso'}
                                        {type === 'success' && 'Sucesso'}
                                        {type === 'error' && 'Erro'}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Título (opcional)
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ex: Importante"
                            className="w-full px-4 py-2 bg-[#0B0D12] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Conteúdo
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Digite o conteúdo do card..."
                            rows={3}
                            className="w-full px-4 py-2 bg-[#0B0D12] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none"
                        />
                    </div>

                    {/* Preview */}
                    <div className="p-4 bg-[#0B0D12] border border-gray-700 rounded-lg">
                        <p className="text-xs text-gray-500 uppercase font-bold mb-2">Preview</p>
                        <div className={`${colorMap[cardType].bg} border-l-4 ${colorMap[cardType].border} p-3 text-sm`}>
                            {title && <p className={`font-bold ${colorMap[cardType].text} mb-1`}>{title}</p>}
                            <p className="text-gray-300">{content || 'Conteúdo do card'}</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-700 bg-[#0B0D12]/50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleInsert}
                        className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Plus size={18} />
                        Inserir Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardBuilder;
