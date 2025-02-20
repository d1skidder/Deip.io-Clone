require("esbuild").build({
	entryPoints: ["./client/index.ts"],
	bundle: true,
	minify: true,
	platform: "browser",
	target: "es2015",
	outdir: "dist",
	sourcemap: true,
	//splitting: true,
	format: "iife",
	external: Object.keys(require("./package.json").dependencies),
});
