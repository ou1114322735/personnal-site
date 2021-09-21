
var routerTitle = "";
var siteTitle = "";
function setTitle(){
    if(!routerTitle && !siteTitle) {
        document.title="loading";
    }
    else if(!routerTitle && siteTitle) {
        document.title = siteTitle;
    }
    else if(routerTitle && !siteTitle){
        document.title = routerTitle;
    }
    else {
        document.title =  `${routerTitle}-${siteTitle}`
    }
}

export default {
    //设置路由标题
    setRouterTitle(title){
        routerTitle = title;
        setTitle();
    },
    //设置网站标题
    setWebTitle(title){
        siteTitle = title;
        setTitle();
    }
}