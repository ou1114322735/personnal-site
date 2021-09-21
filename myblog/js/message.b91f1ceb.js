(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message"],{"0339":function(t,e,n){},"276e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"messageArea-container"},[n("DataForm",t._g({},t.$listeners)),n("h1",[t._v(t._s(t.title))]),n("h2",[t._v("("+t._s(t.subTitle)+")")]),n("DataList",{attrs:{list:t.list}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isListLoading,expression:"isListLoading"}],staticClass:"loading"})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"data-list-container"},t._l(t.list,(function(e){return n("li",{key:e.id},[n("Avatar",{attrs:{url:e.avatar,size:44}}),n("div",{staticClass:"data"},[n("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),n("div",{staticClass:"content"},[t._v(t._s(e.content))]),n("div",{staticClass:"time"},[t._v(t._s(t.formatDate(e.createDate,!0)))])])],1)})),0)},s=[],o=n("77c0"),c=n("ed08"),u={components:{Avatar:o["a"]},props:{list:{type:Array,required:!0}},methods:{formatDate:c["c"]}},l=u,f=(n("8b17"),n("2877")),m=Object(f["a"])(l,i,s,!1,null,"301dc622",null),d=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{ref:"container",staticClass:"DataForm-container",attrs:{id:"dataForm"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"form-item"},[n("div",{staticClass:"username-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.nickname,expression:"formData.nickname"}],attrs:{type:"text",placeholder:"用户昵称",maxlength:"10"},domProps:{value:t.formData.nickname},on:{input:function(e){e.target.composing||t.$set(t.formData,"nickname",e.target.value)}}}),n("div",{staticClass:"tip"},[t._v(t._s(t.formData.nickname.length)+"/30")])]),n("span",{staticClass:"error"},[t._v(t._s(t.error.nickname))])]),n("div",{staticClass:"form-item"},[n("div",{staticClass:"textArea-container"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.content,expression:"formData.content"}],attrs:{maxlength:"300",placeholder:"输入内容"},domProps:{value:t.formData.content},on:{input:function(e){e.target.composing||t.$set(t.formData,"content",e.target.value)}}}),n("div",{staticClass:"tip"},[t._v(t._s(t.formData.content.length)+"/300")])]),n("span",{staticClass:"error"},[t._v(t._s(t.error.content))]),n("div",{staticClass:"submitBtn"},[n("button",{attrs:{disabled:t.isSubmiting}},[t._v(t._s(t.isSubmiting?"提交中":"提交"))])])])])},p=[],v={data:function(){return{formData:{nickname:"",content:""},error:{nickname:"",content:""},isSubmiting:!1}},methods:{handleSubmit:function(){var t=this;this.formData.nickname?this.error.nickname="":this.error.nickname="请输入昵称",this.formData.content?this.error.content="":this.error.content="请输入评论",this.formData.nickname&&this.formData.content&&(this.isSubmiting=!0,this.$emit("submit",this.formData,(function(e){t.formData.nickname="",t.formData.content="",t.isSubmiting=!1,t.$showMessage({content:"res",type:"success",container:t.$refs.container,duration:1500})})))}}},g=v,b=(n("6c3f"),Object(f["a"])(g,h,p,!1,null,"e73fe7c2",null)),w=b.exports,D={components:{DataList:d,DataForm:w},props:{title:{type:String,default:""},subTitle:{type:String,default:""},list:{type:Array,default:function(){return[]}},isListLoading:{type:Boolean,default:!1}}},_=D,x=(n("4bc6"),Object(f["a"])(_,a,r,!1,null,"b9502122",null));e["a"]=x.exports},3149:function(t,e,n){},"4bc6":function(t,e,n){"use strict";n("f1d8")},"600f":function(t,e,n){},"68d5":function(t,e,n){"use strict";n("600f")},"6c3f":function(t,e,n){"use strict";n("3149")},"8b17":function(t,e,n){"use strict";n("0339")},"8fc4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"Message-container"},[n("MessageArea",{attrs:{title:"留言板",subTitle:"("+t.data.total+")",list:t.data.rows,isListLoading:t.isLoading},on:{submit:t.handleSubmit}})],1)},r=[],i=n("1da1"),s=(n("99af"),n("96cf"),n("276e")),o=n("e128"),c=n("0c6d");function u(){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n=a.length>1&&void 0!==a[1]?a[1]:10,t.next=4,c["a"].get("/api/message",{params:{page:e,limit:n}});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(t){return m.apply(this,arguments)}function m(){return m=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].post("/api/message",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}var d=n("f119"),h=n("ec39"),p={mixins:[Object(o["a"])({}),Object(d["a"])("container")],components:{MessageArea:s["a"],ToTop:h["a"]},created:function(){this.$eventBus.$on("mainScroll",this.handle)},beforeDestroyed:function(){this.$eventBus.$off("mainScroll",this.handle)},computed:{hasMore:function(){return this.data.rows.length<=this.data.total}},data:function(){return{page:1,limit:10}},methods:{fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(t.page,t.limit);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},handle:function(t){if(!this.isLoading&&t){var e=100,n=Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight);n<=e&&this.fetchMore()}},fetchMore:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasMore){e.next=2;break}return e.abrupt("return");case 2:return t.isLoading=!0,t.page++,e.next=6,t.fetchData();case 6:n=e.sent,t.data.total=n.total,t.data.rows=t.data.rows.concat(n.rows),t.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},handleSubmit:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,f(t);case 2:r=a.sent,n.data.rows.unshift(r),n.data.total++,e("感谢您的留言");case 6:case"end":return a.stop()}}),a)})))()}}},v=p,g=(n("68d5"),n("2877")),b=Object(g["a"])(v,a,r,!1,null,"458ce011",null);e["default"]=b.exports},e128:function(t,e,n){"use strict";var a=n("1da1");n("96cf");e["a"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{data:function(){return{isLoading:!0,data:t}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:t.data=e.sent,t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()}}}},f119:function(t,e,n){"use strict";e["a"]=function(t){return{mounted:function(){this.$eventBus.$on("setMainScroll",this.setMainScroll),this.$refs[t].addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.$refs[t].removeEventListener("scroll",this.handleScroll),this.$eventBus.$off("setMainScroll",this.SetMainScroll)},destroyed:function(){this.$eventBus.$emit("mainScroll")},methods:{setMainScroll:function(e){this.$refs[t].scrollTop=e},handleScroll:function(){this.$eventBus.$emit("mainScroll",this.$refs[t])}}}}},f1d8:function(t,e,n){}}]);
//# sourceMappingURL=message.b91f1ceb.js.map