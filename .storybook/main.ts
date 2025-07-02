import type { StorybookConfig } from '@storybook/react-vite'

export default {
	stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
	addons: ['@storybook/addon-docs', '@storybook/addon-vitest', '../preset.cjs'],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	}
} satisfies StorybookConfig
