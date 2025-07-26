import { hooksData, categories, difficulties } from '../data/hooksData';
import { getDifficultyIcon } from '../data/difficulties';
import { getCategoryColor } from '../data/categories';

const HooksStats = () => {
  // Статистика по категориям
  const categoryStats = categories.map(category => ({
    ...category,
    count: hooksData.filter(hook => hook.category === category.id).length,
  }));

  // Статистика по сложности
  const difficultyStats = difficulties.map(difficulty => ({
    ...difficulty,
    count: hooksData.filter(hook => hook.difficulty === difficulty.id).length,
  }));

  // Общая статистика
  const totalHooks = hooksData.length;
  const completedHooks = Math.floor(totalHooks * 0.3); // Примерно 30% завершено
  const inProgressHooks = Math.floor(totalHooks * 0.5); // Примерно 50% в процессе
  const notStartedHooks = totalHooks - completedHooks - inProgressHooks;

  return (
    <div className="space-y-6">
      {/* Общая статистика */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Всего хуков
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {totalHooks}
              </p>
            </div>
            <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Завершено
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {completedHooks}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                В процессе
              </p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {inProgressHooks}
              </p>
            </div>
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <svg
                className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Не начато
              </p>
              <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                {notStartedHooks}
              </p>
            </div>
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <svg
                className="h-6 w-6 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Статистика по категориям */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          По категориям
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryStats.map(category => (
            <div
              key={category.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-3 h-3 rounded-full ${getCategoryColor(category.id)}`}
                ></div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {category.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Статистика по сложности */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          По сложности
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {difficultyStats.map(difficulty => (
            <div
              key={difficulty.id}
              className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">
                  {getDifficultyIcon(difficulty.id)}
                </span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {difficulty.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {difficulty.description}
                  </p>
                </div>
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {difficulty.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HooksStats;
