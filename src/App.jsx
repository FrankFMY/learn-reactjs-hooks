import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import HooksListPage from './pages/HooksListPage';
import HookDetailPage from './pages/HookDetailPage';
import ExamplesPage from './pages/ExamplesPage';
import PracticePage from './pages/PracticePage';
import StatsPage from './pages/StatsPage';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarFilters, setSidebarFilters] = useState({
    search: '',
    category: '',
    difficulty: '',
  });

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleSidebarFiltersChange = newFilters => {
    setSidebarFilters(newFilters);
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
        <div className="flex">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={handleSidebarClose}
            filters={sidebarFilters}
            onFiltersChange={handleSidebarFiltersChange}
          />
          <main className="flex-1">
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
