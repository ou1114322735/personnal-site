import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
//得到el中loading效果的img
function getLoadingImg(el){
   return el.querySelector("img[data-role=loading]")
}


function createLoadingImg(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className= styles.loading;
    return img
}
//导出指令配置对象
export default function (el, binding){
    // 该函数会被同时设置到bind和update中
    //根据一个img元素，放到el元素内部，根据binding.value的值决定创建或者删除img元素
    const curImg = getLoadingImg(el)
    if(binding.value) {
        if(!curImg){   //如果el里面没有img，再添加img
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else {
        if(curImg) {
            curImg.remove();
        }
    }
}