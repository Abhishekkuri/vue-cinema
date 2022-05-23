import Vue from "vue";
import Vuex from "vuex";
import Router from "vue-router";
import App from "./App.vue";
import "./registerServiceWorker";
import { sync } from "vuex-router-sync";
import routerConfig from "./router/router-config";
import storeConfig from "./store/store-config";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Router);

const router = new Router(routerConfig);
const store = new Vuex.Store(storeConfig);

sync(store, router);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
