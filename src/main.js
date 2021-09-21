import "./mock";
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
import {showMessage} from "@/utils";
import "./Bus";
import store from "./store";

//注册全局命令
import vLoading from "./directives/loading";    //指令配置
import vLazy from "./directives/lazy";
Vue.directive("lazy",vLazy);
Vue.directive("loading",vLoading);


Vue.prototype.$showMessage = showMessage;
store.dispatch("setting/fetchSetting");




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')



