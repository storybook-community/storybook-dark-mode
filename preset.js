export function managerEntries(entry = []) {
	return [...entry, require.resolve('./esm/manager/index.js')]
}
