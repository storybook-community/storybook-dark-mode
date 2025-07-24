import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import React, { useEffect, useState, type PropsWithChildren } from 'react'
import type { Renderer } from 'storybook/internal/types'
import { DARK_MODE_EVENT_NAME } from '../constants.js'
import { store } from '../dark_mode_toggle.js'

export function DarkModeDocsContainer<TRenderer extends Renderer = Renderer>(
	props: PropsWithChildren<DocsContainerProps<TRenderer>>
) {
	const s = store()
	const [isDark, setDark] = useState(s.current === 'dark')

	useEffect(() => {
		props.context.channel.on(DARK_MODE_EVENT_NAME, setDark)

		return () => props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
	}, [props.context.channel])
	return <DocsContainer {...props} theme={isDark ? s.dark : s.light} />
}
