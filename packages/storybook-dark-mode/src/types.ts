import type { ThemeVars } from 'storybook/theming'

export type Mode = 'light' | 'dark'

export interface DarkModeStore {
	/** The class target in the preview iframe */
	classTarget: string
	/** The current mode the storybook is set to */
	current: Mode
	/** The dark theme for storybook */
	dark: ThemeVars
	/** The dark class name for the preview iframe */
	darkClass: string | string[]
	/** The light theme for storybook */
	light: ThemeVars
	/** The light class name for the preview iframe */
	lightClass: string | string[]
	/** Apply mode to iframe */
	stylePreview: boolean
	/** Persist if the user has set the theme */
	userHasExplicitlySetTheTheme: boolean
	/** Disable the dark mode toggle */
	disable: boolean
}
