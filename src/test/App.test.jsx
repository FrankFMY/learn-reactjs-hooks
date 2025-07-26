import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../contexts/ThemeContext.jsx';
import App from '../App';

const renderWithProviders = (component) => {
    return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('App', () => {
    it('renders without crashing', () => {
        const { container } = renderWithProviders(<App />);
        expect(container).toBeTruthy();
    });

    it('has header element', () => {
        const { container } = renderWithProviders(<App />);
        const header = container.querySelector('header');
        expect(header).toBeTruthy();
    });

    it('has main content area', () => {
        const { container } = renderWithProviders(<App />);
        const main = container.querySelector('main');
        expect(main).toBeTruthy();
    });

    it('has navigation elements', () => {
        const { container } = renderWithProviders(<App />);
        const nav = container.querySelector('nav');
        expect(nav).toBeTruthy();
    });
});
