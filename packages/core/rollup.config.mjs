import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [
    'react',
    'react-dom',
    'tailwind-merge',
    'tslib',
    'class-variance-authority',
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/stories/**', '**/tests/**', './styles.css'],
    }),
  ],
};
