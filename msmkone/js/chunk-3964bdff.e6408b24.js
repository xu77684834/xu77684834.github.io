(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3964bdff"],{"076e":function(t,s,i){},bed1:function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"box"},[i("div",{staticClass:"user"},[i("div",{staticClass:"user_icon"},[i("div",{staticClass:"head"},[i("section",[i("div",{on:{click:t.grxx}},[i("img",{attrs:{src:t.list.avatar}}),i("span",[t._v(t._s(t.list.nickname))]),i("van-icon",{attrs:{name:"edit"}}),i("h4",[t._v("去约课")])],1)]),i("div",{staticClass:"info"},[i("ul",[i("li",{on:{click:t.tsk}},[i("h3",[t._v(t._s(t.kcNum))]),i("p",[t._v("我的特色课")]),i("span",[t._v("已购特色课程的学习")])]),i("li",{on:{click:t.ydy}},[i("h3",[t._v(t._s(t.oto))]),i("p",[t._v("一对一辅导")]),i("span",[t._v("我的一对一老师辅导")])]),i("li",{on:{click:t.xxb}},[i("h3",[t._v(t._s(t.integral.toFixed(2)))]),i("p",[t._v("剩余学习币")]),i("span",[t._v("查看剩余学习币")])])])])])]),i("div",{staticClass:"yao"},[i("div",[i("van-icon",{attrs:{name:"point-gift"}}),t._m(0),i("i"),i("i"),i("i"),i("van-icon",{attrs:{name:"arrow"}})],1)]),i("ul",{staticClass:"menu"},[i("li",[i("p",{staticClass:"menu-title"},[t._v("课程相关")]),i("div",{staticClass:"menu-box"},[i("div",{on:{click:function(s){return t.jbr_gz()}}},[i("span",{staticClass:"iconfont van-icon icn"},[t._v("")]),i("p",[t._v("关注的老师")])]),i("div",{on:{click:function(s){return t.jbr_sc()}}},[i("span",{staticClass:"iconfont van-icon icn"},[t._v("")]),i("p",[t._v("我的收藏")])])])]),i("li",[i("p",{staticClass:"menu-title"},[t._v("订单相关")]),i("div",{staticClass:"menu-box"},[i("div",[i("span",{staticClass:"iconfont van-icon ion",on:{click:function(s){return t.qbdd(1)}}},[t._v("")]),i("p",[t._v("课程订单")])]),i("div",[i("span",{staticClass:"iconfont van-icon ion",on:{click:function(s){return t.qbdd(2)}}},[t._v("")]),i("p",[t._v("会员订单")])]),i("div",[i("span",{staticClass:"iconfont van-icon ion",on:{click:function(s){return t.qbdd(3)}}},[t._v("")]),i("p",[t._v("约课订单")])])])]),i("li",[i("p",{staticClass:"menu-title"},[t._v("我的账户")]),i("div",{staticClass:"menu-box"},[i("div",[i("span",{staticClass:"iconfont van-icon iin",on:{click:t.yh}},[t._v("")]),i("p",[t._v("优惠卷")])]),i("div",[i("span",{staticClass:"iconfont van-icon iin",on:{click:t.xxk}},[t._v("")]),i("p",[t._v("学习卡")])]),i("div",[i("span",{staticClass:"iconfont van-icon iin",on:{click:t.svip}},[t._v("")]),i("p",[t._v("会员")])])])]),i("li",{staticClass:"lit"},[i("p",{staticClass:"menu-title"},[t._v("自助服务")]),i("div",{staticClass:"menu-box"},[i("div",[i("span",{staticClass:"iconfont van-icon inn",on:{click:t.myxx}},[t._v("")]),i("p",[t._v("我的消息")])]),i("div",[i("span",{staticClass:"iconfont van-icon inn",on:{click:t.yjfk}},[t._v("")]),i("p",[t._v("意见反馈")])]),i("div",[i("span",{staticClass:"iconfont van-icon inn",on:{click:t.kf}},[t._v("")]),i("p",[t._v("在线客服")])]),i("div",[i("van-icon",{attrs:{name:"setting-o inn"},on:{click:t.tcsz}}),i("p",[t._v("设置")])],1)])])])])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",[i("p",[t._v("邀请好友注册APP，享多重好礼")]),i("span",[t._v("限时特惠，多邀多得")])])}],c={name:"",props:[],components:{},data(){return{flag:!1,list:JSON.parse(sessionStorage.getItem("user")),jsq:"",active:JSON.parse(localStorage.getItem("act"))||0,kcNum:0,integral:0,oto:0}},computed:{},methods:{xxb(){this.$router.push("/mycurrency")},svip(){console.log(1),this.$router.push("/vip")},ydy(){this.$store.state.act=2,this.$router.push("/footer/myask")},tsk(){this.$router.push("/mycoures")},qbdd(t){this.jsq=t,this.$router.push({name:"Order",params:{v:this.jsq}})},yh(){this.$router.push("/coupon")},kf(){this.$router.push("/xinfen")},xxk(){this.$router.push("/card")},grxx(){this.$router.push("/info")},jbr_gz(){this.$router.push("/gzls")},jbr_sc(){this.$router.push("/scls")},myxx(){this.$router.push("/message")},yjfk(){this.$router.push("/feedback")},tcsz(){this.$router.push("/options")},async num(){let{data:t}=await this.$Axios.get("/api/app/getUCenterInfo");console.log(t),this.kcNum=t.data.courses,this.integral=t.data.integral,this.oto=t.data.oto}},watch:{active(t){sessionStorage.setItem("act",JSON.stringify(t))}},created(){},mounted(){this.num()}},o=c,e=(i("df8f"),i("2c07")),r=Object(e["a"])(o,n,a,!1,null,"66b9386a",null);s["default"]=r.exports},df8f:function(t,s,i){"use strict";i("076e")}}]);
//# sourceMappingURL=chunk-3964bdff.e6408b24.js.map