import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import vuetify from './vuetify/vuetify';
import store from './vuex/store';
import i18n from './language/language';
import './assets/globals.css';
import 'vuetify/styles';  

createApp(App)
  .use(i18n)
  .use(vuetify)
  .use(router)
  .use(store) 
  .mount('#app');