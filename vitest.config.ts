import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [storybookTest()],
	optimizeDeps: {
		include: ['react/jsx-dev-runtime']
	},
	esbuild: { jsx: 'automatic' },
	test: {
		browser: {
			enabled: true,
			headless: true,
			provider: 'playwright',
			instances: [{ browser: 'chromium' }]
		},
		setupFiles: ['.storybook/vitest.setup.ts']
	}
})
