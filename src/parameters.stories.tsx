import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { defineDarkModeParam } from '.'

export default {
	title: 'parameters'
} satisfies Meta

export const DisableDarkMode: StoryObj = {
	parameters: {
		darkMode: {
			disable: true
		}
	},
	render: () => (
		<div className="text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">
			<div>The dark mode toggle button can be disabled in the parameter.</div>
		</div>
	)
}

export const WithDefineFunction: StoryObj = {
	name: 'defineDarkModeParam()',
	parameters: defineDarkModeParam({
		disable: true
	}),
	render: () => {
		return (
			<div className="p-2 flex flex-col gap-2 text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">
				<p>
					You can use the <code>defineDarkModeParam()</code> function to define the dark mode parameters.
				</p>
				<p>
					Note that this function currently only supports the <code>disable</code> parameter.
				</p>
				<p>
					It should be used in the <code>parameters</code> of the meta and story.
				</p>
			</div>
		)
	}
}
