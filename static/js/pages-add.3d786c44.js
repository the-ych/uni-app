(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-add"],{"0092":function(t,a,n){var e=n("fb2e");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("2448277e",e,!0,{sourceMap:!1,shadowMode:!1})},"136b":function(t,a,n){"use strict";n("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{active:!1}},onLoad:function(){},onShow:function(){this.active=!0},onHide:function(){this.active=!1},methods:{goToPage:function(t){t&&uni.navigateTo({url:t})}}};a.default=e},"1e71":function(t,a,n){"use strict";n.r(a);var e=n("7864"),i=n("f065");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("2b226");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"6eecd080",null,!1,e["a"],r);a["default"]=s.exports},"2b226":function(t,a,n){"use strict";var e=n("0092"),i=n.n(e);i.a},7864:function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content",class:{active:t.active}},[e("v-uni-image",{staticClass:"logo rounded",class:{active:t.active},attrs:{src:n("cac3"),mode:"aspectFit"}}),e("v-uni-view",{staticClass:"tabbar-box-wrap"},[e("v-uni-view",{staticClass:"tabbar-box"},[e("v-uni-view",{staticClass:"tabbar-box-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goToPage("/pages/post/post")}}},[e("v-uni-image",{staticClass:"box-image",attrs:{src:n("c7af"),mode:"aspectFit"}}),e("v-uni-text",{staticClass:"explain"},[t._v("發文章")])],1),e("v-uni-view",{staticClass:"tabbar-box-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goToPage("/pages/post/post?anonymous=1")}}},[e("v-uni-image",{staticClass:"box-image",attrs:{src:n("9185"),mode:"aspectFit"}}),e("v-uni-text",{staticClass:"explain"},[t._v("匿名提問")])],1)],1)],1)],1)},o=[]},9185:function(t,a,n){t.exports=n.p+"static/img/qa.3ba01b46.png"},c7af:function(t,a,n){t.exports=n.p+"static/img/release.c06e8701.png"},cac3:function(t,a,n){t.exports=n.p+"static/img/logo.4f718b91.png"},f065:function(t,a,n){"use strict";n.r(a);var e=n("136b"),i=n.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},fb2e:function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-6eecd080]{display:flex;align-items:center;justify-content:center;width:100%;height:calc(100vh - var(--window-bottom) - var(--window-top));transition:opacity .3s;background:#999;opacity:0}.content.active[data-v-6eecd080]{opacity:1}.content .logo[data-v-6eecd080]{position:relative;margin-top:%?-400?%;width:%?200?%;height:%?200?%;opacity:0;transition:opacity .3s}.content .logo.active[data-v-6eecd080]{opacity:1}.tabbar-box-wrap[data-v-6eecd080]{position:absolute;width:100%;padding:%?50?%;box-sizing:border-box;bottom:0;left:0}.tabbar-box-wrap .tabbar-box[data-v-6eecd080]{position:relative;display:flex;width:100%;background:#fff;border-radius:%?20?%;padding:%?15?% %?20?%;box-sizing:border-box;z-index:2;box-shadow:0 2px 5px 2px rgba(0,0,0,.1)}.tabbar-box-wrap .tabbar-box[data-v-6eecd080]:after{content:"";position:absolute;bottom:%?-16?%;left:0;right:0;margin:auto;width:%?50?%;height:%?50?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#fff;z-index:1;box-shadow:2px 2px 5px 1px rgba(0,0,0,.1);border-radius:2px}.tabbar-box-wrap .tabbar-box[data-v-6eecd080]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;border-radius:%?20?%;z-index:2}.tabbar-box-wrap .tabbar-box .tabbar-box-item[data-v-6eecd080]{width:100%;z-index:3;margin:%?10?%;color:#555;text-align:center;font-size:%?28?%}.tabbar-box-wrap .tabbar-box .tabbar-box-item .box-image[data-v-6eecd080]{width:100%;height:%?80?%}',""]),t.exports=a}}]);