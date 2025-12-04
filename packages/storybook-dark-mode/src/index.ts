import { definePreviewAddon } from 'storybook/internal/csf'
import addonAnnotations from './preview'

export { useDarkMode } from './hooks/use_dark_mode'
export { defineDarkModeParam } from './preview/parameters/define_dark_mode_param'
export type { DarkModeParam } from './preview/parameters/define_dark_mode_param'
export * from './shared/constants'
export type * from './shared/types'

// CSF Next preview addon
export default () => definePreviewAddon(addonAnnotations)
