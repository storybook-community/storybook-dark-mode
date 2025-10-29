import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { expect } from 'storybook/test'
import type { ThemeVars } from 'storybook/theming'
import { mergeThemeWithBrandConfig } from './merge_theme_with_brand_config'

// Simple component to render for the stories
const TestComponent = () => <div>Testing mergeThemeWithBrandConfig function</div>

const meta: Meta<typeof TestComponent> = {
	title: 'utils/mergeThemeWithBrandConfig',
	tags: ['unit'],
	component: TestComponent,
	parameters: {
		docs: {
			description: {
				component:
					'Utility function that merges store theme with brand configuration from Storybook config to preserve brand customizations when switching themes.'
			}
		}
	}
}

export default meta
type Story = StoryObj<typeof TestComponent>

// Mock themes similar to the original test script
const mockStoreThemes = {
	light: {
		base: 'light',
		colorPrimary: '#FF4785',
		colorSecondary: '#029CFD'
	} as ThemeVars,
	dark: {
		base: 'dark',
		colorPrimary: '#FF4785',
		colorSecondary: '#029CFD'
	} as ThemeVars
}

const mockConfigTheme = {
	brandImage: 'https://example.com/my-custom-logo.png',
	brandTitle: 'My Custom App',
	brandUrl: 'https://example.com',
	brandTarget: '_blank'
} as ThemeVars

export const PreservesBrandPropertiesWhenSwitchingToDarkTheme: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const result = mergeThemeWithBrandConfig(mockStoreThemes.dark, mockConfigTheme)

		expect(result).toEqual({
			base: 'dark',
			colorPrimary: '#FF4785',
			colorSecondary: '#029CFD',
			brandImage: 'https://example.com/my-custom-logo.png',
			brandTitle: 'My Custom App',
			brandUrl: 'https://example.com',
			brandTarget: '_blank'
		})
	}
}

export const PreservesBrandPropertiesWhenSwitchingToLightTheme: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const result = mergeThemeWithBrandConfig(mockStoreThemes.light, mockConfigTheme)

		expect(result).toEqual({
			base: 'light',
			colorPrimary: '#FF4785',
			colorSecondary: '#029CFD',
			brandImage: 'https://example.com/my-custom-logo.png',
			brandTitle: 'My Custom App',
			brandUrl: 'https://example.com',
			brandTarget: '_blank'
		})
	}
}

export const HandlesPartialBrandConfiguration: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const partialConfigTheme = {
			brandImage: 'https://example.com/logo.png',
			brandTitle: 'Partial App'
		} as ThemeVars

		const result = mergeThemeWithBrandConfig(mockStoreThemes.light, partialConfigTheme)

		expect(result).toEqual({
			base: 'light',
			colorPrimary: '#FF4785',
			colorSecondary: '#029CFD',
			brandImage: 'https://example.com/logo.png',
			brandTitle: 'Partial App',
			brandUrl: undefined,
			brandTarget: undefined
		})
	}
}

export const OverridesStoreThemeBrandPropertiesWithConfigTheme: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const storeThemeWithBrand = {
			...mockStoreThemes.light,
			brandImage: 'https://store.com/old-logo.png',
			brandTitle: 'Old Title'
		}

		const result = mergeThemeWithBrandConfig(storeThemeWithBrand, mockConfigTheme)

		expect(result.brandImage).toBe('https://example.com/my-custom-logo.png')
		expect(result.brandTitle).toBe('My Custom App')
		expect(result.brandUrl).toBe('https://example.com')
		expect(result.brandTarget).toBe('_blank')
	}
}

export const ReturnsStoreThemeUnchangedWhenConfigThemeIsUndefined: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const result = mergeThemeWithBrandConfig(mockStoreThemes.light, undefined)

		expect(result).toEqual(mockStoreThemes.light)
	}
}

export const ReturnsStoreThemeWithExistingBrandPropertiesWhenConfigThemeIsUndefined: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const storeThemeWithBrand = {
			...mockStoreThemes.dark,
			brandImage: 'https://store.com/logo.png',
			brandTitle: 'Store Brand'
		}

		const result = mergeThemeWithBrandConfig(storeThemeWithBrand, undefined)

		expect(result).toEqual(storeThemeWithBrand)
	}
}

export const HandlesEmptyConfigThemeObject: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const emptyConfigTheme = {} as ThemeVars
		const result = mergeThemeWithBrandConfig(mockStoreThemes.light, emptyConfigTheme)

		expect(result).toEqual({
			...mockStoreThemes.light,
			brandImage: undefined,
			brandTitle: undefined,
			brandUrl: undefined,
			brandTarget: undefined
		})
	}
}

export const HandlesNullConfigTheme: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const result = mergeThemeWithBrandConfig(mockStoreThemes.dark, null as any)

		expect(result).toEqual(mockStoreThemes.dark)
	}
}

export const PreservesAllStoreThemeProperties: Story = {
	render: () => <TestComponent />,
	play: async () => {
		const complexStoreTheme = {
			...mockStoreThemes.light,
			appBg: '#ffffff',
			appContentBg: '#f8f8f8',
			barBg: '#f8f8f8',
			barTextColor: '#999999',
			textColor: '#333333',
			textInverseColor: '#ffffff'
		}

		const result = mergeThemeWithBrandConfig(complexStoreTheme, mockConfigTheme)

		expect(result).toEqual({
			...complexStoreTheme,
			brandImage: 'https://example.com/my-custom-logo.png',
			brandTitle: 'My Custom App',
			brandUrl: 'https://example.com',
			brandTarget: '_blank'
		})
	}
}

export const DemonstratesFixForCSSSpecificityConflicts: Story = {
	render: () => <TestComponent />,
	play: async () => {
		// This test validates the fix described in the GitHub issue
		// https://github.com/storybook-community/storybook-dark-mode/issues/22

		// Simulate the OLD behavior (before fix)
		const oldBehavior = (mode: 'light' | 'dark') => {
			return mockStoreThemes[mode] // This would lose brand customizations
		}

		// Simulate the NEW behavior (with fix)
		const newBehavior = (mode: 'light' | 'dark') => {
			return mergeThemeWithBrandConfig(mockStoreThemes[mode], mockConfigTheme)
		}

		// Test that old behavior loses brand properties
		const oldDarkResult = oldBehavior('dark')
		expect(oldDarkResult.brandImage).toBeUndefined()
		expect(oldDarkResult.brandTitle).toBeUndefined()

		// Test that new behavior preserves brand properties
		const newDarkResult = newBehavior('dark')
		expect(newDarkResult.brandImage).toBe('https://example.com/my-custom-logo.png')
		expect(newDarkResult.brandTitle).toBe('My Custom App')

		// Test light mode as well
		const oldLightResult = oldBehavior('light')
		expect(oldLightResult.brandImage).toBeUndefined()

		const newLightResult = newBehavior('light')
		expect(newLightResult.brandImage).toBe('https://example.com/my-custom-logo.png')
	}
}
