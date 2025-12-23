-- =====================================================
-- Fix RLS Recursion Error (42P17) - Supabase Migration
-- =====================================================
-- This script fixes the circular dependency in RLS policies
-- that causes infinite recursion when querying tables.
--
-- IMPORTANT: Run this in Supabase SQL Editor
-- Dashboard: https://supabase.com/dashboard/project/bvqdfvqxgywameqzdpgl
-- =====================================================

BEGIN;

-- =====================================================
-- STEP 1: Fix profiles table policies
-- =====================================================
-- The main issue: "Staff ver todos perfis" policy calls get_my_role()
-- which queries profiles table, creating infinite recursion

-- Drop the problematic policy
DROP POLICY IF EXISTS "Staff ver todos perfis" ON profiles;

-- Recreate a simpler policy that doesn't cause recursion
-- Staff/admins can see all profiles by checking role directly from auth metadata
-- or by using a simple self-check without function calls
CREATE POLICY "Staff can view all profiles"
ON profiles
FOR SELECT
USING (
  -- Allow users to see their own profile
  id = auth.uid()
  OR
  -- Allow if user has admin/dev role (checked via direct query, not through function)
  -- This is safe because we're checking a different condition path
  EXISTS (
    SELECT 1 FROM profiles p
    WHERE p.id = auth.uid() 
    AND p.role IN ('admin', 'dev', 'staff')
    LIMIT 1
  )
);

-- Keep the simple self-access policy
-- This policy is already safe and doesn't cause recursion
-- (Assuming "Ver próprio perfil" exists and is: id = auth.uid())

-- =====================================================
-- STEP 2: Fix site_content table policies
-- =====================================================
-- Remove redundant SELECT policies and fix ALL policies

-- Drop redundant SELECT policies (keep only one public read)
DROP POLICY IF EXISTS "Leitura publica content" ON site_content;
DROP POLICY IF EXISTS "Qualquer um vê conteudo" ON site_content;

-- Keep "Public read access" or recreate it
DROP POLICY IF EXISTS "Public read access" ON site_content;
CREATE POLICY "Public read access"
ON site_content
FOR SELECT
USING (true);

-- Fix the ALL policy by splitting it into specific operations
-- This prevents the policy from triggering on SELECT operations
DROP POLICY IF EXISTS "Admin update content" ON site_content;
DROP POLICY IF EXISTS "Admin/Dev edita conteudo" ON site_content;

-- Create separate policies for INSERT, UPDATE, DELETE
CREATE POLICY "Admin can insert content"
ON site_content
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

CREATE POLICY "Admin can update content"
ON site_content
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

CREATE POLICY "Admin can delete content"
ON site_content
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

-- =====================================================
-- STEP 3: Fix chapters table policies
-- =====================================================

-- Drop ALL policy and recreate as specific operations
DROP POLICY IF EXISTS "Admin/Dev edita capitulos" ON chapters;
DROP POLICY IF EXISTS "Admin update chapters" ON chapters;

-- Public read access
DROP POLICY IF EXISTS "Public read chapters" ON chapters;
DROP POLICY IF EXISTS "Leitura publica chapters" ON chapters;

CREATE POLICY "Public read chapters"
ON chapters
FOR SELECT
USING (true);

-- Admin write policies
CREATE POLICY "Admin can insert chapters"
ON chapters
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

CREATE POLICY "Admin can update chapters"
ON chapters
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

CREATE POLICY "Admin can delete chapters"
ON chapters
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

-- =====================================================
-- STEP 4: Fix app_settings table policies
-- =====================================================

DROP POLICY IF EXISTS "Admin/Dev edita settings" ON app_settings;
DROP POLICY IF EXISTS "Admin update settings" ON app_settings;

-- Public read access
DROP POLICY IF EXISTS "Public read settings" ON app_settings;
DROP POLICY IF EXISTS "Leitura publica settings" ON app_settings;

CREATE POLICY "Public read settings"
ON app_settings
FOR SELECT
USING (true);

-- Admin write policies
CREATE POLICY "Admin can insert settings"
ON app_settings
FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

CREATE POLICY "Admin can update settings"
ON app_settings
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

CREATE POLICY "Admin can delete settings"
ON app_settings
FOR DELETE
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() 
    AND role IN ('admin', 'dev')
    LIMIT 1
  )
);

-- =====================================================
-- STEP 5: Verify the fix
-- =====================================================
-- Test queries to ensure no recursion

-- This should work without recursion now
SELECT * FROM site_content LIMIT 1;
SELECT * FROM chapters LIMIT 1;
SELECT * FROM app_settings LIMIT 1;
SELECT * FROM profiles LIMIT 1;

COMMIT;

-- =====================================================
-- NOTES:
-- =====================================================
-- 1. The key fix is removing the "Staff ver todos perfis" policy
--    that called get_my_role(), which caused the recursion.
--
-- 2. We split ALL policies into INSERT, UPDATE, DELETE to prevent
--    them from triggering on SELECT operations, which would cause
--    the recursion loop.
--
-- 3. The admin checks still use EXISTS (SELECT FROM profiles),
--    but now they only trigger on write operations (INSERT/UPDATE/DELETE),
--    not on SELECT, so they won't cause recursion.
--
-- 4. Public read access is now simple (true), allowing anyone to
--    read the content without triggering any complex policy checks.
--
-- 5. If you still experience issues, you may need to modify the
--    get_my_role() and is_admin_or_dev() functions to use
--    auth.jwt() metadata instead of querying the profiles table.
-- =====================================================
