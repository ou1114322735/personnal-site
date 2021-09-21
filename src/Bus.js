/*事件名：mainScroll
    含义：主区域滚动区域位置变化触发
    参数：滚动的dom


事件名：setMainScroll
含义：设置主区域滚动条高度
*/
import Vue from 'vue';
const app = new Vue({});
Vue.prototype.$eventBus = app;
export default app;