# VITE для учебы и практики

1. Установка npm через Volta
- curl https://get.volta.sh
- volta install node

2. Инициализация проекта
- npm create vite@latest
- npm install

Дополнение параметрами
- Открытие браузера при запуске dev-сборки. В package.json в scripts добавить ключ "--open" к Vite: `"dev": "vite --open"`

3. Многостраничник
- структура под многостраничник - в vite.config.js добавлены конфиги для разрешения путей.