import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Github, Menu, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header = ({ onMenuToggle }) => {
  const location = useLocation();
  const { toggleTheme, isDark, isSystem } = useTheme();

  const navItems = [
    { path: '/', label: 'Главная', icon: '🏠' },
    { path: '/hooks', label: 'Хуки', icon: '⚛️' },
    { path: '/examples', label: 'Примеры', icon: '💡' },
    { path: '/practice', label: 'Практика', icon: '🎯' },
    { path: '/stats', label: 'Статистика', icon: '📊' },
  ];

  const getThemeIcon = () => {
    if (isSystem) return <Monitor size={20} />;
    return isDark ? <Sun size={20} /> : <Moon size={20} />;
  };

  const getThemeTooltip = () => {
    if (isSystem) return 'Системная тема';
    return isDark ? 'Переключить на светлую' : 'Переключить на темную';
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="logo group">
              <div className="relative">
                <BookOpen className="logo-icon" />
                <div className="logo-glow"></div>
              </div>
              <div className="flex flex-col">
                <span className="logo-text">React Hooks</span>
                <span className="logo-subtitle">Полное руководство</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1"
            role="navigation"
          >
            {navItems.map(item => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${
                    isActive ? 'nav-item-active' : 'nav-item-inactive'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={getThemeTooltip()}
              aria-label={getThemeTooltip()}
              className="theme-toggle group"
            >
              {getThemeIcon()}
              <div className="theme-toggle-glow"></div>
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="theme-toggle group"
              title="GitHub репозиторий"
            >
              <Github size={20} />
              <div className="theme-toggle-glow"></div>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden theme-toggle group"
              title="Открыть меню"
            >
              <Menu size={20} />
              <div className="theme-toggle-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
