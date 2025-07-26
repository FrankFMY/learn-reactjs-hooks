import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'state',
    name: 'State Management',
    color: 'bg-blue-500',
    description: 'Хуки для управления состоянием компонентов',
  },
  {
    id: 'effect',
    name: 'Effects',
    color: 'bg-green-500',
    description: 'Хуки для работы с побочными эффектами',
  },
  {
    id: 'ref',
    name: 'Refs',
    color: 'bg-purple-500',
    description: 'Хуки для работы с DOM элементами',
  },
  {
    id: 'context',
    name: 'Context',
    color: 'bg-orange-500',
    description: 'Хуки для работы с контекстом',
  },
  {
    id: 'custom',
    name: 'Custom Hooks',
    color: 'bg-pink-500',
    description: 'Пользовательские хуки',
  },
  {
    id: 'performance',
    name: 'Performance',
    color: 'bg-red-500',
    description: 'Хуки для оптимизации производительности',
  },
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryColor = (id: string): string => {
  const category = getCategoryById(id);
  return category?.color || 'bg-gray-500';
};
