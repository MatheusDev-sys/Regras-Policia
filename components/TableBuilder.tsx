import React, { useState } from 'react';
import { X, Table, Plus } from 'lucide-react';

interface TableBuilderProps {
    isOpen: boolean;
    onClose: () => void;
    onInsert: (html: string) => void;
}

const TableBuilder: React.FC<TableBuilderProps> = ({ isOpen, onClose, onInsert }) => {
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(3);
    const [hasHeader, setHasHeader] = useState(true);

    if (!isOpen) return null;

    const generateTable = () => {
        let html = '<div class="overflow-x-auto"><table class="w-full border-collapse border border-gray-700 text-sm">';

        // Header
        if (hasHeader) {
            html += '<thead class="bg-gray-800 text-green-400"><tr>';
            for (let c = 0; c < cols; c++) {
                html += `<th class="border border-gray-700 p-2">Cabeçalho ${c + 1}</th>`;
            }
            html += '</tr></thead>';
        }

        // Body
        html += '<tbody>';
        for (let r = 0; r < rows; r++) {
            html += '<tr>';
            for (let c = 0; c < cols; c++) {
                html += `<td class="border border-gray-700 p-2 text-center">Célula ${r + 1},${c + 1}</td>`;
            }
            html += '</tr>';
        }
        html += '</tbody></table></div>';

        return html;
    };

    const handleInsert = () => {
        onInsert(generateTable());
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#1a1d23] border border-gray-700 rounded-xl shadow-2xl max-w-md w-full animate-in zoom-in-95">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-600/20 rounded-lg text-green-400">
                            <Table size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Criar Tabela</h2>
                            <p className="text-sm text-gray-400">Configure sua tabela</p>
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
                    {/* Rows */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Número de Linhas
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="20"
                            value={rows}
                            onChange={(e) => setRows(parseInt(e.target.value) || 1)}
                            className="w-full px-4 py-2 bg-[#0B0D12] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
                        />
                    </div>

                    {/* Cols */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Número de Colunas
                        </label>
                        <input
                            type="number"
                            min="1"
                            max="10"
                            value={cols}
                            onChange={(e) => setCols(parseInt(e.target.value) || 1)}
                            className="w-full px-4 py-2 bg-[#0B0D12] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500"
                        />
                    </div>

                    {/* Header Toggle */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            id="hasHeader"
                            checked={hasHeader}
                            onChange={(e) => setHasHeader(e.target.checked)}
                            className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
                        />
                        <label htmlFor="hasHeader" className="text-sm font-medium text-gray-300">
                            Incluir linha de cabeçalho
                        </label>
                    </div>

                    {/* Preview */}
                    <div className="p-4 bg-[#0B0D12] border border-gray-700 rounded-lg">
                        <p className="text-xs text-gray-500 uppercase font-bold mb-2">Preview</p>
                        <div className="text-xs text-gray-400">
                            Tabela {rows}x{cols} {hasHeader ? 'com cabeçalho' : 'sem cabeçalho'}
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
                        Inserir Tabela
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TableBuilder;
