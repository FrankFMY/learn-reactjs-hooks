// Основной файл данных - теперь использует модульную структуру
import { Hook } from '@/types';
import hooks, {
  filterHooks,
  getHookById,
  getAllHooks,
  getHooksByCategory,
  getHooksByDifficulty,
  getRelatedHooks,
  getHooksStats,
} from './hooks';
import { categories } from './categories';
import { difficulties } from './difficulties';

// Экспорт для обратной совместимости
export const hooksData: Hook[] = hooks;

// Экспорт функций
export {
  filterHooks,
  getHookById,
  getAllHooks,
  getHooksByCategory,
  getHooksByDifficulty,
  getRelatedHooks,
  getHooksStats,
};

// Экспорт категорий и сложностей
export { categories, difficulties };

// Дополнительные утилиты
export const getCategories = (): string[] => {
  const categoryIds = new Set(hooks.map(hook => hook.category));
  return Array.from(categoryIds);
};

export const getDifficulties = (): string[] => {
  const difficultyIds = new Set(hooks.map(hook => hook.difficulty));
  return Array.from(difficultyIds);
};

export const searchHooks = (query: string): Hook[] => {
  if (!query.trim()) return hooks;

  const searchLower = query.toLowerCase();
  return hooks.filter(hook => {
    const searchableText = [
      hook.title,
      hook.description,
      ...hook.content.tips,
      ...hook.content.bestPractices,
      ...hook.content.commonMistakes,
      ...(hook.tags || []),
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(searchLower);
  });
};

export const getRandomHook = (): Hook => {
  const randomIndex = Math.floor(Math.random() * hooks.length);
  return hooks[randomIndex];
};

export const getHooksByTag = (tag: string): Hook[] => {
  return hooks.filter(hook =>
    hook.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export default hooks;
