import { defineDarkModeParam } from '#storybook-community/storybook-dark-mode'
import { DarkModeDocsContainer } from '#storybook-community/storybook-dark-mode/docs'
import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/internal/theming'

import '../tailwind.css'

export default {
	parameters: {
		docs: {
			codePanel: true,
			container: DarkModeDocsContainer
		},
		options: {
			storySort: {
				order: ['Overview', 'Install', 'changelog']
			}
		},
		...defineDarkModeParam({
			current: 'dark',
			darkClass: ['dark', 'dark:bg-black', 'dark:text-white'],
			dark: { ...themes.dark, appBg: 'black' },
			stylePreview: true
		})
	}
} satisfies Preview
