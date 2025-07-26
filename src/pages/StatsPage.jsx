import React from 'react';
import {
    BarChart3,
    Target,
    TrendingUp,
    Calendar,
    CheckCircle,
    XCircle,
} from 'lucide-react';

const StatsPage = () => {
    // Моковые данные для демонстрации
    const hookStats = [
        { name: 'useState', progress: 85, color: '#3b82f6' },
        { name: 'useEffect', progress: 92, color: '#10b981' },
        { name: 'useContext', progress: 78, color: '#f59e0b' },
        { name: 'useReducer', progress: 65, color: '#ef4444' },
        { name: 'useCallback', progress: 88, color: '#8b5cf6' },
        { name: 'useMemo', progress: 82, color: '#06b6d4' },
    ];

    const learningGoals = [
        { name: 'Изучить все хуки', progress: 75, target: 100 },
        { name: 'Выполнить упражнения', progress: 60, target: 100 },
        { name: 'Практические проекты', progress: 45, target: 50 },
        { name: 'Тестирование', progress: 80, target: 100 },
    ];

    const recentActivity = [
        {
            type: 'Изучение',
            title: 'useState Hook',
            description:
                'Завершено изучение useState с практическими примерами',
            date: '2 часа назад',
            icon: '📚',
            color: 'from-blue-500 to-blue-600',
        },
        {
            type: 'Практика',
            title: 'useEffect упражнения',
            description: 'Выполнено 5 упражнений по useEffect',
            date: '1 день назад',
            icon: '💻',
            color: 'from-green-500 to-green-600',
        },
        {
            type: 'Тест',
            title: 'Проверка знаний',
            description: 'Пройден тест по основам хуков - 85%',
            date: '2 дня назад',
            icon: '✅',
            color: 'from-purple-500 to-purple-600',
        },
    ];

    return (
        <div className='page-container'>
            <div className='page-content'>
                <div className='page-header'>
                    <h1 className='page-title'>Статистика обучения</h1>
                    <p className='page-description'>
                        Отслеживайте свой прогресс в изучении React Hooks
                    </p>
                </div>

                {/* Общая статистика */}
                <div className='mb-8'>
                    <div className='grid-stats'>
                        <div className='stats-card'>
                            <div className='stats-header'>
                                <BarChart3 className='stats-icon text-blue-600 dark:text-blue-400' />
                                <h2 className='stats-title'>
                                    Прогресс по хукам
                                </h2>
                            </div>
                            <div className='space-y-4'>
                                {hookStats.map((hook, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center'>
                                        <div className='w-12 text-sm font-medium text-gray-600 dark:text-gray-300'>
                                            {hook.name}
                                        </div>
                                        <div className='flex-1 ml-4'>
                                            <div className='flex space-x-2'>
                                                <div className='progress-container'>
                                                    <div
                                                        className='progress-bar'
                                                        style={{
                                                            width: `${hook.progress}%`,
                                                            backgroundColor:
                                                                hook.color,
                                                        }}></div>
                                                </div>
                                                <span className='text-sm text-gray-600 dark:text-gray-300'>
                                                    {hook.progress}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center mt-4 space-x-4 text-xs text-gray-500 dark:text-gray-400'>
                                <div className='flex items-center'>
                                    <div className='w-3 h-3 bg-blue-600 rounded mr-1'></div>
                                    <span>Изучено</span>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-3 h-3 bg-green-600 rounded mr-1'></div>
                                    <span>Практика</span>
                                </div>
                                <div className='flex items-center'>
                                    <div className='w-3 h-3 bg-yellow-600 rounded mr-1'></div>
                                    <span>В процессе</span>
                                </div>
                            </div>
                        </div>

                        <div className='stats-card'>
                            <div className='stats-header'>
                                <Target className='stats-icon text-green-600 dark:text-green-400' />
                                <h2 className='stats-title'>Цели обучения</h2>
                            </div>
                            <div className='space-y-4'>
                                {learningGoals.map((goal, index) => (
                                    <div key={index}>
                                        <div className='flex justify-between items-center mb-2'>
                                            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                                {goal.name}
                                            </span>
                                            <span className='text-sm text-gray-500 dark:text-gray-400'>
                                                {goal.progress}/{goal.target}
                                            </span>
                                        </div>
                                        <div className='progress-container'>
                                            <div
                                                className='progress-bar-success'
                                                style={{
                                                    width: `${
                                                        (goal.progress /
                                                            goal.target) *
                                                        100
                                                    }%`,
                                                }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Недавняя активность */}
                <div className='stats-card'>
                    <div className='stats-header'>
                        <TrendingUp className='stats-icon text-purple-600 dark:text-purple-400' />
                        <h2 className='stats-title'>Недавняя активность</h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {recentActivity.map((activity, index) => (
                            <div
                                key={index}
                                className='bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
                                <div className='flex items-start'>
                                    <span className='text-2xl mr-3'>
                                        {activity.icon}
                                    </span>
                                    <div className='flex-1'>
                                        <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-1'>
                                            {activity.title}
                                        </h3>
                                        <p className='text-sm text-gray-600 dark:text-gray-300 mb-2'>
                                            {activity.description}
                                        </p>
                                        <div className='flex items-center text-xs text-gray-500 dark:text-gray-400'>
                                            <Calendar className='h-3 w-3 mr-1' />
                                            {activity.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Достижения */}
                <div className='mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800'>
                    <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4'>
                        Достижения
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                            <h3 className='font-medium text-gray-900 dark:text-gray-100 mb-2'>
                                Завершенные
                            </h3>
                            <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-300'>
                                <li className='flex items-center'>
                                    <CheckCircle className='h-4 w-4 text-green-500 mr-2' />
                                    Изучение useState и useEffect
                                </li>
                                <li className='flex items-center'>
                                    <CheckCircle className='h-4 w-4 text-green-500 mr-2' />
                                    Выполнение базовых упражнений
                                </li>
                                <li className='flex items-center'>
                                    <CheckCircle className='h-4 w-4 text-green-500 mr-2' />
                                    Прохождение первого теста
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-medium text-gray-900 dark:text-gray-100 mb-2'>
                                В процессе
                            </h3>
                            <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-300'>
                                <li className='flex items-center'>
                                    <XCircle className='h-4 w-4 text-yellow-500 mr-2' />
                                    Изучение useContext
                                </li>
                                <li className='flex items-center'>
                                    <XCircle className='h-4 w-4 text-yellow-500 mr-2' />
                                    Практика с useReducer
                                </li>
                                <li className='flex items-center'>
                                    <XCircle className='h-4 w-4 text-yellow-500 mr-2' />
                                    Оптимизация с useMemo
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Рекомендации */}
                <div className='mt-12'>
                    <div className='page-header'>
                        <h2 className='page-title'>Рекомендации</h2>
                        <p className='page-description'>
                            Персонализированные советы для улучшения обучения
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className='stats-card'>
                            <div className='text-center'>
                                <div className='text-3xl mb-4'>🎯</div>
                                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                                    Сфокусируйтесь на useContext
                                </h3>
                                <p className='text-sm text-gray-600 dark:text-gray-300'>
                                    Ваш прогресс по useContext составляет 78%.
                                    Рекомендуем больше практики с этим хуком.
                                </p>
                            </div>
                        </div>
                        <div className='stats-card'>
                            <div className='text-center'>
                                <div className='text-3xl mb-4'>💡</div>
                                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                                    Попробуйте продвинутые упражнения
                                </h3>
                                <p className='text-sm text-gray-600 dark:text-gray-300'>
                                    Вы готовы к более сложным задачам.
                                    Попробуйте комбинировать несколько хуков в
                                    одном компоненте.
                                </p>
                            </div>
                        </div>
                        <div className='stats-card'>
                            <div className='text-center'>
                                <div className='text-3xl mb-4'>🚀</div>
                                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-2'>
                                    Создайте собственный проект
                                </h3>
                                <p className='text-sm text-gray-600 dark:text-gray-300'>
                                    Примените полученные знания в реальном
                                    проекте. Это поможет закрепить навыки.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;
