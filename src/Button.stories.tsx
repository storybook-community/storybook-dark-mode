import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ButtonHTMLAttributes } from 'react'
import React from 'react'

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
	return <button type="button" {...props} />
}

export default {
	title: 'Button',
	component: Button
} satisfies Meta

export const Basic: StoryObj<typeof Button> = {
	args: {
		children: 'Click me'
	}
}
