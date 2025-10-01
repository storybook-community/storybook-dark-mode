export function managerEntries(entry = []) {
	return [...entry, import.meta.resolve('./esm/manager')]
}
