import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { hooksData, categories, difficulties } from '../data/hooksData';

const RelatedHooks = ({ currentHookId, maxCount = 3 }) => {
    const currentHook = hooksData.find((hook) => hook.id === currentHookId);

    if (!currentHook) return null;

    // Находим связанные хуки по категории и сложности
    const relatedHooks = hooksData
        .filter(
            (hook) =>
                hook.id !== currentHookId &&
                (hook.category === currentHook.category ||
                    hook.difficulty === currentHook.difficulty)
        )
        .sort((a, b) => {
            // Приоритет: хуки той же категории и сложности
            const aScore =
                (a.category === currentHook.category ? 2 : 0) +
                (a.difficulty === currentHook.difficulty ? 1 : 0);
            const bScore =
                (b.category === currentHook.category ? 2 : 0) +
                (b.difficulty === currentHook.difficulty ? 1 : 0);
            return bScore - aScore;
        })
        .slice(0, maxCount);

    if (relatedHooks.length === 0) return null;

    const getDifficultyIcon = (difficulty) => {
        switch (difficulty) {
            case 'beginner':
                return <Sparkles className='h-4 w-4' />;
            case 'intermediate':
                return <TrendingUp className='h-4 w-4' />;
            case 'advanced':
                return <Clock className='h-4 w-4' />;
            default:
                return null;
        }
    };

    const getDifficultyColor = (difficulty) => {
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

    const getCategoryColor = (categoryId) => {
        const category = categories.find((c) => c.id === categoryId);
        return category?.color || '#6b7280';
    };

    return (
        <div className='bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-soft'>
            <h3 className='text-xl font-bold text-gray-900 dark:text-gray-100 mb-6'>
                Связанные хуки
            </h3>

            <div className='space-y-4'>
                {relatedHooks.map((hook) => {
                    const category = categories.find(
                        (c) => c.id === hook.category
                    );
                    const difficulty = difficulties.find(
                        (d) => d.id === hook.difficulty
                    );

                    return (
                        <Link
                            key={hook.id}
                            to={`/hooks/${hook.id}`}
                            className='group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gray-50 dark:bg-gray-900/50'>
                            <div className='flex items-start justify-between'>
                                <div className='flex-1'>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200'>
                                            {hook.title}
                                        </h4>
                                        <span
                                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                                                hook.difficulty
                                            )}`}>
                                            {getDifficultyIcon(hook.difficulty)}
                                            <span className='ml-1'>
                                                {difficulty?.name ||
                                                    hook.difficulty}
                                            </span>
                                        </span>
                                    </div>

                                    <p className='text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2'>
                                        {hook.description}
                                    </p>

                                    <div className='flex items-center gap-3'>
                                        <div className='flex items-center'>
                                            <div
                                                className='w-3 h-3 rounded-full mr-2'
                                                style={{
                                                    backgroundColor:
                                                        getCategoryColor(
                                                            hook.category
                                                        ),
                                                }}
                                            />
                                            <span className='text-xs text-gray-500 dark:text-gray-400'>
                                                {category?.name ||
                                                    hook.category}
                                            </span>
                                        </div>
                                        <span className='text-xs text-gray-500 dark:text-gray-400'>
                                            {hook.content.examples.length}{' '}
                                            примеров
                                        </span>
                                    </div>
                                </div>

                                <div className='flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform duration-200'>
                                    <ArrowRight className='h-4 w-4' />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className='mt-6 pt-6 border-t border-gray-200 dark:border-gray-700'>
                <Link
                    to='/hooks'
                    className='inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200'>
                    Посмотреть все хуки
                    <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
            </div>
        </div>
    );
};

export default RelatedHooks;
