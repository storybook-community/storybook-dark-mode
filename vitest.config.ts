import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [tailwindcss(), storybookTest()],
	optimizeDeps: {
		include: ['react/jsx-dev-runtime']
	},
	esbuild: { jsx: 'automatic' },
	test: {
		browser: {
			enabled: true,
			headless: true,
			provider: 'playwright',
			instances: [{ browser: 'chromium' }],
			screenshotFailures: false
		},
		setupFiles: ['.storybook/vitest.setup.ts']
	}
})
