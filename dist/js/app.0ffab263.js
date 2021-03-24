(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"98c58da6"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var v=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2ce1":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("CommonHeader"),a("main",[t._m(0),a("div",{attrs:{id:"about"}},[a("h2",{staticClass:"section-title"},[a("font-awesome-icon",{attrs:{icon:"check-circle"}}),t._v(" about")],1),t._m(1)]),a("div",{attrs:{id:"business"}},[a("h2",{staticClass:"section-title"},[a("font-awesome-icon",{attrs:{icon:"briefcase"}}),t._v(" service")],1),a("div",{staticClass:"business-wrap"},t._l(t.business,(function(e,r){return a("div",{key:r,staticClass:"business-cat"},[a("font-awesome-icon",{staticClass:"tools",attrs:{icon:e.icon}},[t._v(t._s(e.icon))]),a("h3",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.description))])],1)})),0)]),a("div",{attrs:{id:"company"}},[a("h2",{staticClass:"section-title"},[a("font-awesome-icon",{attrs:{icon:"warehouse"}}),t._v(" company")],1),t._m(2)]),a("div",{attrs:{id:"contact"}},[a("h2",{staticClass:"section-title"},[a("font-awesome-icon",{attrs:{icon:"user-check"}}),t._v(" contact")],1),a("form",{staticClass:"form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.sendContact()}}},[a("div",[a("label",{attrs:{for:"name"}},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"name",name:"user-name"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),a("div",[a("label",{attrs:{for:"mail"}},[t._v("E-mail:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"mail",name:"user-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",[a("label",{attrs:{for:"tell"}},[t._v("Tell:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"tel",id:"tel",name:"user-tel"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})]),a("div",[a("label",{attrs:{for:"msg"}},[t._v("Message:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{name:"user-message",id:"msg"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),t._m(3)])])]),a("CommonFooter")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"eyecatch"}},[a("p",[t._v("TOTAL WORKS")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-wrap"},[r("div",{staticClass:"about-left"},[r("img",{attrs:{src:a("c29b")}})]),r("div",{staticClass:"about-right"},[r("h3",[t._v("TOTAL WORKS")]),r("p",[t._v("〇〇市で新築外構工事・デザイン外構工事ならお任せください。施工実績が豊富な私たちが、安くて質の高い工事をお約束します。新築工事以外にも、造成工事、リフォーム外構工事もやっていますので遠慮なくお問い合わせください。現地調査、打ち合わせ、デザイン作成、お見積もりまで完全無料で行っておりますので、お気軽にご相談ください。")]),r("ol",[r("li",[t._v("外構工事全般")]),r("li",[t._v("造成工事、リフォーム外構工事")]),r("li",[t._v("設計、見積もり")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"contain"},[a("tr",[a("th",[t._v("屋号")]),a("td",[t._v("TOTAL WORKS")])]),a("tr",[a("th",[t._v("代表者名")]),a("td",[t._v("田中 昌也")])]),a("tr",[a("th",[t._v("所在地")]),a("td",[t._v("兵庫県宍粟市山崎町0-0-0")])]),a("tr",[a("th",[t._v("従業員数")]),a("td",[t._v("10名")])]),a("tr",[a("th",[t._v("電話番号")]),a("td",[t._v("0120-0000-0000")])]),a("tr",[a("th",[t._v("FAX")]),a("td",[t._v("0120-0000-0000")])]),a("tr",[a("th",[t._v("メールアドレス")]),a("td",[t._v("tanaka@totalworks.jp")])]),a("tr",[a("th",[t._v("主な事業内容")]),a("td",[t._v("外構工事業")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-submit"},[a("button",{staticClass:"button",attrs:{type:"submit"}},[t._v("送信")])])}],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[t._m(0),a("div",{class:{active:t.isClass},attrs:{id:"hamburger"},on:{click:function(e){return t.hamburger()}}},[a("span"),a("span"),a("span")]),a("nav",{staticClass:"menu-content",class:{open:t.isClass}},[a("ul",{staticClass:"menu-content_inner"},[a("li",[a("a",{class:{active:t.isClass},attrs:{href:"#app"},on:{click:function(e){return t.hamburger()}}},[t._v("home")])]),a("li",[a("a",{class:{active:t.isClass},attrs:{href:"#about"},on:{click:function(e){return t.hamburger()}}},[t._v("about")])]),a("li",[a("a",{class:{active:t.isClass},attrs:{href:"#business"},on:{click:function(e){return t.hamburger()}}},[t._v("service")])]),a("li",[a("a",{class:{active:t.isClass},attrs:{href:"#company"},on:{click:function(e){return t.hamburger()}}},[t._v("company")])]),a("li",[a("a",{class:{active:t.isClass},attrs:{href:"#contact"},on:{click:function(e){return t.hamburger()}}},[t._v("contact")])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-wrap"},[a("h1",{staticClass:"header-logo"},[t._v("TOTAL WORKS")]),a("nav",{staticClass:"header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:"#app"}},[t._v("home")])]),a("li",[a("a",{attrs:{href:"#about"}},[t._v("about")])]),a("li",[a("a",{attrs:{href:"#business"}},[t._v("service")])]),a("li",[a("a",{attrs:{href:"#company"}},[t._v("company")])]),a("li",[a("a",{attrs:{href:"#contact"}},[t._v("contact")])])])])])}],l={data:function(){return{isClass:!1}},methods:{hamburger:function(){this.isClass=!this.isClass}}},c=l,u=(a("f1b4"),a("2877")),v=Object(u["a"])(c,o,i,!1,null,"0e914f17",null),m=v.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"footer"}},[a("div",{staticClass:"header-wrap"},[a("h1",{staticClass:"header-logo"},[t._v("sakuragumi")]),a("nav",{staticClass:"header-nav"},[a("ul",[a("li",[a("a",{attrs:{href:"#app"}},[t._v("home")])]),a("li",[a("a",{attrs:{href:"#about"}},[t._v("about")])]),a("li",[a("a",{attrs:{href:"#business"}},[t._v("service")])]),a("li",[a("a",{attrs:{href:"#company"}},[t._v("company")])])])])]),a("div",{staticClass:"footer"},[a("small",[t._v("Copyright 2021 TOTAL WORKS All Rights Reserved.")])])])}],h={},d=h,_=(a("70e6"),Object(u["a"])(d,p,f,!1,null,"d608e7e6",null)),b=_.exports,g={data:function(){return{business:[{icon:"tools",title:"外構工事業",description:"ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"},{icon:"truck",title:"運送業",description:"ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"},{icon:"utensils",title:"飲食業",description:"ビジネスの説明が入ります。ビジネスの説明が入ります。ビジネスの説明が入ります。"}],text:"",email:"",tel:"",msg:""}},components:{CommonHeader:m,CommonFooter:b},methods:{sendContact:function(){""==this.text||""==this.email||""==this.tel||""==this.msg?alert("入力されていない項目があります"):(this.text="",this.email="",this.tel="",this.msg="",alert("送信しました"))}}},C=g,k=(a("034f"),Object(u["a"])(C,n,s,!1,null,null,null)),w=k.exports,y=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},x=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],T={name:"HelloWorld",props:{msg:String}},$=T,P=(a("b2a1"),Object(u["a"])($,O,E,!1,null,"a87ea5ee",null)),S=P.exports,A={name:"Home",components:{HelloWorld:S}},L=A,W=Object(u["a"])(L,j,x,!1,null,null,null),H=W.exports;r["a"].use(y["a"]);var R=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],N=new y["a"]({mode:"history",base:"/",routes:R}),F=N,K=a("2f62");r["a"].use(K["a"]);var M=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=a("ecee"),I=a("c074"),J=a("ad3d");D["c"].add(I["a"]),r["a"].component("font-awesome-icon",J["a"]),r["a"].config.productionTip=!1,new r["a"]({router:F,store:M,render:function(t){return t(w)}}).$mount("#app")},"65b1":function(t,e,a){},"70e6":function(t,e,a){"use strict";a("65b1")},"85ec":function(t,e,a){},"88ea":function(t,e,a){},b2a1:function(t,e,a){"use strict";a("2ce1")},c29b:function(t,e,a){t.exports=a.p+"img/carpenter.26245bd4.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},f1b4:function(t,e,a){"use strict";a("88ea")}});
//# sourceMappingURL=app.0ffab263.js.map