import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  BookOpen,
  Target,
  Trophy,
  Clock,
} from 'lucide-react';
import CodeBlock from '../components/CodeBlock';

const PracticePage = () => {
  const [currentExercise, setCurrentExercise] = useState(0);

  const [showResults, setShowResults] = useState(false);
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const exercises = [
    {
      id: 1,
      title: 'useState - Счетчик',
      description: 'Создайте простой счетчик с использованием useState',
      difficulty: 'beginner',
      category: 'state',
      instructions: 'Дополните код, чтобы создать работающий счетчик',
      code: `import React, { useState } from 'react';

function Counter() {
  // TODO: Добавьте useState для управления счетчиком
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
      <button onClick={() => setCount(count - 1)}>
        Уменьшить
      </button>
    </div>
  );
}`,
      solution: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
      <button onClick={() => setCount(count - 1)}>
        Уменьшить
      </button>
    </div>
  );
}`,
      hints: [
        'Используйте useState для создания состояния count',
        'Инициализируйте состояние значением 0',
        'Создайте функцию setCount для обновления состояния',
      ],
      points: 10,
    },
    {
      id: 2,
      title: 'useEffect - Загрузка данных',
      description: 'Реализуйте загрузку данных с API',
      difficulty: 'intermediate',
      category: 'effects',
      instructions: 'Дополните код для загрузки данных пользователя',
      code: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // TODO: Добавьте useEffect для загрузки данных
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Загрузка...</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}`,
      solution: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Ошибка загрузки:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Загрузка...</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}`,
      hints: [
        'Используйте useEffect с зависимостью [userId]',
        'Создайте асинхронную функцию fetchUser',
        'Обработайте состояния загрузки и ошибок',
      ],
      points: 15,
    },
    {
      id: 3,
      title: 'useContext - Тема приложения',
      description: 'Создайте систему тем с useContext',
      difficulty: 'intermediate',
      category: 'context',
      instructions: 'Реализуйте переключение темы с помощью useContext',
      code: `import React, { createContext, useContext, useState } from 'react';

// TODO: Создайте контекст темы
const ThemeContext = createContext();

// TODO: Создайте провайдер темы
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// TODO: Создайте компонент кнопки переключения темы
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px 20px',
        border: '1px solid #ccc'
      }}
    >
      Текущая тема: {theme}
    </button>
  );
}`,
      solution: `import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px 20px',
        border: '1px solid #ccc'
      }}
    >
      Текущая тема: {theme}
    </button>
  );
}`,
      hints: [
        'Создайте ThemeContext с помощью createContext',
        'Используйте useState для управления темой',
        'Передайте theme и toggleTheme через Provider',
      ],
      points: 20,
    },
    {
      id: 4,
      title: 'useReducer - Список задач',
      description: 'Управление сложным состоянием с useReducer',
      difficulty: 'intermediate',
      category: 'state',
      instructions: 'Реализуйте редьюсер для управления списком задач',
      code: `import React, { useReducer, useState } from 'react';

// TODO: Создайте начальное состояние
const initialState = {
  todos: [],
  filter: 'all'
};

// TODO: Создайте редьюсер
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={addTodo}>Добавить</button>
      
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      solution: `import React, { useReducer, useState } from 'react';

const initialState = {
  todos: [],
  filter: 'all'
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={addTodo}>Добавить</button>
      
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      hints: [
        'Создайте initialState с массивом todos и фильтром',
        'Реализуйте case для ADD_TODO, TOGGLE_TODO, DELETE_TODO',
        'Используйте spread оператор для иммутабельности',
      ],
      points: 25,
    },
    {
      id: 5,
      title: 'useCallback - Оптимизация',
      description: 'Оптимизируйте компонент с useCallback',
      difficulty: 'advanced',
      category: 'performance',
      instructions: 'Оптимизируйте функции с помощью useCallback',
      code: `import React, { useState, useCallback } from 'react';

// TODO: Оптимизируйте этот компонент с useCallback
function ExpensiveComponent({ onIncrement, count }) {
  console.log('ExpensiveComponent перерендерился');
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={onIncrement}>Увеличить</button>
    </div>
  );
}

function ParentComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // TODO: Мемоизируйте эту функцию
  const handleIncrement1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []);

  // TODO: Мемоизируйте эту функцию
  const handleIncrement2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []);

  return (
    <div>
      <h3>Счетчик 1 (с useCallback)</h3>
      <ExpensiveComponent 
        onIncrement={handleIncrement1} 
        count={count1} 
      />
      
      <h3>Счетчик 2 (с useCallback)</h3>
      <ExpensiveComponent 
        onIncrement={handleIncrement2} 
        count={count2} 
      />
    </div>
  );
}`,
      solution: `import React, { useState, useCallback } from 'react';

const ExpensiveComponent = React.memo(({ onIncrement, count }) => {
  console.log('ExpensiveComponent перерендерился');
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={onIncrement}>Увеличить</button>
    </div>
  );
});

function ParentComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []);

  const handleIncrement2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []);

  return (
    <div>
      <h3>Счетчик 1 (с useCallback)</h3>
      <ExpensiveComponent 
        onIncrement={handleIncrement1} 
        count={count1} 
      />
      
      <h3>Счетчик 2 (с useCallback)</h3>
      <ExpensiveComponent 
        onIncrement={handleIncrement2} 
        count={count2} 
      />
    </div>
  );
}`,
      hints: [
        'Оберните ExpensiveComponent в React.memo',
        'Используйте useCallback для мемоизации функций',
        'Добавьте пустой массив зависимостей',
      ],
      points: 30,
    },
  ];

  const currentExerciseData = exercises[currentExercise];

  const handleNextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setShowResults(true);
    }
    setCompletedExercises(prev => new Set([...prev, currentExerciseData.id]));
  };

  const handlePreviousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let completedCount = 0;

    exercises.forEach(exercise => {
      if (completedExercises.has(exercise.id)) {
        totalScore += exercise.points;
        completedCount++;
      }
    });

    return { totalScore, completedCount };
  };

  const { totalScore, completedCount } = calculateScore();
  const maxScore = exercises.reduce((sum, ex) => sum + ex.points, 0);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Результаты практики
            </h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {completedCount}/{exercises.length}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Завершено упражнений
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {totalScore}/{maxScore}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Общий балл
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {Math.round((totalScore / maxScore) * 100)}%
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    Процент выполнения
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {exercises.map(exercise => (
                  <div
                    key={exercise.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {exercise.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {exercise.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {exercise.points} баллов
                      </span>
                      {completedExercises.has(exercise.id) ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setShowResults(false);
                setCurrentExercise(0);

                setCompletedExercises(new Set());
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Начать заново
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Практика React Hooks
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Интерактивные упражнения для закрепления знаний
          </p>
        </div>

        {/* Прогресс */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Прогресс
            </h2>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {currentExercise + 1} из {exercises.length}
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentExercise + 1) / exercises.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
            <span>Начало</span>
            <span>Завершение</span>
          </div>
        </div>

        {/* Упражнение */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {currentExerciseData.title}
              </h2>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentExerciseData.difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : currentExerciseData.difficulty === 'intermediate'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}
                >
                  {currentExerciseData.difficulty === 'beginner'
                    ? 'Начинающий'
                    : currentExerciseData.difficulty === 'intermediate'
                      ? 'Средний'
                      : 'Продвинутый'}
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                  {currentExerciseData.points} баллов
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {currentExerciseData.description}
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                📋 Задание
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                {currentExerciseData.instructions}
              </p>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Код для выполнения
            </h3>

            <CodeBlock
              code={currentExerciseData.code}
              language="jsx"
              title="Код упражнения"
              description={currentExerciseData.instructions}
            />

            {/* Подсказки */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                💡 Подсказки
              </h4>
              <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
                {currentExerciseData.hints.map((hint, index) => (
                  <li key={index}>• {hint}</li>
                ))}
              </ul>
            </div>

            {/* Навигация */}
            <div className="flex justify-between">
              <button
                onClick={handlePreviousExercise}
                disabled={currentExercise === 0}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Назад
              </button>

              <button
                onClick={handleNextExercise}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center"
              >
                {currentExercise === exercises.length - 1
                  ? 'Завершить'
                  : 'Далее'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 text-center">
            <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {exercises.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Всего упражнений
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 text-center">
            <Target className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {completedCount}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Завершено
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 text-center">
            <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {Math.round((completedCount / exercises.length) * 100)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Прогресс
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
