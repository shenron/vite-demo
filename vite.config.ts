import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';

export default {
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, 'src'),
    }],
    optimizeDeps: {
      include: [
        'javascript-time-ago/locale/en',
      ],
    },
  },
  plugins: [vue(), vueJsx()],
};
