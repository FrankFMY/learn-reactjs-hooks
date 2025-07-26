import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import CodeBlock from '../components/CodeBlock';
import { ThemeProvider } from '../contexts/ThemeProvider';

// Мокаем clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn(),
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('CodeBlock', () => {
  const mockCode = 'const test = "hello world";';
  const mockOnRunExample = vi.fn();
  const defaultProps = {
    title: 'Test Code',
    description: 'Test description',
    onRunExample: () => {},
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('рендерит код с подсветкой синтаксиса', () => {
    renderWithTheme(
      <CodeBlock
        code={mockCode}
        language="javascript"
        title="Test"
        description="Test description"
        onRunExample={() => {}}
      />
    );

    // Проверяем, что код отображается с подсветкой
    const codeElement = document.querySelector('pre code');
    expect(codeElement).toBeTruthy();
    expect(codeElement?.textContent).toContain('const test');
  });

  it('отображает заголовок и описание', () => {
    const title = 'Test Component';
    const description = 'This is a test description';

    renderWithTheme(
      <CodeBlock
        code={mockCode}
        title={title}
        description={description}
        onRunExample={() => {}}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('копирует код в буфер обмена при нажатии кнопки копирования', async () => {
    (
      navigator.clipboard.writeText as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue(undefined);

    renderWithTheme(
      <CodeBlock
        code={mockCode}
        title="Test"
        description="Test description"
        onRunExample={() => {}}
      />
    );

    const copyButton = screen.getByRole('button', { name: /копировать/i });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockCode);
    });
  });

  it('показывает индикатор успешного копирования', async () => {
    (
      navigator.clipboard.writeText as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue(undefined);

    renderWithTheme(<CodeBlock code={mockCode} {...defaultProps} />);

    const copyButton = screen.getByRole('button', { name: /копировать/i });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(screen.getByText('Скопировано!')).toBeInTheDocument();
    });
  });

  it('отображает кнопку запуска для live примеров', () => {
    renderWithTheme(
      <CodeBlock
        code={mockCode}
        liveExample={true}
        onRunExample={mockOnRunExample}
      />
    );

    const runButton = screen.getByRole('button', { name: /запустить/i });
    expect(runButton).toBeInTheDocument();
  });

  it('вызывает onRunExample при нажатии кнопки запуска', () => {
    renderWithTheme(
      <CodeBlock
        code={mockCode}
        liveExample={true}
        onRunExample={mockOnRunExample}
      />
    );

    const runButton = screen.getByRole('button', { name: /запустить/i });
    fireEvent.click(runButton);

    expect(mockOnRunExample).toHaveBeenCalledTimes(1);
  });

  it('отображает правильный язык программирования', () => {
    renderWithTheme(<CodeBlock code={mockCode} language="typescript" />);

    expect(screen.getByText('TYPESCRIPT')).toBeInTheDocument();
  });

  it('обрабатывает ошибки копирования', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    (
      navigator.clipboard.writeText as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValue(new Error('Clipboard error'));

    renderWithTheme(<CodeBlock code={mockCode} />);

    const copyButton = screen.getByRole('button', { name: /копировать/i });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        'Ошибка копирования:',
        expect.any(Error)
      );
    });

    consoleSpy.mockRestore();
  });

  it('применяет правильные стили для темной темы', () => {
    renderWithTheme(<CodeBlock code={mockCode} />);

    // Ищем контейнер с классом dark:bg-gray-800
    const codeBlock = document.querySelector('div[class~="dark:bg-gray-800"]');
    expect(codeBlock).toBeTruthy();
  });

  it('не отображает заголовок и описание если они не переданы', () => {
    renderWithTheme(<CodeBlock code={mockCode} />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('отображает индикатор Live Example для интерактивных примеров', () => {
    renderWithTheme(<CodeBlock code={mockCode} liveExample={true} />);

    expect(
      screen.getByText('Интерактивный пример доступен')
    ).toBeInTheDocument();
  });
});
