import { DarkModeDocsContainer } from '#storybook-community/storybook-dark-mode'
import type { Preview } from '@storybook/react-vite'

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
		darkMode: {
			current: 'dark',
			darkClass: 'dark',
			stylePreview: true
		}
	}
} satisfies Preview
