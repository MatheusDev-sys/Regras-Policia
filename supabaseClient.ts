import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project credentials
// For now, if these are missing, the AuthContext will use a mock simulation
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://bvqdfvqxgywameqzdpgl.supabase.co';
const SUPABASE_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2cWRmdnF4Z3l3YW1lcXpkcGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0Mzc0ODYsImV4cCI6MjA4MjAxMzQ4Nn0._ThyjoV5v65K1DnUaBWHoZZy6pSzRSwYSxEOAa-HuDM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);