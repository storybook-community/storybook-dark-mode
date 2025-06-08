import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { themes } from 'storybook/internal/theming'
import { useDarkMode } from '.'

export default {
	title: 'useDarkMode'
} satisfies Meta

export const Default: StoryObj = {
	render() {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const isDark = useDarkMode()
		return <div>Dark mode: {isDark ? 'on' : 'off'}</div>
	}
}

export const DocsThemeTakePrecedenceLight: StoryObj = {
	parameters: {
		docs: {
			theme: themes.light
		}
	},
	render() {
		const isDark = useDarkMode()
		return <div>Dark mode: {isDark ? 'on' : 'off'}</div>
	}
}

export const DocsThemeTakePrecedenceDark: StoryObj = {
	parameters: {
		docs: {
			theme: themes.dark
		}
	},
	render() {
		const isDark = useDarkMode()
		return <div>Dark mode: {isDark ? 'on' : 'off'}</div>
	}
}
