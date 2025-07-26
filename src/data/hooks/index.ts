import { Hook, FilterOptions } from '@/types';
import { useStateHook } from './useState';

// Импорт всех хуков
const hooks: Hook[] = [
  useStateHook,
  // Здесь будут добавлены другие хуки
];

// Функция для фильтрации хуков
export const filterHooks = (filters: FilterOptions = {}): Hook[] => {
  return hooks.filter(hook => {
    // Фильтр по категории
    if (filters.category && hook.category !== filters.category) {
      return false;
    }

    // Фильтр по сложности
    if (filters.difficulty && hook.difficulty !== filters.difficulty) {
      return false;
    }

    // Поиск по тексту
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const searchableText = [
        hook.title,
        hook.description,
        ...hook.content.tips,
        ...hook.content.bestPractices,
        ...(hook.tags || []),
      ]
        .join(' ')
        .toLowerCase();

      if (!searchableText.includes(searchLower)) {
        return false;
      }
    }

    return true;
  });
};

// Получить хук по ID
export const getHookById = (id: string): Hook | undefined => {
  return hooks.find(hook => hook.id === id);
};

// Получить все хуки
export const getAllHooks = (): Hook[] => {
  return hooks;
};

// Получить хуки по категории
export const getHooksByCategory = (category: string): Hook[] => {
  return hooks.filter(hook => hook.category === category);
};

// Получить хуки по сложности
export const getHooksByDifficulty = (difficulty: string): Hook[] => {
  return hooks.filter(hook => hook.difficulty === difficulty);
};

// Получить связанные хуки
export const getRelatedHooks = (hookId: string): Hook[] => {
  const hook = getHookById(hookId);
  if (!hook || !hook.relatedHooks) {
    return [];
  }

  return hook.relatedHooks
    .map(relatedId => getHookById(relatedId))
    .filter((relatedHook): relatedHook is Hook => relatedHook !== undefined);
};

// Статистика по хукам
export const getHooksStats = () => {
  const total = hooks.length;
  const byCategory = hooks.reduce(
    (acc, hook) => {
      acc[hook.category] = (acc[hook.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const byDifficulty = hooks.reduce(
    (acc, hook) => {
      acc[hook.difficulty] = (acc[hook.difficulty] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return {
    total,
    byCategory,
    byDifficulty,
  };
};

export default hooks;
