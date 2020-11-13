import path from 'path';
import { createJsxPlugin } from 'vite-jsx/plugin';

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  plugins: [createJsxPlugin()],
};
