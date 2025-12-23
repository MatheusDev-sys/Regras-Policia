import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    label?: string;
}

const PRESET_COLORS = [
    { name: 'Verde Principal', value: '#22c55e' },
    { name: 'Verde Escuro', value: '#16a34a' },
    { name: 'Cinza Claro', value: '#e5e7eb' },
    { name: 'Cinza Médio', value: '#9ca3af' },
    { name: 'Cinza Escuro', value: '#374151' },
    { name: 'Vermelho', value: '#ef4444' },
    { name: 'Amarelo', value: '#eab308' },
    { name: 'Azul', value: '#3b82f6' },
    { name: 'Roxo', value: '#a855f7' },
    { name: 'Rosa', value: '#ec4899' },
    { name: 'Laranja', value: '#f97316' },
    { name: 'Branco', value: '#ffffff' },
];

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, label = 'Cor' }) => {
    const [showCustomPicker, setShowCustomPicker] = useState(false);

    return (
        <div className="space-y-3">
            {label && <label className="text-sm font-medium text-gray-300">{label}</label>}

            {/* Preset Colors */}
            <div className="grid grid-cols-6 gap-2">
                {PRESET_COLORS.map((preset) => (
                    <button
                        key={preset.value}
                        onClick={() => onChange(preset.value)}
                        className={`w-8 h-8 rounded border-2 transition-all hover:scale-110 ${color.toLowerCase() === preset.value.toLowerCase()
                                ? 'border-green-500 ring-2 ring-green-500/50'
                                : 'border-gray-600 hover:border-gray-400'
                            }`}
                        style={{ backgroundColor: preset.value }}
                        title={preset.name}
                    />
                ))}
            </div>

            {/* Custom Color Picker Toggle */}
            <button
                onClick={() => setShowCustomPicker(!showCustomPicker)}
                className="w-full flex items-center justify-between px-3 py-2 bg-[#1a1d23] border border-gray-700 rounded text-sm text-gray-300 hover:border-green-500/50 transition-colors"
            >
                <span>Cor Personalizada</span>
                {showCustomPicker ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {/* Custom Color Picker */}
            {showCustomPicker && (
                <div className="p-4 bg-[#1a1d23] border border-gray-700 rounded space-y-3 animate-in slide-in-from-top-2">
                    <HexColorPicker color={color} onChange={onChange} className="w-full" />

                    <div className="flex items-center gap-2">
                        <div
                            className="w-10 h-10 rounded border-2 border-gray-600"
                            style={{ backgroundColor: color }}
                        />
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => onChange(e.target.value)}
                            className="flex-1 px-3 py-2 bg-[#0B0D12] border border-gray-600 rounded text-sm text-white font-mono uppercase focus:border-green-500 focus:outline-none"
                            placeholder="#000000"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
