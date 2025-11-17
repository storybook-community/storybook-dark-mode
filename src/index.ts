import { definePreviewAddon } from 'storybook/internal/csf'
import addonAnnotations from './preview'

export * from './constants'
export { useDarkMode } from './hooks/use_dark_mode'
export { defineDarkModeParam } from './preview/parameters/define_dark_mode_param'
export type { DarkModeParam } from './preview/parameters/define_dark_mode_param'
export type * from './types'

// Storybook 10 preview addon
export default () => definePreviewAddon(addonAnnotations)
