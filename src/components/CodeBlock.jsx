import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  tomorrow,
  dracula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  Copy,
  Check,
  Play,
  ExternalLink,
  FileCode,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const CodeBlock = ({
  code,
  language = 'jsx',
  title,
  description,
  liveExample = false,
  onRunExample,
}) => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useTheme();

  // Выбираем тему в зависимости от режима
  const theme = isDark ? dracula : tomorrow;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const getLanguageDisplayName = lang => {
    const languageMap = {
      jsx: 'React JSX',
      js: 'JavaScript',
      tsx: 'TypeScript React',
      ts: 'TypeScript',
      css: 'CSS',
      html: 'HTML',
      json: 'JSON',
      bash: 'Bash',
      shell: 'Shell',
    };
    return languageMap[lang] || lang.toUpperCase();
  };

  const getLanguageColor = lang => {
    const colorMap = {
      jsx: 'bg-gradient-to-r from-blue-500 to-blue-600',
      js: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      tsx: 'bg-gradient-to-r from-blue-600 to-blue-700',
      ts: 'bg-gradient-to-r from-blue-500 to-blue-600',
      css: 'bg-gradient-to-r from-pink-500 to-pink-600',
      html: 'bg-gradient-to-r from-orange-500 to-orange-600',
      json: 'bg-gradient-to-r from-green-500 to-green-600',
      bash: 'bg-gradient-to-r from-gray-500 to-gray-600',
      shell: 'bg-gradient-to-r from-gray-500 to-gray-600',
    };
    return colorMap[lang] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  const getLanguageIcon = lang => {
    const iconMap = {
      jsx: '⚛️',
      js: '🟨',
      tsx: '🔷',
      ts: '🔷',
      css: '🎨',
      html: '🌐',
      json: '📄',
      bash: '💻',
      shell: '💻',
    };
    return iconMap[lang] || '📝';
  };

  return (
    <div className="my-8 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 shadow-soft hover:shadow-medium transition-all duration-300 group">
      {/* Header */}
      {(title || description) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
          {title && (
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <div className="mr-3 p-2 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-md">
                <FileCode className="h-5 w-5" />
              </div>
              <span className="text-gradient">{title}</span>
            </h4>
          )}
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700 codeblock-toolbar">
        <div className="flex items-center space-x-3">
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white shadow-md language-indicator ${getLanguageColor(
              language
            )}`}
          >
            <span className="mr-1.5">{getLanguageIcon(language)}</span>
            {getLanguageDisplayName(language)}
          </span>
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>
            <span className="line-counter">
              {code.split('\n').length} строк
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {liveExample && onRunExample && (
            <button
              onClick={onRunExample}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-success-700 dark:text-success-300 bg-success-50 dark:bg-success-900/30 border border-success-200 dark:border-success-800 rounded-lg hover:bg-success-100 dark:hover:bg-success-900/50 transition-all duration-200 hover:scale-105 active:scale-95 codeblock-button"
              title="Запустить пример"
            >
              <Play className="h-3 w-3 mr-1" />
              Запустить
            </button>
          )}

          <button
            onClick={handleCopy}
            className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 codeblock-button ${
              copied
                ? 'text-success-700 dark:text-success-300 bg-success-50 dark:bg-success-900/30 border border-success-200 dark:border-success-800 shadow-md'
                : 'text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 hover:bg-primary-100 dark:hover:bg-primary-900/50 hover:shadow-md'
            }`}
            title={copied ? 'Скопировано!' : 'Копировать код'}
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 mr-1" />
                Скопировано!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3 mr-1" />
                Копировать
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative codeblock-gradient">
        <SyntaxHighlighter
          language={language}
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          className="react-syntax-highlighter"
          customStyle={{
            background: isDark
              ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
              : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            border: isDark ? '1px solid #475569' : '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            margin: 0,
            boxShadow: isDark
              ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
              : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            fontSize: '0.875rem',
            lineHeight: '1.7',
            fontFamily: 'JetBrains Mono, monospace',
          }}
          lineNumberStyle={{
            color: '#64748b',
            marginRight: '1rem',
            minWidth: '2.5rem',
            fontSize: '0.75rem',
            opacity: 0.7,
            fontFamily: 'JetBrains Mono, monospace',
            userSelect: 'none',
            textAlign: 'right',
            paddingRight: '1rem',
            borderRight: isDark ? '1px solid #475569' : '1px solid #e2e8f0',
            background: isDark
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.05)',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.875rem',
              lineHeight: '1.7',
              color: isDark ? '#f8fafc' : '#1e293b',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>

        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/5 via-transparent to-transparent dark:from-gray-900/5"></div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent via-primary-500/10 to-primary-500/20 rounded-bl-2xl"></div>
      </div>

      {/* Live Example Indicator */}
      {liveExample && (
        <div className="px-4 py-3 bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 border-t border-success-200 dark:border-success-800">
          <div className="flex items-center text-success-700 dark:text-success-300 text-xs">
            <div className="mr-2 p-1 rounded-full bg-success-200 dark:bg-success-800">
              <Sparkles className="h-3 w-3" />
            </div>
            <span className="font-medium">Интерактивный пример доступен</span>
            <span className="ml-2 text-success-600 dark:text-success-400">
              — можно запустить и протестировать в реальном времени
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
