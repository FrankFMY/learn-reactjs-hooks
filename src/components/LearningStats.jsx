import React from 'react';
import {
    BookOpen,
    Target,
    Trophy,
    Clock,
    TrendingUp,
    Star,
    Award,
    Calendar,
} from 'lucide-react';

const LearningStats = ({
    totalHooks = 10,
    completedHooks = 0,
    totalExamples = 20,
    completedExamples = 0,
    totalExercises = 5,
    completedExercises = 0,
    totalScore = 0,
    maxScore = 100,
    streak = 0,
    level = 1,
}) => {
    const progressPercentage = Math.round((completedHooks / totalHooks) * 100);
    const examplesProgress = Math.round(
        (completedExamples / totalExamples) * 100
    );
    const exercisesProgress = Math.round(
        (completedExercises / totalExercises) * 100
    );
    const scorePercentage = Math.round((totalScore / maxScore) * 100);

    const getLevelColor = (level) => {
        if (level >= 10) return 'text-purple-600 dark:text-purple-400';
        if (level >= 7) return 'text-blue-600 dark:text-blue-400';
        if (level >= 4) return 'text-green-600 dark:text-green-400';
        return 'text-yellow-600 dark:text-yellow-400';
    };

    const getLevelTitle = (level) => {
        if (level >= 10) return 'Мастер React Hooks';
        if (level >= 7) return 'Продвинутый разработчик';
        if (level >= 4) return 'Средний уровень';
        return 'Начинающий';
    };

    return (
        <div className='space-y-6'>
            {/* Основная статистика */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4'>
                    <div className='flex items-center'>
                        <div className='p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg'>
                            <BookOpen className='h-6 w-6 text-blue-600 dark:text-blue-400' />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Изучено хуков
                            </p>
                            <p className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                                {completedHooks}/{totalHooks}
                            </p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                            <div
                                className='bg-blue-600 h-2 rounded-full transition-all duration-300'
                                style={{
                                    width: `${progressPercentage}%`,
                                }}></div>
                        </div>
                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                            {progressPercentage}% завершено
                        </p>
                    </div>
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4'>
                    <div className='flex items-center'>
                        <div className='p-2 bg-green-100 dark:bg-green-900/30 rounded-lg'>
                            <Target className='h-6 w-6 text-green-600 dark:text-green-400' />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Примеры кода
                            </p>
                            <p className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                                {completedExamples}/{totalExamples}
                            </p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                            <div
                                className='bg-green-600 h-2 rounded-full transition-all duration-300'
                                style={{ width: `${examplesProgress}%` }}></div>
                        </div>
                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                            {examplesProgress}% завершено
                        </p>
                    </div>
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4'>
                    <div className='flex items-center'>
                        <div className='p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg'>
                            <Trophy className='h-6 w-6 text-yellow-600 dark:text-yellow-400' />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Упражнения
                            </p>
                            <p className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                                {completedExercises}/{totalExercises}
                            </p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                            <div
                                className='bg-yellow-600 h-2 rounded-full transition-all duration-300'
                                style={{
                                    width: `${exercisesProgress}%`,
                                }}></div>
                        </div>
                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                            {exercisesProgress}% завершено
                        </p>
                    </div>
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4'>
                    <div className='flex items-center'>
                        <div className='p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg'>
                            <Star className='h-6 w-6 text-purple-600 dark:text-purple-400' />
                        </div>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Общий балл
                            </p>
                            <p className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                                {totalScore}/{maxScore}
                            </p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                            <div
                                className='bg-purple-600 h-2 rounded-full transition-all duration-300'
                                style={{ width: `${scorePercentage}%` }}></div>
                        </div>
                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                            {scorePercentage}% успешности
                        </p>
                    </div>
                </div>
            </div>

            {/* Дополнительная статистика */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Уровень
                            </p>
                            <p
                                className={`text-2xl font-bold ${getLevelColor(
                                    level
                                )}`}>
                                {level}
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                {getLevelTitle(level)}
                            </p>
                        </div>
                        <div className='p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full'>
                            <Award className='h-8 w-8 text-white' />
                        </div>
                    </div>
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Серия дней
                            </p>
                            <p className='text-2xl font-bold text-green-600 dark:text-green-400'>
                                {streak}
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                дней подряд
                            </p>
                        </div>
                        <div className='p-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full'>
                            <TrendingUp className='h-8 w-8 text-white' />
                        </div>
                    </div>
                </div>

                <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Время обучения
                            </p>
                            <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
                                {Math.round(
                                    (completedHooks +
                                        completedExamples +
                                        completedExercises) *
                                        15
                                )}
                            </p>
                            <p className='text-xs text-gray-500 dark:text-gray-400'>
                                минут
                            </p>
                        </div>
                        <div className='p-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full'>
                            <Clock className='h-8 w-8 text-white' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Достижения */}
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4'>
                    🏆 Достижения
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {[
                        {
                            title: 'Первый хук',
                            description: 'Изучите первый React хук',
                            achieved: completedHooks >= 1,
                            icon: '🎯',
                        },
                        {
                            title: 'Половина пути',
                            description: 'Изучите 50% всех хуков',
                            achieved: completedHooks >= totalHooks / 2,
                            icon: '🚀',
                        },
                        {
                            title: 'Мастер хуков',
                            description: 'Изучите все хуки',
                            achieved: completedHooks >= totalHooks,
                            icon: '👑',
                        },
                        {
                            title: 'Практик',
                            description: 'Завершите все упражнения',
                            achieved: completedExercises >= totalExercises,
                            icon: '💪',
                        },
                    ].map((achievement, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg border ${
                                achievement.achieved
                                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                    : 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-700'
                            }`}>
                            <div className='flex items-center'>
                                <span className='text-2xl mr-2'>
                                    {achievement.icon}
                                </span>
                                <div>
                                    <p
                                        className={`text-sm font-medium ${
                                            achievement.achieved
                                                ? 'text-green-800 dark:text-green-200'
                                                : 'text-gray-600 dark:text-gray-300'
                                        }`}>
                                        {achievement.title}
                                    </p>
                                    <p
                                        className={`text-xs ${
                                            achievement.achieved
                                                ? 'text-green-600 dark:text-green-300'
                                                : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearningStats;
