import VueRouter from "vue-router";
import Vue from "vue";
import routes from './route';
import {titleController} from "@/utils";


if(!window.VueRouter){
  Vue.use(VueRouter); //使用一个vue插件
}




const VueRouterPush = VueRouter.prototype.push;

//路由出错 捕获错误
VueRouter.prototype.push = function(to){
  return VueRouterPush.call(this,to).catch(()=>{});
}
const router = new VueRouter({
  //配置
  routes,
  //路由匹配模式
  mode:"hash",
})


router.afterEach((to,from)=>{
  if(to.meta.title){
    titleController.setRouterTitle(to.meta.title);
  }
})

export default router