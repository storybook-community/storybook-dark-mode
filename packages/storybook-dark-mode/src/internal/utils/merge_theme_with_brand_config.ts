import type { ThemeVars } from 'storybook/theming'

/**
 * Merges store theme with brand configuration from Storybook config
 * @param storeTheme - The theme from the store
 * @param configTheme - The brand configuration from Storybook config
 * @returns The merged theme with brand properties from config
 */
export function mergeThemeWithBrandConfig(storeTheme: ThemeVars, configTheme: ThemeVars | undefined) {
	if (!configTheme) {
		return storeTheme
	}

	return {
		...storeTheme,
		brandImage: configTheme.brandImage,
		brandTitle: configTheme.brandTitle,
		brandUrl: configTheme.brandUrl,
		brandTarget: configTheme.brandTarget
	}
}
