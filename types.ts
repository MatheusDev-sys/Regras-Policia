import { ReactNode } from 'react';
import * as LucideIcons from 'lucide-react';

// Use keyof typeof to get valid icon names
export type IconName = Extract<keyof typeof LucideIcons, string>;

export type UserRole = 'public' | 'admin' | 'dev';

export interface User {
  id: string;
  email: string;
  role: UserRole;
}

export interface ContentItem {
  id: string;
  title: string;
  category: string;
  iconName: IconName; 
  contentHTML: string; 
}

// Database row definition for 'site_content'
export interface ContentItemDB {
  id: string;
  title: string;
  category: string;
  icon_name: string;
  content_html: string;
  updated_at?: string;
}

export interface ContentData {
  [key: string]: ContentItem;
}

export interface ChapterDef {
  id: string;
  title: string;
  isGroup: boolean; 
  items: string[]; 
}

// Database row definition for 'chapters'
export interface ChapterDefDB {
  id: string;
  title: string;
  is_group: boolean;
  items: string[]; // JSONB in Postgres comes back as array
  order_index?: number;
}