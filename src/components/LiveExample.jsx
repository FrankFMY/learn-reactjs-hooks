import React, { useState } from 'react';
import { Play, RotateCcw, Code, Eye, AlertTriangle } from 'lucide-react';
import CodeBlock from './CodeBlock';

const LiveExample = ({ code, title, description }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  // Создаем безопасный HTML документ для iframe
  const createSafeHTMLDocument = reactCode => {
    return `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';">
    <title>React Hook Example</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            margin: 0;
            padding: 20px;
            background: #f8f9fa;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .demo-container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .demo-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
            color: #333;
        }
        .demo-description {
            color: #666;
            margin-bottom: 20px;
            line-height: 1.5;
        }
        .demo-placeholder {
            background: #f8f9fa;
            border: 2px dashed #dee2e6;
            border-radius: 8px;
            padding: 40px 20px;
            text-align: center;
            color: #6c757d;
        }
        .demo-placeholder h3 {
            margin: 0 0 8px 0;
            color: #495057;
        }
        .demo-placeholder p {
            margin: 0;
            font-size: 14px;
        }
        .code-preview {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 4px;
            padding: 16px;
            margin-top: 16px;
        }
        .code-preview pre {
            margin: 0;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 12px;
            line-height: 1.4;
            color: #333;
            overflow-x: auto;
        }
        .security-notice {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 4px;
            padding: 12px;
            margin-top: 16px;
            color: #856404;
            font-size: 14px;
        }
        .security-notice strong {
            color: #856404;
        }
    </style>
</head>
<body>
    <div class="demo-container">
        <div class="demo-title">${title || 'React Hook Example'}</div>
        ${
          description
            ? `<div class="demo-description">${description}</div>`
            : ''
        }
        
        <div class="demo-placeholder">
            <h3>Демонстрация кода</h3>
            <p>Этот пример показывает структуру React компонента</p>
        </div>
        
        <div class="code-preview">
            <pre><code>${reactCode
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')}</code></pre>
        </div>
        
        <div class="security-notice">
            <strong>Примечание:</strong> Для безопасности выполнение кода в браузере отключено. 
            Используйте локальную среду разработки для тестирования.
        </div>
    </div>
</body>
</html>`;
  };

  const handleRun = () => {
    setIsRunning(true);
    setIframeKey(prev => prev + 1);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIframeKey(prev => prev + 1);
  };

  const handleToggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-soft">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center">
              <Play className="h-5 w-5 mr-2 text-success-600 dark:text-success-400" />
              {title}
            </h4>
            {description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleToggleCode}
              className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 ${
                showCode
                  ? 'text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800'
                  : 'text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900/50'
              }`}
            >
              <Code className="h-3 w-3 mr-1" />
              {showCode ? 'Скрыть код' : 'Показать код'}
            </button>
            <button
              onClick={handleRun}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-success-600 hover:bg-success-700 rounded-lg transition-colors duration-200"
            >
              <Play className="h-3 w-3 mr-1" />
              Показать
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200"
            >
              <RotateCcw className="h-3 w-3 mr-1" />
              Сброс
            </button>
          </div>
        </div>
      </div>

      {/* Code Preview */}
      {showCode && (
        <CodeBlock
          code={code}
          language="jsx"
          title="Код примера"
          description="Исходный код для интерактивного примера"
        />
      )}

      {/* Live Example */}
      {isRunning && (
        <div className="relative">
          <div className="px-6 py-4 bg-success-50 dark:bg-success-900/20 border-b border-success-200 dark:border-success-800">
            <div className="flex items-center text-success-700 dark:text-success-300 text-sm">
              <Eye className="h-4 w-4 mr-2" />
              <span>Предварительный просмотр</span>
            </div>
          </div>
          <div className="h-96">
            <iframe
              key={iframeKey}
              srcDoc={createSafeHTMLDocument(code)}
              className="w-full h-full border-0"
              title="React Hook Example Preview"
              sandbox="allow-scripts"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Placeholder */}
      {!isRunning && (
        <div className="px-6 py-12 text-center">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <Play className="h-10 w-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Готов к просмотру
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Нажмите кнопку "Показать" чтобы увидеть структуру кода
          </p>
          <div className="flex items-center justify-center space-x-2 text-yellow-600 dark:text-yellow-400 text-sm mb-4">
            <AlertTriangle className="h-4 w-4" />
            <span>Безопасный режим - выполнение кода отключено</span>
          </div>
          <button onClick={handleRun} className="btn-primary">
            <Play className="h-4 w-4 mr-2" />
            Показать код
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveExample;
