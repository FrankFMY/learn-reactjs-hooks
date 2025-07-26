import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Search, Filter, Sparkles, Clock, TrendingUp } from 'lucide-react';
import { hooksData, categories, difficulties } from '../data/hooksData';

const Sidebar = ({ isOpen, onClose, filters, onFiltersChange }) => {
  const location = useLocation();

  const filteredHooks = hooksData.filter(hook => {
    if (filters.category && hook.category !== filters.category) return false;
    if (filters.difficulty && hook.difficulty !== filters.difficulty)
      return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        hook.title.toLowerCase().includes(searchLower) ||
        hook.description.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  const handleFilterChange = (key, value) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const getDifficultyIcon = difficulty => {
    switch (difficulty) {
      case 'beginner':
        return <Sparkles size={12} />;
      case 'intermediate':
        return <TrendingUp size={12} />;
      case 'advanced':
        return <Clock size={12} />;
      default:
        return null;
    }
  };

  const getDifficultyColor = difficulty => {
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
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
                fixed top-0 left-0 h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-r border-gray-200 dark:border-gray-700
                transform transition-all duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:z-auto
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
              <Filter className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Навигация
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {filteredHooks.length} хуков найдено
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="p-6 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
              size={18}
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
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Категория
            </label>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Сложность
            </label>
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

        {/* Hooks List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-3">
            {filteredHooks.length === 0 ? (
              <div className="text-center py-8">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Хуки не найдены
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                  Попробуйте изменить фильтры
                </p>
              </div>
            ) : (
              filteredHooks.map(hook => {
                const isActive = location.pathname === `/hooks/${hook.id}`;
                const category = categories.find(c => c.id === hook.category);
                const difficulty = difficulties.find(
                  d => d.id === hook.difficulty
                );

                return (
                  <Link
                    key={hook.id}
                    to={`/hooks/${hook.id}`}
                    onClick={onClose}
                    className={`
                                            group block p-4 rounded-xl border transition-all duration-200 hover:shadow-medium
                                            ${
                                              isActive
                                                ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 shadow-soft'
                                                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
                                            }
                                        `}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-sm mb-1 transition-colors duration-200 ${
                            isActive
                              ? 'text-primary-700 dark:text-primary-300'
                              : 'text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400'
                          }`}
                        >
                          {hook.title}
                        </h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                          {hook.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                            hook.difficulty
                          )}`}
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
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
