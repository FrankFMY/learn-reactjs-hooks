// Глобальные типы для проекта

declare module '*.jsx' {
  const Component: React.ComponentType<unknown>;
  export default Component;
}

declare module '*.js' {
  const value: unknown;
  export default value;
}

// Расширение типов для localStorage в тестах
declare global {
  interface Window {
    matchMedia: () => MediaQueryList;
  }

  interface MediaQueryList {
    matches: boolean;
    media: string;
    onchange: null | (() => unknown);
    addListener: () => void;
    removeListener: () => void;
    addEventListener: () => void;
    removeEventListener: () => void;
    dispatchEvent: () => boolean;
  }

  interface MediaQueryListEvent extends Event {
    matches: boolean;
    media: string;
  }
}
