import { showSource, StoryCard } from '@repobuddy/storybook'
import type { Meta, StoryObj } from '@repobuddy/storybook/storybook-addon-tag-badges'
import dedent from 'dedent'
import React from 'react'
import { type DarkModeParam, defineDarkModeParam } from './define_dark_mode_param'

const meta = {
	title: 'API/parameters/defineDarkModeParam',
	tags: ['autodocs', 'func', 'version:next'],
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
	},
	render: () => <></>
} satisfies Meta<DarkModeParam>

export default meta

type Story = StoryObj<typeof meta>

export const SimpleUsage: Story = {
	tags: ['use-case'],
	decorators: [
		showSource({
			source: dedent`export const YourStory = {
			parameters: defineDarkModeParam(args)
		}`
		})
	],
	render: (args) => {
		const parameters = defineDarkModeParam(args)
		return (
			<StoryCard appearance="output">
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
			</StoryCard>
		)
	}
}

export const CombinedUsage: Story = {
	tags: ['use-case'],
	decorators: [
		showSource({
			source: dedent`export const YourStory = {
				parameters: {
					...defineDarkModeParam({...}),
					...defineLayoutParam({...}),
				}
			}`
		})
	]
}

export const DisableDarkMode: Story = {
	tags: ['use-case'],
	parameters: defineDarkModeParam({ disable: true, darkClass: '', lightClass: '' }),
	decorators: [
		showSource({
			source: dedent`export const YourStory = {
				parameters: defineDarkModeParam({ disable: true })
			}`
		})
	]
}

export const EmptyClassString: Story = {
	tags: ['unit'],
	parameters: defineDarkModeParam({ darkClass: '', lightClass: '' }),
	decorators: [
		showSource({
			source: dedent`export const YourStory = {
				parameters: defineDarkModeParam({ darkClass: '', lightClass: '' })
			}`
		})
	]
}

export const EmptyClassArray: Story = {
	tags: ['unit'],
	parameters: defineDarkModeParam({ darkClass: [], lightClass: [] }),
	decorators: [
		showSource({
			source: dedent`export const YourStory = {
				parameters: defineDarkModeParam({ darkClass: [], lightClass: [] })
			}`
		})
	]
}
