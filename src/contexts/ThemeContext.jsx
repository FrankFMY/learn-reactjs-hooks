import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    // Инициализируем тему из localStorage или используем системную
    const getInitialTheme = () => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
        }
        return 'system';
    };

    const [theme, setTheme] = useState(getInitialTheme);
    const [systemTheme, setSystemTheme] = useState('light');

    // Определение системной темы
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            const newSystemTheme = e.matches ? 'dark' : 'light';
            setSystemTheme(newSystemTheme);

            // Если текущая тема - системная, обновляем её
            if (theme === 'system') {
                applyTheme(newSystemTheme);
            }
        };

        // Устанавливаем начальную системную тему
        setSystemTheme(mediaQuery.matches ? 'dark' : 'light');

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    // Применение темы к документу
    const applyTheme = (themeToApply) => {
        const root = document.documentElement;

        if (themeToApply === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    };

    // Обновление темы при её изменении
    useEffect(() => {
        const actualTheme = theme === 'system' ? systemTheme : theme;
        applyTheme(actualTheme);

        // Сохраняем в localStorage только если тема не системная
        if (theme !== 'system') {
            localStorage.setItem('theme', theme);
        }
    }, [theme, systemTheme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            if (prev === 'light') return 'dark';
            if (prev === 'dark') return 'system';
            return 'light';
        });
    };

    const setThemeMode = (mode) => {
        setTheme(mode);
    };

    const getCurrentTheme = () => {
        return theme === 'system' ? systemTheme : theme;
    };

    const value = {
        theme,
        systemTheme,
        currentTheme: getCurrentTheme(),
        toggleTheme,
        setTheme: setThemeMode,
        isDark: getCurrentTheme() === 'dark',
        isSystem: theme === 'system',
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
