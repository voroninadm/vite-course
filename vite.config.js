import {defineConfig} from "vite";
import {resolve} from 'path';
import createSvgSpritePlugin from "vite-plugin-svg-spriter";


const FRONT_PATH = 'src';

export default defineConfig({
    root: "src",
    plugins: [
        createSvgSpritePlugin({
            svgFolder: `src/assets/images/svg`,
        }),
    ],
    build: {
        minify: true,
        minifyCSS: "esbuild/lightningcss",
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