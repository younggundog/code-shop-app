(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"72aa":function(t,e,n){"use strict";n.r(e);var r=n("8c60"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},8017:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEJ0lEQVRoQ+1ZXW7TQBD+xkEtIkiEE5AmTyBXlBNQTtD2BJQTEN6a8EB4SXgjnID2BG1PQHuCpkqAp6TuCQgSILUiHrSObdau7d21o1SV6pdI2b/5Zma/+cYm3PCHbrj9uAVw3RGcawS+Vt9usMWbAK+DqBqAY8YExEcEHJSny4crTnsyL+BzATCsN1+C0ZaNTjNQgLGA3j136dM8gBQCcFZtV36XLvYBWr9iMOOciR1iVED09Oo4O3Bpy3Y6/SLRyA3AM966/ALCWpgq4GMC7ZanSwdx7w6qO+tUom2AXsqpRS5eFAGRG8Cg3twn0KYwhpl/lgjbT0bdA5U3h9XWGizeDaIiUqoIiFwAvtWbmy5oPzCeXFo38eIs9S53AWx4gBl9e9x5pgKfNJ4LwLDWOglSxwJv6Xg+frifgn0QHomxvPsYA/he3alOS9aZ77lze9wJ6dLUg8N6axvAZ3/doT3qeClp8hgDmF1G68ssffB+ddxpmxwYnzust3jmDHbscXfFdC9jAMNaswGij/6hb+xxt2d6qDx/UG8eEei5+M8edYztMV4gR6A0dVceOx+cIgC+1lo9JrwGI1c6GgMQxop7IH6LGh8AF065j7v9PJVZCUDwdgn8oIiX86/lc5WTUgH4BWdfR9/kN1BjJXPPHnffpM1MB1Brnl278b7VWWyXCECutGA+ZZBSImj40miKBVS8yz2j68nquPMwaYNEAINaq02Ed/6CV/aoI8r+wh8dik0EIFfIeRSrvMiHUhqn1YjkCEjVFsCVEi90zB/r8jWDKxbhOK8Wmu2BqkV8mLSHVKVP7XE3lO2yQ9IvcVjio0pxJsIuTmIto5GkEHv8si7PiFAJjWGOVHW5YCY5MViXwUItJ1CKcvhiAiw830QGROTIf6aJXFTdNE4FIF8gWTLELnguADp7yHOypHY6AImJeOq+WHU+HAUyIpTTgffAx6uj7tW+OOX2ekWyhJPoMO/Zo66Q194jOxBTPEtrmLLuQKjV40zk1Qmmnp9ih+Xp0rapjonuwXvl6XJD3kNumrLSMz0CESaKeicvLZqs02EgsV+mmAs2YcMUMTE0aW4sxTI7tWwAtWQmKmqgan30pUF215cJII2JVAYUHddlIGUKyRvJTFTUQNX6Yb0lxOPslUsGAykByAVnkZpIl4GUAKLlfHFMpMtASgD+G7QfYuKimEhmIJ0zlT3xoNacEJHXE5voHVWep42bMJAyAvGSPo/XKCpgps2UMgLhexuRRpImUhmSd1xmIJ3zlAAWzUQ6XZjsHCUA+SJ7l5nRuONyoa8qadH5W0Ij+OaQ1cQYARCT5TTKmxom68QHE91vDsoIBAcvCoTJ1x4tFpI9JziaLWwSYU009CZeVc21mPoMdsru8q5Jb6EdAZUB1zV+C+C6PB+ce+Mj8A+RIlVPzrg52gAAAABJRU5ErkJggg=="},"82ac":function(t,e,n){"use strict";var r=n("faba"),i=n.n(r);i.a},"8c60":function(t,e,n){"use strict";(function(t){var r=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),a={components:{},data:function(){var t=this.getConst(),e=this.getSysInfo(),n=e.screenWidth,r="13rem";r=46*n/75+"px";var i=.48*n*.94+"px";return{bannerHeight:r,goodsImgHeight:i,conf:t,carouselList:[{pic:""}],categoryList:[],adList:[{pic:""}],activity1:{},activity2:{},activity3:{},cond:{pageFrom:"",pageSize:2},goodsList:[]}},onNavigationBarSearchInputClicked:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$navigateTo("/pages/goods/HM-search");case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onNavigationBarButtonTap:function(e){t("log",e," at pages/index/index.vue:165");var n=e.index;0===n&&this.$navigateTo("/pages/index/notice")},onReachBottom:function(){uni.showLoading({title:"加载中"}),setTimeout(this.getProudctList,500)},onShow:function(){this.$isFocus(),this.getUser()&&this.getUser().id&&this.$refreshUser(this.getUser().id)},onLoad:function(){this.reloadProductList()},methods:{todetail:function(t){var e=t.id,n="/pages/goods/detail?id=".concat(e);this.$navigateTo(n)},reloadProductList:function(){this.cond.pageFrom=0,this.goodsList=[],this.getProudctList()},getProudctList:function(){var t={};t.pageFrom=this.cond.pageFrom,t.pageSize=this.cond.pageSize;var e=this;uni.request({url:"http://localhost:8888/codeworld-search/goods/get-new-product-index",method:"POST",data:JSON.stringify(t),success:function(t){if(2e4===t.data.code){var n=t.data.data;for(var r in n){var i=n[r];i.image=e.getLi(i.images)[0]||e.getConst("").default_img}e.goodsList=e.goodsList.concat(n),uni.hideLoading(),n.length>0&&(e.cond.pageFrom=e.cond.pageFrom+1)}}})},tosearch:function(e){t("log",e," at pages/index/index.vue:414")}}};e.default=a}).call(this,n("0de9")["log"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=x;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(k([])));y&&y!==r&&i.call(y,o)&&(g=y);var w=E.prototype=L.prototype=Object.create(g);C.prototype=w.constructor=E,E.constructor=C,E[c]=C.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},b(S.prototype),S.prototype[s]=function(){return this},l.AsyncIterator=S,l.async=function(t,e,n,r){var i=new S(x(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),w[c]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(t,e,n,r){var i=e&&e.prototype instanceof L?e:L,a=Object.create(i.prototype),o=new P(r||[]);return a._invoke=I(t,n,o),a}function A(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function C(){}function E(){}function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){function e(n,r,a,o){var s=A(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(s.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function I(t,e,n){var r=h;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw a;return B()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var s=T(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=A(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function T(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=A(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:B}}function B(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"99a3":function(t,e,n){"use strict";n.r(e);var r=n("efc7"),i=n("72aa");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("82ac");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"57c0dfd8",null,!1,r["a"],o);e["default"]=c.exports},d629:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.name[data-v-57c0dfd8]{font-size:%?26?%;color:#555}.sale-num[data-v-57c0dfd8]{color:#bbb;font-size:14px}.price[data-v-57c0dfd8]{color:#fa436a;font-size:14px}',""]),t.exports=e},efc7:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"page"},[r("v-uni-view",{staticClass:"ps-re w100p",style:"height: "+t.bannerHeight+";"},[r("v-uni-swiper",{staticClass:"w100p h100p",attrs:{circular:"true",autoplay:"true"}},t._l(t.carouselList,(function(e,n){return r("v-uni-swiper-item",{key:n,staticClass:"w100p h100p",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navToBannerPage(e)}}},[r("v-uni-image",{staticClass:"w100p h100p",attrs:{src:e.pic}})],1)})),1)],1),r("v-uni-view",{staticClass:"center98 flex wrap",staticStyle:{"margin-top":"1rem"}},t._l(t.categoryList,(function(e,n){return r("v-uni-view",{key:n,staticClass:"w20p flex-col m-center c-center",staticStyle:{height:"5rem"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.tocatelist(e)}}},[r("v-uni-image",{staticClass:"w66p h50p ",staticStyle:{"border-radius":"50%"},attrs:{src:e.image}}),r("v-uni-text",{staticClass:"w80p h30p fs6dr flex m-center c555",staticStyle:{"margin-top":"0.4rem"}},[t._v(t._s(e.name))])],1)})),1),r("v-uni-view",{staticClass:"center92 flex",staticStyle:{"margin-top":"0.6rem",height:"9.6rem"}},[r("v-uni-view",{staticClass:"h100p w44p flex m-center c-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toaclist(t.activity2)}}},[r("v-uni-view",{staticClass:"w97p h97p brrr2dr"},[r("v-uni-image",{staticClass:"w100p h100p",attrs:{src:t.activity2.image}})],1)],1),r("v-uni-view",{staticClass:"h100p w56p"},[r("v-uni-view",{staticClass:"w100p h50p flex m-center c-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toaclist(t.activity1)}}},[r("v-uni-view",{staticClass:"w97p h97p brrr2dr"},[r("v-uni-image",{staticClass:"w100p h100p",attrs:{src:t.activity1.image}})],1)],1),r("v-uni-view",{staticClass:"w100p h50p flex m-center c-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toaclist(t.activity3)}}},[r("v-uni-view",{staticClass:"w97p h97p brrr2dr"},[r("v-uni-image",{staticClass:"w100p h100p",attrs:{src:t.activity3.image}})],1)],1)],1)],1),r("v-uni-view",{staticClass:"center92 flex brrr3dr",staticStyle:{height:"7rem","margin-top":"0.6rem"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToBannerPage(t.adList[0])}}},[r("v-uni-image",{staticClass:"w100p h100p brrr3dr",attrs:{src:t.adList[0].pic}})],1),r("v-uni-view",{staticClass:"center92 flex c-center",staticStyle:{"margin-top":"0.8rem",height:"2rem"}},[r("v-uni-image",{staticStyle:{width:"1.6rem",height:"1.6rem"},attrs:{src:n("8017")}}),r("v-uni-view",{staticClass:"h100p flex-col",staticStyle:{"margin-left":"0.4rem"}},[r("v-uni-view",{staticClass:"h70p fs1r"},[t._v("新品上市")]),r("v-uni-view",{staticClass:"h30p fs7dr caaa",staticStyle:{"margin-top":"-0.2rem"}},[t._v("new goods saling")])],1)],1),r("v-uni-view",{staticClass:"center94 flex m-sb wrap",staticStyle:{"align-content":"flex-start","margin-top":"0.2rem"}},t._l(t.goodsList,(function(e,n){return r("v-uni-view",{key:n,staticClass:"w48p ",staticStyle:{height:"auto","margin-top":"1.5rem"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.todetail(e)}}},[r("v-uni-view",{staticClass:"w100p "},[r("v-uni-image",{staticClass:"w100p",style:"height:"+t.goodsImgHeight,attrs:{src:e.image}})],1),r("v-uni-view",{staticClass:"w100p  fs1r",staticStyle:{height:"2.5rem"}},[r("v-uni-view",{staticClass:"name h100p",staticStyle:{"font-size":"12px",overflow:"hidden"}},[t._v(t._s(t.$endwith(e.title,28)))])],1),r("v-uni-view",{staticClass:"center96  flex m-sb",staticStyle:{"margin-top":"0"}},[r("span",{staticClass:"price"},[t._v("￥"+t._s(null==e.promotionPrice?e.price:e.promtionPrice))]),r("span",{staticClass:"sale-num"},[t._v("销量"+t._s(e.saleNum||"0")+"件")])])],1)})),1),r("v-uni-view",{staticStyle:{height:"2rem"}})],1)},a=[]},faba:function(t,e,n){var r=n("d629");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("0e1e1af7",r,!0,{sourceMap:!1,shadowMode:!1})}}]);