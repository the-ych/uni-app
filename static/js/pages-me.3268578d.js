(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me"],{"1db5":function(t,a,e){"use strict";e.r(a);var i=e("491d"),o=e.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=o.a},"2d17":function(t,a,e){"use strict";e.r(a);var i=e("fc89"),o=e("1db5");for(var n in o)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(n);e("c4e8");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"e1a82806",null,!1,i["a"],s);a["default"]=c.exports},"491d":function(t,a,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=i(e("5215")),n="0.1.0",s={data:function(){return{name:"",logined:!1,avatarUrl:"../static/logo.png",logoutBtnLoading:!1,APP_VERSION:n}},onLoad:function(t){"toast"===t.action&&(t.type?uni.showToast({title:t.message,icon:t.type}):uni.showToast({title:t.message}));try{var a=JSON.parse(uni.getStorageSync("user")),e=uni.getStorageSync("access_token"),i=a.profile.avatar;e&&(this.logined=!0,this.name=a.name),i&&(this.avatarUrl=i)}catch(o){}},methods:{auth:function(){this.logined||uni.navigateTo({url:"/pages/auth/login"})},logout:function(){var t=uni.getStorageSync("access_token");uni.request({url:"https://ychapi.hsuan.app/api/auth/logout",method:"POST",data:{access_token:t},header:{Authorization:"Bearer ".concat(t)},success:function(t){uni.removeStorageSync("access_token"),uni.removeStorageSync("user"),uni.reLaunch({url:"/pages/me?action=toast&message=登出成功"})}})},openURL:o.default}};a.default=s},5098:function(t,a,e){var i=e("fc3a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("5a316bf8",i,!0,{sourceMap:!1,shadowMode:!1})},5215:function(t,a,e){"use strict";function i(t){window.open(t)}e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=i},c4e8:function(t,a,e){"use strict";var i=e("5098"),o=e.n(i);o.a},fc3a:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css);"]),a.push([t.i,".content[data-v-e1a82806]{text-align:center;height:%?400?%;margin-top:%?200?%;padding:%?10?%}.savepadding[data-v-e1a82806]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);box-sizing:initial}\n\n/* ios底部安全距离-bottom*/.savebottom[data-v-e1a82806]{bottom:constant(safe-area-inset-bottom);bottom:env(safe-area-inset-bottom)}.place-bottom[data-v-e1a82806]{position:fixed;bottom:var(--window-bottom);left:0;right:0;height:calc(.5 * %?125?%);line-height:calc(.5 *100rpx);background:#fff}uni-page-body[data-v-e1a82806],\nuni-view[data-v-e1a82806]{display:flex}uni-page-body[data-v-e1a82806]{background-color:#f8f8f8}uni-button[data-v-e1a82806]{width:100%}.center[data-v-e1a82806]{flex-direction:column}.logo[data-v-e1a82806]{width:%?750?%;height:%?175?%;padding:%?20?%;box-sizing:border-box;background-color:#f7b3cd;flex-direction:row;align-items:center}.pointer[data-v-e1a82806]{cursor:pointer}.logo-hover[data-v-e1a82806]{opacity:.8;cursor:pointer}.logo-img[data-v-e1a82806]{width:%?120?%;height:%?120?%;border-radius:%?150?%}.logo-title[data-v-e1a82806]{height:%?150?%;flex:1;align-items:center;justify-content:space-between;flex-direction:row;margin-left:%?20?%}.user-name[data-v-e1a82806]{height:%?60?%;line-height:%?60?%;color:#fff}.go-login.navigat-arrow[data-v-e1a82806]{color:#fff}.login-title[data-v-e1a82806]{height:%?150?%;align-items:self-start;justify-content:center;flex-direction:column;margin-left:%?20?%}.center-list[data-v-e1a82806]{background-color:#fff;margin-top:%?20?%;width:%?750?%;flex-direction:column}.center-list-item[data-v-e1a82806]{height:%?90?%;width:%?750?%;box-sizing:border-box;flex-direction:row;padding:%?0?% %?20?%}.border-bottom[data-v-e1a82806]{border-bottom-width:%?1?%;border-color:#c8c7cc;border-bottom-style:solid}.list-icon[data-v-e1a82806]{width:%?40?%;height:%?90?%;line-height:%?90?%;color:#f7b3cd;text-align:center;margin-right:%?20?%}.list-text[data-v-e1a82806]{height:%?90?%;line-height:%?90?%;color:#555;flex:1;text-align:left}.navigat-arrow[data-v-e1a82806]{height:%?90?%;width:%?40?%;line-height:%?90?%;color:#555;text-align:right}body.?%PAGE?%[data-v-e1a82806]{background-color:#f8f8f8}",""]),t.exports=a},fc89:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{},[e("v-uni-view",{staticClass:"center"},[e("v-uni-view",{staticClass:"logo",attrs:{"hover-class":t.logined?"":"logo-hover"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.auth.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"logo-img",attrs:{src:t.avatarUrl}}),e("v-uni-view",{staticClass:"logo-title"},[e("v-uni-text",{staticClass:"user-name"},[t._v("Hi，"+t._s(t.logined?t.name+" 歡迎你使用YCH":"您未登入"))]),t.logined?t._e():e("v-uni-text",{staticClass:"go-login navigat-arrow"},[e("i",{staticClass:"fa-solid fa-arrow-right"})])],1)],1),e("v-uni-view",{staticClass:"center-list"}),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item border-bottom pointer"},[e("v-uni-text",{staticClass:"list-icon"},[e("i",{staticClass:"fa-solid fa-circle-question"})]),e("v-uni-text",{staticClass:"list-text"},[t._v("幫助與意見回饋")]),e("v-uni-text",{staticClass:"navigat-arrow"},[e("i",{staticClass:"fa-solid fa-chevron-right"})])],1),e("v-uni-view",{staticClass:"center-list-item pointer",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.openURL("https://policy.hsuan.app")}}},[e("v-uni-text",{staticClass:"list-icon"},[e("i",{staticClass:"fa-solid fa-book"})]),e("v-uni-text",{staticClass:"list-text"},[t._v("服務條款及隱私權條款")]),e("v-uni-text",{staticClass:"navigat-arrow"},[e("i",{staticClass:"fa-solid fa-chevron-right"})])],1)],1),e("v-uni-view",{staticClass:"center-list"},[e("v-uni-view",{staticClass:"center-list-item pointer"},[e("v-uni-text",{staticClass:"list-icon"},[e("i",{staticClass:"fa-solid fa-circle-info"})]),e("v-uni-text",{staticClass:"list-text"},[t._v("關於YCH (v"+t._s(t.APP_VERSION)+")")]),e("v-uni-text",{staticClass:"navigat-arrow"},[e("i",{staticClass:"fa-solid fa-chevron-right"})])],1)],1),e("v-uni-view",{staticClass:"btn-row place-bottom"},[t.logined?e("v-uni-button",{staticClass:"primary",staticStyle:{"border-bottom-left-radius":"0","border-bottom-right-radius":"0","border-top-left-radius":"12pt","border-top-right-radius":"12pt","font-size":"16pt"},attrs:{type:"primary",loading:t.logoutBtnLoading},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.logout.apply(void 0,arguments)}}},[t._v("登出")]):t._e()],1)],1)],1)},n=[]}}]);