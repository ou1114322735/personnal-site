(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0737":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("nav",{staticClass:"about-container"},[n("div",{staticClass:"navagator"},[n("div",{staticClass:"wrap"},[n("router-link",{attrs:{to:{name:"Resume"}}},[t._v("个人简历")])],1),n("div",{staticClass:"wrap"},[n("router-link",{attrs:{to:{name:"Experience"}}},[t._v("个人经历")])],1),n("div",{staticClass:"wrap"},[n("router-link",{attrs:{to:{name:"Life"}}},[t._v("生活碎片")])],1)]),n("div",{staticClass:"content"},[n("router-view")],1)])},s=[],i={},r=i,o=(n("b78d"),n("2877")),c=Object(o["a"])(r,e,s,!1,null,"24e3d9b2",null);a["default"]=c.exports},"07bb":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h1",[t._v("个人经历")])},s=[],i={},r=i,o=n("2877"),c=Object(o["a"])(r,e,s,!1,null,null,null);a["default"]=c.exports},2056:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"resume-wrap"},[n("Resume",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],attrs:{data:t.data}})],1)},s=[],i=n("5880"),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.data?n("div",{staticClass:"resume-container"},[n("div",{staticClass:"name"},[n("p",[t._v(t._s(t.data.personalInformation.name))])]),n("div",{staticClass:"personalInformation"},[n("span",[t._v(t._s(t.data.personalInformation.sex))]),t._v(" | "),n("span",[t._v(t._s(t.data.personalInformation.age))]),t._v(" | "),n("span",[t._v(t._s(t.data.personalInformation.nation))]),t._v(" | "),n("span",[t._v(t._s(t.data.personalInformation.education))]),t._v(" | "),n("span",[t._v(t._s(t.data.personalInformation.address))]),t._v(" | "),n("span",[t._v(t._s(t.data.personalInformation.telephone))]),t._v(" | "),n("span",[t._v(t._s(t.data.personalInformation.email))])]),n("div",{staticClass:"educationBackground"},[t._m(0),n("div",{staticClass:"background"},[n("span",[t._v(t._s(t.data.educationBackground.time))]),n("span",[t._v(t._s(t.data.educationBackground.university))]),n("span",[t._v(t._s(t.data.educationBackground.major))])])]),n("div",{staticClass:"jobIntention"},[t._m(1),n("div",{staticClass:"jobIntention-wrapper"},[n("span",[t._v(t._s(t.data.jobIntention.position))]),n("span",[t._v(t._s(t.data.jobIntention.city))]),n("span",[t._v(t._s(t.data.jobIntention.salary))]),n("span",[t._v(t._s(t.data.jobIntention.entryTime))])])]),n("div",{staticClass:"itSkill"},[t._m(2),n("ul",t._l(t.data.itSkill,(function(a){return n("li",{key:a.id},[t._v(t._s(a.description))])})),0)]),n("div",{staticClass:"project"},[t._m(3),n("div",{staticClass:"content"},t._l(t.data.project,(function(a){return n("div",{key:a.id,staticClass:"item"},[n("span",{staticClass:"left"},[t._v(t._s(a.time))]),n("span",{staticClass:"right"},[t._v(t._s(a.name))]),n("div",{staticClass:"descript"},[t._v(t._s(a.background))]),n("ul",t._l(t.data.project.problem,(function(a){return n("li",{key:a.id},[t._v(t._s(a.problem))])})),0)])})),0),n("div",{staticClass:"awards"},[t._m(4),n("ul",t._l(t.data.awards,(function(a){return n("li",{key:a.time},[n("div",{staticClass:"awards-wrap"},[n("span",[t._v(t._s(a.title))]),n("span",[t._v(t._s(a.time))])])])})),0)]),n("div",{staticClass:"personalEvaluation"},[t._m(5),n("ul",t._l(t.data.personalEvaluation,(function(a,e){return n("li",{key:e},[t._v(t._s(a))])})),0)])])]):t._e()},o=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container educationBackground-container"},[n("p",[t._v("教育背景")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container jobIntention-container"},[n("p",[t._v("求职意向")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container itSkill-container"},[n("p",[t._v("IT技能")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container project-container"},[n("p",[t._v("项目经验")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container awards-container"},[n("p",[t._v("个人奖项")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container personalEvaluation-container"},[n("p",[t._v("自我评价")])])}],c={props:{data:{require:!0}},mounted:function(){console.log("数据",this.data)}},l=c,u=(n("450a"),n("2877")),d=Object(u["a"])(l,r,o,!1,null,"526d5196",null),_=d.exports,v={components:{Resume:_},computed:Object(i["mapState"])("resume",["isLoading","data"]),created:function(){this.$store.dispatch("resume/fetchResume")}},p=v,f=(n("651a"),Object(u["a"])(p,e,s,!1,null,"b5b98b68",null));a["default"]=f.exports},"335b":function(t,a,n){},"450a":function(t,a,n){"use strict";n("335b")},"651a":function(t,a,n){"use strict";n("9eeb")},"6e10":function(t,a,n){},"8af2":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div")},s=[],i={},r=i,o=n("2877"),c=Object(o["a"])(r,e,s,!1,null,"58d55e64",null);a["default"]=c.exports},"9eeb":function(t,a,n){},b78d:function(t,a,n){"use strict";n("6e10")}}]);
//# sourceMappingURL=about.bc49c1b1.js.map