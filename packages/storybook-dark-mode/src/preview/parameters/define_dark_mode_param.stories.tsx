import type { Meta, StoryObj } from '@storybook/react-vite'
import dedent from 'dedent'
import React from 'react'
import { type DarkModeParam, defineDarkModeParam } from './define_dark_mode_param'

const meta = {
	title: 'preview/parameters/defineDarkModeParam',
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

export default meta

type Story = StoryObj<typeof meta>

export const SimpleUsage: Story = {
	render: (args) => {
		const parameters = defineDarkModeParam(args)
		return (
			<div className="flex flex-col gap-8">
				<pre>
					<code>{dedent`export const YourStory = {
						parameters: defineDarkModeParam(args)
					}`}</code>
				</pre>
				<div>
					<code>
						{'// Result'}
						<pre>
							export const YourStory ={' '}
							{JSON.stringify(
								{
									parameters
								},
								null,
								2
							)}
						</pre>
					</code>
				</div>
			</div>
		)
	}
}

export const CombinedUsage: Story = {
	render: () => {
		return (
			<div className="flex flex-col gap-8">
				<pre>
					<code>{dedent`export const YourStory = {
						parameters: {
							...defineDarkModeParam({...}),
							...defineLayoutParam({...}),
						}
					}`}</code>
				</pre>
			</div>
		)
	}
}
