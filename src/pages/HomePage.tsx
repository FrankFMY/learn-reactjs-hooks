import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  BookOpen,
  Code,
  Target,
  TrendingUp,
  Star,
  ArrowRight,
  Play,
  Users,
  Award,
  Zap,
  CheckCircle,
  Lightbulb,
  Clock,
  Heart,
  Sparkles,
  Rocket,
  Shield,
  ExternalLink,
} from 'lucide-react';

const HomePage = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Подробные объяснения',
      description: 'Каждый хук объясняется с примерами и лучшими практиками',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Интерактивные примеры',
      description: 'Запускайте код прямо в браузере и экспериментируйте',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Практические задания',
      description: 'Закрепляйте знания с помощью упражнений и тестов',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Отслеживание прогресса',
      description: 'Следите за своим прогрессом в изучении хуков',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
  ];

  const stats = [
    {
      label: 'Хуков изучено',
      value: '15+',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      label: 'Примеров кода',
      value: '50+',
      icon: <Code className="h-5 w-5" />,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
    {
      label: 'Практических заданий',
      value: '30+',
      icon: <Target className="h-5 w-5" />,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      label: 'Советов и ошибок',
      value: '100+',
      icon: <Star className="h-5 w-5" />,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    },
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'Frontend Developer',
      company: 'TechCorp',
      content:
        'Отличная платформа! Изучил все хуки за неделю. Интерактивные примеры очень помогли.',
      avatar: '👨‍💻',
      rating: 5,
    },
    {
      name: 'Мария Сидорова',
      role: 'React Developer',
      company: 'StartupXYZ',
      content:
        'Лучший ресурс для изучения React Hooks. Практические задания помогли закрепить знания.',
      avatar: '👩‍💻',
      rating: 5,
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Full Stack Developer',
      company: 'WebStudio',
      content:
        'Структурированный подход и понятные объяснения. Рекомендую всем разработчикам.',
      avatar: '👨‍💻',
      rating: 5,
    },
  ];

  const learningPath = [
    {
      step: 1,
      title: 'Основы хуков',
      description: 'useState, useEffect, useContext',
      duration: '2-3 дня',
      icon: <Sparkles className="h-5 w-5" />,
      color: 'from-green-400 to-green-600',
    },
    {
      step: 2,
      title: 'Продвинутые хуки',
      description: 'useReducer, useCallback, useMemo',
      duration: '3-4 дня',
      icon: <Zap className="h-5 w-5" />,
      color: 'from-blue-400 to-blue-600',
    },
    {
      step: 3,
      title: 'Кастомные хуки',
      description: 'Создание собственных хуков',
      duration: '2-3 дня',
      icon: <Rocket className="h-5 w-5" />,
      color: 'from-purple-400 to-purple-600',
    },
    {
      step: 4,
      title: 'Практика',
      description: 'Реальные проекты и задачи',
      duration: '1-2 недели',
      icon: <Target className="h-5 w-5" />,
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const quickActions = [
    {
      title: 'Начать обучение',
      description: 'Перейти к изучению хуков',
      icon: <Play className="h-6 w-6" />,
      link: '/hooks',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Посмотреть примеры',
      description: 'Интерактивные примеры кода',
      icon: <Code className="h-6 w-6" />,
      link: '/examples',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Практика',
      description: 'Упражнения и тесты',
      icon: <Target className="h-6 w-6" />,
      link: '/practice',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Статистика',
      description: 'Ваш прогресс обучения',
      icon: <TrendingUp className="h-6 w-6" />,
      link: '/stats',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-100 dark:from-primary-900/20 dark:via-secondary-900/20 dark:to-primary-800/20 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Изучите{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 animate-pulse">
                  React Hooks
                </span>{' '}
                на практике
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Полное руководство по React Hooks с интерактивными примерами,
                практическими заданиями и подробными объяснениями. От новичка до
                эксперта за несколько недель.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/hooks"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Начать изучение
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/examples"
                  className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:scale-105"
                >
                  Посмотреть примеры
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${action.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  {action.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                  {action.description}
                </p>
                <div className="mt-3 flex items-center text-primary-600 dark:text-primary-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Перейти
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 transform hover:scale-105 ${currentStat === index ? 'scale-110' : ''}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-2xl mb-4 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Путь обучения
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Структурированный подход к изучению React Hooks от основ до
              продвинутых техник
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12">
            {learningPath.map((step, index) => (
              <Link
                key={index}
                to={
                  index === 0
                    ? '/hooks'
                    : index === 1
                      ? '/hooks'
                      : index === 2
                        ? '/examples'
                        : '/practice'
                }
                className="relative group cursor-pointer"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-600 hover:shadow-medium transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${step.color} text-white rounded-xl`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-2xl font-bold text-gray-300 dark:text-gray-600">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                    {step.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {step.duration}
                    </div>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Начать
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>

                {/* Connection line */}
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 transform -translate-y-1/2"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Почему стоит изучать с нами?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Мы создали идеальную среду для изучения React Hooks с нуля до
              продвинутого уровня
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={
                  index === 0
                    ? '/hooks'
                    : index === 1
                      ? '/examples'
                      : index === 2
                        ? '/practice'
                        : '/stats'
                }
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-600 hover:shadow-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Узнать больше
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Что говорят разработчики
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Отзывы от разработчиков, которые уже улучшили свои навыки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <Link
                key={index}
                to="/stats"
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-200">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="flex items-center text-primary-600 dark:text-primary-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Посмотреть статистику
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Интерактивное обучение
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Живые примеры кода
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Запускайте код прямо в браузере и видите результат
                      мгновенно
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Умные подсказки
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Получайте контекстные подсказки и объяснения в процессе
                      обучения
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      Безопасная среда
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Экспериментируйте с кодом без риска сломать что-то важное
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-soft border border-gray-200 dark:border-gray-600">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Попробуйте прямо сейчас
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Запустите свой первый интерактивный пример React Hooks
                </p>
                <Link
                  to="/examples"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Запустить пример
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы начать изучение?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Присоединяйтесь к тысячам разработчиков, которые уже улучшили свои
              навыки с React Hooks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/hooks"
                className="group inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Начать бесплатно
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/examples"
                className="group inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
              >
                Посмотреть примеры
                <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-primary-100">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">1000+ разработчиков</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span className="text-sm">4.9/5 рейтинг</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span className="text-sm">Бесплатно навсегда</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
