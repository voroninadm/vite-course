import {defineConfig} from "vite";
import {resolve} from 'path';


const FRONT_PATH = 'src';

export default defineConfig({
    root: "src",
    build: {
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