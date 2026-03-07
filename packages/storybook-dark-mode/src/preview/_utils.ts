export function getPreviewTarget(classTarget: string) {
	const iframe = document.getElementById('storybook-preview-iframe') as HTMLIFrameElement

	if (!iframe) {
	}

	const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document
	return iframeDocument?.querySelector<HTMLElement>(classTarget)
}
