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
				order: ['Overview', 'changelog', 'preview', 'hooks']
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
