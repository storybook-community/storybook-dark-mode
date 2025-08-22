import { addons, useEffect, useParameter, useState } from 'storybook/preview-api'
import { DARK_MODE_EVENT_NAME } from '../constants.js'
import { store } from '../dark_mode_toggle.js'

const chan = addons.getChannel()

/**
 * Returns the current state of storybook's dark-mode
 */
export function useDarkMode(): boolean {
	const docs = useParameter<{ theme?: { base: 'light' | 'dark' } }>('docs')
	if (docs?.theme?.base) {
		return docs.theme.base === 'dark'
	}
	const [isDark, setIsDark] = useState(store().current === 'dark')

	useEffect(() => {
		chan.on(DARK_MODE_EVENT_NAME, setIsDark)
		return () => chan.off(DARK_MODE_EVENT_NAME, setIsDark)
	}, [])

	return isDark
}
