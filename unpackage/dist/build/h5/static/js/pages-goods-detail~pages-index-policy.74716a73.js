(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-detail~pages-index-policy"],{"0924":function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){return i}));var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.clear.apply(void 0,arguments)}}},[n("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTap.apply(void 0,arguments)}}}),n("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},e=[]},"0a88":function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){return i}));var o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.isShow?n("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},e=[]},"40f5":function(t,a,n){var i=n("bbb8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5f88f3c0",i,!0,{sourceMap:!1,shadowMode:!1})},"53e9":function(t,a,n){"use strict";n.r(a);var i=n("bbf4"),o=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,(function(){return i[t]}))}(e);a["default"]=o.a},5626:function(t,a,n){"use strict";n.r(a);var i=n("0924"),o=n("53e9");for(var e in o)"default"!==e&&function(t){n.d(a,t,(function(){return o[t]}))}(e);n("7c03");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"58ca1dc8",null,!1,i["a"],r);a["default"]=c.exports},"6a5a":function(t,a,n){"use strict";n.r(a);var i=n("bc73"),o=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,(function(){return i[t]}))}(e);a["default"]=o.a},"7c03":function(t,a,n){"use strict";var i=n("40f5"),o=n.n(i);o.a},"98b0":function(t,a,n){var i=n("f6bf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("604b69ff",i,!0,{sourceMap:!1,shadowMode:!1})},a305:function(t,a,n){"use strict";var i=n("98b0"),o=n.n(i);o.a},a737:function(t,a,n){"use strict";n.r(a);var i=n("0a88"),o=n("6a5a");for(var e in o)"default"!==e&&function(t){n.d(a,t,(function(){return o[t]}))}(e);n("a305");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2c9ecbd2",null,!1,i["a"],r);a["default"]=c.exports},bbb8:function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup[data-v-58ca1dc8]{position:fixed;top:var(--window-top);bottom:0;left:0;right:0;z-index:99}.uni-popup__mask[data-v-58ca1dc8]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-58ca1dc8]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-58ca1dc8]{opacity:1}.uni-bottom-mask[data-v-58ca1dc8]{opacity:1}.uni-center-mask[data-v-58ca1dc8]{opacity:1}.uni-popup__wrapper[data-v-58ca1dc8]{display:block;position:absolute}.top[data-v-58ca1dc8]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-58ca1dc8]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-58ca1dc8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;bottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-58ca1dc8]{display:block;position:relative}.content-ani[data-v-58ca1dc8]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-58ca1dc8]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-58ca1dc8]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-58ca1dc8]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=a},bbf4:function(t,a,n){"use strict";var i=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(n("a737")),e={name:"UniPopup",components:{uniTransition:o.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0}),50)})),this.$emit("change",{show:!0})},close:function(t){var a=this;this.showTrans=!1,this.$nextTick((function(){clearTimeout(a.timer),a.timer=setTimeout((function(){a.$emit("change",{show:!1}),a.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};a.default=e},bc73:function(t,a,n){"use strict";var i=n("4ea4");n("4160"),n("a9e3"),n("ac1f"),n("5319"),n("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(n("5530")),e={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,o.default)((0,o.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),a="";for(var n in t){var i=this.toLine(n);a+=i+":"+t[n]+";"}return a}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var a in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===a?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[a]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var a=this,n=this.getTranfrom(t);for(var i in this.transform="",n)"opacity"===i?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(n[i]," ");this.timer=setTimeout((function(){t||(a.isShow=!1),a.$emit("change",{detail:a.isShow})}),this.duration)},getTranfrom:function(t){var a={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":a.opacity=t?1:0;break;case"slide-top":a.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":a.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":a.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":a.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":a.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":a.transform+="scale(".concat(t?1:1.2,") ");break}})),a},_modeClassArr:function(t){var a=this.modeClass;if("string"!==typeof a){var n="";return a.forEach((function(a){n+=a+"-"+t+","})),n.substr(0,n.length-1)}return a+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};a.default=e},f6bf:function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,".uni-transition[data-v-2c9ecbd2]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-2c9ecbd2]{opacity:0}.fade-active[data-v-2c9ecbd2]{opacity:1}.slide-top-in[data-v-2c9ecbd2]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-2c9ecbd2]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-2c9ecbd2]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-2c9ecbd2]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-2c9ecbd2]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-2c9ecbd2]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-2c9ecbd2]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-2c9ecbd2]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-2c9ecbd2]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-2c9ecbd2]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-2c9ecbd2]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=a}}]);