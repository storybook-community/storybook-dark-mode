import { definePreviewAddon } from 'storybook/internal/csf'
import type { DarkModeParam } from './parameters/define_dark_mode_param'
import addonAnnotations from './preview'

export { useDarkMode } from './hooks/use_dark_mode'
export { defineDarkModeParam } from './parameters/define_dark_mode_param'
export type { DarkModeParam } from './parameters/define_dark_mode_param'
export type * from './types'

// CSF Next compat
export default () =>
	definePreviewAddon<{
		parameters: {
			darkMode?: Partial<DarkModeParam>
		}
	}>(addonAnnotations)
