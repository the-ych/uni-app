(function(e){function a(a){for(var t,r,s=a[0],u=a[1],c=a[2],g=0,l=[];g<s.length;g++)r=s[g],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);p&&p(a);while(l.length)l.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,a=0;a<o.length;a++){for(var n=o[a],t=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(t=!1)}t&&(o.splice(a--,1),e=s(s.s=n[0]))}return e}var t={},i={index:0},o=[];function r(e){return s.p+"static/js/"+({"pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me":"pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me","pages-auth-login~pages-auth-register":"pages-auth-login~pages-auth-register","pages-auth-login":"pages-auth-login","pages-auth-register":"pages-auth-register","pages-chat~pages-chatList~pages-notifications":"pages-chat~pages-chatList~pages-notifications","pages-chat":"pages-chat","pages-chatList":"pages-chatList","pages-me":"pages-me","pages-notifications":"pages-notifications","pages-home":"pages-home","pages-relationship-beLiked":"pages-relationship-beLiked","pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa":"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa","pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release":"pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release","pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video":"pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video"}[e]||e)+"."+{"pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me":"f5ee77cb","pages-auth-login~pages-auth-register":"78212d5a","pages-auth-login":"d33de89e","pages-auth-register":"bd28f655","pages-chat~pages-chatList~pages-notifications":"ff30107b","pages-chat":"05a8bf86","pages-chatList":"501def6c","pages-me":"157f2d07","pages-notifications":"cb7d6048","pages-home":"740a3513","pages-relationship-beLiked":"5b299034","pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa":"2a2a2711","pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release":"82b31640","pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video":"ec165686"}[e]+".js"}function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n=i[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,t){n=i[e]=[a,t]}));a.push(n[2]=t);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e);var c=new Error;o=function(a){u.onerror=u.onload=null,clearTimeout(g);var n=i[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.name="ChunkLoadError",c.type=t,c.request=o,n[1](c)}i[e]=void 0}};var g=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=t,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)s.d(n,t,function(a){return e[a]}.bind(null,t));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=a,u=u.slice();for(var g=0;g<u.length;g++)a(u[g]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var t=n("ef9e"),i=n.n(t);i.a},"23be":function(e,a,n){"use strict";n.r(a);var t=n("3b4e"),i=n.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){n.d(a,e,(function(){return t[e]}))}(o);a["default"]=i.a},"3b4e":function(e,a,n){"use strict";n("7a82");var t=n("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=t(n("c41b")),o=t(n("cb4b")),r={onLaunch:function(){console.log("App Launch"),this.globalData.Pusher=n("782e"),this.globalData.Echo=new i.default({broadcaster:"pusher",wsHost:"ychapi.hsuan.app",wsPath:"/websocket",wsPort:"",key:"test_key",cluster:"mt1",forceTLS:!1,authorizer:function(e,a){return{authorize:function(a,n){(0,o.default)({method:"POST",auth:!1,url:"/broadcasting/auth",data:{socket_id:a,channel_name:e.name},success:function(e){n(!1,e.data)}})}}}}),setTimeout((function(){uni.setTabBarBadge({index:1,text:"31"}),uni.showTabBarRedDot({index:3})}),1e3)},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};a.default=r},"3dfd":function(e,a,n){"use strict";n.r(a);var t=n("4a60"),i=n("23be");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(a,e,(function(){return i[e]}))}(o);n("034f");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],r);a["default"]=u.exports},"4a60":function(e,a,n){"use strict";var t;n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return t}));var i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[]},"56d7":function(e,a,n){"use strict";var t=n("ee27").default,i=t(n("f3f3"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6cdc"),n("1c31");var o=t(n("3dfd")),r=t(n("e143"));r.default.config.productionTip=!1,o.default.mpType="app";var s=new r.default((0,i.default)({},o.default));s.$mount()},"6cdc":function(e,a,n){"use strict";(function(e){var a=n("ee27").default;n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var t=a(n("e143")),i={keys:function(){return[]}};e["____E03B557____"]=!0,delete e["____E03B557____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"YCH",navigationBarBackgroundColor:"#F7B3CD",backgroundColor:"#FBF9FE"},tabBar:{borderStyle:"white",backgroundColor:"#F7B3CD",color:"#8F8F94",selectedColor:"#f33e54",list:[{pagePath:"pages/home",iconPath:"static/img/tabbar/home.png",selectedIconPath:"static/img/tabbar/homeactive.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/chatList",iconPath:"static/img/tabbar/guanzhu.png",selectedIconPath:"static/img/tabbar/guanzhuactive.png",text:"聊天列表",redDot:!1,badge:""},{pagePath:"pages/tabbar/tabbar-3/tabbar-3",iconPath:"static/img/tabbar/add.png",selectedIconPath:"static/img/tabbar/addactive.png",text:"",redDot:!1,badge:""},{pagePath:"pages/notifications",iconPath:"static/img/tabbar/news.png",selectedIconPath:"static/img/tabbar/newsactive.png",text:"通知",redDot:!1,badge:""},{pagePath:"pages/me",iconPath:"static/img/tabbar/me.png",selectedIconPath:"static/img/tabbar/meactive.png",text:"我",redDot:!1,badge:""}]}},e.__uniConfig.compilerVersion="3.4.7",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,a){var n=a.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=i(a);return Object.assign(e[n]||(e[n]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,t.default.component("pages-home",(function(e){var a={component:n.e("pages-home").then(function(){return e(n("eea6"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-relationship-beLiked",(function(e){var a={component:n.e("pages-relationship-beLiked").then(function(){return e(n("8951"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-chat",(function(e){var a={component:Promise.all([n.e("pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me"),n.e("pages-chat~pages-chatList~pages-notifications"),n.e("pages-chat")]).then(function(){return e(n("0259"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-chatList",(function(e){var a={component:Promise.all([n.e("pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me"),n.e("pages-chat~pages-chatList~pages-notifications"),n.e("pages-chatList")]).then(function(){return e(n("c80f"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-notifications",(function(e){var a={component:Promise.all([n.e("pages-chat~pages-chatList~pages-notifications"),n.e("pages-notifications")]).then(function(){return e(n("605f"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-me",(function(e){var a={component:Promise.all([n.e("pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me"),n.e("pages-me")]).then(function(){return e(n("2d17"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-auth-login",(function(e){var a={component:Promise.all([n.e("pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me"),n.e("pages-auth-login~pages-auth-register"),n.e("pages-auth-login")]).then(function(){return e(n("e37c"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-auth-register",(function(e){var a={component:Promise.all([n.e("pages-auth-login~pages-auth-register~pages-chat~pages-chatList~pages-me"),n.e("pages-auth-login~pages-auth-register"),n.e("pages-auth-register")]).then(function(){return e(n("8871"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",(function(e){var a={component:n.e("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release").then(function(){return e(n("948a"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",(function(e){var a={component:n.e("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video").then(function(){return e(n("64c6"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),t.default.component("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",(function(e){var a={component:n.e("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa").then(function(){return e(n("0ca6"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(a.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(a.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),a})),e.__uniRoutes=[{path:"/",alias:"/pages/home",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"YCH"})},[e("pages-home",{slot:"page"})])}},meta:{id:1,name:"pages-home",isNVue:!1,maxWidth:0,pagePath:"pages/home",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/relationship/beLiked",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"誰喜歡我"})},[e("pages-relationship-beLiked",{slot:"page"})])}},meta:{name:"pages-relationship-beLiked",isNVue:!1,maxWidth:0,pagePath:"pages/relationship/beLiked",windowTop:44}},{path:"/pages/chat",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"聊天室"})},[e("pages-chat",{slot:"page"})])}},meta:{name:"pages-chat",isNVue:!1,maxWidth:0,pagePath:"pages/chat",windowTop:44}},{path:"/pages/chatList",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"聊天列表"})},[e("pages-chatList",{slot:"page"})])}},meta:{id:2,name:"pages-chatList",isNVue:!1,maxWidth:0,pagePath:"pages/chatList",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/notifications",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"通知"})},[e("pages-notifications",{slot:"page"})])}},meta:{id:3,name:"pages-notifications",isNVue:!1,maxWidth:0,pagePath:"pages/notifications",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/me",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:4},__uniConfig.globalStyle,{navigationBarTitleText:""})},[e("pages-me",{slot:"page"})])}},meta:{id:4,name:"pages-me",isNVue:!1,maxWidth:0,pagePath:"pages/me",isQuit:!0,isTabBar:!0,tabBarIndex:4,windowTop:44}},{path:"/pages/auth/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"註冊或登入"})},[e("pages-auth-login",{slot:"page"})])}},meta:{name:"pages-auth-login",isNVue:!1,maxWidth:0,pagePath:"pages/auth/login",windowTop:44}},{path:"/pages/auth/register",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"註冊帳號"})},[e("pages-auth-register",{slot:"page"})])}},meta:{name:"pages-auth-register",isNVue:!1,maxWidth:0,pagePath:"pages/auth/register",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))},cb4b:function(e,a,n){"use strict";n("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(e){e.url="https://ychapi.hsuan.app"+e.url;try{var a=uni.getStorageSync("access_token");if(a)e.header={Authorization:"Bearer "+a,"Content-Type":"application/json",Accept:"application/json"};else if(e.auth&&!0===e.auth)return void uni.reLaunch({url:"/pages/me?action=toast&message=您尚未登入&type=error"})}catch(n){console.log(n)}return e.complete=function(e){401===e.statusCode&&(uni.removeStorageSync("access_token"),uni.reLaunch({url:"/pages/me?action=toast&message=您尚未登入&type=error"}))},e.fail||(e.fail=function(e){uni.showToast({title:e,icon:"error",mask:!0})}),uni.request(e)},i=t;a.default=i},ea0b:function(e,a,n){var t=n("24fb");a=t(!1),a.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=a},ef9e:function(e,a,n){var t=n("ea0b");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=n("4f06").default;i("d88fd794",t,!0,{sourceMap:!1,shadowMode:!1})}});