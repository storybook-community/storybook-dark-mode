import { dequal as equal } from 'dequal'
import type { ThemeVars } from 'storybook/theming'
import { themes } from 'storybook/theming'
import type { Mode } from '../../static/types'

export interface DarkModeStore {
	/** The class target in the preview iframe */
	classTarget: string
	/** The current mode the storybook is set to */
	current: Mode
	/** The dark theme for storybook */
	dark: ThemeVars
	/** The dark class name for the preview iframe */
	darkClass: string | string[]
	/** The light theme for storybook */
	light: ThemeVars
	/** The light class name for the preview iframe */
	lightClass: string | string[]
	/** Apply mode to iframe */
	stylePreview: boolean
	/** Persist if the user has set the theme */
	userHasExplicitlySetTheTheme: boolean
	/** Disable the dark mode toggle */
	disable: boolean
}

const { document, window } = globalThis

const STORAGE_KEY = 'sb-addon-themes-3'
export const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')

const defaultParams: Required<Omit<DarkModeStore, 'current'>> = {
	classTarget: 'body',
	dark: themes.dark,
	darkClass: ['dark'],
	light: themes.light,
	lightClass: ['light'],
	stylePreview: false,
	userHasExplicitlySetTheTheme: false,
	disable: false
}

/** Persist the dark mode settings in localStorage */
export const updateStore = (newStore: DarkModeStore) => {
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newStore))
}

/** Coerce a string to a single item array, or return an array as-is */
const arrayify = (classes: string | string[]): string[] => {
	const arr: string[] = []
	return arr.concat(classes).map((item) => item)
}

/** Add the light/dark class to an element */
export const toggleDarkClass = (
	el: Element,
	{ current, darkClass = defaultParams.darkClass, lightClass = defaultParams.lightClass }: DarkModeStore
) => {
	if (current === 'dark') {
		el.classList.remove(...arrayify(lightClass))
		el.classList.add(...arrayify(darkClass))
	} else {
		el.classList.remove(...arrayify(darkClass))
		el.classList.add(...arrayify(lightClass))
	}
}

/** Update the preview iframe class */
export const updatePreview = (store: DarkModeStore) => {
	const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement

	if (!iframe) {
		return
	}

	const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document
	const target = iframeDocument?.querySelector<HTMLElement>(store.classTarget)

	if (!target) {
		return
	}

	toggleDarkClass(target, store)
}

/** Update the manager iframe class */
export const updateManager = (store: DarkModeStore) => {
	const manager = document.querySelector(store.classTarget)

	if (!manager) {
		return
	}

	toggleDarkClass(manager, store)
}

/** Update changed dark mode settings and persist to localStorage  */
export const store = (userTheme: Partial<DarkModeStore> = {}): DarkModeStore => {
	const storedItem = window.localStorage.getItem(STORAGE_KEY)

	if (typeof storedItem === 'string') {
		const stored = JSON.parse(storedItem) as DarkModeStore

		if (userTheme) {
			if (userTheme.dark && !equal(stored.dark, userTheme.dark)) {
				stored.dark = userTheme.dark
				updateStore(stored)
			}

			if (userTheme.light && !equal(stored.light, userTheme.light)) {
				stored.light = userTheme.light
				updateStore(stored)
			}
		}

		return stored
	}

	return { ...defaultParams, ...userTheme } as DarkModeStore
}

// On initial load, set the dark mode class on the manager
// This is needed if you're using mostly CSS overrides to styles the storybook
// Otherwise the default theme is set in src/preset/manager.tsx
updateManager(store())
