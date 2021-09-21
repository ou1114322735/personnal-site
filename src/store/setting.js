import {getSetting} from "@/api/setting"; 
import {titleController} from "@/utils";
export default {
    namespaced:true,
    state:{
        isLoading:false,
        data:null,
    },
    mutations:{
        setLoading(state,payload){
            state.isLoading = payload;
        },
        setData(state,payload) {
            state.data = payload;
        }
    },
    actions:{
        async fetchSetting(ctx) {
            if(ctx.state.data){
                return
            }
            ctx.commit("setLoading",true);
            const resp = await getSetting();
            ctx.commit("setData",resp);
            ctx.commit("setLoading",false);
            if(resp.favicon) {
                let link = document.querySelector("link[rel='shortcut icon']");
                if(link) {
                    return
                }
                link = document.createElement("link");
                link.rel = "shortcut icon";
                link.type = "images/x-icon";
                link.href = resp.favicon
                document.querySelector("head").appendChild(link);
            }
            if(resp.siteTitle) {
                titleController.setWebTitle(resp.siteTitle);
            }

        }
    }
}