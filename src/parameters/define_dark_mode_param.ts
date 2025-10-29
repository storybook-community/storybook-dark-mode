import type { ThemeVars } from 'storybook/theming'
import type { Mode } from '../types'

export interface DarkModeParam {
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
	/** Disable the dark mode toggle */
	disable: boolean
}

/**
 * Defines dark mode parameters for Storybook configuration.
 *
 * @param darkMode - Configuration options for dark mode
 * @param darkMode.disable - Whether to disable dark mode functionality
 * @returns An object containing the dark mode parameters
 *
 * @example
 * ```ts
 * // Disable dark mode
 * export const YourStory: StoryObj = {
 *   parameters: defineDarkModeParam({ disable: true })
 * }
 * ```
 */
export function defineDarkModeParam(darkMode: Partial<DarkModeParam>) {
	return { darkMode }
}
