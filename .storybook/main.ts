import type { StorybookConfig } from '@storybook/react-vite'

export default {
	stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-vitest',
		'storybook-addon-tag-badges',
		import.meta.resolve('./local-preset.ts')
	],
	framework: '@storybook/react-vite',
	tags: {
		unit: {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
} satisfies StorybookConfig
