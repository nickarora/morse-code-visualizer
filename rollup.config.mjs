import terser from '@rollup/plugin-terser'

export default {
	input: './src/morse.mjs',
	output: {
    file: './app/script/morse.min.js',
    format: 'es',
    plugins: [terser()]
	}
}
