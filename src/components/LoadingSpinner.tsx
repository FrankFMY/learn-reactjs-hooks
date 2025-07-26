import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = React.memo(
  ({ size = 'md', text = 'Загрузка...', className = '' }) => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    };

    const textSizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    return (
      <div
        className={`flex flex-col items-center justify-center p-8 ${className}`}
      >
        <Loader2
          className={`${sizeClasses[size]} animate-spin text-primary-600 dark:text-primary-400 mb-4`}
        />
        {text && (
          <p
            className={`${textSizes[size]} text-gray-600 dark:text-gray-300 text-center`}
          >
            {text}
          </p>
        )}
      </div>
    );
  }
);

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
