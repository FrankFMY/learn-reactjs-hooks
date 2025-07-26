import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Sparkles,
  TrendingUp,
  Clock,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { hooksData, categories, difficulties } from '../data/hooksData';

const HooksListPage = () => {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    difficulty: '',
  });

  const filteredHooks = hooksData.filter(hook => {
    if (filters.category && hook.category !== filters.category) return false;
    if (filters.difficulty && hook.difficulty !== filters.difficulty)
      return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        hook.title.toLowerCase().includes(searchLower) ||
        hook.description.toLowerCase().includes(searchLower) ||
        hook.content.overview.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const getDifficultyIcon = (difficulty: string) => {
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300 border-success-200 dark:border-success-800';
      case 'intermediate':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300 border-warning-200 dark:border-warning-800';
      case 'advanced':
        return 'bg-danger-100 text-danger-800 dark:bg-danger-900/30 dark:text-danger-300 border-danger-200 dark:border-danger-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4 mr-2" />
              Полное руководство
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              React Hooks
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Полный список всех доступных React хуков с подробными
              объяснениями, примерами и лучшими практиками
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Поиск хуков..."
                value={filters.search}
                onChange={e => handleFilterChange('search', e.target.value)}
                className="input pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={filters.category}
                onChange={e => handleFilterChange('category', e.target.value)}
                className="input"
              >
                <option value="">Все категории</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="lg:w-48">
              <select
                value={filters.difficulty}
                onChange={e => handleFilterChange('difficulty', e.target.value)}
                className="input"
              >
                <option value="">Любая сложность</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty.id} value={difficulty.id}>
                    {difficulty.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Найдено {filteredHooks.length} из {hooksData.length} хуков
            </p>
            {(filters.search || filters.category || filters.difficulty) && (
              <button
                onClick={() =>
                  setFilters({
                    search: '',
                    category: '',
                    difficulty: '',
                  })
                }
                className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Очистить фильтры
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Hooks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredHooks.length === 0 ? (
          <div className="text-center py-16">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Search className="h-12 w-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Хуки не найдены
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Попробуйте изменить параметры поиска или фильтры
            </p>
            <button
              onClick={() =>
                setFilters({
                  search: '',
                  category: '',
                  difficulty: '',
                })
              }
              className="btn-primary"
            >
              Очистить фильтры
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHooks.map(hook => {
              const category = categories.find(c => c.id === hook.category);
              const difficulty = difficulties.find(
                d => d.id === hook.difficulty
              );

              return (
                <Link
                  key={hook.id}
                  to={`/hooks/${hook.id}`}
                  className="group block p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {hook.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {hook.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                        hook.difficulty
                      )}`}
                    >
                      {getDifficultyIcon(hook.difficulty)}
                      <span className="ml-1">
                        {difficulty?.name || hook.difficulty}
                      </span>
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {category?.name || hook.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {hook.content.examples.length} примеров
                    </span>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-1 transition-transform duration-200 flex items-center">
                      Подробнее
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HooksListPage;
