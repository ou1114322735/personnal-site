const  BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


if(process.env.NODE_ENV === "production"){
    module.exports = {
        devtools:"none",
        plugins:[new BundleAnalyzerPlugin()],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            vueRouter: "VueRouter",
            axios:"axios"
          }
    }
}else{
    module.exports={}
}