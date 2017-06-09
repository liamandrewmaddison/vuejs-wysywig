import Vue from 'vue';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App, Icon },
});
