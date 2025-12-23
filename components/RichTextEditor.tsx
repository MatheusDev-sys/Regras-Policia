import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { TextAlign } from '@tiptap/extension-text-align';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import {
  Bold, Italic, Underline, Strikethrough, Code,
  List, ListOrdered, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Heading1, Heading2, Heading3, Link as LinkIcon, ImageIcon,
  Undo, Redo, Quote, Minus, Code2, Table as TableIcon, Box
} from 'lucide-react';
import ColorPicker from './ColorPicker';
import TableBuilder from './TableBuilder';
import CardBuilder from './CardBuilder';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  editable?: boolean;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ content, onChange, editable = true }) => {
  const [showHTMLSource, setShowHTMLSource] = React.useState(false);
  const [htmlContent, setHtmlContent] = React.useState(content);
  const [showTableBuilder, setShowTableBuilder] = React.useState(false);
  const [showCardBuilder, setShowCardBuilder] = React.useState(false);

  React.useEffect(() => {
    setHtmlContent(content);
  }, [content]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image,
    ],
    content,
    editable,
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none',
      },
    },
    parseOptions: {
      preserveWhitespace: 'full',
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setHtmlContent(html);
      onChange(html);
    },
  });

  const handleHTMLChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newHtml = e.target.value;
    setHtmlContent(newHtml);
    onChange(newHtml);
    if (editor) {
      editor.commands.setContent(newHtml);
    }
  };

  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt('URL:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = () => {
    const url = window.prompt('URL da imagem:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const insertTable = (html: string) => {
    editor.chain().focus().insertContent(html).run();
  };

  const insertCard = (html: string) => {
    editor.chain().focus().insertContent(html).run();
  };

  const ToolbarButton = ({
    onClick,
    isActive = false,
    icon: Icon,
    title
  }: {
    onClick: () => void;
    isActive?: boolean;
    icon: any;
    title: string;
  }) => (
    <button
      onClick={onClick}
      className={`p-2 rounded transition-colors ${isActive
        ? 'bg-green-600 text-white'
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        }`}
      title={title}
      type="button"
    >
      <Icon size={18} />
    </button>
  );

  return (
    <>
      <TableBuilder
        isOpen={showTableBuilder}
        onClose={() => setShowTableBuilder(false)}
        onInsert={insertTable}
      />
      <CardBuilder
        isOpen={showCardBuilder}
        onClose={() => setShowCardBuilder(false)}
        onInsert={insertCard}
      />

      <div className="border border-gray-700 rounded-lg overflow-hidden bg-[#1a1d23]">
        {/* Toolbar */}
        {editable && (
          <div className="border-b border-gray-700 bg-[#0B0D12] p-2">
            <div className="flex flex-wrap gap-1">
              {/* Text Formatting */}
              <div className="flex gap-1 border-r border-gray-700 pr-2">
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  isActive={editor.isActive('bold')}
                  icon={Bold}
                  title="Negrito (Ctrl+B)"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  isActive={editor.isActive('italic')}
                  icon={Italic}
                  title="Itálico (Ctrl+I)"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleStrike().run()}
                  isActive={editor.isActive('strike')}
                  icon={Strikethrough}
                  title="Tachado"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleCode().run()}
                  isActive={editor.isActive('code')}
                  icon={Code}
                  title="Código"
                />
              </div>

              {/* Headings */}
              <div className="flex gap-1 border-r border-gray-700 pr-2">
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  isActive={editor.isActive('heading', { level: 1 })}
                  icon={Heading1}
                  title="Título 1"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  isActive={editor.isActive('heading', { level: 2 })}
                  icon={Heading2}
                  title="Título 2"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                  isActive={editor.isActive('heading', { level: 3 })}
                  icon={Heading3}
                  title="Título 3"
                />
              </div>

              {/* Lists */}
              <div className="flex gap-1 border-r border-gray-700 pr-2">
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleBulletList().run()}
                  isActive={editor.isActive('bulletList')}
                  icon={List}
                  title="Lista com Marcadores"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleOrderedList().run()}
                  isActive={editor.isActive('orderedList')}
                  icon={ListOrdered}
                  title="Lista Numerada"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().toggleBlockquote().run()}
                  isActive={editor.isActive('blockquote')}
                  icon={Quote}
                  title="Citação"
                />
              </div>

              {/* Alignment */}
              <div className="flex gap-1 border-r border-gray-700 pr-2">
                <ToolbarButton
                  onClick={() => editor.chain().focus().setTextAlign('left').run()}
                  isActive={editor.isActive({ textAlign: 'left' })}
                  icon={AlignLeft}
                  title="Alinhar à Esquerda"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().setTextAlign('center').run()}
                  isActive={editor.isActive({ textAlign: 'center' })}
                  icon={AlignCenter}
                  title="Centralizar"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().setTextAlign('right').run()}
                  isActive={editor.isActive({ textAlign: 'right' })}
                  icon={AlignRight}
                  title="Alinhar à Direita"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                  isActive={editor.isActive({ textAlign: 'justify' })}
                  icon={AlignJustify}
                  title="Justificar"
                />
              </div>

              {/* Insert */}
              <div className="flex gap-1 border-r border-gray-700 pr-2">
                <ToolbarButton
                  onClick={addLink}
                  isActive={editor.isActive('link')}
                  icon={LinkIcon}
                  title="Inserir Link"
                />
                <ToolbarButton
                  onClick={addImage}
                  icon={ImageIcon}
                  title="Inserir Imagem"
                />
                <ToolbarButton
                  onClick={() => setShowTableBuilder(true)}
                  icon={TableIcon}
                  title="Inserir Tabela"
                />
                <ToolbarButton
                  onClick={() => setShowCardBuilder(true)}
                  icon={Box}
                  title="Inserir Card"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().setHorizontalRule().run()}
                  icon={Minus}
                  title="Linha Horizontal"
                />
              </div>

              {/* Undo/Redo */}
              <div className="flex gap-1 border-r border-gray-700 pr-2">
                <ToolbarButton
                  onClick={() => editor.chain().focus().undo().run()}
                  icon={Undo}
                  title="Desfazer (Ctrl+Z)"
                />
                <ToolbarButton
                  onClick={() => editor.chain().focus().redo().run()}
                  icon={Redo}
                  title="Refazer (Ctrl+Y)"
                />
              </div>

              {/* HTML Source Toggle */}
              <div className="flex gap-1">
                <ToolbarButton
                  onClick={() => setShowHTMLSource(!showHTMLSource)}
                  isActive={showHTMLSource}
                  icon={Code2}
                  title="Código HTML"
                />
              </div>
            </div>

            {/* Color Pickers Row */}
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-gray-700">
              <ColorPicker
                label="Cor do Texto"
                color={editor.getAttributes('textStyle').color || '#ffffff'}
                onChange={(color) => editor.chain().focus().setColor(color).run()}
              />
              <ColorPicker
                label="Cor de Fundo"
                color={editor.getAttributes('highlight').color || '#000000'}
                onChange={(color) => editor.chain().focus().toggleHighlight({ color }).run()}
              />
            </div>
          </div>
        )}

        {/* Editor Content */}
        {editable ? (
          <EditorContent
            editor={editor}
            className="prose prose-invert max-w-none p-4 min-h-[400px] focus:outline-none"
          />
        ) : (
          <div
            className="prose prose-invert max-w-none p-4 min-h-[400px]"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}

        <style>{`
        .ProseMirror {
          outline: none;
        }
        .ProseMirror p {
          margin: 0.5em 0;
        }
        .ProseMirror h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        .ProseMirror h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.75em 0;
        }
        .ProseMirror h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        .ProseMirror ul, .ProseMirror ol {
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
        .ProseMirror li {
          margin: 0.25em 0;
        }
        .ProseMirror blockquote {
          border-left: 3px solid #22c55e;
          padding-left: 1em;
          margin: 1em 0;
          font-style: italic;
        }
        .ProseMirror code {
          background-color: #1a1d23;
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-family: monospace;
        }
        .ProseMirror a {
          color: #22c55e;
          text-decoration: underline;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .ProseMirror hr {
          border: none;
          border-top: 2px solid #374151;
          margin: 2em 0;
        }
        .ProseMirror table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          margin: 1em 0;
          overflow: hidden;
        }
        .ProseMirror td,
        .ProseMirror th {
          min-width: 1em;
          border: 1px solid #374151;
          padding: 0.5em;
          vertical-align: top;
          box-sizing: border-box;
          position: relative;
        }
        .ProseMirror th {
          font-weight: bold;
          text-align: left;
          background-color: #1a1d23;
          color: #22c55e;
        }
        .ProseMirror .selectedCell:after {
          z-index: 2;
          position: absolute;
          content: "";
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(34, 197, 94, 0.1);
          pointer-events: none;
        }
        .ProseMirror .column-resize-handle {
          position: absolute;
          right: -2px;
          top: 0;
          bottom: -2px;
          width: 4px;
          background-color: #22c55e;
          pointer-events: none;
        }
        }\n      `}</style>
      </div>
    </>
  );
};

export default RichTextEditor;