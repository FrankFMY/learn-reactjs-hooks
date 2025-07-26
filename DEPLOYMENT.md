# 🚀 Руководство по развертыванию

Подробное руководство по развертыванию проекта Learn ReactJS Hooks.

## 📋 Содержание

- [Предварительные требования](#предварительные-требования)
- [Локальная разработка](#локальная-разработка)
- [Сборка для продакшена](#сборка-для-продакшена)
- [Развертывание на GitHub Pages](#развертывание-на-github-pages)
- [Настройка CI](#настройка-ci)
- [Устранение неполадок](#устранение-неполадок)

## 🔧 Предварительные требования

### Системные требования

- **Node.js**: версия 20.0.0 или выше
- **npm**: версия 8.0.0 или выше
- **Git**: для управления версиями

### Проверка окружения

```bash
# Проверка версии Node.js
node --version

# Проверка версии npm
npm --version

# Проверка версии Git
git --version
```

### Установка зависимостей

```bash
# Клонирование репозитория
git clone https://github.com/FrankFMY/learn-reactjs-hooks.git
cd learn-reactjs-hooks

# Установка зависимостей
npm install

# Проверка установки
npm run lint
npm run type-check
npm test
```

## 💻 Локальная разработка

### Запуск в режиме разработки

```bash
# Запуск dev сервера
npm run dev

# Открытие в браузере
# http://localhost:5173
```

### Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# Режим разработки
VITE_APP_ENV=development
VITE_APP_VERSION=1.2.0

# API endpoints (если используются)
VITE_API_BASE_URL=http://localhost:3000/api

# Аналитика (опционально)
VITE_GA_TRACKING_ID=your-ga-tracking-id
VITE_SENTRY_DSN=your-sentry-dsn
```

### Горячая перезагрузка

Проект настроен с горячей перезагрузкой (HMR). Изменения в коде автоматически отображаются в браузере без перезагрузки страницы.

## 🏗 Сборка для продакшена

### Создание продакшен сборки

```bash
# Создание оптимизированной сборки
npm run build

# Проверка размера сборки
npm run build -- --report
```

### Структура продакшен сборки

После сборки в папке `dist/` создается следующая структура:

```
dist/
├── assets/
│   ├── index-[hash].js      # Основной JavaScript бандл
│   ├── index-[hash].css     # Основной CSS бандл
│   └── [hash].png           # Оптимизированные изображения
├── index.html               # Главная HTML страница
└── favicon.ico              # Иконка сайта
```

### Оптимизации продакшен сборки

- **Code Splitting**: Автоматическое разделение кода на чанки
- **Tree Shaking**: Удаление неиспользуемого кода
- **Minification**: Сжатие JavaScript и CSS
- **Asset Optimization**: Оптимизация изображений
- **Gzip Compression**: Сжатие для быстрой загрузки
- **TypeScript Compilation**: Компиляция TypeScript в оптимизированный JavaScript

### Предварительный просмотр сборки

```bash
# Запуск локального сервера для просмотра сборки
npm run preview

# Открытие в браузере
# http://localhost:4173
```

## 🌐 Развертывание на GitHub Pages

### Автоматическое развертывание

1. **Настройка GitHub Actions**

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. **Настройка репозитория**

- Перейдите в Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

### Ручное развертывание

```bash
# Установка gh-pages
npm install --save-dev gh-pages

# Добавление скрипта в package.json
# "deploy": "gh-pages -d dist"

# Сборка и развертывание
npm run build
npm run deploy
```

### Настройка домена

1. Создайте файл `CNAME` в папке `public/`:

```
your-domain.com
```

2. Настройте DNS записи у провайдера домена

## 🔄 Настройка CI

### GitHub Actions (CI Pipeline)

Создайте файл `.github/workflows/ci.yml`:

```yaml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  ci:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Type check
        run: npm run type-check

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build

      - name: Check build output
        run: |
          echo "Build completed successfully!"
          echo "Build directory contents:"
          ls -la dist/
```

### Переменные окружения

Для CI pipeline дополнительные секреты не требуются, так как используется только проверка кода и сборка.

## 🔧 Устранение неполадок

### Частые проблемы

#### 1. Ошибка сборки

```bash
# Очистка кэша
npm run clean
rm -rf node_modules package-lock.json
npm install

# Проверка версий
node --version
npm --version
```

#### 2. Проблемы с TypeScript

```bash
# Проверка типов
npm run type-check

# Обновление типов
npm install @types/react @types/react-dom

# Очистка TypeScript кэша
rm -rf node_modules/.cache
```

#### 3. Проблемы с маршрутизацией

Убедитесь, что настроены правильные редиректы для SPA:

```nginx
# Nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

#### 4. Проблемы с кэшированием

Добавьте правильные заголовки кэширования:

```typescript
// Vite config
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
});
```

#### 5. Проблемы с производительностью

```bash
# Анализ размера бандла
npm run build -- --report

# Оптимизация изображений
npm install -g imagemin-cli
imagemin src/assets/* --out-dir=dist/assets
```

### Логи и отладка

```bash
# Включение подробных логов
DEBUG=vite:* npm run dev

# Проверка сетевых запросов
npm run dev -- --host

# Анализ зависимостей
npm ls
npm audit
```

### Контакты для поддержки

- **GitHub Issues**: [Создать issue](https://github.com/FrankFMY/learn-reactjs-hooks/issues)
- **Email**: [pryanishnikovartem@gmail.com]

---

## 📚 Дополнительные ресурсы

- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
