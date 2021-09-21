import {getPersonal} from "@/api/Resume";
export default {
    namespaced:true,
    state:{
        isLoading:false,
        data:null,
    },
    mutations:{
        setLoading(state,payload) {
            state.isLoading = payload;
        },
        setData(state,payload) {
            state.data = payload;
        }
    },
    actions:{
        async fetchResume(ctx) {
            if(ctx.state.data){
                return 
            }
            ctx.commit("setLoading",true);
            const res = await getPersonal();
            ctx.commit("setData",res);
            ctx.commit("setLoading",false);
        }
    }

}