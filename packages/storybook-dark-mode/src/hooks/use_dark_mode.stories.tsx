import { StoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { useDarkMode } from './use_dark_mode'

export default {
	title: 'API/hooks/useDarkMode',
	tags: ['func']
} satisfies Meta

export const InRender: StoryObj = {
	render() {
		const isDark = useDarkMode()
		return <StoryCard appearance="output">Dark mode: {isDark ? 'on' : 'off'}</StoryCard>
	}
}

export const InDecorator: StoryObj = {
	decorators: [
		(Story) => {
			const isDark = useDarkMode()
			return (
				<>
					<StoryCard appearance="output">Dark mode: {isDark ? 'on' : 'off'}</StoryCard>
					<Story />
				</>
			)
		}
	],
	render() {
		return <div>Story Content</div>
	}
}
