-- =====================================================
-- Fix profiles table recursion - CRITICAL UPDATE
-- =====================================================
-- This fixes the remaining recursion in the profiles table
-- The previous fix still had recursion because it used
-- EXISTS (SELECT FROM profiles) inside the profiles policy
-- =====================================================

BEGIN;

-- Drop ALL existing SELECT policies on profiles to start fresh
DROP POLICY IF EXISTS "Staff ver todos perfis" ON profiles;
DROP POLICY IF EXISTS "Staff can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Public read profiles" ON profiles;
DROP POLICY IF EXISTS "Ver próprio perfil" ON profiles;
DROP POLICY IF EXISTS "Devs veem perfis" ON profiles;

-- Create a simple, non-recursive policy
-- Users can ONLY see their own profile
-- This completely eliminates recursion
CREATE POLICY "Users can view own profile"
ON profiles
FOR SELECT
USING (id = auth.uid());

-- If you need admins to see all profiles, you'll need to use
-- a different approach (like auth.jwt() metadata or a separate admin panel)
-- For now, this ensures no recursion

COMMIT;

-- =====================================================
-- VERIFICATION
-- =====================================================
-- Test that you can query your own profile without recursion
SELECT * FROM profiles WHERE id = auth.uid();
