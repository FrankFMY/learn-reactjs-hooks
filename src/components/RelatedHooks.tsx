import { Link } from 'react-router-dom';
import { RelatedHooksProps } from '../types';
import { hooksData, categories, difficulties } from '../data/hooksData';
import { getDifficultyIcon, getDifficultyColor } from '../data/difficulties';

const RelatedHooks = ({ currentHookId, maxCount = 3 }: RelatedHooksProps) => {
  // Получаем текущий хук
  const currentHook = hooksData.find(hook => hook.id === currentHookId);

  if (!currentHook) {
    return null;
  }

  // Находим связанные хуки
  const relatedHooks = hooksData
    .filter(
      hook =>
        hook.id !== currentHookId &&
        (hook.category === currentHook.category ||
          hook.difficulty === currentHook.difficulty ||
          hook.relatedHooks?.includes(currentHookId))
    )
    .slice(0, maxCount);

  if (relatedHooks.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Связанные хуки
      </h3>
      <div className="space-y-3">
        {relatedHooks.map(hook => {
          const category = categories.find(c => c.id === hook.category);
          const difficulty = difficulties.find(d => d.id === hook.difficulty);

          return (
            <Link
              key={hook.id}
              to={`/hooks/${hook.id}`}
              className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                    {hook.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {hook.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(hook.difficulty)}`}
                  >
                    {getDifficultyIcon(hook.difficulty)}
                    <span className="ml-1">
                      {difficulty?.name || hook.difficulty}
                    </span>
                  </span>
                </div>

                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {category?.name || hook.category}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedHooks;
