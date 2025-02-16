require("esbuild").build({
	entryPoints: ["./client/index.ts"],
	bundle: true,
	minify: true,
	platform: "browser",
	outfile: "dist/client-bundle.js",
	sourcemap: true,
	external: Object.keys(require("./package.json").dependencies),
});
