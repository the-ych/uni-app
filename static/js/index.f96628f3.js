(function(a){function e(e){for(var t,o,s=e[0],u=e[1],b=e[2],g=0,l=[];g<s.length;g++)o=s[g],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(a[t]=u[t]);c&&c(e);while(l.length)l.shift()();return i.push.apply(i,b||[]),n()}function n(){for(var a,e=0;e<i.length;e++){for(var n=i[e],t=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(t=!1)}t&&(i.splice(e--,1),a=s(s.s=n[0]))}return a}var t={},r={index:0},i=[];function o(a){return s.p+"static/js/"+({"pages-auth-login~pages-auth-register":"pages-auth-login~pages-auth-register","pages-auth-login":"pages-auth-login","pages-auth-register":"pages-auth-register","pages-home":"pages-home","pages-me":"pages-me","pages-relationship-beLiked":"pages-relationship-beLiked","pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa":"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa","pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release":"pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release","pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video":"pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video","pages-tabbar-tabbar-3-tabbar-3":"pages-tabbar-tabbar-3-tabbar-3","pages-tabbar-tabbar-4-tabbar-4":"pages-tabbar-tabbar-4-tabbar-4"}[a]||a)+"."+{"pages-auth-login~pages-auth-register":"a2c532f5","pages-auth-login":"586bf29b","pages-auth-register":"e5e61eec","pages-home":"c062786e","pages-me":"c94be868","pages-relationship-beLiked":"5b299034","pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa":"2a2a2711","pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release":"82b31640","pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video":"ec165686","pages-tabbar-tabbar-3-tabbar-3":"cf7a2efa","pages-tabbar-tabbar-4-tabbar-4":"a0234712"}[a]+".js"}function s(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return a[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(a){var e=[],n=r[a];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise((function(e,t){n=r[a]=[e,t]}));e.push(n[2]=t);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(a);var b=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(g);var n=r[a];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;b.message="Loading chunk "+a+" failed.\n("+t+": "+i+")",b.name="ChunkLoadError",b.type=t,b.request=i,n[1](b)}r[a]=void 0}};var g=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},s.m=a,s.c=t,s.d=function(a,e,n){s.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,e){if(1&e&&(a=s(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)s.d(n,t,function(e){return a[e]}.bind(null,t));return n},s.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(e,"a",e),e},s.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},s.p="/",s.oe=function(a){throw console.error(a),a};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],b=u.push.bind(u);u.push=e,u=u.slice();for(var g=0;g<u.length;g++)e(u[g]);var c=b;i.push([0,"chunk-vendors"]),n()})({0:function(a,e,n){a.exports=n("56d7")},"034f":function(a,e,n){"use strict";var t=n("ef9e"),r=n.n(t);r.a},"23be":function(a,e,n){"use strict";n.r(e);var t=n("3b4e"),r=n.n(t);for(var i in t)["default"].indexOf(i)<0&&function(a){n.d(e,a,(function(){return t[a]}))}(i);e["default"]=r.a},"3b4e":function(a,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log("App Launch"),setTimeout((function(){uni.setTabBarBadge({index:1,text:"31"}),uni.showTabBarRedDot({index:3})}),1e3)},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=t},"3dfd":function(a,e,n){"use strict";n.r(e);var t=n("a04c"),r=n("23be");for(var i in r)["default"].indexOf(i)<0&&function(a){n.d(e,a,(function(){return r[a]}))}(i);n("034f");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],o);e["default"]=u.exports},"56d7":function(a,e,n){"use strict";var t=n("ee27").default,r=t(n("f3f3"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6cdc"),n("1c31");var i=t(n("3dfd")),o=t(n("e143"));o.default.config.productionTip=!1,i.default.mpType="app";var s=new o.default((0,r.default)({},i.default));s.$mount()},"6cdc":function(a,e,n){"use strict";(function(a){var e=n("ee27").default;n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var t=e(n("e143")),r={keys:function(){return[]}};a["____E03B557____"]=!0,delete a["____E03B557____"],a.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"YCH",navigationBarBackgroundColor:"#0faeff",backgroundColor:"#FBF9FE"},tabBar:{borderStyle:"black",backgroundColor:"#333",color:"#8F8F94",selectedColor:"#f33e54",list:[{pagePath:"pages/home",iconPath:"static/img/tabbar/home.png",selectedIconPath:"static/img/tabbar/homeactive.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/relationship/beLiked",iconPath:"static/img/tabbar/guanzhu.png",selectedIconPath:"static/img/tabbar/guanzhuactive.png",text:"誰喜歡我",redDot:!1,badge:""},{pagePath:"pages/tabbar/tabbar-3/tabbar-3",iconPath:"static/img/tabbar/add.png",selectedIconPath:"static/img/tabbar/addactive.png",text:"",redDot:!1,badge:""},{pagePath:"pages/tabbar/tabbar-4/tabbar-4",iconPath:"static/img/tabbar/news.png",selectedIconPath:"static/img/tabbar/newsactive.png",text:"消息",redDot:!1,badge:""},{pagePath:"pages/me",iconPath:"static/img/tabbar/me.png",selectedIconPath:"static/img/tabbar/meactive.png",text:"我",redDot:!1,badge:""}]}},a.__uniConfig.compilerVersion="3.4.7",a.__uniConfig.router={mode:"hash",base:"/"},a.__uniConfig.publicPath="/",a.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},a.__uniConfig.debug=!1,a.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},a.__uniConfig.sdkConfigs={},a.__uniConfig.qqMapKey=void 0,a.__uniConfig.googleMapKey=void 0,a.__uniConfig.locale="",a.__uniConfig.fallbackLocale=void 0,a.__uniConfig.locales=r.keys().reduce((function(a,e){var n=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=r(e);return Object.assign(a[n]||(a[n]={}),t.common||t),a}),{}),a.__uniConfig.nvue={"flex-direction":"column"},a.__uniConfig.__webpack_chunk_load__=n.e,t.default.component("pages-home",(function(a){var e={component:n.e("pages-home").then(function(){return a(n("eea6"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-relationship-beLiked",(function(a){var e={component:n.e("pages-relationship-beLiked").then(function(){return a(n("8951"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-tabbar-tabbar-3-tabbar-3",(function(a){var e={component:n.e("pages-tabbar-tabbar-3-tabbar-3").then(function(){return a(n("c315"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-tabbar-tabbar-4-tabbar-4",(function(a){var e={component:n.e("pages-tabbar-tabbar-4-tabbar-4").then(function(){return a(n("798d"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-me",(function(a){var e={component:n.e("pages-me").then(function(){return a(n("2d17"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-auth-login",(function(a){var e={component:Promise.all([n.e("pages-auth-login~pages-auth-register"),n.e("pages-auth-login")]).then(function(){return a(n("e37c"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-auth-register",(function(a){var e={component:Promise.all([n.e("pages-auth-login~pages-auth-register"),n.e("pages-auth-register")]).then(function(){return a(n("8871"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",(function(a){var e={component:n.e("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release").then(function(){return a(n("948a"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",(function(a){var e={component:n.e("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video").then(function(){return a(n("64c6"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",(function(a){var e={component:n.e("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa").then(function(){return a(n("0ca6"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(a){return a(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(a){return a(__uniConfig["async"]["error"])}}),e})),a.__uniRoutes=[{path:"/",alias:"/pages/home",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"YCH"})},[a("pages-home",{slot:"page"})])}},meta:{id:1,name:"pages-home",isNVue:!1,maxWidth:0,pagePath:"pages/home",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/relationship/beLiked",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"誰喜歡我"})},[a("pages-relationship-beLiked",{slot:"page"})])}},meta:{id:2,name:"pages-relationship-beLiked",isNVue:!1,maxWidth:0,pagePath:"pages/relationship/beLiked",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/tabbar/tabbar-3/tabbar-3",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{})},[a("pages-tabbar-tabbar-3-tabbar-3",{slot:"page"})])}},meta:{id:3,name:"pages-tabbar-tabbar-3-tabbar-3",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar/tabbar-3/tabbar-3",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/tabbar/tabbar-4/tabbar-4",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{})},[a("pages-tabbar-tabbar-4-tabbar-4",{slot:"page"})])}},meta:{id:4,name:"pages-tabbar-tabbar-4-tabbar-4",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar/tabbar-4/tabbar-4",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/me",component:{render:function(a){return a("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:4},__uniConfig.globalStyle,{navigationBarTitleText:""})},[a("pages-me",{slot:"page"})])}},meta:{id:5,name:"pages-me",isNVue:!1,maxWidth:0,pagePath:"pages/me",isQuit:!0,isTabBar:!0,tabBarIndex:4,windowTop:44}},{path:"/pages/auth/login",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"註冊或登入"})},[a("pages-auth-login",{slot:"page"})])}},meta:{name:"pages-auth-login",isNVue:!1,maxWidth:0,pagePath:"pages/auth/login",windowTop:44}},{path:"/pages/auth/register",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"註冊帳號"})},[a("pages-auth-register",{slot:"page"})])}},meta:{name:"pages-auth-register",isNVue:!1,maxWidth:0,pagePath:"pages/auth/register",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[a("pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-release-tabbar-3-release",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar-3-detial/tabbar-3-release/tabbar-3-release",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[a("pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-video-tabbar-3-video",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video",windowTop:44}},{path:"/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa",component:{render:function(a){return a("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[a("pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",{slot:"page"})])}},meta:{name:"pages-tabbar-3-detial-tabbar-3-qa-tabbar-3-qa",isNVue:!1,maxWidth:0,pagePath:"pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa",windowTop:44}},{path:"/preview-image",component:{render:function(a){return a("Page",{props:{navigationStyle:"custom"}},[a("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(a){return a("Page",{props:{navigationStyle:"custom"}},[a("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(a){return a("Page",{props:{navigationStyle:"custom"}},[a("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],a.UniApp&&new a.UniApp}).call(this,n("c8ba"))},a04c:function(a,e,n){"use strict";var t;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return t}));var r=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("App",{attrs:{keepAliveInclude:a.keepAliveInclude}})},i=[]},ea0b:function(a,e,n){var t=n("24fb");e=t(!1),e.push([a.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),a.exports=e},ef9e:function(a,e,n){var t=n("ea0b");"string"===typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);var r=n("4f06").default;r("d88fd794",t,!0,{sourceMap:!1,shadowMode:!1})}});