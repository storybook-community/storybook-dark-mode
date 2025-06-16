import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [tailwindcss()],
	esbuild: { jsx: 'automatic' }
})
