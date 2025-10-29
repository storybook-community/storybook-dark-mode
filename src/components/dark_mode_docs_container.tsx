import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import React, { useEffect, useState, type PropsWithChildren } from 'react'
import { DARK_MODE_EVENT_NAME } from '../constants'
import { store } from './dark_mode_toggle'

export function DarkModeDocsContainer(props: PropsWithChildren<DocsContainerProps>) {
	const s = store()
	const [isDark, setDark] = useState(s.current === 'dark')

	useEffect(() => {
		props.context.channel.on(DARK_MODE_EVENT_NAME, setDark)

		return () => props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark)
	}, [props.context.channel])
	return <DocsContainer {...props} theme={isDark ? s.dark : s.light} />
}
