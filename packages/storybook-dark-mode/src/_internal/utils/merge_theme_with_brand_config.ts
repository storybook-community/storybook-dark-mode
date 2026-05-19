import type { ThemeVars } from 'storybook/theming'

/**
 * Merges store theme with brand configuration from Storybook config.
 * storeTheme properties take priority so per-mode brand images/titles are preserved.
 * configTheme acts as a fallback for any brand properties not set on the store theme.
 */
export function mergeThemeWithBrandConfig(storeTheme: ThemeVars, configTheme: ThemeVars | undefined) {
	if (!configTheme) {
		return storeTheme
	}

	return {
		...configTheme,
		...storeTheme
	}
}
