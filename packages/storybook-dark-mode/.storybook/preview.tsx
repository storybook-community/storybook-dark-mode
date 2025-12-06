import addonDarkMode, { defineDarkModeParam } from '#storybook-community/storybook-dark-mode'
import addonDocs from '@storybook/addon-docs'
import { definePreview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'

import '../tailwind.css'

export default definePreview({
	addons: [addonDocs(), addonDarkMode()],
	parameters: {
		docs: {
			codePanel: true
		},
		options: {
			storySort: {
				order: [
					'Overview',
					'Getting Started',
					'changelog',
					'Examples',
					'Storybook Setup',
					['main', 'manager', 'preview', ['addons', 'docs']],
					'API',
					['tags', 'decorators', 'parameters', 'hooks', 'events']
				]
			}
		},
		...defineDarkModeParam({
			current: 'dark',
			darkClass: ['dark', 'dark:bg-black', 'dark:text-white'],
			dark: { ...themes.dark, appBg: 'black' },
			stylePreview: true
		})
	}
})
