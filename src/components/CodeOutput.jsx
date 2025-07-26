import React from 'react';
import { Terminal, AlertCircle, CheckCircle, Loader } from 'lucide-react';

const CodeOutput = ({
    output,
    error,
    isLoading,
    isSuccess,
    title = 'Результат выполнения',
}) => {
    if (isLoading) {
        return (
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden'>
                <div className='bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700'>
                    <div className='flex items-center'>
                        <Terminal className='h-5 w-5 text-gray-600 dark:text-gray-400 mr-2' />
                        <h3 className='font-semibold text-gray-900 dark:text-gray-100'>
                            {title}
                        </h3>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='flex items-center justify-center py-8'>
                        <Loader className='h-8 w-8 text-primary-600 animate-spin mr-3' />
                        <span className='text-gray-600 dark:text-gray-300'>
                            Выполнение кода...
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-red-200 dark:border-red-800 overflow-hidden'>
                <div className='bg-red-50 dark:bg-red-900/20 px-4 py-3 border-b border-red-200 dark:border-red-800'>
                    <div className='flex items-center'>
                        <AlertCircle className='h-5 w-5 text-red-600 dark:text-red-400 mr-2' />
                        <h3 className='font-semibold text-red-800 dark:text-red-200'>
                            Ошибка выполнения
                        </h3>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
                        <pre className='text-red-700 dark:text-red-300 text-sm font-mono whitespace-pre-wrap'>
                            {error}
                        </pre>
                    </div>
                </div>
            </div>
        );
    }

    if (isSuccess && output) {
        return (
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-green-200 dark:border-green-800 overflow-hidden'>
                <div className='bg-green-50 dark:bg-green-900/20 px-4 py-3 border-b border-green-200 dark:border-green-800'>
                    <div className='flex items-center'>
                        <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400 mr-2' />
                        <h3 className='font-semibold text-green-800 dark:text-green-200'>
                            {title}
                        </h3>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='bg-gray-900 rounded-lg p-4'>
                        <pre className='text-green-400 text-sm font-mono whitespace-pre-wrap'>
                            {output}
                        </pre>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden'>
            <div className='bg-gray-50 dark:bg-gray-900 px-4 py-3 border-b border-gray-200 dark:border-gray-700'>
                <div className='flex items-center'>
                    <Terminal className='h-5 w-5 text-gray-600 dark:text-gray-400 mr-2' />
                    <h3 className='font-semibold text-gray-900 dark:text-gray-100'>
                        {title}
                    </h3>
                </div>
            </div>
            <div className='p-4'>
                <div className='text-center py-8 text-gray-500 dark:text-gray-400'>
                    <Terminal className='h-12 w-12 mx-auto mb-3 opacity-50' />
                    <p>Нажмите "Запустить код" для выполнения</p>
                </div>
            </div>
        </div>
    );
};

export default CodeOutput;
