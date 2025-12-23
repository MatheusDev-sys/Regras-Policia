-- Script para limpar o banco de dados e forçar re-seed com dados atualizados
-- Execute este script no Supabase SQL Editor

-- 1. Limpar tabela de conteúdo
DELETE FROM site_content;

-- 2. Limpar tabela de capítulos
DELETE FROM chapters;

-- 3. Limpar configurações de versão (opcional)
DELETE FROM app_settings WHERE key = 'version';

-- Após executar este script:
-- 1. Recarregue o site (F5)
-- 2. O sistema detectará que o banco está vazio
-- 3. Automaticamente fará seed com os dados atualizados do constants.tsx
-- 4. Você verá todo o conteúdo novo formatado e colorido!

-- NOTA: Este script remove TODOS os dados das tabelas.
-- Se você fez edições manuais no banco que deseja manter, NÃO execute este script.
