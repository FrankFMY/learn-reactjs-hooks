import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ErrorBoundary } from '../components/ErrorBoundary';

// Компонент, который выбрасывает ошибку
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Normal component</div>;
};

describe('ErrorBoundary', () => {
  const originalConsoleError = console.error;
  let originalLocation: Location;

  beforeEach(() => {
    // Подавляем ошибки в консоли для тестов
    console.error = vi.fn();

    // Мокаем только reload
    originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...originalLocation,
        reload: vi.fn(),
        assign: vi.fn(),
        replace: vi.fn(),
        href: '',
      },
    });
  });

  afterEach(() => {
    console.error = originalConsoleError;
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: originalLocation,
    });
  });

  it('рендерит children когда нет ошибок', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('отображает fallback UI при ошибке', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Что-то пошло не так')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Произошла неожиданная ошибка. Попробуйте перезагрузить страницу.'
      )
    ).toBeInTheDocument();
  });

  it('отображает кастомный fallback если передан', () => {
    const customFallback = <div>Custom error message</div>;

    render(
      <ErrorBoundary fallback={customFallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
  });

  it('показывает кнопки действий при ошибке', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(
      screen.getByRole('button', { name: /перезагрузить/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /на главную/i })
    ).toBeInTheDocument();
  });

  it('перезагружает страницу при нажатии кнопки перезагрузки', () => {
    const reloadSpy = vi.fn();
    (window.location as unknown as { reload: () => void }).reload = reloadSpy;

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const reloadButton = screen.getByRole('button', { name: /перезагрузить/i });
    fireEvent.click(reloadButton);

    expect(reloadSpy).toHaveBeenCalled();
  });

  it('переходит на главную страницу при нажатии кнопки "На главную"', () => {
    const hrefSpy = vi.fn();
    Object.defineProperty(window.location, 'href', {
      get: () => '',
      set: hrefSpy,
      configurable: true,
    });

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const homeButton = screen.getByRole('button', { name: /на главную/i });
    fireEvent.click(homeButton);

    expect(hrefSpy).toHaveBeenCalledWith('/');
  });

  it('логирует ошибку в консоль', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      'ErrorBoundary caught an error:',
      expect.any(Error),
      expect.any(Object)
    );

    consoleSpy.mockRestore();
  });

  it('не показывает детали ошибки в production', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.queryByText('Детали ошибки')).not.toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('показывает детали ошибки в development', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(
      screen.getByText('Детали ошибки (только для разработки)')
    ).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('восстанавливается после ошибки при изменении props', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Что-то пошло не так')).toBeInTheDocument();

    // Рендерим без ошибки
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    // Вместо строгого сравнения ищем div, где textContent содержит 'Normal component'
    const normalDiv = Array.from(document.querySelectorAll('div')).find(
      el => el.textContent && el.textContent.includes('Normal component')
    );
    expect(normalDiv).toBeTruthy();
  });
});
