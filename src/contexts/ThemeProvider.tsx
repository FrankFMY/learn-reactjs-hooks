import React, { useState, useEffect, ReactNode } from 'react';
import { ThemeContext } from './ThemeContext.tsx';
import { ThemeContextType } from '../types';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isSystem, setIsSystem] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return !savedTheme || savedTheme === 'system';
  });

  const toggleTheme = (): void => {
    setIsDark(prev => !prev);
    setIsSystem(false);
  };

  const setTheme = (theme: 'light' | 'dark' | 'system'): void => {
    if (theme === 'system') {
      setIsSystem(true);
      const systemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDark(systemDark);
      localStorage.setItem('theme', 'system');
    } else {
      setIsSystem(false);
      setIsDark(theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent): void => {
      if (isSystem) {
        setIsDark(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [isSystem]);

  const value: ThemeContextType = {
    isDark,
    isSystem,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
