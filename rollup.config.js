import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import inject from '@rollup/plugin-inject';
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import alias from 'rollup-plugin-alias';
import multiEntry from 'rollup-plugin-multi-entry';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'index.ts',
    output: [
      {
        file: 'build/index.js',
        format: 'cjs',
      },
      {
        file: 'build/index.es.js',
        format: 'esm',
      },
    ],
    plugins: [
      json(),
      alias({
        applicationRoot: `${__dirname}`,
      }),
      peerDepsExternal(),
      commonjs(),
      resolve({
        preferBuiltins: false,
        mainFields: ['browser', 'jsnext:main', 'module', 'main'],
      }),
      inject({
        window: 'global/window',
      }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: 'tsconfig-rollup.json',
      }),
    ],
  },
  {
    input: ['index.ts', '**/*.tsx'],
    output: [
      {
        dir: 'build',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    preserveModules: true,
    plugins: [
      json(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: 'tsconfig-rollup.json',
      }),
      multiEntry(),
    ],
  },
];
