import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from "../views/NotFound";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(1000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

export default [
  
    {name:"Home",path:'/',component:getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home")),meta:{
      title:"首页"
    }},
    {name:"About",path:'/about',component:getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About"),),redirect:"/about/resume",
    children:[{
      name:"Resume",path:"resume",component:getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About/Resume"),),
    },
    {
      name:"Experience",path:"experience",component:getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About/Experience"),),
    },
    {
      name:"Life",path:"life",component:getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About/Life"),),
    },
  ],
    meta:{
      title:"关于"
    }},
    {name:"Blog",path:'/blog',component:getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog")),meta:{
      title:"博客"
    }},
    {name:"BlogCategory",path:'/blog/cate/:categoryid',component:getPageComponent(() => import(/* webpackChunkName: "Blog" */ "@/views/Blog")),meta:{
      title:"博客分类"
    }},
    {name:"BlogDetail",path:'/blog/:id',component:getPageComponent(() => import(/* webpackChunkName: "BlogDetail" */ "@/views/Blog/detail")),meta:{
      title:"博客详情"
    }},
    {name:"Message",path:'/message',component:getPageComponent(() =>
    import(/* webpackChunkName: "message" */ "@/views/Message")),meta:{
      title:"留言板"
    }},
    {name:"Project",path:'/project',component:getPageComponent(() =>
    import(/* webpackChunkName: "pro" */ "@/views/Project")),meta:{
      title:"项目&效果"
    }},
    {
      name:'NotFound',
      path:'*',
      component:NotFound
    }

  ]