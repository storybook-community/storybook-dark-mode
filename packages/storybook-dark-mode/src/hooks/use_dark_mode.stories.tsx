import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { useDarkMode } from './use_dark_mode'

export default {
	title: 'API/hooks/useDarkMode'
} satisfies Meta

export const InRender: StoryObj = {
	render() {
		const isDark = useDarkMode()
		return <div>Dark mode: {isDark ? 'on' : 'off'}</div>
	}
}

export const InDecorator: StoryObj = {
	decorators: [
		(Story) => {
			const isDark = useDarkMode()
			return (
				<>
					<div>Dark mode: {isDark ? 'on' : 'off'}</div>
					<Story />
				</>
			)
		}
	],
	render() {
		return <div>Story Content</div>
	}
}
