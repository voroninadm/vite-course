import {defineConfig} from "vite";
import {resolve} from 'path';
import createSvgSpritePlugin from "vite-plugin-svg-spriter";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import tailwindcss from '@tailwindcss/vite'


const FRONT_PATH = 'src';

export default defineConfig({
    base: "/vite-course/",
    root: "src",
    plugins: [
        tailwindcss(),
        createSvgSpritePlugin({
            svgFolder: `src/assets/images/svg`,
        }),
        ViteImageOptimizer({
            jpg: {
                quality: 75,
            },
            png: {
                quality: 75,
            },
        })
    ],
    build: {
        minify: true,
        minifyCSS: "esbuild/lightningcss",
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname,`${FRONT_PATH}/index.html`),
                main: resolve(__dirname,`${FRONT_PATH}/pages/main/index.html`),
                about: resolve(__dirname,`${FRONT_PATH}/pages/about/index.html`),
                form: resolve(__dirname,`${FRONT_PATH}/pages/form/index.html`),
            }
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, `${FRONT_PATH}`),
        },
    },
    test: {
        // Здесь можно настроить параметры Vitest
        globals: true, // Включает использование глобальных функций тестирования, таких как describe и it
        environment: 'jsdom',// Среда тестирования, например, jsdom для тестирования DOM
        setupFiles: "./vitest.setup.js",   // Путь к файлу настройки (если требуется)
        coverage: {
            exclude: ["node_modules/"],  // Исключаемые файлы и папки
        },
    },
})