import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  code: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const CopyButton: React.FC<CopyButtonProps> = React.memo(
  ({ code, className = '', size = 'md', showText = false }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Ошибка копирования:', err);
        // Fallback для старых браузеров
        try {
          const textArea = document.createElement('textarea');
          textArea.value = code;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (fallbackErr) {
          console.error('Fallback копирование тоже не удалось:', fallbackErr);
        }
      }
    }, [code]);

    const sizeClasses = {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3',
    };

    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
    };

    return (
      <button
        onClick={handleCopy}
        className={`
        ${sizeClasses[size]}
        rounded-lg transition-all duration-200
        bg-gray-100 hover:bg-gray-200 
        dark:bg-gray-700 dark:hover:bg-gray-600
        text-gray-600 hover:text-gray-800
        dark:text-gray-300 dark:hover:text-gray-100
        focus:outline-none focus:ring-2 focus:ring-primary-500
        ${className}
      `}
        title={copied ? 'Скопировано!' : 'Копировать код'}
        aria-label={
          copied
            ? 'Код скопирован в буфер обмена'
            : 'Копировать код в буфер обмена'
        }
      >
        <div className="flex items-center gap-2">
          {copied ? (
            <Check
              className={`${iconSizes[size]} text-green-600 dark:text-green-400`}
            />
          ) : (
            <Copy className={iconSizes[size]} />
          )}
          {showText && (
            <span className="text-sm font-medium">
              {copied ? 'Скопировано' : 'Копировать'}
            </span>
          )}
        </div>
      </button>
    );
  }
);

CopyButton.displayName = 'CopyButton';
