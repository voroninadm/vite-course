import {defineConfig} from "vite";
import {resolve} from 'path';
import createSvgSpritePlugin from "vite-plugin-svg-spriter";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";


const FRONT_PATH = 'src';

export default defineConfig({
    base: "/vite-course/",
    root: "src",
    plugins: [
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
        outDir: '../dist',
        minify: true,
        minifyCSS: "esbuild/lightningcss",
        sourcemap: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname,`${FRONT_PATH}/index.html`),
                main: resolve(__dirname,`${FRONT_PATH}/pages/main/index.html`),
                about: resolve(__dirname,`${FRONT_PATH}/pages/about/index.html`),
            }
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, `${FRONT_PATH}`),
        },
    },
})