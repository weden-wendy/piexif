import typescript from 'rollup-plugin-typescript2';
import { eslint } from 'rollup-plugin-eslint';
import { prettier } from 'rollup-plugin-prettier';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/piexif.js',
    name: 'piexif',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    eslint(),
    prettier({
      semi: true,
      trailingComma: 'all',
      singleQuote: true,
      printWidth: 70,
    }),
  ],
};
