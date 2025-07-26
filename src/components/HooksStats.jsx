import React from 'react';
import {
  BarChart3,
  TrendingUp,
  BookOpen,
  Code,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Clock,
} from 'lucide-react';
import { hooksData, categories, difficulties } from '../data/hooksData';

const HooksStats = () => {
  // Подсчет статистики
  const totalHooks = hooksData.length;

  const categoryStats = categories.map(category => ({
    ...category,
    count: hooksData.filter(hook => hook.category === category.id).length,
  }));

  const difficultyStats = difficulties.map(difficulty => ({
    ...difficulty,
    count: hooksData.filter(hook => hook.difficulty === difficulty.id).length,
  }));

  const totalExamples = hooksData.reduce(
    (sum, hook) => sum + hook.content.examples.length,
    0
  );
  const totalTips = hooksData.reduce(
    (sum, hook) => sum + hook.content.tips.length,
    0
  );
  const totalMistakes = hooksData.reduce(
    (sum, hook) => sum + hook.content.commonMistakes.length,
    0
  );
  const liveExamples = hooksData.reduce(
    (sum, hook) =>
      sum + hook.content.examples.filter(example => example.liveExample).length,
    0
  );

  const getDifficultyIcon = difficulty => {
    switch (difficulty) {
      case 'beginner':
        return <Sparkles className="h-4 w-4" />;
      case 'intermediate':
        return <TrendingUp className="h-4 w-4" />;
      case 'advanced':
        return <Clock className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Общая статистика */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Всего хуков
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {totalHooks}
              </p>
            </div>
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
              <BarChart3 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Примеров кода
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {totalExamples}
              </p>
            </div>
            <div className="p-3 bg-success-100 dark:bg-success-900/30 rounded-xl">
              <Code className="h-6 w-6 text-success-600 dark:text-success-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Интерактивных примеров
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {liveExamples}
              </p>
            </div>
            <div className="p-3 bg-warning-100 dark:bg-warning-900/30 rounded-xl">
              <TrendingUp className="h-6 w-6 text-warning-600 dark:text-warning-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Советов и ошибок
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {totalTips + totalMistakes}
              </p>
            </div>
            <div className="p-3 bg-danger-100 dark:bg-danger-900/30 rounded-xl">
              <Lightbulb className="h-6 w-6 text-danger-600 dark:text-danger-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Статистика по категориям */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-soft">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
          По категориям
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryStats.map(category => (
            <div
              key={category.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-3"
                  style={{ backgroundColor: category.color }}
                />
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {category.name}
                </span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Статистика по сложности */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-soft">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-warning-600 dark:text-warning-400" />
          По уровню сложности
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {difficultyStats.map(difficulty => (
            <div
              key={difficulty.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center">
                <div className="mr-3">{getDifficultyIcon(difficulty.id)}</div>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {difficulty.name}
                </span>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {difficulty.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Детальная статистика */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Советы */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-soft">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-warning-600 dark:text-warning-400" />
            Лучшие практики
          </h3>
          <div className="space-y-4">
            {hooksData.slice(0, 5).map(hook => (
              <div
                key={hook.id}
                className="flex items-center justify-between p-3 bg-warning-50 dark:bg-warning-900/20 rounded-lg"
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {hook.title}
                </span>
                <span className="text-sm text-warning-600 dark:text-warning-400 font-semibold">
                  {hook.content.tips.length} советов
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ошибки */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-soft">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-danger-600 dark:text-danger-400" />
            Распространенные ошибки
          </h3>
          <div className="space-y-4">
            {hooksData.slice(0, 5).map(hook => (
              <div
                key={hook.id}
                className="flex items-center justify-between p-3 bg-danger-50 dark:bg-danger-900/20 rounded-lg"
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {hook.title}
                </span>
                <span className="text-sm text-danger-600 dark:text-danger-400 font-semibold">
                  {hook.content.commonMistakes.length} ошибок
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HooksStats;
