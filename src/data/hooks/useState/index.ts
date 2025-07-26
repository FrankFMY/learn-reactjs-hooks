import { Hook } from '@/types';
import { examples } from './examples';

export const useStateHook: Hook = {
  id: 'useState',
  title: 'useState',
  description: 'Хук для управления состоянием в функциональных компонентах',
  category: 'state',
  difficulty: 'beginner',
  content: {
    overview:
      'useState позволяет добавлять состояние в функциональные компоненты. Он возвращает массив с текущим значением состояния и функцию для его обновления.',
    syntax: 'const [state, setState] = useState(initialValue)',
    examples,
    tips: [
      'Всегда используйте функцию обновления состояния при работе с предыдущим значением',
      'useState не объединяет объекты автоматически - используйте spread оператор',
      'Инициализация может быть функцией для дорогих вычислений',
    ],
    commonMistakes: [
      'Прямое изменение состояния вместо использования setter функции',
      'Забывание spread оператора при обновлении объектов',
      'Использование useState для значений, которые не влияют на рендеринг',
    ],
    bestPractices: [
      'Используйте несколько useState вместо одного объекта для независимых значений',
      'Применяйте функциональные обновления для зависимых от предыдущего состояния изменений',
      'Используйте lazy initialization для дорогих вычислений',
    ],
    useCases: [
      {
        title: 'Управление формами',
        description: 'Обработка ввода пользователя в формах',
        code: `const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});`,
        explanation:
          'useState идеально подходит для управления состоянием форм с множественными полями.',
      },
      {
        title: 'Переключение состояний',
        description: 'Управление булевыми состояниями',
        code: `const [isOpen, setIsOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);`,
        explanation:
          'Простой способ управления флагами состояния в компонентах.',
      },
      {
        title: 'Счетчики и числовые значения',
        description: 'Управление числовыми состояниями',
        code: `const [count, setCount] = useState(0);
const [price, setPrice] = useState(0);`,
        explanation:
          'Базовое использование для числовых значений с простыми операциями.',
      },
    ],
  },
  relatedHooks: ['useReducer', 'useCallback', 'useMemo'],
  tags: ['state', 'beginner', 'forms', 'counters'],
};

export default useStateHook;
