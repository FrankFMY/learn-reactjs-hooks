import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Code,
  Lightbulb,
  Target,
  Sparkles,
  Zap,
  Shield,
  Play,
  Star,
  ArrowRight,
  Users,
} from 'lucide-react';

const HomePage = () => {
  const quickStartSteps = [
    {
      step: '1',
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Изучите теорию',
      description:
        'Познакомьтесь с основами React Hooks и их принципами работы',
      link: '/hooks',
    },
    {
      step: '2',
      icon: <Code className="h-8 w-8" />,
      title: 'Посмотрите примеры',
      description: 'Изучите практические примеры использования каждого хука',
      link: '/examples',
    },
    {
      step: '3',
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Попробуйте сами',
      description: 'Закрепите знания с помощью интерактивных упражнений',
      link: '/practice',
    },
    {
      step: '4',
      icon: <Target className="h-8 w-8" />,
      title: 'Отслеживайте прогресс',
      description: 'Следите за своими успехами в изучении React Hooks',
      link: '/stats',
    },
  ];

  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Полное покрытие',
      description:
        'Все основные и дополнительные хуки React с подробными объяснениями',
      bgColor:
        'bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Интерактивные примеры',
      description:
        'Живые примеры кода, которые можно запустить и протестировать',
      bgColor:
        'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Лучшие практики',
      description: 'Проверенные паттерны и рекомендации по использованию хуков',
      bgColor:
        'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Сообщество',
      description:
        'Присоединяйтесь к сообществу разработчиков и делитесь опытом',
      bgColor:
        'bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30',
      iconColor: 'text-pink-600 dark:text-pink-400',
    },
  ];

  const stats = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      value: '15+',
      label: 'Хуков изучено',
      bgColor:
        'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <Play className="h-5 w-5" />,
      value: '50+',
      label: 'Примеров кода',
      bgColor:
        'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: <Code className="h-5 w-5" />,
      value: '100+',
      label: 'Упражнений',
      bgColor:
        'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30',
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: <Star className="h-5 w-5" />,
      value: '4.9',
      label: 'Рейтинг',
      bgColor:
        'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
  ];

  const testimonials = [
    {
      rating: 5,
      text: 'Отличное руководство! Все объяснено очень понятно с практическими примерами.',
      author: 'Алексей Петров',
      role: 'Frontend Developer',
    },
    {
      rating: 5,
      text: 'Наконец-то нашел качественный ресурс для изучения React Hooks. Рекомендую всем!',
      author: 'Мария Сидорова',
      role: 'React Developer',
    },
    {
      rating: 5,
      text: 'Интерактивные примеры помогли лучше понять, как работают хуки на практике.',
      author: 'Дмитрий Козлов',
      role: 'Full Stack Developer',
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl"></div>

        <div className="relative container-wide section-spacing-lg">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              Полное руководство по React Hooks
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-slide-up">
              Изучайте <span className="text-gradient">React Hooks</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Полное руководство по современным React хукам с практическими
              примерами, лучшими практиками и интерактивными упражнениями
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/hooks" className="btn-primary text-lg px-8 py-4 group">
                Начать изучение
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link to="/examples" className="btn-secondary text-lg px-8 py-4">
                Посмотреть примеры
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="container-wide section-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Быстрый старт
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Следуйте этим простым шагам, чтобы начать изучение React Hooks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quickStartSteps.map((step, index) => (
            <Link key={index} to={step.link} className="feature-card group">
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>

              <div className="feature-icon-container">
                <div className="feature-icon">{step.icon}</div>
              </div>

              <h3 className="feature-title">{step.title}</h3>

              <p className="feature-description">{step.description}</p>

              <div className="feature-link">
                Начать
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container-wide section-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Что вы найдете
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Все необходимое для освоения React Hooks в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group block p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={feature.iconColor}>{feature.icon}</div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Узнать больше
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container-wide section-spacing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={stat.color}>{stat.icon}</div>
                </div>

                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>

                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container-wide section-spacing">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Отзывы разработчиков
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Что говорят о нашем руководстве другие разработчики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-strong transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {testimonial.author}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                {testimonial.role}
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-primary-200 dark:border-primary-800">
        <div className="container-wide">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Готовы начать изучение?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к тысячам разработчиков, которые уже освоили React
              Hooks с нашим руководством
            </p>
            <Link to="/hooks" className="btn-primary text-lg px-8 py-4 group">
              Начать изучение сейчас
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
