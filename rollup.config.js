import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';


module.exports = {
	input: 'index.js',
	plugins: [

		babel({
			exclude: 'node_modules/**'
		}),
		uglify()
	],
	output: {
		name: 'conclass',
		file: 'dist/bundle.js',
		format: 'umd'
	}
};