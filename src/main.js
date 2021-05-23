import Vue from 'vue';
import App from './App.vue';

import { message1, message2 } from './variables';
import alertDisplay from './test';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertDisplay(message1);
alertDisplay(message2);
