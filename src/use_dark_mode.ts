import { addons, useEffect, useParameter, useState } from 'storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from './constants'
import { store } from './dark_mode_toggle'

/**
 * Returns the current state of storybook's dark-mode
 */
export function useDarkMode(): boolean {
	const docs: any = useParameter('docs')
	if (docs?.theme) {
		return docs.theme.base === 'dark'
	}
	const [isDark, setIsDark] = useState(store().current === 'dark')

	useEffect(() => {
		const chan = addons.getChannel()
		chan.on(DARK_MODE_EVENT_NAME, setIsDark)
		return () => chan.off(DARK_MODE_EVENT_NAME, setIsDark)
	}, [])

	return isDark
}
