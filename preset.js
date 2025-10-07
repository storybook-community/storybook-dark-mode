import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export function managerEntries(entry = []) {
	return [...entry, require.resolve('./esm/manager/index.js')]
}
