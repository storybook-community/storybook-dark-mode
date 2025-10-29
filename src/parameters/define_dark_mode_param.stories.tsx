import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { type DarkModeParam, defineDarkModeParam } from './define_dark_mode_param'

export default {
	title: 'api/main/defineDarkModeParam',
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'The `defineDarkModeParam()` function is a helper function to define the dark mode parameters.'
			}
		}
	},
	argTypes: {
		classTarget: {
			control: 'select',
			options: ['body', 'html']
		},
		current: {
			control: 'select',
			options: ['light', 'dark']
		},
		darkClass: {
			control: 'text'
		},
		lightClass: {
			control: 'text'
		},
		stylePreview: {
			control: 'boolean'
		},
		disable: {
			control: 'boolean'
		},
		dark: {
			control: 'object'
		},
		light: {
			control: 'object'
		}
	},
	args: {
		classTarget: 'body',
		darkClass: 'dark',
		lightClass: 'light'
	}
} satisfies Meta<DarkModeParam>

export const Playground: StoryObj<DarkModeParam> = {
	render: (args) => {
		const params = defineDarkModeParam(args)
		return (
			<div className="flex flex-col gap-2">
				<pre>defineDarkModeParam(args):</pre>
				<pre>{JSON.stringify(params, null, 2)}</pre>
			</div>
		)
	}
}
