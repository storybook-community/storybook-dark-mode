function managerEntries(entry = []) {
	return [...entry, require.resolve('./esm/manager')]
}

module.exports = {
	managerEntries
}
