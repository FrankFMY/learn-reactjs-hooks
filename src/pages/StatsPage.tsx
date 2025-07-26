import {
  BarChart3,
  Target,
  TrendingUp,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Award,
  BookOpen,
  Code,
  Zap,
  Star,
  Users,
  Trophy,
  Lightbulb,
  Rocket,
  Brain,
} from 'lucide-react';

const StatsPage = () => {
  // Моковые данные для демонстрации
  const hookStats = [
    { name: 'useState', progress: 85, color: '#3b82f6', status: 'completed' },
    { name: 'useEffect', progress: 92, color: '#10b981', status: 'completed' },
    {
      name: 'useContext',
      progress: 78,
      color: '#f59e0b',
      status: 'in-progress',
    },
    {
      name: 'useReducer',
      progress: 65,
      color: '#ef4444',
      status: 'in-progress',
    },
    {
      name: 'useCallback',
      progress: 88,
      color: '#8b5cf6',
      status: 'completed',
    },
    { name: 'useMemo', progress: 82, color: '#06b6d4', status: 'completed' },
    { name: 'useRef', progress: 45, color: '#ec4899', status: 'not-started' },
    {
      name: 'useLayoutEffect',
      progress: 30,
      color: '#f97316',
      status: 'not-started',
    },
  ];

  const learningGoals = [
    { name: 'Изучить все хуки', progress: 75, target: 100, icon: BookOpen },
    { name: 'Выполнить упражнения', progress: 60, target: 100, icon: Code },
    { name: 'Практические проекты', progress: 45, target: 50, icon: Rocket },
    { name: 'Тестирование', progress: 80, target: 100, icon: Target },
  ];

  const recentActivity = [
    {
      type: 'Изучение',
      title: 'useState Hook',
      description: 'Завершено изучение useState с практическими примерами',
      date: '2 часа назад',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      badge: 'Завершено',
    },
    {
      type: 'Практика',
      title: 'useEffect упражнения',
      description: 'Выполнено 5 упражнений по useEffect',
      date: '1 день назад',
      icon: Code,
      color: 'from-green-500 to-green-600',
      badge: 'В процессе',
    },
    {
      type: 'Тест',
      title: 'Проверка знаний',
      description: 'Пройден тест по основам хуков - 85%',
      date: '2 дня назад',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      badge: 'Завершено',
    },
  ];

  const achievements = [
    {
      name: 'Первые шаги',
      description: 'Изучил useState и useEffect',
      icon: Star,
      unlocked: true,
    },
    {
      name: 'Практик',
      description: 'Выполнил 10 упражнений',
      icon: Code,
      unlocked: true,
    },
    {
      name: 'Тестировщик',
      description: 'Прошел 5 тестов',
      icon: Target,
      unlocked: true,
    },
    {
      name: 'Контекстный мастер',
      description: 'Освоил useContext',
      icon: Brain,
      unlocked: false,
    },
    {
      name: 'Оптимизатор',
      description: 'Изучил useMemo и useCallback',
      icon: Zap,
      unlocked: false,
    },
    {
      name: 'Проектировщик',
      description: 'Создал собственный проект',
      icon: Rocket,
      unlocked: false,
    },
  ];

  const weeklyStats = [
    {
      label: 'Время изучения',
      value: '12ч 30м',
      icon: Clock,
      color: 'text-blue-600',
    },
    { label: 'Упражнения', value: '24', icon: Code, color: 'text-green-600' },
    {
      label: 'Тесты пройдено',
      value: '8',
      icon: Target,
      color: 'text-purple-600',
    },
    { label: 'Проекты', value: '3', icon: Rocket, color: 'text-orange-600' },
  ];

  const recommendations = [
    {
      title: 'Сфокусируйтесь на useContext',
      description:
        'Ваш прогресс по useContext составляет 78%. Рекомендуем больше практики с этим хуком.',
      icon: Brain,
      color: 'from-red-500 to-red-600',
      action: 'Начать практику',
    },
    {
      title: 'Попробуйте продвинутые упражнения',
      description:
        'Вы готовы к более сложным задачам. Попробуйте комбинировать несколько хуков в одном компоненте.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-yellow-600',
      action: 'Перейти к упражнениям',
    },
    {
      title: 'Создайте собственный проект',
      description:
        'Примените полученные знания в реальном проекте. Это поможет закрепить навыки.',
      icon: Rocket,
      color: 'from-purple-500 to-purple-600',
      action: 'Создать проект',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'not-started':
        return <XCircle className="h-4 w-4 text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1 className="page-title">Статистика обучения</h1>
          <p className="page-description">
            Отслеживайте свой прогресс в изучении React Hooks
          </p>
        </div>

        {/* Еженедельная статистика */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyStats.map((stat, index) => (
              <div
                key={index}
                className="stats-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${stat.color}`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Прогресс по хукам */}
        <div className="mb-8">
          <div className="stats-card">
            <div className="stats-header">
              <BarChart3 className="stats-icon text-blue-600 dark:text-blue-400" />
              <h2 className="stats-title">Прогресс по хукам</h2>
            </div>
            <div className="space-y-6">
              {hookStats.map((hook, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="flex-shrink-0">
                      {getStatusIcon(hook.status)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                          {hook.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {hook.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500 ease-out"
                          style={{
                            width: `${hook.progress}%`,
                            backgroundColor: hook.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-6 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                <span>Завершено</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 text-yellow-500 mr-1" />
                <span>В процессе</span>
              </div>
              <div className="flex items-center">
                <XCircle className="h-3 w-3 text-gray-400 mr-1" />
                <span>Не начато</span>
              </div>
            </div>
          </div>
        </div>

        {/* Цели обучения и Достижения */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="stats-card">
              <div className="stats-header">
                <Target className="stats-icon text-green-600 dark:text-green-400" />
                <h2 className="stats-title">Цели обучения</h2>
              </div>
              <div className="space-y-6">
                {learningGoals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <goal.icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {goal.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {goal.progress}/{goal.target}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500 ease-out"
                        style={{
                          width: `${(goal.progress / goal.target) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-header">
                <Award className="stats-icon text-purple-600 dark:text-purple-400" />
                <h2 className="stats-title">Достижения</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          achievement.unlocked
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-400'
                        }`}
                      >
                        <achievement.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`text-sm font-medium truncate ${
                            achievement.unlocked
                              ? 'text-gray-900 dark:text-gray-100'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          {achievement.name}
                        </h3>
                        <p
                          className={`text-xs truncate ${
                            achievement.unlocked
                              ? 'text-gray-600 dark:text-gray-300'
                              : 'text-gray-400 dark:text-gray-500'
                          }`}
                        >
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Недавняя активность */}
        <div className="mb-8">
          <div className="stats-card">
            <div className="stats-header">
              <TrendingUp className="stats-icon text-purple-600 dark:text-purple-400" />
              <h2 className="stats-title">Недавняя активность</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${activity.color} text-white`}
                    >
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {activity.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            activity.badge === 'Завершено'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}
                        >
                          {activity.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                        {activity.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        {activity.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Рекомендации */}
        <div className="mb-8">
          <div className="page-header">
            <h2 className="page-title">Рекомендации</h2>
            <p className="page-description">
              Персонализированные советы для улучшения обучения
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="stats-card hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-br ${rec.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <rec.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {rec.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {rec.description}
                  </p>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    {rec.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительная статистика */}
        <div className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="stats-card">
              <div className="stats-header">
                <Users className="stats-icon text-indigo-600 dark:text-indigo-400" />
                <h2 className="stats-title">Сравнение с другими</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ваш рейтинг
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      #127
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      из 1,234
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      ↑ +15
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      85%
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Средний балл
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      92%
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Скорость
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="stats-card">
              <div className="stats-header">
                <Trophy className="stats-icon text-yellow-600 dark:text-yellow-400" />
                <h2 className="stats-title">Лучшие результаты</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🥇</div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        useEffect
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        92% - Лучший результат
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🥈</div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        useCallback
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        88% - Отличный результат
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🥉</div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        useState
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        85% - Хороший результат
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Мотивационная секция */}
        <div className="stats-card bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-blue-200 dark:border-blue-800">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Продолжайте в том же духе!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Вы уже освоили 75% всех хуков! Осталось всего несколько шагов до
              полного понимания React Hooks. Ваш прогресс впечатляет -
              продолжайте практиковаться и изучать новые концепции.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Продолжить обучение
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                Поделиться прогрессом
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
