# VITE для учебы и практики

### 1. Установка npm через Volta
- curl https://get.volta.sh
- volta install node

### 2. Инициализация проекта
- npm create vite@latest
- npm install

Дополнение параметрами
- Открытие браузера при запуске dev-сборки. В package.json в scripts добавить ключ "--open" к Vite: `"dev": "vite --open"`

### 3. Многостраничник
- структура под многостраничник - в vite.config.js добавлены конфиги для разрешения путей.

### 4. Обработка

#### Создаем спрайт из векторных иконок с помощью vite-plugin-svg-spriter.
`npm install vite-plugin-svg-spriter`\
затем добавляем в vite.config.js в секцию plugins, указывая папку с svg-иконками.

#### Оптимизация изображений с помощью vite-plugin-image-optimizer
`npm install vite-plugin-image-optimizer --save-dev`\

Так как в пакете не предусмотрены SVGO и Sharp.js, установим их отдельно:\

`npm install sharp --save-dev`\
`npm install svgo --save-dev`\

Добавляем в vite.config.js в секцию plugins
`ViteImageOptimizer({
jpg: {
quality: 75,
},
png: {
quality: 75,
},
});`

#### Дополнительная оптимизация
Для билда прописываем минификацию и добавляем сорссмапы
`minify: true, minifyCSS: "esbuild/lightningcss", sourcemap: true,`

