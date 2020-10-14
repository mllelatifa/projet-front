import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import moment from 'moment'

Vue.prototype.moment = moment;

Vue.config.productionTip = false;
Vue.prototype.$ebus = new Vue(); //ebus  evenement  global qui va contenir des evenement  qui sont accesible a mes composant 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app"); //qui va contruire mon app vue et  qui va permet de cree des composant  