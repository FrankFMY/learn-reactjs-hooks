import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

const CodeEditor = ({
  initialCode,
  solution,
  onRun,
  title = 'Редактор кода',
}) => {
  const [code, setCode] = useState(initialCode);
  const [isCopied, setIsCopied] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setShowSolution(false);
  };

  const handleShowSolution = () => {
    setShowSolution(!showSolution);
  };

  const handleRun = () => {
    if (onRun) {
      onRun(code);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Заголовок редактора */}
      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="flex items-center px-3 py-1 bg-gray-600 text-white rounded-md text-sm hover:bg-gray-700 transition-colors"
            >
              {isCopied ? (
                <>
                  <Check className="h-4 w-4 mr-1" />
                  Скопировано
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Копировать
                </>
              )}
            </button>
            <button
              onClick={handleReset}
              className="flex items-center px-3 py-1 bg-yellow-600 text-white rounded-md text-sm hover:bg-yellow-700 transition-colors"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Сброс
            </button>
            {solution && (
              <button
                onClick={handleShowSolution}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  showSolution
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {showSolution ? 'Скрыть решение' : 'Показать решение'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Редактор кода */}
      <div className="p-4">
        <textarea
          value={showSolution ? solution : code}
          onChange={e => !showSolution && setCode(e.target.value)}
          readOnly={showSolution}
          className="w-full h-64 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg border border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          placeholder="Введите ваш код здесь..."
        />

        {/* Кнопки действий */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {showSolution ? 'Решение' : 'Ваш код'}
          </div>
          <button
            onClick={handleRun}
            disabled={showSolution}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Play className="h-4 w-4 mr-2" />
            Запустить код
          </button>
        </div>

        {/* Подсказки */}
        {!showSolution && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              💡 <strong>Совет:</strong> Попробуйте написать код самостоятельно,
              а затем сравните с решением для лучшего понимания.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
