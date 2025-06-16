import type { StorybookConfig } from '@storybook/react-vite'

export default {
	stories: ['../src/**/*.stories.tsx'],
	addons: ['@storybook/addon-docs', '@storybook/addon-vitest', '../preset.js'],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	}
} satisfies StorybookConfig
