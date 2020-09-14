import { terser } from "rollup-plugin-terser";

const template = '<!DOCTYPE html><html lang="en"><head><title>13kb-404</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"><style>body{background-color: #fff;margin: 0;}canvas{display: block;}#VRButton{color: blue !important;background-color: white !important;bottom: 40px !important;border-radius: 0 !important;opacity: 1 !important;}</style></head><body><script type="module">${script}</script></body></html>';

function html() {
	return {
		renderChunk( code ) {
			return template.replace( '${script}', code );
		}
	};
}

export default {
	input: "src/Game.js",
	output: { file: "index.html", format: "esm", plugins: [ terser(), html() ] }
};
