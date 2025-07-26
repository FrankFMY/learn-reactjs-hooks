import { useState } from 'react';
import { LiveExampleProps } from '../types';
import CodeBlock from './CodeBlock';

const LiveExample = ({ code, title, description }: LiveExampleProps) => {
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createSafeHTMLDocument = (reactCode: string) => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Live Example</title>
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .output { border: 1px solid #ccc; padding: 10px; margin: 10px 0; background: #f9f9f9; }
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            ${reactCode}
          </script>
        </body>
      </html>
    `;
    return html;
  };

  const handleRunExample = () => {
    setIsLoading(true);
    setError(null);
    setOutput('');

    try {
      const html = createSafeHTMLDocument(code);
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);

      // Открываем в новом окне
      const newWindow = window.open(url, '_blank');

      if (newWindow) {
        setOutput('Пример открыт в новом окне');
      } else {
        setError(
          'Не удалось открыть пример. Проверьте блокировщик всплывающих окон.'
        );
      }
    } catch (err) {
      setError(
        `Ошибка при создании примера: ${err instanceof Error ? err.message : 'Неизвестная ошибка'}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-6">
        <CodeBlock
          code={code}
          language="jsx"
          title={title}
          description={description}
        />

        <button
          onClick={handleRunExample}
          disabled={isLoading}
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Загрузка...
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Запустить пример
            </>
          )}
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {output && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-sm text-green-700 dark:text-green-300">
              {output}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveExample;
