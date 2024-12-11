import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';

const viteConfig = defineViteConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
});
const vitestConfig = defineVitestConfig({
  test: {
    include: ['./tests/unit/**/*.spec.ts'],
    globals: true,
    environment: 'jsdom',
  },
});

export default mergeConfig(viteConfig, vitestConfig);
