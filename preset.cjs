function managerEntries(entry = []) {
	return [...entry, require.resolve('./esm/preset/manager')]
}

module.exports = {
	managerEntries
}
