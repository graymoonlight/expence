import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import vuetify from './vuetify/vuetify';
import './assets/globals.css';
import 'vuetify/styles';  

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app');