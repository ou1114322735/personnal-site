
import Icon from '../components/Icon';
import getComponentRootDom from "./getComponentRootDom";
import styles from "./showMessage.module.less";

/**
 * 
 * @param {object} options 
 * content: 弹出内容
 * type：弹出类型， error，info，warn，success
 * container：容器，消息会显示到该容器正中
 * duration：多久后消失
 */
export default function (options = {}) {
    const content = options.content || '';
    const type = options.type || "info";
    const container = options.container || document.body;
    const duration = options.duration || 2000;

    const div = document.createElement("div");
    const el = getComponentRootDom(Icon,{
        type,
    });

    div.innerHTML = `<span class=${styles.icon}>${el.outerHTML}</span><div class="content">${content}</div>`;
    div.className = `${styles.message} ${styles["message-"+type]}`;

     //容器定位是否改动
        if(options.container){
            if(getComputedStyle(container).position == "static"){
                container.style.position = "relative"
            }
        }
        
    container.appendChild(div);

    div.clientHeight;   //导致reflow

    div.style.transform = `translate(-50%,-50%)`;
    div.style.opacity = 1;
    setTimeout(() => {
        div.style.transform =  `translate(-50%,-50%) translateY(-20px)`;
        div.style.opacity = 0;
        div.addEventListener("transitionend",function(){
            div.remove();
        },{once:true})
    }, duration);
}