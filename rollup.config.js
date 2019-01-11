import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";

module.exports = {
	input: 'index.js',
	plugins: [
		babel({
			"presets": [
				[
					"@babel/preset-env",
					{
						"targets": "> 0.25%, not dead"
					}
				],
			]
		}),
		terser(),
	],
	output: [{
		file: "dist/conclass.js",
		format: "umd",
		name: "conclass",
	},
	{
		file: "dist/conclass.module.js",
		format: "es",
	}]
};