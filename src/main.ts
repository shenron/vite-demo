import { createApp } from 'vue';
import loadEnv from './loadEnv';
import App from './app/App';
import router from './router';
import './index.css';

console.log('print env variables', loadEnv);

createApp(App)
  .use(router)
  .mount('#app');
