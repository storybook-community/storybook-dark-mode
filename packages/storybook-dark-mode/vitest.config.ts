import { browserTestPreset } from '@repobuddy/vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import { playwright } from '@vitest/browser-playwright'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [
		tailwindcss(),
		storybookTest(),
		browserTestPreset({
			includeGeneralTests: true
		})
	],
	optimizeDeps: {
		include: ['react/jsx-dev-runtime']
	},
	esbuild: { jsx: 'automatic' },
	test: {
		browser: {
			enabled: true,
			headless: true,
			provider: playwright(),
			instances: [{ browser: 'chromium' }],
			screenshotFailures: false
		},
		setupFiles: ['.storybook/vitest.setup.ts']
	}
})
