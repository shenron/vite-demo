import { createApp } from 'vue';
import App from './app/App';
import router from './router';
import './index.css';

createApp(App)
  .use(router)
  .mount('#app');
