import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [typescript()],
};
