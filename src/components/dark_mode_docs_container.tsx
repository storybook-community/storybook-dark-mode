import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks'
import React, { useEffect, useState, type PropsWithChildren } from 'react'
import { DARK_MODE_EVENT_NAME } from '../constants'
import { store } from '../internal/utils/store'

export function DarkModeDocsContainer(props: PropsWithChildren<DocsContainerProps>) {
	const s = store()
	const [isDark, setIsDark] = useState(() => store().current === 'dark')

	useEffect(() => {
		props.context.channel.on(DARK_MODE_EVENT_NAME, setIsDark)

		return () => props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setIsDark)
	}, [props.context.channel])
	return <DocsContainer {...props} theme={isDark ? s.dark : s.light} />
}
