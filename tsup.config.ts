import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: false,
  clean: true,
  minify: false,
  treeshake: true,
  external: ['react'],
  target: 'es2022',
});
