import { definePreviewAddon } from 'storybook/internal/csf'
import addonAnnotations from './preview'

export { useDarkMode } from './hooks/use_dark_mode'
export { defineDarkModeParam } from './parameters/define_dark_mode_param'
export type { DarkModeParam } from './parameters/define_dark_mode_param'
export * from './static/constants'
export type * from './static/types'

// CSF Next preview addon
export default () => definePreviewAddon(addonAnnotations)
