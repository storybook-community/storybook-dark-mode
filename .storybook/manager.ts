// import { tagBadges } from '@repobuddy/storybook/storybook-addon-tag-badges'
import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'

addons.setConfig({
	// tagBadges,
	theme: {
		...themes.dark,
		brandTitle:
			'<span style="display: flex; align-items: center; gap: 8px;"><img src="https://avatars.githubusercontent.com/u/216219414?s=16&v=4" alt="Dark Mode" />storybook-dark-mode</span>',
		brandTarget: '_blank',
		brandUrl: 'https://github.com/storybook-community/storybook-dark-mode'
	}
})
