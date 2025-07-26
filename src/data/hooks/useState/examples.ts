import { Example } from '@/types';

export const examples: Example[] = [
  {
    title: 'Простой счетчик',
    description: 'Базовый пример использования useState для создания счетчика',
    code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <p className="text-lg mb-4">Счетчик: {count}</p>
      <div className="flex gap-2">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Увеличить
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Уменьшить
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}`,
    liveExample: true,
  },
  {
    title: 'Форма с несколькими полями',
    description: 'Управление несколькими полями формы с помощью useState',
    code: `import React, { useState } from 'react';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленные данные:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Имя:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Введите имя"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Введите email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Возраст:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Введите возраст"
        />
      </div>
      <button 
        type="submit"
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Отправить
      </button>
    </form>
  );
}`,
    liveExample: true,
  },
  {
    title: 'Переключение тем',
    description:
      'Пример использования useState для переключения между светлой и темной темой',
    code: `import React, { useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={\`p-4 rounded-lg transition-colors duration-200 \${
      isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }\`}>
      <h3 className="text-lg font-semibold mb-4">
        Текущая тема: {isDark ? 'Темная' : 'Светлая'}
      </h3>
      <button
        onClick={() => setIsDark(!isDark)}
        className={\`px-4 py-2 rounded-lg transition-colors \${
          isDark 
            ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' 
            : 'bg-gray-800 hover:bg-gray-900 text-white'
        }\`}
      >
        Переключить на {isDark ? 'светлую' : 'темную'} тему
      </button>
    </div>
  );
}`,
    liveExample: true,
  },
  {
    title: 'Список задач',
    description: 'Управление списком задач с помощью useState',
    code: `import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Изучить React Hooks', completed: false },
    { id: 2, text: 'Создать проект', completed: true },
    { id: 3, text: 'Написать тесты', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Список задач</h3>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1 px-3 py-2 border rounded-lg"
          placeholder="Добавить задачу..."
        />
        <button 
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Добавить
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2 p-2 border rounded">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4"
            />
            <span className={\`flex-1 \${
              todo.completed ? 'line-through text-gray-500' : ''
            }\`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 text-red-500 hover:bg-red-50 rounded"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    liveExample: true,
  },
];
