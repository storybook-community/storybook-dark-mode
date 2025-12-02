import { fileURLToPath } from 'node:url'

export function managerEntries(entry = []) {
	return [...entry, fileURLToPath(import.meta.resolve('../src/manager.tsx'))]
}

export function previewEntries(entry = []) {
	return [...entry, fileURLToPath(import.meta.resolve('../src/preview.ts'))]
}
