(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me"],{"02c9":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("ac1f"),a("00b4");var e=function(){var t=window.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(t)},n=function(){return"standalone"in window.navigator&&window.navigator.standalone},o={data:function(){return{showInstallMessage:!1}},mounted:function(){console.log(window.navigator.userAgent);var t=uni.getStorageSync("isCloseTip");t||this.init()},methods:{init:function(){console.log(e()),e()&&!n()&&(this.showInstallMessage=!0)},hide:function(){this.showInstallMessage=!1},onClick:function(){uni.setStorageSync("isCloseTip","abcdedfs"),this.hide()}}};i.default=o},"1db5":function(t,i,a){"use strict";a.r(i);var e=a("491d"),n=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},2408:function(t,i,a){var e=a("652b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("01a87bd6",e,!0,{sourceMap:!1,shadowMode:!1})},"2d17":function(t,i,a){"use strict";a.r(i);var e=a("e41f"),n=a("1db5");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("6387");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"6a0b001c",null,!1,e["a"],s);i["default"]=c.exports},4269:function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={uniIcons:a("1a49").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.showInstallMessage?e("v-uni-view",{staticClass:"prompt-popup-container"},[e("v-uni-view",{staticClass:"prompt-popup-wrapper"},[e("v-uni-view",{staticClass:"close-tip-btn"},[e("uni-icons",{staticClass:"close-icon",attrs:{type:"closeempty",size:"20"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick.apply(void 0,arguments)}}})],1),t._v("Safari瀏覽器中點擊"),e("v-uni-image",{staticClass:"propmt-share-icon",attrs:{mode:"aspectFill",src:a("8c34")}}),t._v("，選擇【添加到主螢幕】快速安裝"),e("v-uni-view",{staticClass:"triangle"})],1)],1):t._e()},o=[]},"491d":function(t,i,a){"use strict";a("7a82");var e=a("ee27").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("e025")),o=e(a("5215")),s=e(a("1a49")),r="0.1.0",c={components:{UniIcons:s.default,promptInstall:n.default},data:function(){return{me:{profile:{},wallet:{}},name:"",logined:!1,avatarUrl:"../static/logo.png",logoutBtnLoading:!1,APP_VERSION:r}},onLoad:function(t){"toast"===t.action&&(t.type?uni.showToast({title:t.message,icon:t.type}):uni.showToast({title:t.message}));try{var i=uni.getStorageSync("user"),a=uni.getStorageSync("access_token"),e=i.profile.avatar;a&&(this.me=i,this.logined=!0,this.name=i.name),e&&(this.avatarUrl=e)}catch(n){}},methods:{clickProfile:function(){this.logined?uni.navigateTo({url:"/pages/profile"}):uni.navigateTo({url:"/pages/auth/login"})},logout:function(){var t=uni.getStorageSync("access_token");uni.request({url:"https://ychapi.hsuan.app/api/auth/logout",method:"POST",data:{access_token:t},header:{Authorization:"Bearer ".concat(t)},success:function(t){uni.removeStorageSync("access_token"),uni.removeStorageSync("user"),uni.reLaunch({url:"/pages/me?action=toast&message=登出成功"})}})},openURL:o.default}};i.default=c},5215:function(t,i,a){"use strict";function e(t){window.open(t)}a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=e},6387:function(t,i,a){"use strict";var e=a("d290"),n=a.n(e);n.a},"652b":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.prompt-popup-container[data-v-6c22a8d5]{position:fixed;bottom:%?30?%;left:%?40?%;right:%?40?%;z-index:1000}.prompt-popup-container .prompt-popup-wrapper[data-v-6c22a8d5]{position:relative;background-color:#e5e5e5;border-radius:%?10?%;padding:%?10?% %?30?% %?30?% %?30?%}.prompt-popup-container .prompt-popup-wrapper .close-tip-btn[data-v-6c22a8d5]{position:relative;line-height:%?30?%;height:%?30?%}.prompt-popup-container .prompt-popup-wrapper .close-tip-btn .close-icon[data-v-6c22a8d5]{position:absolute;top:0;right:0}.prompt-popup-container .prompt-popup-wrapper .propmt-share-icon[data-v-6c22a8d5]{width:%?22.8?%;height:%?32.4?%;margin:0 %?8?%}.prompt-popup-container .prompt-popup-wrapper .triangle[data-v-6c22a8d5]{z-index:999;border:%?24?% solid transparent;border-top:%?24?% solid #e5e5e5;position:absolute;left:50%;bottom:%?-48?%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}',""]),t.exports=i},"84b6":function(t,i,a){"use strict";a.r(i);var e=a("02c9"),n=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"85b2":function(t,i,a){"use strict";var e=a("2408"),n=a.n(e);n.a},"8c34":function(t,i,a){t.exports=a.p+"static/img/Navigation_Action.efb20889.png"},d290:function(t,i,a){var e=a("dcb2");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("27276784",e,!0,{sourceMap:!1,shadowMode:!1})},dcb2:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css);"]),i.push([t.i,".content[data-v-6a0b001c]{text-align:center;height:%?400?%;margin-top:%?200?%;padding:%?10?%}.savepadding[data-v-6a0b001c]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);box-sizing:initial}\n\n/* ios底部安全距离-bottom*/.savebottom[data-v-6a0b001c]{bottom:constant(safe-area-inset-bottom);bottom:env(safe-area-inset-bottom)}.place-bottom[data-v-6a0b001c]{position:fixed;bottom:var(--window-bottom);left:0;right:0;background:#fff}uni-page-body[data-v-6a0b001c],\nuni-view[data-v-6a0b001c]{display:flex}uni-page-body[data-v-6a0b001c]{background-color:#f8f8f8}uni-button[data-v-6a0b001c]{width:100%}.center[data-v-6a0b001c]{flex-direction:column}.logo[data-v-6a0b001c]{width:%?750?%;height:%?175?%;padding:%?20?%;box-sizing:border-box;background-color:#f7b3cd;flex-direction:row;align-items:center}.pointer[data-v-6a0b001c]{cursor:pointer}.logo-hover[data-v-6a0b001c]{opacity:.8;cursor:pointer}.logo-img[data-v-6a0b001c]{width:%?120?%;height:%?120?%;border-radius:%?150?%}.logo-title[data-v-6a0b001c]{height:%?150?%;flex:1;align-items:center;justify-content:space-between;flex-direction:row;margin-left:%?20?%}.user-name[data-v-6a0b001c]{height:%?60?%;line-height:%?60?%;color:#fff}.go-login.navigat-arrow[data-v-6a0b001c]{color:#fff}.login-title[data-v-6a0b001c]{height:%?150?%;align-items:self-start;justify-content:center;flex-direction:column;margin-left:%?20?%}.center-list[data-v-6a0b001c]{background-color:#fff;margin-top:%?20?%;width:%?750?%;flex-direction:column}.center-list-item[data-v-6a0b001c]{height:%?90?%;width:%?750?%;box-sizing:border-box;flex-direction:row;padding:%?0?% %?20?%}.border-bottom[data-v-6a0b001c]{border-bottom-width:%?1?%;border-color:#c8c7cc;border-bottom-style:solid}.list-icon[data-v-6a0b001c]{width:%?40?%;height:%?90?%;line-height:%?90?%;color:#f7b3cd;text-align:center;margin-right:%?20?%}.list-text[data-v-6a0b001c]{height:%?90?%;line-height:%?90?%;color:#555;flex:1;text-align:left}.navigat-arrow[data-v-6a0b001c]{height:%?90?%;width:%?40?%;line-height:%?90?%;color:#555;text-align:right}body.?%PAGE?%[data-v-6a0b001c]{background-color:#f8f8f8}",""]),t.exports=i},e025:function(t,i,a){"use strict";a.r(i);var e=a("4269"),n=a("84b6");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("85b2");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"6c22a8d5",null,!1,e["a"],s);i["default"]=c.exports},e41f:function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={uniIcons:a("1a49").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"center"},[a("v-uni-view",{staticClass:"logo",attrs:{"hover-class":t.logined?"":"logo-hover"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickProfile.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"logo-img",attrs:{src:t.avatarUrl}}),a("v-uni-view",{staticClass:"logo-title"},[a("v-uni-text",{staticClass:"user-name"},[t._v("Hi，"+t._s(t.logined?t.name:"您未登入"))]),t.logined?t._e():a("v-uni-text",{staticClass:"go-login navigat-arrow",staticStyle:{"margin-right":"20rpx"}},[a("uni-icons",{attrs:{type:"forward",size:"30",color:"white"}})],1),t.logined?a("v-uni-text",{staticClass:"go-login navigat-arrow",staticStyle:{"margin-right":"20rpx"}},[a("uni-icons",{attrs:{type:"settings-filled",size:"30",color:"white"}})],1):t._e()],1)],1),a("v-uni-view",{staticClass:"center-list"},[t.logined?a("v-uni-view",{staticClass:"center-list-item border-bottom pointer"},[a("v-uni-text",{staticClass:"list-icon"},[t._v("🅨")]),a("v-uni-text",{staticClass:"list-text"},[t._v("共有： "+t._s(t.me.wallet.balance)+"個"),a("v-uni-text",{staticClass:"color-orange"},[t._v("🅨")]),t._v("幣")],1)],1):t._e()],1),a("v-uni-view",{staticClass:"center-list"}),a("v-uni-view",{staticClass:"center-list"},[a("v-uni-view",{staticClass:"center-list-item border-bottom pointer"},[a("v-uni-text",{staticClass:"list-icon"},[a("i",{staticClass:"fa-solid fa-circle-question"})]),a("v-uni-text",{staticClass:"list-text"},[t._v("幫助與意見回饋")]),a("v-uni-text",{staticClass:"navigat-arrow"},[a("i",{staticClass:"fa-solid fa-chevron-right"})])],1),a("v-uni-view",{staticClass:"center-list-item pointer",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openURL("https://policy.hsuan.app")}}},[a("v-uni-text",{staticClass:"list-icon"},[a("i",{staticClass:"fa-solid fa-book"})]),a("v-uni-text",{staticClass:"list-text"},[t._v("服務條款及隱私權條款")]),a("v-uni-text",{staticClass:"navigat-arrow"},[a("i",{staticClass:"fa-solid fa-chevron-right"})])],1)],1),a("v-uni-view",{staticClass:"center-list"},[a("v-uni-view",{staticClass:"center-list-item pointer"},[a("v-uni-text",{staticClass:"list-icon"},[a("i",{staticClass:"fa-solid fa-circle-info"})]),a("v-uni-text",{staticClass:"list-text"},[t._v("關於YCH (v"+t._s(t.APP_VERSION)+")")]),a("v-uni-text",{staticClass:"navigat-arrow"},[a("i",{staticClass:"fa-solid fa-chevron-right"})])],1)],1),a("v-uni-view",{staticClass:"btn-row place-bottom"},[t.logined?a("v-uni-button",{staticClass:"primary",staticStyle:{"border-bottom-left-radius":"0","border-bottom-right-radius":"0","border-top-left-radius":"12pt","border-top-right-radius":"12pt","font-size":"16pt"},attrs:{type:"primary",loading:t.logoutBtnLoading},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logout.apply(void 0,arguments)}}},[t._v("登出")]):t._e()],1)],1),a("promptInstall")],1)},o=[]}}]);