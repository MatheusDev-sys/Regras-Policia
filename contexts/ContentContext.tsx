import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import { ContentData, ChapterDef, ContentItem, IconName, ContentItemDB, ChapterDefDB } from '../types';
import { contentData as initialDataRaw } from '../constants';
import { useAuth } from './AuthContext';

// Define initial chapters structure locally for seeding
const INITIAL_CHAPTERS: ChapterDef[] = [
  { id: 'cap1', title: 'Capítulo I - Cidade/Polícia', isGroup: true, items: ['cidade-policia', 'regras-departamento', 'prisoes', 'proibicoes', 'farm-dominas'] },
  { id: 'cap2', title: 'Capítulo II - Operacional', isGroup: true, items: ['transporte', 'rotas', 'areas'] },
  { id: 'cap3', title: 'Capítulo III - Procedimentos', isGroup: true, items: ['blitz', 'investigacoes', 'ro', 'incursoes', 'pacificacoes'] },
  { id: 'cap4', title: 'Capítulo IV - Interno', isGroup: true, items: ['recrutamentos', 'transferencia', 'blacklist', 'sets', 'discord'] },
  { id: 'cap5', title: 'Capítulo V - Ações', isGroup: true, items: ['valor-acoes', 'info-acoes'] },
];

// Helper: Convert constants data for app state
const convertToInitialState = (): ContentData => {
  const newData: ContentData = {};
  Object.keys(initialDataRaw).forEach(key => {
    const item = (initialDataRaw as any)[key];
    newData[key] = {
      id: key,
      title: item.title,
      category: item.category,
      iconName: item.iconName as IconName,
      contentHTML: item.contentHTML
    };
  });
  return newData;
};

interface ContentContextType {
  data: ContentData;
  chapters: ChapterDef[];
  version: string;
  isLoading: boolean;
  hasDbError: boolean; // Indicates if 42P17 recursion happened
  updateContent: (id: string, newContent: Partial<ContentItem>) => Promise<void>;
  updateChapter: (id: string, newChapter: Partial<ChapterDef>) => Promise<void>;
  addChapter: (title: string, isGroup?: boolean) => Promise<void>;
  deleteChapter: (id: string) => Promise<void>;
  addItemToChapter: (chapterId: string, itemKey: string, title: string) => Promise<void>;
  moveChapter: (id: string, direction: 'up' | 'down') => Promise<void>;
  reorderChapters: (newOrder: ChapterDef[]) => Promise<void>;
  updateVersion: (v: string) => Promise<void>;
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ContentData>({});
  const [chapters, setChapters] = useState<ChapterDef[]>([]);
  const [version, setVersion] = useState("v3.2 Stable");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasDbError, setHasDbError] = useState(false);
  const { role, isLoading: authLoading } = useAuth();

  // Function to seed database if empty
  const seedDatabase = async () => {
    if (role !== 'admin' && role !== 'dev') {
      return false;
    }

    const contentRows: ContentItemDB[] = Object.keys(initialDataRaw).map(key => {
      const item = (initialDataRaw as any)[key];
      return {
        id: key,
        title: item.title,
        category: item.category,
        icon_name: item.iconName,
        content_html: item.contentHTML
      };
    });

    const chapterRows: ChapterDefDB[] = INITIAL_CHAPTERS.map((ch, index) => ({
      id: ch.id,
      title: ch.title,
      is_group: ch.isGroup,
      items: ch.items,
      order_index: index
    }));

    const { error: errContent } = await supabase.from('site_content').upsert(contentRows);
    if (errContent) {
      if (errContent.code !== '42P17') console.warn("Seeding content skipped:", errContent.message);
      return false;
    }

    const { error: errChapters } = await supabase.from('chapters').upsert(chapterRows);
    if (errChapters) {
      if (errChapters.code !== '42P17') console.warn("Seeding chapters skipped:", errChapters.message);
      return false;
    }

    return true; // Success
  };

  // Load data from Supabase
  const loadFromSupabase = useCallback(async () => {
    setIsLoading(true);
    try {
      // 1. Fetch Chapters
      const { data: chaptersDB, error: chaptersError } = await supabase
        .from('chapters')
        .select('*')
        .order('order_index', { ascending: true });

      // 2. Fetch Content
      const { data: contentDB, error: contentError } = await supabase
        .from('site_content')
        .select('*');

      const error = chaptersError || contentError;

      if (error) {
        if (error.code === '42P17') {
          // CRITICAL: Recursion error detected
          console.warn("DB Recursion Error (42P17) - Loading local data (Offline Mode).");
          setHasDbError(true);
        } else {
          console.warn("Supabase Fetch Error (falling back to local):", error);
        }
        throw new Error("DB Connection Failed");
      } else {
        setHasDbError(false);
      }

      // 3. Fetch Version (Optional)
      const { data: settingsDB } = await supabase
        .from('app_settings')
        .select('value')
        .eq('key', 'version')
        .single();

      if (settingsDB?.value) {
        setVersion(settingsDB.value);
      }

      // CHECK IF DB IS EMPTY
      if ((!chaptersDB || chaptersDB.length === 0) && (!contentDB || contentDB.length === 0)) {

        setData(convertToInitialState());
        setChapters(INITIAL_CHAPTERS);

        const success = await seedDatabase();
        if (success) {
          console.log("Database seeded successfully!");
        }
        setIsLoading(false);
        return;
      }

      // Map DB types to App types
      const mappedData: ContentData = {};
      contentDB?.forEach((item: ContentItemDB) => {
        mappedData[item.id] = {
          id: item.id,
          title: item.title,
          category: item.category,
          iconName: (item.icon_name as IconName) || 'FileText',
          contentHTML: item.content_html
        };
      });

      const mappedChapters: ChapterDef[] = chaptersDB?.map((ch: ChapterDefDB) => ({
        id: ch.id,
        title: ch.title,
        isGroup: ch.is_group,
        items: Array.isArray(ch.items) ? ch.items : []
      })) || [];

      // Sort chapters
      mappedChapters.sort((a, b) => {
        const idxA = chaptersDB?.find(c => c.id === a.id)?.order_index || 0;
        const idxB = chaptersDB?.find(c => c.id === b.id)?.order_index || 0;
        return idxA - idxB;
      });

      setData(mappedData);
      setChapters(mappedChapters);

    } catch (error) {
      // Fallback to local data
      setData(convertToInitialState());
      setChapters(INITIAL_CHAPTERS);
    } finally {
      setIsLoading(false);
    }
  }, [role]);

  // Initial Load
  useEffect(() => {
    if (!authLoading) {
      loadFromSupabase();
    }
  }, [authLoading, loadFromSupabase]);

  // --- CRUD Operations ---

  const updateContent = async (id: string, newContent: Partial<ContentItem>) => {
    setData(prev => ({ ...prev, [id]: { ...prev[id], ...newContent } }));
    if (!id || hasDbError) return; // Prevent DB calls if broken

    const updates: Partial<ContentItemDB> = {};
    if (newContent.title !== undefined) updates.title = newContent.title;
    if (newContent.category !== undefined) updates.category = newContent.category;
    if (newContent.iconName !== undefined) updates.icon_name = newContent.iconName;
    if (newContent.contentHTML !== undefined) updates.content_html = newContent.contentHTML;

    const { error } = await supabase.from('site_content').update(updates).eq('id', id);
    if (error && error.code !== '42P17') console.error("Error updating content:", error);
  };

  const updateChapter = async (id: string, newChapter: Partial<ChapterDef>) => {
    setChapters(prev => prev.map(ch => ch.id === id ? { ...ch, ...newChapter } : ch));
    if (hasDbError) return;

    const updates: Partial<ChapterDefDB> = {};
    if (newChapter.title !== undefined) updates.title = newChapter.title;
    if (newChapter.items !== undefined) updates.items = newChapter.items;

    await supabase.from('chapters').update(updates).eq('id', id);
  };

  const addChapter = async (title: string, isGroup: boolean = true) => {
    const newId = `cap-${Date.now()}`;
    const newChapter: ChapterDef = { id: newId, title, isGroup, items: [] };
    setChapters(prev => [...prev, newChapter]);

    if (hasDbError) return;

    await supabase.from('chapters').insert([{
      id: newId,
      title,
      is_group: isGroup,
      items: [],
      order_index: chapters.length
    }]);
  };

  const deleteChapter = async (id: string) => {
    setChapters(prev => prev.filter(c => c.id !== id));
    if (hasDbError) return;
    await supabase.from('chapters').delete().eq('id', id);
  };

  const addItemToChapter = async (chapterId: string, itemKey: string, title: string) => {
    const newKey = itemKey || `page-${Date.now()}`;
    const newItem: ContentItem = {
      id: newKey,
      title: title,
      category: 'Novo',
      iconName: 'FileText',
      contentHTML: '<p>Nova página criada. Edite aqui.</p>'
    };

    setData(prev => ({ ...prev, [newKey]: newItem }));

    let updatedItems: string[] = [];
    setChapters(prev => prev.map(ch => {
      if (ch.id === chapterId) {
        updatedItems = [...ch.items, newKey];
        return { ...ch, items: updatedItems };
      }
      return ch;
    }));

    if (hasDbError) return;

    const { error: contentError } = await supabase.from('site_content').insert([{
      id: newKey,
      title: title,
      category: 'Novo',
      icon_name: 'FileText',
      content_html: '<p>Nova página criada. Edite aqui.</p>'
    }]);

    if (!contentError) {
      await supabase.from('chapters').update({ items: updatedItems }).eq('id', chapterId);
    }
  };

  const moveChapter = async (id: string, direction: 'up' | 'down') => {
    const idx = chapters.findIndex(c => c.id === id);
    if (idx === -1) return;
    if (direction === 'up' && idx === 0) return;
    if (direction === 'down' && idx === chapters.length - 1) return;

    const newChapters = [...chapters];
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
    [newChapters[idx], newChapters[swapIdx]] = [newChapters[swapIdx], newChapters[idx]];

    setChapters(newChapters);

    if (hasDbError) return;

    const updates = newChapters.map((ch, index) => ({
      id: ch.id,
      title: ch.title,
      order_index: index
    }));

    await supabase.from('chapters').upsert(updates, { onConflict: 'id' });
  };

  const reorderChapters = async (newOrder: ChapterDef[]) => {
    setChapters(newOrder);

    if (hasDbError) return;

    const updates = newOrder.map((ch, index) => ({
      id: ch.id,
      title: ch.title,
      order_index: index
    }));

    await supabase.from('chapters').upsert(updates, { onConflict: 'id' });
  };

  const updateVersion = async (v: string) => {
    setVersion(v);
    if (hasDbError) return;
    await supabase.from('app_settings').upsert({ key: 'version', value: v }, { onConflict: 'key' });
  };

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  return (
    <ContentContext.Provider value={{
      data,
      chapters,
      version,
      isLoading,
      hasDbError,
      updateContent,
      updateChapter,
      addChapter,
      deleteChapter,
      addItemToChapter,
      moveChapter,
      reorderChapters,
      updateVersion,
      isEditMode,
      toggleEditMode
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within ContentProvider');
  return context;
};