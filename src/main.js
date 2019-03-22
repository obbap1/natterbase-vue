import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Vuetify);

Vue.filter('currency', (value, curr, decimalPoints) => (
  `${curr}${(Math.floor(value * (10 ** decimalPoints)) / (10 ** decimalPoints)).toFixed(decimalPoints)}`
));

Vue.filter('commas', value => (
  `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
));


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
