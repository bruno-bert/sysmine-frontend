import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router/";
import store from "./store";
import i18n from './i18n';
import "./registerServiceWorker";

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false;

//require('dotenv').config();

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");