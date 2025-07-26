import React, { useMemo } from 'react';

interface LanguageBadgeProps {
  language: string;
  className?: string;
}

export const LanguageBadge: React.FC<LanguageBadgeProps> = React.memo(
  ({ language, className = '' }) => {
    const languageInfo = useMemo(() => {
      const languageMap = {
        jsx: {
          name: 'React JSX',
          color: 'bg-gradient-to-r from-blue-500 to-blue-600',
          icon: '⚛️',
        },
        js: {
          name: 'JavaScript',
          color: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
          icon: '🟨',
        },
        tsx: {
          name: 'TypeScript React',
          color: 'bg-gradient-to-r from-blue-600 to-blue-700',
          icon: '🔷',
        },
        ts: {
          name: 'TypeScript',
          color: 'bg-gradient-to-r from-blue-500 to-blue-600',
          icon: '🔷',
        },
        css: {
          name: 'CSS',
          color: 'bg-gradient-to-r from-pink-500 to-pink-600',
          icon: '🎨',
        },
        html: {
          name: 'HTML',
          color: 'bg-gradient-to-r from-orange-500 to-orange-600',
          icon: '🌐',
        },
        json: {
          name: 'JSON',
          color: 'bg-gradient-to-r from-green-500 to-green-600',
          icon: '📄',
        },
        bash: {
          name: 'Bash',
          color: 'bg-gradient-to-r from-gray-500 to-gray-600',
          icon: '💻',
        },
        shell: {
          name: 'Shell',
          color: 'bg-gradient-to-r from-gray-500 to-gray-600',
          icon: '💻',
        },
      };

      return (
        languageMap[language as keyof typeof languageMap] || {
          name: language.toUpperCase(),
          color: 'bg-gradient-to-r from-gray-500 to-gray-600',
          icon: '📝',
        }
      );
    }, [language]);

    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div
          className={`px-3 py-1.5 rounded-full text-white text-sm font-medium shadow-sm ${languageInfo.color}`}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{languageInfo.icon}</span>
            <span>{languageInfo.name}</span>
          </div>
        </div>
      </div>
    );
  }
);

LanguageBadge.displayName = 'LanguageBadge';
