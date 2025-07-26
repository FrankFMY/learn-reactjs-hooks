# 🚀 Руководство по развертыванию

Подробное руководство по развертыванию проекта Learn ReactJS Hooks на различных платформах.

## 📋 Содержание

-   [Предварительные требования](#предварительные-требования)
-   [Локальная разработка](#локальная-разработка)
-   [Сборка для продакшена](#сборка-для-продакшена)
-   [Развертывание на GitHub Pages](#развертывание-на-github-pages)
-   [Развертывание на Vercel](#развертывание-на-vercel)
-   [Развертывание на Netlify](#развертывание-на-netlify)
-   [Развертывание на Firebase Hosting](#развертывание-на-firebase-hosting)
-   [Docker развертывание](#docker-развертывание)
-   [Настройка CI/CD](#настройка-cicd)
-   [Мониторинг и аналитика](#мониторинг-и-аналитика)
-   [Устранение неполадок](#устранение-неполадок)

## 🔧 Предварительные требования

### Системные требования

-   **Node.js**: версия 18.0.0 или выше
-   **npm**: версия 8.0.0 или выше
-   **Git**: для управления версиями
-   **Docker**: для контейнеризации (опционально)

### Проверка окружения

```bash
# Проверка версии Node.js
node --version

# Проверка версии npm
npm --version

# Проверка версии Git
git --version

# Проверка Docker (если используется)
docker --version
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
VITE_APP_VERSION=1.0.0

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

-   **Code Splitting**: Автоматическое разделение кода на чанки
-   **Tree Shaking**: Удаление неиспользуемого кода
-   **Minification**: Сжатие JavaScript и CSS
-   **Asset Optimization**: Оптимизация изображений
-   **Gzip Compression**: Сжатие для быстрой загрузки

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
                  node-version: '18'
                  cache: 'npm'

            - name: Install dependencies
              run: npm ci

            - name: Run tests
              run: npm test

            - name: Run linter
              run: npm run lint

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

-   Перейдите в Settings → Pages
-   Source: Deploy from a branch
-   Branch: gh-pages
-   Folder: / (root)

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

## ⚡ Развертывание на Vercel

### Автоматическое развертывание

1. **Подключение к Vercel**

```bash
# Установка Vercel CLI
npm install -g vercel

# Логин в Vercel
vercel login

# Развертывание
vercel
```

2. **Настройка через веб-интерфейс**

-   Подключите GitHub репозиторий к Vercel
-   Настройте переменные окружения
-   Настройте домен

### Конфигурация Vercel

Создайте файл `vercel.json`:

```json
{
    "buildCommand": "npm run build",
    "outputDirectory": "dist",
    "framework": "vite",
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ],
    "headers": [
        {
            "source": "/assets/(.*)",
            "headers": [
                {
                    "key": "Cache-Control",
                    "value": "public, max-age=31536000, immutable"
                }
            ]
        }
    ]
}
```

### Переменные окружения

В настройках проекта Vercel добавьте:

```env
VITE_APP_ENV=production
VITE_APP_VERSION=1.0.0
```

## 🚀 Развертывание на Netlify

### Автоматическое развертывание

1. **Подключение к Netlify**

-   Подключите GitHub репозиторий
-   Настройте команды сборки:
    -   Build command: `npm run build`
    -   Publish directory: `dist`

2. **Настройка домена**

-   Перейдите в Domain settings
-   Добавьте кастомный домен
-   Настройте SSL сертификат

### Конфигурация Netlify

Создайте файл `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

## 🔥 Развертывание на Firebase Hosting

### Настройка Firebase

1. **Установка Firebase CLI**

```bash
npm install -g firebase-tools

# Логин в Firebase
firebase login

# Инициализация проекта
firebase init hosting
```

2. **Конфигурация Firebase**

Создайте файл `firebase.json`:

```json
{
    "hosting": {
        "public": "dist",
        "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
        "rewrites": [
            {
                "source": "**",
                "destination": "/index.html"
            }
        ],
        "headers": [
            {
                "source": "/assets/**",
                "headers": [
                    {
                        "key": "Cache-Control",
                        "value": "public, max-age=31536000, immutable"
                    }
                ]
            }
        ]
    }
}
```

3. **Развертывание**

```bash
# Сборка проекта
npm run build

# Развертывание
firebase deploy
```

## 🐳 Docker развертывание

### Создание Dockerfile

Создайте файл `Dockerfile`:

```dockerfile
# Этап сборки
FROM node:18-alpine AS builder

WORKDIR /app

# Копирование файлов зависимостей
COPY package*.json ./

# Установка зависимостей
RUN npm ci --only=production

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN npm run build

# Этап продакшена
FROM nginx:alpine

# Копирование собранного приложения
COPY --from=builder /app/dist /usr/share/nginx/html

# Копирование конфигурации nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Открытие порта
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Конфигурация Nginx

Создайте файл `nginx.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Gzip сжатие
        gzip on;
        gzip_vary on;
        gzip_min_length 1024;
        gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

        # Кэширование статических файлов
        location /assets/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }

        # SPA routing
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Безопасность
        add_header X-Frame-Options "DENY" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
    }
}
```

### Сборка и запуск Docker

```bash
# Сборка образа
docker build -t learn-reactjs-hooks .

# Запуск контейнера
docker run -p 80:80 learn-reactjs-hooks

# Запуск в фоновом режиме
docker run -d -p 80:80 --name hooks-app learn-reactjs-hooks
```

### Docker Compose

Создайте файл `docker-compose.yml`:

```yaml
version: '3.8'

services:
    app:
        build: .
        ports:
            - '80:80'
        environment:
            - NODE_ENV=production
        restart: unless-stopped
```

## 🔄 Настройка CI

### GitHub Actions (только CI)

Создайте файл `.github/workflows/ci.yml`:

```yaml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  ci:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run linter
      run: npm run lint
      
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

## 📊 Мониторинг и аналитика

### Настройка Google Analytics

1. **Добавление GA4**

В `index.html`:

```html
<!-- Google Analytics -->
<script
    async
    src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. **Отслеживание событий**

```javascript
// Отслеживание изучения хуков
gtag('event', 'hook_studied', {
    hook_name: 'useState',
    study_duration: 300,
});

// Отслеживание практики
gtag('event', 'practice_completed', {
    practice_type: 'interactive_example',
    completion_time: 120,
});
```

### Настройка Sentry для мониторинга ошибок

1. **Установка Sentry**

```bash
npm install @sentry/react @sentry/tracing
```

2. **Инициализация**

```javascript
import * as Sentry from '@sentry/react';

Sentry.init({
    dsn: 'your-sentry-dsn',
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 1.0,
});
```

### Мониторинг производительности

```javascript
// Отслеживание времени загрузки
window.addEventListener('load', () => {
    const loadTime = performance.now();
    gtag('event', 'page_load_time', {
        load_time: Math.round(loadTime),
    });
});

// Отслеживание Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

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

#### 2. Проблемы с маршрутизацией

Убедитесь, что настроены правильные редиректы для SPA:

```nginx
# Nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

```json
// Vercel
{
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### 3. Проблемы с кэшированием

Добавьте правильные заголовки кэширования:

```javascript
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

#### 4. Проблемы с производительностью

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

-   **GitHub Issues**: [Создать issue](https://github.com/FrankFMY/learn-reactjs-hooks/issues)
-   **Email**: [pryanishnikovartem@gmail.com]
-   **Discord**: [Сервер сообщества]

---

## 📚 Дополнительные ресурсы

-   [Vite Documentation](https://vitejs.dev/guide/)
-   [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
-   [Netlify Deployment Guide](https://docs.netlify.com/)
-   [Vercel Documentation](https://vercel.com/docs)
-   [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)
-   [Docker Documentation](https://docs.docker.com/)
