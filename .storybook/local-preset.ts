import { fileURLToPath } from 'node:url'

export function managerEntries(entry = []) {
	return [...entry, fileURLToPath(import.meta.resolve('../dist/manager.js'))]
}

export function previewEntries(entry = []) {
	return [...entry, fileURLToPath(import.meta.resolve('../dist/preview.js'))]
}
