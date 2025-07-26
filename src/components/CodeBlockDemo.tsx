import CodeBlock from './CodeBlock';

const CodeBlockDemo = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Демонстрация CodeBlock
        </h3>

        <CodeBlock
          code='console.log("Hello, World!");'
          language="javascript"
          title="Простой пример"
          description="Базовый пример использования console.log"
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Интерактивный пример
        </h3>

        <CodeBlock
          code={`function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("React"));`}
          language="javascript"
          title="Функция приветствия"
          description="Пример функции с параметрами"
          liveExample={true}
          onRunExample={() => {
            console.log('Запуск примера...');
            alert('Пример запущен! Проверьте консоль.');
          }}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          React компонент
        </h3>

        <CodeBlock
          code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
    </div>
  );
}`}
          language="jsx"
          title="Компонент счетчика"
          description="Простой React компонент с состоянием"
        />
      </div>
    </div>
  );
};

export default CodeBlockDemo;
