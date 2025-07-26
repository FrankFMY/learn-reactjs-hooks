import { Difficulty } from '@/types';

export const difficulties: Difficulty[] = [
  {
    id: 'beginner',
    name: 'Начинающий',
    color: 'bg-green-500',
    description: 'Базовые концепции, подходит для новичков',
    icon: '🌱',
  },
  {
    id: 'intermediate',
    name: 'Средний',
    color: 'bg-yellow-500',
    description: 'Продвинутые концепции, требует опыта',
    icon: '🚀',
  },
  {
    id: 'advanced',
    name: 'Продвинутый',
    color: 'bg-red-500',
    description: 'Сложные паттерны, для опытных разработчиков',
    icon: '⚡',
  },
];

export const getDifficultyById = (id: string): Difficulty | undefined => {
  return difficulties.find(difficulty => difficulty.id === id);
};

export const getDifficultyColor = (id: string): string => {
  const difficulty = getDifficultyById(id);
  return difficulty?.color || 'bg-gray-500';
};

export const getDifficultyIcon = (id: string): string => {
  const difficulty = getDifficultyById(id);
  return difficulty?.icon || '❓';
};
