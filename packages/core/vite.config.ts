import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({ include: ['src'] })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src'),
            formats: ['es']
        }
    }
})