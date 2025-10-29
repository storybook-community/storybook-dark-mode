import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { useDarkMode } from './use_dark_mode'

export default {
	title: 'api/main/useDarkMode'
} satisfies Meta

export const Playground: StoryObj = {
	render() {
		const isDark = useDarkMode()
		return <div>Dark mode: {isDark ? 'on' : 'off'}</div>
	}
}
