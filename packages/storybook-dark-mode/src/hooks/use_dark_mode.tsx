import { addons, useEffect, useParameter, useState } from 'storybook/preview-api'
import { store } from '../internal/utils/store'
import { DARK_MODE_EVENT_NAME } from '../static/constants'

const chan = addons.getChannel()

/**
 * Returns the current state of storybook's dark-mode
 */
export function useDarkMode(): boolean {
	const docs = useParameter<{ theme?: { base: 'light' | 'dark' } }>('docs')
	const [isDark, setIsDark] = useState(() => store().current === 'dark')

	useEffect(() => {
		chan.on(DARK_MODE_EVENT_NAME, setIsDark)
		return () => chan.off(DARK_MODE_EVENT_NAME, setIsDark)
	}, [])

	if (docs?.theme?.base) {
		return docs.theme.base === 'dark'
	}

	return isDark
}
