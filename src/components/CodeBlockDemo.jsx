import React from 'react';
import CodeBlock from './CodeBlock';

const CodeBlockDemo = () => {
  const sampleCode = `import React, { useState, useEffect } from 'react';

// Кастомный хук для управления состоянием
function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);
    
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(initialValue);
    
    useEffect(() => {
        console.log('Счетчик изменился:', count);
    }, [count]);
    
    return { count, increment, decrement, reset };
}

// Компонент с использованием хука
function Counter() {
    const { count, increment, decrement, reset } = useCounter(0);
    
    return (
        <div className="counter">
            <h2>Счетчик: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Сброс</button>
        </div>
    );
}

export default Counter;`;

  const cssCode = `/* Стили для компонента счетчика */
.counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 1rem;
    color: white;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.counter h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.counter button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(10px);
}

.counter button:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.counter button:active {
    transform: translateY(0);
}`;

  const jsonCode = `{
    "name": "react-hooks-demo",
    "version": "1.0.0",
    "description": "Демонстрация кастомных React хуков",
    "main": "src/index.js",
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1"
    },
    "devDependencies": {
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0"
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}`;

  return (
    <div className="p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Демонстрация улучшенных стилей CodeBlock
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Теперь код легко читается в обеих темах с оптимальным контрастом
        </p>
      </div>

      <CodeBlock
        code={sampleCode}
        language="jsx"
        title="Кастомный хук useCounter"
        description="Пример создания и использования кастомного React хука для управления счетчиком"
        liveExample={true}
      />

      <CodeBlock
        code={cssCode}
        language="css"
        title="Стили для компонента"
        description="CSS стили для красивого отображения компонента счетчика"
      />

      <CodeBlock
        code={jsonCode}
        language="json"
        title="package.json"
        description="Конфигурация проекта с зависимостями и скриптами"
      />
    </div>
  );
};

export default CodeBlockDemo;
