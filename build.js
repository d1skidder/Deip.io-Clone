const esbuild = require('esbuild');
const config = require('./esbuild.config.ts');

esbuild.build(config).catch(() => process.exit(1));
