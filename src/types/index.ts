// Основные типы для проекта

export interface Hook {
  id: string;
  title: string;
  description: string;
  category: 'state' | 'effect' | 'ref' | 'context' | 'custom' | 'performance';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: HookContent;
  relatedHooks?: string[];
  tags?: string[];
}

export interface HookContent {
  overview: string;
  syntax: string;
  examples: Example[];
  tips: string[];
  commonMistakes: string[];
  bestPractices: string[];
  useCases: UseCase[];
}

export interface Example {
  title: string;
  description: string;
  code: string;
  liveExample?: boolean;
  onRunExample?: () => void;
}

export interface UseCase {
  title: string;
  description: string;
  code: string;
  explanation: string;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  description?: string;
  liveExample?: boolean;
  onRunExample?: () => void;
}

export interface ThemeContextType {
  isDark: boolean;
  isSystem: boolean;
  toggleTheme: () => void;
  // eslint-disable-next-line no-unused-vars
  setTheme: (_theme: 'light' | 'dark' | 'system') => void;
}

export interface FilterOptions {
  category?: string;
  difficulty?: string;
  search?: string;
}

export interface LearningStats {
  totalHooks: number;
  completedHooks: number;
  practiceSessions: number;
  totalTime: number;
  favoriteHooks: string[];
}

export interface PracticeSession {
  id: string;
  hookId: string;
  score: number;
  timeSpent: number;
  completedAt: Date;
  mistakes: string[];
}

// Типы для категорий и сложностей
export interface Category {
  id: string;
  name: string;
  color: string;
  description: string;
}

export interface Difficulty {
  id: string;
  name: string;
  color: string;
  description: string;
  icon: string;
}

// Типы для компонентов
export interface HeaderProps {
  onMenuToggle: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  // eslint-disable-next-line no-unused-vars
  onFiltersChange: (_filters: FilterOptions) => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export interface CodeEditorProps {
  initialCode: string;
  solution: string;
  // eslint-disable-next-line no-unused-vars
  onRun: (_code: string) => void;
}

export interface CodeOutputProps {
  output: string;
  error: string | null;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface LiveExampleProps {
  title: string;
  description: string;
  code: string;
}

export interface RelatedHooksProps {
  currentHookId: string;
  maxCount?: number;
}

export interface HooksStatsProps {
  // Пустой интерфейс для компонента без пропсов
}

export interface LearningStatsProps {
  // Пустой интерфейс для компонента без пропсов
}
