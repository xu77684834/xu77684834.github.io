(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-320af7e6"],{"3d7c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"xmc_bd"},[s("div",{staticClass:"xmc_bk"},[s("van-field",{attrs:{center:"",clearable:"",placeholder:"请输入手机号"},scopedSlots:t._u([{key:"button",fn:function(){return[s("button",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}],staticClass:"xmc_btn",on:{click:t.dlyz}},[t._v("发送验证码")]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"xmc_btn clock",attrs:{disabled:""}},[t._v("60秒后重试")])]},proxy:!0}]),model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1),s("div",{staticClass:"xmc_bk"},[s("van-cell-group",[s("van-field",{attrs:{placeholder:"请输入短信验证码"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),s("div",{staticClass:"xmc_mm"},[s("span",[t._v("*未注册的手机号将自动注册")]),s("span",{on:{click:t.login}},[t._v("使用密码登录")])])]),s("div",{staticClass:"xmc_tj"},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"linear-gradient(to right, #ff6034, #ee0a24)"},on:{click:t.tj}},[t._v("登录")])],1)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"xmc_t"},[s("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png",alt:""}})])}],i=s("a336"),n=s.n(i),o={name:"",props:[],components:{},data(){return{tel:"",value:"",flag:!1}},computed:{},watch:{},methods:{login(){this.$router.push("/")},dlyz(){if(""==this.tel)return this.$toast("请先输入手机号"),!1;this.flag=!0,this.sendCode(),this.$Axios.post("/api/app/smsCode",{mobile:this.tel,sms_type:"login"}).then(t=>{console.log(t)})},tj(){return""==this.tel?(this.$toast("请输入手机号"),!1):""==this.value?(this.$toast("请输入验证码"),!1):void this.$Axios.post("/api/app/login",{mobile:this.tel,sms_code:this.value,client:1,type:2}).then(t=>{console.log(t)})},sendCode(){let t=60,e=setInterval(()=>{t--,n()(".clock").html(t+"秒后重试"),0==t&&(this.flag=!1,console.log(this.flag),clearInterval(e),n()(".clock").hide().siblings().show())},1e3)}},created(){},mounted(){},updated(){},activated(){},deactivated(){}},c=o,r=(s("ce75"),s("2c07")),d=Object(r["a"])(c,a,l,!1,null,"8b07fee8",null);e["default"]=d.exports},ce75:function(t,e,s){"use strict";s("f96d")},f96d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-320af7e6.9d7f3e9c.js.map