// Данные для документации по хукам ReactJS

export const hooksData = [
  {
    id: 'useState',
    title: 'useState',
    description: 'Хук для управления состоянием в функциональных компонентах',
    category: 'state',
    difficulty: 'beginner',
    content: {
      overview:
        'useState позволяет добавлять состояние в функциональные компоненты. Он возвращает массив с текущим значением состояния и функцию для его обновления.',
      syntax: 'const [state, setState] = useState(initialValue)',
      examples: [
        {
          title: 'Простой счетчик',
          description:
            'Базовый пример использования useState для создания счетчика',
          code: `import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Возраст"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Всегда используйте функцию обновления состояния при работе с предыдущим значением',
        'useState не объединяет объекты автоматически - используйте spread оператор',
        'Инициализация может быть функцией для дорогих вычислений',
      ],
      commonMistakes: [
        'Прямое изменение состояния вместо использования setter функции',
        'Забывание spread оператора при обновлении объектов',
        'Использование useState для данных, которые не влияют на рендер',
      ],
    },
  },
  {
    id: 'useEffect',
    title: 'useEffect',
    description:
      'Хук для выполнения побочных эффектов в функциональных компонентах',
    category: 'effects',
    difficulty: 'beginner',
    content: {
      overview:
        'useEffect позволяет выполнять побочные эффекты в функциональных компонентах. Он заменяет componentDidMount, componentDidUpdate и componentWillUnmount из классовых компонентов.',
      syntax: 'useEffect(() => { /* эффект */ }, [dependencies])',
      examples: [
        {
          title: 'Загрузка данных',
          description: 'Получение данных с API при монтировании компонента',
          code: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Зависимость от userId

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}`,
          liveExample: false,
        },
        {
          title: 'Подписка на события',
          description: 'Подписка и отписка от событий',
          code: `import React, { useState, useEffect } from 'react';

function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Функция очистки
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей

  return (
    <div>
      <p>Ширина окна: {windowSize.width}px</p>
      <p>Высота окна: {windowSize.height}px</p>
    </div>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Всегда включайте все переменные, используемые в эффекте, в массив зависимостей',
        'Используйте функцию очистки для отмены подписок и таймеров',
        'Пустой массив зависимостей означает, что эффект выполнится только при монтировании',
      ],
      commonMistakes: [
        'Забывание массива зависимостей',
        'Отсутствие функции очистки для подписок',
        'Бесконечные циклы из-за неправильных зависимостей',
      ],
    },
  },
  {
    id: 'useContext',
    title: 'useContext',
    description: 'Хук для потребления контекста React',
    category: 'context',
    difficulty: 'intermediate',
    content: {
      overview:
        'useContext позволяет потреблять контекст React без необходимости вложенности компонентов. Это удобно для передачи данных через дерево компонентов.',
      syntax: 'const value = useContext(MyContext)',
      examples: [
        {
          title: 'Тема приложения',
          description: 'Переключение между светлой и темной темой',
          code: `import React, { createContext, useContext, useState } from 'react';

// Создание контекста
const ThemeContext = createContext();

// Провайдер темы
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

// Компонент, использующий контекст
function ThemedButton() {
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
}

// Использование
function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>Приложение с темой</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Используйте контекст для данных, которые должны быть доступны многим компонентам',
        'Избегайте частых обновлений контекста - это может привести к перерендерам',
        'Комбинируйте с useReducer для сложной логики состояния',
      ],
      commonMistakes: [
        'Создание контекста внутри компонента',
        'Использование контекста для данных, которые редко изменяются',
        'Забывание обернуть компоненты в Provider',
      ],
    },
  },
  {
    id: 'useReducer',
    title: 'useReducer',
    description: 'Хук для управления сложным состоянием с помощью редьюсера',
    category: 'state',
    difficulty: 'intermediate',
    content: {
      overview:
        'useReducer позволяет управлять сложным состоянием компонента с помощью функции-редьюсера. Это альтернатива useState для более сложной логики состояния.',
      syntax: 'const [state, dispatch] = useReducer(reducer, initialState)',
      examples: [
        {
          title: 'Список задач (Todo)',
          description: 'Управление списком задач с помощью useReducer',
          code: `import React, { useReducer, useState } from 'react';

// Начальное состояние
const initialState = {
  todos: [],
  filter: 'all'
};

// Редьюсер
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
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
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

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h2>Список задач</h2>
      
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Новая задача"
        />
        <button onClick={addTodo}>Добавить</button>
      </div>

      <div>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>
          Все
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>
          Активные
        </button>
        <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>
          Завершенные
        </button>
      </div>

      <ul>
        {filteredTodos.map(todo => (
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
          liveExample: true,
        },
      ],
      tips: [
        'Используйте useReducer для сложной логики состояния',
        'Редьюсер должен быть чистой функцией',
        'Комбинируйте с useContext для глобального состояния',
      ],
      commonMistakes: [
        'Мутация состояния в редьюсере',
        'Слишком сложные редьюсеры - разбивайте на подредьюсеры',
        'Использование useReducer для простого состояния',
      ],
    },
  },
  {
    id: 'useCallback',
    title: 'useCallback',
    description: 'Хук для мемоизации функций',
    category: 'performance',
    difficulty: 'intermediate',
    content: {
      overview:
        'useCallback возвращает мемоизированную версию функции, которая изменяется только при изменении зависимостей. Это полезно для оптимизации производительности.',
      syntax:
        'const memoizedCallback = useCallback(() => { /* функция */ }, [dependencies])',
      examples: [
        {
          title: 'Оптимизация дочерних компонентов',
          description:
            'Предотвращение ненужных перерендеров дочерних компонентов',
          code: `import React, { useState, useCallback } from 'react';

// Дочерний компонент
const ExpensiveComponent = React.memo(({ onIncrement, count }) => {
  console.log('ExpensiveComponent перерендерился');
  
  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={onIncrement}>Увеличить</button>
    </div>
  );
});

// Родительский компонент
function ParentComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Мемоизированная функция
  const handleIncrement1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []); // Пустой массив зависимостей

  // Обычная функция (будет пересоздаваться при каждом рендере)
  const handleIncrement2 = () => {
    setCount2(prev => prev + 1);
  };

  return (
    <div>
      <h3>Счетчик 1 (с useCallback)</h3>
      <ExpensiveComponent 
        onIncrement={handleIncrement1} 
        count={count1} 
      />
      
      <h3>Счетчик 2 (без useCallback)</h3>
      <ExpensiveComponent 
        onIncrement={handleIncrement2} 
        count={count2} 
      />
      
      <p>Откройте консоль, чтобы увидеть логи перерендеров</p>
    </div>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Используйте useCallback только когда это действительно необходимо',
        'Включайте все переменные, используемые в функции, в массив зависимостей',
        'Комбинируйте с React.memo для максимальной оптимизации',
      ],
      commonMistakes: [
        'Преждевременная оптимизация - не используйте useCallback везде',
        'Забывание зависимостей в массиве',
        'Использование useCallback для простых функций',
      ],
    },
  },
  {
    id: 'useMemo',
    title: 'useMemo',
    description: 'Хук для мемоизации вычислений',
    category: 'performance',
    difficulty: 'intermediate',
    content: {
      overview:
        'useMemo возвращает мемоизированное значение, которое пересчитывается только при изменении зависимостей. Это полезно для дорогих вычислений.',
      syntax:
        'const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])',
      examples: [
        {
          title: 'Дорогие вычисления',
          description: 'Мемоизация результата дорогих вычислений',
          code: `import React, { useState, useMemo } from 'react';

// Имитация дорогого вычисления
function expensiveCalculation(n) {
  console.log('Выполняется дорогое вычисление...');
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i;
  }
  return result;
}

function Calculator() {
  const [number, setNumber] = useState(1);
  const [otherState, setOtherState] = useState(0);

  // Мемоизированное вычисление
  const expensiveResult = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]); // Пересчитывается только при изменении number

  return (
    <div>
      <h3>Калькулятор с мемоизацией</h3>
      
      <div>
        <label>
          Число для вычисления:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            min="1"
            max="10"
          />
        </label>
      </div>

      <div>
        <p>Результат дорогого вычисления: {expensiveResult}</p>
        <p>Другие изменения состояния: {otherState}</p>
        <button onClick={() => setOtherState(prev => prev + 1)}>
          Изменить другое состояние
        </button>
      </div>

      <p>
        <strong>Откройте консоль:</strong> Дорогое вычисление выполняется только 
        при изменении числа, а не при изменении otherState
      </p>
    </div>
  );
}`,
          liveExample: true,
        },
        {
          title: 'Фильтрация и сортировка',
          description: 'Мемоизация отфильтрованного и отсортированного списка',
          code: `import React, { useState, useMemo } from 'react';

function UserList() {
  const [users] = useState([
    { id: 1, name: 'Анна', age: 25, city: 'Москва' },
    { id: 2, name: 'Борис', age: 30, city: 'Санкт-Петербург' },
    { id: 3, name: 'Виктория', age: 22, city: 'Москва' },
    { id: 4, name: 'Григорий', age: 35, city: 'Казань' },
    { id: 5, name: 'Дарья', age: 28, city: 'Москва' }
  ]);

  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Мемоизированная фильтрация и сортировка
  const filteredAndSortedUsers = useMemo(() => {
    console.log('Фильтрация и сортировка...');
    
    let result = users.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.city.toLowerCase().includes(filter.toLowerCase())
    );

    result.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'age') return a.age - b.age;
      if (sortBy === 'city') return a.city.localeCompare(b.city);
      return 0;
    });

    return result;
  }, [users, filter, sortBy]);

  return (
    <div>
      <h3>Список пользователей</h3>
      
      <div>
        <input
          type="text"
          placeholder="Фильтр по имени или городу..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div>
        <label>
          Сортировка:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">По имени</option>
            <option value="age">По возрасту</option>
            <option value="city">По городу</option>
          </select>
        </label>
      </div>

      <ul>
        {filteredAndSortedUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.age} лет) - {user.city}
          </li>
        ))}
      </ul>

      <p>
        <strong>Откройте консоль:</strong> Фильтрация и сортировка выполняется 
        только при изменении фильтра или сортировки
      </p>
    </div>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Используйте useMemo для дорогих вычислений',
        'Не используйте useMemo для простых операций',
        'Включайте все зависимости в массив зависимостей',
      ],
      commonMistakes: [
        'Преждевременная оптимизация',
        'Забывание зависимостей',
        'Использование useMemo для простых вычислений',
      ],
    },
  },
  {
    id: 'useRef',
    title: 'useRef',
    description:
      'Хук для создания изменяемой ссылки, которая сохраняется между рендерами',
    category: 'refs',
    difficulty: 'intermediate',
    content: {
      overview:
        'useRef возвращает изменяемый объект, свойство .current которого инициализируется переданным аргументом. Ссылка сохраняется на протяжении всего времени жизни компонента.',
      syntax: 'const ref = useRef(initialValue)',
      examples: [
        {
          title: 'Фокус на input',
          description: 'Программный фокус на поле ввода',
          code: `import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const selectText = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h3>Управление фокусом</h3>
      
      <input
        ref={inputRef}
        type="text"
        placeholder="Введите текст..."
        style={{ padding: '8px', marginRight: '10px' }}
      />
      
      <button onClick={focusInput}>
        Фокус на поле
      </button>
      
      <button onClick={selectText}>
        Выделить текст
      </button>
    </div>
  );
}`,
          liveExample: true,
        },
        {
          title: 'Счетчик рендеров',
          description: 'Отслеживание количества рендеров компонента',
          code: `import React, { useState, useRef, useEffect } from 'react';

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h3>Счетчик рендеров</h3>
      
      <p>Количество рендеров: {renderCount.current}</p>
      <p>Состояние: {count}</p>
      
      <button onClick={() => setCount(prev => prev + 1)}>
        Увеличить состояние
      </button>
      
      <button onClick={() => setCount(prev => prev)}>
        Установить то же значение (не вызовет рендер)
      </button>
    </div>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'useRef не вызывает перерендер при изменении .current',
        'Используйте для прямого доступа к DOM элементам',
        'Можно использовать для хранения любых изменяемых значений',
      ],
      commonMistakes: [
        'Изменение .current в рендере',
        'Использование useRef вместо useState для данных, влияющих на рендер',
        'Забывание проверки на существование .current',
      ],
    },
  },
  {
    id: 'useImperativeHandle',
    title: 'useImperativeHandle',
    description:
      'Хук для настройки значения, которое передается родительскому компоненту при использовании ref',
    category: 'refs',
    difficulty: 'advanced',
    content: {
      overview:
        'useImperativeHandle позволяет настроить экземпляр, который передается родительскому компоненту при использовании ref. Это позволяет родительскому компоненту вызывать методы дочернего компонента.',
      syntax: 'useImperativeHandle(ref, createHandle, [dependencies])',
      examples: [
        {
          title: 'Кастомный input',
          description:
            'Создание кастомного input с методами фокуса и валидации',
          code: `import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';

// Кастомный input компонент
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    validate: () => {
      if (!value.trim()) {
        setError('Поле обязательно для заполнения');
        return false;
      }
      if (value.length < 3) {
        setError('Минимум 3 символа');
        return false;
      }
      setError('');
      return true;
    },
    clear: () => {
      setValue('');
      setError('');
    },
    getValue: () => value
  }), [value]);

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={props.placeholder}
        style={{
          padding: '8px',
          border: error ? '2px solid red' : '2px solid #ccc',
          borderRadius: '4px'
        }}
      />
      {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
    </div>
  );
});

// Родительский компонент
function ParentComponent() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleValidate = () => {
    const isValid = inputRef.current.validate();
    alert(isValid ? 'Валидация прошла успешно!' : 'Ошибка валидации!');
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  const handleGetValue = () => {
    const value = inputRef.current.getValue();
    alert(\`Текущее значение: "\${value}"\`);
  };

  return (
    <div>
      <h3>Кастомный Input с useImperativeHandle</h3>
      
      <CustomInput
        ref={inputRef}
        placeholder="Введите текст..."
      />
      
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleFocus}>Фокус</button>
        <button onClick={handleValidate}>Валидировать</button>
        <button onClick={handleClear}>Очистить</button>
        <button onClick={handleGetValue}>Получить значение</button>
      </div>
    </div>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Используйте только когда необходимо предоставить API родительскому компоненту',
        'Включайте все зависимости в массив зависимостей',
        'Предпочитайте props для передачи данных',
      ],
      commonMistakes: [
        'Злоупотребление useImperativeHandle',
        'Забывание forwardRef',
        'Использование для передачи данных вместо API',
      ],
    },
  },
  {
    id: 'useLayoutEffect',
    title: 'useLayoutEffect',
    description:
      'Хук, аналогичный useEffect, но выполняется синхронно после всех DOM мутаций',
    category: 'effects',
    difficulty: 'advanced',
    content: {
      overview:
        'useLayoutEffect выполняется синхронно после всех DOM мутаций, но до того, как браузер отрисует изменения. Это полезно для измерений DOM и предотвращения мерцания.',
      syntax: 'useLayoutEffect(() => { /* эффект */ }, [dependencies])',
      examples: [
        {
          title: 'Измерение элемента',
          description: 'Получение размеров элемента до отрисовки',
          code: `import React, { useState, useLayoutEffect, useRef } from 'react';

function MeasuredComponent() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setDimensions({
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      });
    }
  }, []);

  return (
    <div>
      <h3>Измерение элемента</h3>
      
      <div
        ref={elementRef}
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: '#e0e0e0',
          border: '2px solid #333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px 0'
        }}
      >
        Измеряемый элемент
      </div>
      
      <p>Ширина: {dimensions.width}px</p>
      <p>Высота: {dimensions.height}px</p>
    </div>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Используйте useLayoutEffect только когда необходимо предотвратить мерцание',
        'Предпочитайте useEffect для большинства случаев',
        'useLayoutEffect блокирует отрисовку браузера',
      ],
      commonMistakes: [
        'Использование useLayoutEffect вместо useEffect',
        'Выполнение тяжелых операций в useLayoutEffect',
        'Забывание о блокировке отрисовки',
      ],
    },
  },
  {
    id: 'useDebugValue',
    title: 'useDebugValue',
    description: 'Хук для отображения метки в React DevTools',
    category: 'debugging',
    difficulty: 'advanced',
    content: {
      overview:
        'useDebugValue может использоваться для отображения метки для кастомных хуков в React DevTools. Это полезно для отладки.',
      syntax: 'useDebugValue(value, formatFunction?)',
      examples: [
        {
          title: 'Кастомный хук с отладкой',
          description: 'Создание кастомного хука с отладочной информацией',
          code: `import React, { useState, useDebugValue } from 'react';

// Кастомный хук с отладкой
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  // Отладочная информация в DevTools
  useDebugValue(count, (value) => \`Счетчик: \${value}\`);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
}

// Компонент, использующий кастомный хук
function CounterWithDebug() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h3>Счетчик с отладкой</h3>
      <p>Откройте React DevTools, чтобы увидеть отладочную информацию</p>
      
      <p>Счетчик: {count}</p>
      
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Сброс</button>
    </div>
  );
}`,
          liveExample: true,
        },
      ],
      tips: [
        'Используйте только в кастомных хуках',
        'Функция форматирования выполняется только при открытии DevTools',
        'Не используйте в продакшене для критичной логики',
      ],
      commonMistakes: [
        'Использование в обычных компонентах',
        'Выполнение тяжелых операций в функции форматирования',
        'Злоупотребление отладочной информацией',
      ],
    },
  },
];

// Категории хуков
export const categories = [
  { id: 'state', name: 'Управление состоянием', color: '#3b82f6' },
  { id: 'effects', name: 'Побочные эффекты', color: '#10b981' },
  { id: 'performance', name: 'Производительность', color: '#f59e0b' },
  { id: 'refs', name: 'Ссылки', color: '#8b5cf6' },
  { id: 'context', name: 'Контекст', color: '#ef4444' },
  { id: 'debugging', name: 'Отладка', color: '#6b7280' },
];

// Уровни сложности
export const difficulties = [
  { id: 'beginner', name: 'Начинающий', color: '#10b981' },
  { id: 'intermediate', name: 'Средний', color: '#f59e0b' },
  { id: 'advanced', name: 'Продвинутый', color: '#ef4444' },
];

// Функция для получения хука по ID
export const getHookById = id => {
  return hooksData.find(hook => hook.id === id);
};

// Функция для фильтрации хуков
export const filterHooks = (filters = {}) => {
  let filtered = [...hooksData];

  if (filters.category) {
    filtered = filtered.filter(hook => hook.category === filters.category);
  }

  if (filters.difficulty) {
    filtered = filtered.filter(hook => hook.difficulty === filters.difficulty);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      hook =>
        hook.title.toLowerCase().includes(searchLower) ||
        hook.description.toLowerCase().includes(searchLower) ||
        hook.content.overview.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
};
