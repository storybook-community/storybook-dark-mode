import type { BuildConfig } from 'unbuild'

export default {
	entries: [
		{
			builder: 'mkdist',
			input: './src/',
			outDir: './cjs',
			format: 'cjs'
		},
		{
			builder: 'mkdist',
			input: './src/',
			outDir: './esm',
			format: 'esm',
			ext: 'js'
		}
	],
	declaration: true,
	clean: true
} satisfies BuildConfig
