import Vue from "vue";
import {Store,install} from "vuex";
import banner from "./banner";
import setting from "./setting";
import project from "./project";
import resume from "./resume";

if(!window.Vuex){
    install(Vue); //引入vuex插件
}


export default new Store({
    modules: {
        banner,
        setting,
        project,
        resume
    },
    strick: true, //必须要用mutation改变state
})