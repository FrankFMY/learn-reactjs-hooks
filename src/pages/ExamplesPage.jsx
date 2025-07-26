import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hooksData, categories } from '../data/hooksData';
import { Play, Code, ExternalLink, ArrowRight } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const ExamplesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHooks = hooksData.filter(hook => {
    const matchesCategory =
      selectedCategory === 'all' || hook.category === selectedCategory;
    const matchesSearch =
      hook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hook.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const LiveExample = ({ example }) => {
    const [isRunning, setIsRunning] = useState(false);

    const runExample = () => {
      setIsRunning(true);
      // Здесь можно добавить логику для запуска примера
      setTimeout(() => setIsRunning(false), 1000);
    };

    return (
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900 dark:text-gray-100">
            {example.title}
          </h4>
          <button
            onClick={runExample}
            disabled={isRunning}
            className="flex items-center px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 disabled:opacity-50"
          >
            <Play className="h-4 w-4 mr-1" />
            {isRunning ? 'Запуск...' : 'Запустить'}
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
          {example.description}
        </p>
        <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm">
            <code>{example.code}</code>
          </pre>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Примеры использования React Hooks
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Практические примеры применения React хуков в реальных проектах
          </p>
        </div>

        {/* Фильтры */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Поиск */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Поиск по хукам..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
              />
            </div>

            {/* Фильтр по категориям */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Все
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Список примеров */}
        <div className="space-y-8">
          {filteredHooks.map(hook => (
            <div
              key={hook.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Заголовок хука */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {hook.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {hook.description}
                    </p>
                  </div>
                  <Link
                    to={`/hooks/${hook.id}`}
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Метаданные */}
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium`}
                    style={{
                      backgroundColor:
                        categories.find(c => c.id === hook.category)?.color +
                        '20',
                      color: categories.find(c => c.id === hook.category)
                        ?.color,
                    }}
                  >
                    {categories.find(c => c.id === hook.category)?.name}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                    {hook.difficulty === 'beginner'
                      ? 'Начинающий'
                      : hook.difficulty === 'intermediate'
                        ? 'Средний'
                        : 'Продвинутый'}
                  </span>
                </div>
              </div>

              {/* Примеры */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Примеры использования
                </h3>

                <div className="space-y-6">
                  {hook.content.examples.map((example, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                    >
                      <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          {example.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {example.description}
                        </p>
                      </div>

                      <div className="p-4">
                        <CodeBlock
                          code={example.code}
                          language="jsx"
                          title={example.title}
                          description={example.description}
                          liveExample={example.liveExample}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Советы и предупреждения */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                      💡 Полезные советы
                    </h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      {hook.content.tips.map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">
                      ⚠️ Частые ошибки
                    </h4>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                      {hook.content.commonMistakes.map((mistake, index) => (
                        <li key={index}>• {mistake}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Пустое состояние */}
        {filteredHooks.length === 0 && (
          <div className="text-center py-12">
            <Code className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Примеры не найдены
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Попробуйте изменить фильтры или поисковый запрос
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamplesPage;
