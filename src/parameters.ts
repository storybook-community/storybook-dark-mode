import type { DarkModeStore } from './types.js'

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
export function defineDarkModeParam(darkMode: Partial<Pick<DarkModeStore, 'disable'>>) {
	return { darkMode }
}
