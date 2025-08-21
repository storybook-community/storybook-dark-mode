import type { StorybookConfig } from '@storybook/react-vite'

export default {
	stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
	addons: ['@storybook/addon-docs', '@storybook/addon-vitest', 'storybook-addon-tag-badges', '../preset.cjs'],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	tags: {
		unit: {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
} satisfies StorybookConfig
