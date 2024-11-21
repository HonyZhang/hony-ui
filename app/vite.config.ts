import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools'
import {visualizer} from 'rollup-plugin-visualizer'
import {resolve} from 'path';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
    logLevel: 'info',
    plugins: [vue(), vueDevTools(), visualizer({
        emitFile: false,
        open: true
    }),
        AutoImport({
            imports: [
                "vue"
            ],
            dts: "./auto-imports.d.ts"
        }),
        Components({
            dts: "./components.d.ts"
        }),
        Inspect({
            enabled: true,
        })
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            }
        ]
    }
});