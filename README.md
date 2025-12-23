<div align="center">
  <img src="public/cover.png" alt="Brasil Roleplay - Portal Policial" width="100%" />
  
  <br />
  <br />
  
  <img src="public/logo.png" alt="Brasil Roleplay Logo" width="200" />
  
  # 🚔 Brasil Roleplay - Portal Policial
  
  ### Sistema de Gerenciamento de Regras e Conteúdo para Polícia
  
  [![Deploy](https://github.com/MatheusDev-sys/Regras-Policia/actions/workflows/deploy.yml/badge.svg)](https://github.com/MatheusDev-sys/Regras-Policia/actions/workflows/deploy.yml)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  
  [🌐 Ver Site](https://matheusdev-sys.github.io/Regras-Policia/) • [📝 Documentação](#-funcionalidades) • [🐛 Reportar Bug](https://github.com/MatheusDev-sys/Regras-Policia/issues)
  
</div>

---

## 📋 Sobre o Projeto

Portal web completo para gerenciamento de regras, procedimentos e documentação da polícia do servidor Brasil Roleplay. Sistema moderno com interface intuitiva, editor de texto rico e integração com banco de dados.

### ✨ Funcionalidades

- 🎨 **Interface Moderna** - Design dark mode com animações suaves
- 📝 **Editor Rico** - Editor de texto estilo Word com formatação completa
- 📊 **Criador de Tabelas** - Interface visual para criar tabelas formatadas
- 🎴 **Criador de Cards** - Cards coloridos para destacar informações
- 🔐 **Sistema de Autenticação** - Login seguro com Supabase
- 👥 **Controle de Permissões** - Apenas admins/devs podem editar
- 🔄 **Drag & Drop** - Reordene capítulos arrastando
- 📱 **PWA** - Instalável como app no celular
- 🌐 **Offline Mode** - Funciona sem conexão com internet
- 🔍 **Busca Inteligente** - Encontre conteúdo rapidamente

### 🛠️ Tecnologias

- **Frontend:** React + TypeScript + Vite
- **Estilização:** Tailwind CSS
- **Banco de Dados:** Supabase (PostgreSQL)
- **Editor:** TipTap
- **Ícones:** Lucide React
- **Drag & Drop:** DnD Kit
- **Deploy:** GitHub Pages

---

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase (para banco de dados)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/MatheusDev-sys/Regras-Policia.git
   cd Regras-Policia
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Edite o arquivo `supabaseClient.ts` com suas credenciais do Supabase:
   ```typescript
   const SUPABASE_URL = 'sua-url-aqui'
   const SUPABASE_KEY = 'sua-chave-aqui'
   ```

4. **Execute o projeto**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

---

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`.

---

## 🗄️ Estrutura do Banco de Dados

O projeto usa Supabase com as seguintes tabelas:

- **`site_content`** - Conteúdo das páginas
- **`chapters`** - Estrutura de capítulos da sidebar
- **`profiles`** - Perfis de usuários
- **`app_settings`** - Configurações do sistema

### Seed do Banco

Para popular o banco com dados iniciais:

1. Execute o script SQL: `clear_db_for_reseed.sql`
2. Recarregue o site
3. O sistema fará seed automático com dados do `constants.tsx`

---

## 🎨 Personalização

### Cores

As cores principais estão definidas no Tailwind CSS:
- **Verde:** `#22c55e` - Títulos, destaques positivos
- **Vermelho:** `#ef4444` - Avisos, proibições
- **Azul:** `#3b82f6` - Informações
- **Amarelo:** `#eab308` - Alertas moderados

### Logo e Capa

- **Logo:** `public/logo.png`
- **Capa:** `public/cover.png`
- **Favicon:** `public/logo.png`

---

## 📝 Como Usar

### Modo de Edição

1. Faça login com conta admin/dev
2. Clique no ícone de olho para ativar edição
3. Edite conteúdo usando o editor rico
4. Use os botões de tabela e card para inserir elementos
5. Arraste capítulos para reordenar
6. Mudanças são salvas automaticamente

### Criar Tabelas

1. Clique no ícone de tabela (⊞)
2. Configure linhas e colunas
3. Escolha se quer cabeçalho
4. Clique em "Inserir Tabela"

### Criar Cards

1. Clique no ícone de box (□)
2. Escolha o tipo (Info/Aviso/Sucesso/Erro)
3. Adicione título e conteúdo
4. Clique em "Inserir Card"

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvedor

<div align="center">
  <img src="public/logo.png" alt="Matheus Dev Logo" width="80" />
  
  ### Matheus Dev
  
  Desenvolvedor Full Stack especializado em React, TypeScript e soluções web modernas.
  
  [![GitHub](https://img.shields.io/badge/GitHub-MatheusDev--sys-181717?style=for-the-badge&logo=github)](https://github.com/MatheusDev-sys)
  
</div>

---

## 🙏 Agradecimentos

- Brasil Roleplay pela oportunidade
- Comunidade React pela documentação
- Supabase pelo backend incrível
- Todos os contribuidores

---

<div align="center">
  
  **Feito com ❤️ por [Matheus Dev](https://github.com/MatheusDev-sys)**
  
  © 2025 Brasil Roleplay - Todos os direitos reservados
  
</div>
