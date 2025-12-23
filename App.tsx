import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import ContentDisplay from './components/ContentDisplay';
import Home from './components/Home';
import Settings from './components/Settings';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider, useContent } from './contexts/ContentContext';

function MainLayout({
  onBackToHome,
  onGoToSettings,
  onBackToDocs,
  currentView
}: {
  onBackToHome: () => void;
  onGoToSettings: () => void;
  onBackToDocs: () => void;
  currentView: 'docs' | 'settings';
}) {
  const [activeTab, setActiveTab] = useState('introducao');

  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({
    cap1: false,
    cap2: false,
    cap3: false,
    cap4: false,
    cap5: false
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleChapter = (cap: string) => {
    setOpenChapters(prev => ({ ...prev, [cap]: !prev[cap] }));
  };

  return (
    <div className="flex h-screen bg-[#0F1116] font-sans text-gray-100 overflow-hidden selection:bg-green-500/30">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // If we are in settings and click a tab, go back to docs view implicitly if needed,
          // or we can handle that logic in Sidebar. For now, Sidebar links switch tabs.
        }}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        openChapters={openChapters}
        toggleChapter={toggleChapter}
        onGoToSettings={onGoToSettings}
        currentView={currentView}
        onBackToDocs={onBackToDocs}
      />

      <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#0F1116] relative">
        <MobileHeader setSidebarOpen={setSidebarOpen} />

        {currentView === 'settings' ? (
          <Settings />
        ) : (
          <ContentDisplay
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onBackToHome={onBackToHome}
          />
        )}
      </main>
    </div>
  );
}

function AppContent() {
  const [view, setView] = useState<'home' | 'docs' | 'settings' | 'terms' | 'privacy'>('home');
  const { version } = useContent();

  if (view === 'home') {
    return (
      <Home
        onEnterDocs={() => setView('docs')}
        version={version}
        onTermsClick={() => setView('terms')}
        onPrivacyClick={() => setView('privacy')}
      />
    );
  }

  if (view === 'terms') {
    return <Terms onBack={() => setView('home')} />;
  }

  if (view === 'privacy') {
    return <Privacy onBack={() => setView('home')} />;
  }

  return (
    <MainLayout
      currentView={view === 'settings' ? 'settings' : 'docs'}
      onBackToHome={() => setView('home')}
      onGoToSettings={() => setView('settings')}
      onBackToDocs={() => setView('docs')}
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <AppContent />
      </ContentProvider>
    </AuthProvider>
  );
}