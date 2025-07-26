import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import HomePage from './pages/HomePage.tsx';
import HooksListPage from './pages/HooksListPage.tsx';
import HookDetailPage from './pages/HookDetailPage.tsx';
import ExamplesPage from './pages/ExamplesPage.tsx';
import PracticePage from './pages/PracticePage.tsx';
import StatsPage from './pages/StatsPage.tsx';
import { FilterOptions } from './types';
import './index.css';

function App(): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [sidebarFilters, setSidebarFilters] = useState<FilterOptions>({
    search: '',
    category: '',
    difficulty: '',
  });

  const handleMenuToggle = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = (): void => {
    setSidebarOpen(false);
  };

  const handleSidebarFiltersChange = (newFilters: FilterOptions): void => {
    setSidebarFilters(newFilters);
  };

  const handleSidebarToggle = (): void => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header onMenuToggle={handleMenuToggle} />
        <div className="flex min-h-[calc(100vh-4rem)]">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={handleSidebarClose}
            filters={sidebarFilters}
            onFiltersChange={handleSidebarFiltersChange}
            collapsed={sidebarCollapsed}
            onToggleCollapse={handleSidebarToggle}
          />
          <main className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/hooks" element={<HooksListPage />} />
              <Route path="/hooks/:id" element={<HookDetailPage />} />
              <Route path="/examples" element={<ExamplesPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/stats" element={<StatsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
