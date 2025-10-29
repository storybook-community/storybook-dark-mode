import React from 'react'
import { Addon_TypesEnum } from 'storybook/internal/types'
import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'
import { DarkModeToggle, prefersDark, store } from './components/dark_mode_toggle'

const currentStore = store()
const currentTheme = currentStore.current || (prefersDark.matches && 'dark') || 'light'

addons.setConfig({
	theme: {
		...themes[currentTheme],
		...currentStore[currentTheme]
	}
})

addons.register('storybook/dark-mode', (api) => {
	addons.add('storybook/dark-mode', {
		title: 'dark mode',
		type: Addon_TypesEnum.TOOL,
		match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
		render: () => <DarkModeToggle api={api} />
	})
})
