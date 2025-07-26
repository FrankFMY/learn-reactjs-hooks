import { Link, useLocation } from 'react-router-dom';
import { Filter, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SidebarProps } from '../types';
import { hooksData } from '../data/hooksData';
import { categories } from '../data/categories';
import { difficulties } from '../data/difficulties';

const Sidebar = ({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
  collapsed = false,
  onToggleCollapse,
}: SidebarProps) => {
  const location = useLocation();

  const filteredHooks = hooksData.filter(hook => {
    const matchesSearch =
      !filters.search ||
      hook.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      hook.description.toLowerCase().includes(filters.search.toLowerCase());

    const matchesCategory =
      !filters.category || hook.category === filters.category;
    const matchesDifficulty =
      !filters.difficulty || hook.difficulty === filters.difficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleFilterChange = (key: string, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '🟢';
      case 'intermediate':
        return '🟡';
      case 'advanced':
        return '🔴';
      default:
        return '⚪';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      case 'advanced':
        return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
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
                fixed top-0 left-0 h-full bg-gradient-to-b from-white/95 via-white/95 to-gray-50/95 dark:from-gray-900/95 dark:via-gray-900/95 dark:to-gray-800/95 backdrop-blur-md border-r border-gray-200 dark:border-gray-700
                transform transition-all duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:z-auto lg:h-auto lg:min-h-full
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                ${collapsed ? 'w-16' : 'w-96'}
            `}
      >
        <div className="flex flex-col h-full lg:h-auto lg:min-h-full relative">
          {/* Toggle Button */}
          <button
            onClick={onToggleCollapse}
            className="absolute -right-3 top-6 z-10 p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-700"
            title={collapsed ? 'Развернуть sidebar' : 'Свернуть sidebar'}
          >
            <div className="transition-transform duration-300 ease-in-out">
              {collapsed ? (
                <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              ) : (
                <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              )}
            </div>
          </button>

          {/* Header */}
          <div
            className={`flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 ${collapsed ? 'p-2' : 'p-6'}`}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Filter className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">
                  Навигация
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {filteredHooks.length} хуков найдено
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 ease-in-out ${collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <X size={20} />
            </button>
          </div>

          {/* Filters */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${collapsed ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}
          >
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
                  value={filters.search || ''}
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
                  value={filters.category || ''}
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
                  value={filters.difficulty || ''}
                  onChange={e =>
                    handleFilterChange('difficulty', e.target.value)
                  }
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
          </div>

          {/* Hooks List */}
          <div className="flex-1 overflow-y-auto lg:overflow-visible">
            <div className={`space-y-3 ${collapsed ? 'p-2' : 'p-6'}`}>
              {/* Expanded view */}
              <div
                className={`transition-all duration-300 ease-in-out ${collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
              >
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
                    const category = categories.find(
                      c => c.id === hook.category
                    );
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

              {/* Collapsed view */}
              <div
                className={`transition-all duration-300 ease-in-out ${collapsed ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                {filteredHooks.map(hook => {
                  const isActive = location.pathname === `/hooks/${hook.id}`;

                  return (
                    <Link
                      key={hook.id}
                      to={`/hooks/${hook.id}`}
                      onClick={onClose}
                      className={`
                        group block p-2 rounded-lg border transition-all duration-200 hover:shadow-medium
                        ${
                          isActive
                            ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 shadow-soft'
                            : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
                        }
                      `}
                    >
                      <div className="flex flex-col items-center space-y-1">
                        <div className="text-xl">
                          {getDifficultyIcon(hook.difficulty)}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 text-center leading-tight w-full truncate">
                          {hook.title}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
