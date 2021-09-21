<template>
  <div class="BlogTOC-container" >
    <h1>目录</h1>
    <RightList :list="tocWithSelected" @selectLi="handleClick" />
  </div>
</template>

<script>
import RightList from "./RightList";
import {debounce} from "@/utils";
export default {
  components:{
    RightList,
  },
  props:{
    TOC:{
      type:Array,
    }
  },
  data(){
    return{
    activeAnchor:"",
    }
  },
  computed:{
    tocWithSelected(){
      const getTOC = (TOC=[])=>{
        return TOC.map((toc)=>({
          ...toc,
          isSelected:toc.anchor === this.activeAnchor,
          children:getTOC(toc.children)
        }));
      }
      return getTOC(this.TOC);
    },
    getDom(){
      let doms=[];
      const addDoms = (TOC)=>{
        for (const i of TOC) {
          doms.push(document.getElementById(i.anchor));
          if(i.children && i.children.length) {
            addDoms(i.children);
          }
        };
      };
      addDoms(this.TOC);
      return doms;
    }
  },
  methods:{
    handleClick(item){
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确值
    setSelect(scrollDom){
      if(!scrollDom) {
        return
      }
      this.activeAnchor="";
      const range = 150;
      for (const dom of this.getDom) {
        if(!dom){
          continue;
        }
        //获取当前dom离视窗顶部高度
        const top = dom.getBoundingClientRect().top;
        if(top >=0 && top <=range) {
          this.activeAnchor = dom.id;
        }else if(top >range) {
          return;
        }else{
          this.activeAnchor = dom.id;
        }
      }
    }
  },
created(){
  this.selectDebounce = debounce(this.setSelect)
  this.$eventBus.$on("mainScroll",this.selectDebounce);
},
destroyed(){
  this.$eventBus.$off("mainScroll",this.selectDebounce);
},
}
</script>

<style>

</style>