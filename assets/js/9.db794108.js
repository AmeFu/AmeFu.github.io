(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(t,e,n){},115:function(t,e,n){},116:function(t,e,n){},117:function(t,e,n){},118:function(t,e,n){},119:function(t,e,n){},120:function(t,e,n){"use strict";n(128);var s=n(10),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-menu")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,i=n(151),o=(n(111),n(48),n(37),n(18),n(112),n(99)),r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},c=(n(133),Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null).exports),l={components:{NavLink:o.a,DropdownTransition:c},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},u=(n(134),Object(s.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,s){return n("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports),h=n(35),p={components:{NavLink:o.a,DropdownLink:u},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,s=this.$router.options.routes,a=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(i){var o,r=e[i],c=a[i]&&a[i].label||r.lang;return r.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,i),s.some((function(t){return t.path===o}))||(o=i)),{text:c,link:o}}))};return[].concat(Object(i.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(h.h)(t),{items:(t.items||[]).map(h.h)})}))}}},f=(n(135),{components:{SidebarButton:a,NavLinks:Object(s.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length?e("nav",{staticClass:"nav-links"},this._l(this.userLinks,(function(t,n){return e("div",{key:t.link+n,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),0):this._e()}),[],!1,null,null,null).exports},data:function(){return{}},mounted:function(){}}),d=(n(136),Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("div",{staticClass:"inner-block"},[n("a",{staticClass:"home-link",attrs:{href:"/"}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("SidebarButton",{on:{"toggle-menu":function(e){return t.$emit("toggle-menu")}}}),t._v(" "),n("NavLinks",{staticClass:"nav-links"})],1)])}),[],!1,null,null,null));e.a=d.exports},128:function(t,e,n){"use strict";var s=n(92);n.n(s).a},133:function(t,e,n){"use strict";var s=n(94);n.n(s).a},134:function(t,e,n){"use strict";var s=n(95);n.n(s).a},135:function(t,e,n){"use strict";var s=n(96);n.n(s).a},136:function(t,e,n){"use strict";var s=n(97);n.n(s).a},138:function(t,e,n){"use strict";var s={props:["post","top"]},a=(n(186),n(10)),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-header"},[n("h2",{staticClass:"post-title"},[n("a",{attrs:{href:t.post.path}},[t.top?n("span",{staticClass:"top"},[t._v("[置顶]")]):t._e(),t._v(" "),t.post.frontmatter.password?n("span",{staticClass:"top"},[t._v("[密]")]):t._e(),t._v("\n      "+t._s(t.post.title))])]),t._v(" "),n("div",{staticClass:"post-meta"},[n("span",{staticClass:"time post-meta-item"},[t._v("\n      时间:\n      "),n("time",[t._v(t._s(t._f("formatLocaleString")(t._f("toLocaleString")(t.post.lastUpdated))))])]),t._v(" "),t.post.frontmatter.categorys&&t.post.frontmatter.categorys.length>0?n("span",{staticClass:"categorys post-meta-item"},[t._v("\n      |\n      分类:\n      "),t._l(t.post.frontmatter.categorys,(function(e){return n("router-link",{staticClass:"category-item em",attrs:{to:{path:"/category/"+e}}},[t._v(t._s(e))])}))],2):t._e(),t._v(" "),t.post.frontmatter.tags&&t.post.frontmatter.tags.length>0?n("span",{staticClass:"tags post-meta-item"},[t._v("\n      |\n      标签:\n      "),t._l(t.post.frontmatter.tags,(function(e){return n("router-link",{staticClass:"tag-item em",attrs:{to:{path:"/tag/"+e}}},[t._v(t._s(e))])}))],2):t._e()])])}),[],!1,null,"24e249fe",null);e.a=i.exports},139:function(t,e,n){"use strict";var s=function t(){window.Valine?new Valine({appId:"Olf3zqnXyrLW8oQPjVbBJpfN-gzGzoHsz",appKey:"9XOKcIB80L7DKcKUiYQ2paY0",el:"#comment",placeholder:"评论在此",avatar:"monsterid",path:window.location.pathname,recordIP:!0,visitor:!0}):setTimeout(t,50)},a={props:["show"],watch:{$route:"refresh"},mounted:function(){s()},methods:{refresh:function(){s()}}},i=(n(188),n(10)),o=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"comment-page"},[e("div",{ref:"comment",attrs:{id:"comment"}})]):this._e()}),[],!1,null,null,null);e.a=o.exports},150:function(t,e,n){var s=n(1);s(s.P,"Array",{fill:n(181)}),n(50)("fill")},181:function(t,e,n){"use strict";var s=n(11),a=n(51),i=n(6);t.exports=function(t){for(var e=s(this),n=i(e.length),o=arguments.length,r=a(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,l=void 0===c?n:a(c,n);l>r;)e[r++]=t;return e}},182:function(t,e,n){t.exports=n(183)},183:function(t,e,n){n(184);var s=n(83).Object;t.exports=function(t,e,n){return s.defineProperty(t,e,n)}},184:function(t,e,n){var s=n(86);s(s.S+s.F*!n(85),"Object",{defineProperty:n(84).f})},185:function(t,e,n){"use strict";var s=n(114);n.n(s).a},186:function(t,e,n){"use strict";var s=n(115);n.n(s).a},187:function(t,e,n){"use strict";var s=n(116);n.n(s).a},188:function(t,e,n){"use strict";var s=n(117);n.n(s).a},189:function(t,e,n){"use strict";var s=n(118);n.n(s).a},190:function(t,e,n){"use strict";var s=n(119);n.n(s).a},208:function(t,e,n){"use strict";var s=n(178),a=n.n(s);n(150),n(36);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(182),r=n.n(o);function c(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),r()(t,s.key,s)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}n(18),n(20);var u={mounted:function(){this.init()},methods:{init:function(){var t=document.getElementById("mineCanvas"),e=t.getContext("2d"),n=30,s=200,a=["#f4433699","#ffeb3b99","#03a9f499"];function o(){t.width=window.innerWidth,t.height=window.innerHeight}window.onresize=o(),window.onload=function(){o();var i=new c;i.getMousePosition(t),t.addEventListener("mousedown",(function(){var o=function(t,e,i){for(var o=[],c=0;c<t;c++){var l=new r(0,0,36*Math.random()+5,a[parseInt(3*Math.random())]);l.x=e+Math.random()*n-Math.random()*n,l.y=i+Math.random()*n-Math.random()*n;var u=e-l.x,h=i-l.y,p=Math.abs(u/h);l.dx=(u<0?1:-1)*s/Math.sqrt(p*p+1)*Math.random()*p+e,l.dy=(h<0?1:-1)*s/Math.sqrt(p*p+1)*Math.random()+i,o.push(l)}return o}(20,i.x,i.y),c=new r(i.x,i.y,n,"#f4433699"),l=.6;!function n(){requestAnimationFrame(n),e.clearRect(0,0,t.width,t.height),o.forEach((function(t){t.draw("fill"),t.vx=.05*(t.dx-t.x),t.vy=.05*(t.dy-t.y),t.x+=t.vx,t.y+=t.vy,t.sx+=.05*-t.sx,t.sy+=.05*-t.sy})),c.draw("stroke"),c.radius+=.05*(150-c.radius),l-=.03,c.color="rgba(244, 67, 54, ".concat(l,")")}()}),!1)};var r=function(){function t(e,n,s,a){i(this,t),this.x=e||0,this.y=n||0,this.vx=0,this.vy=0,this.sx=1,this.sy=1,this.radius=s||10,this.color=a||"black"}return l(t,[{key:"draw",value:function(t){if(-1==["fill","stroke"].indexOf(t))throw"ball.draw need a right type";e.save(),e.translate(this.x,this.y),e.scale(this.sx,this.sy),e.fillStyle=this.color,e.strokeStyle=this.color,e.beginPath(),e.arc(0,0,this.radius,0,360*Math.PI/180),e.closePath(),"fill"===t?e.fill():e.stroke(),e.restore()}}]),t}(),c=function(){function t(){i(this,t),this.x=0,this.y=0}return l(t,[{key:"getMousePosition",value:function(t){var e=this;t.addEventListener("mousedown",(function(n){e.x=n.clientX-t.offsetLeft,e.y=n.clientY-t.offsetTop}),!1)}}]),t}()}}},h=n(10),p={components:{ColofulTouch:Object(h.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"mineCanvas",width:"100%",height:"100%"}})}),[],!1,null,null,null).exports},data:function(){return{loading:!0,count:0,homeImgList:[],imgList:["/img/hn.gif","/img/hn-1.gif","/img/hn-2.gif","/img/hn-3.gif","/img/hn-4.gif","/img/hn-5.gif","/img/10.gif","/img/10-1.gif"],hitokoto:"",from:""}},created:function(){},mounted:function(){this.getHitoKoto()},methods:{getHitoKoto:function(){var t=this;a.a.get("https://v1.hitokoto.cn/").then((function(e){t.hitokoto=e.data.hitokoto,t.from=e.data&&e.data.from?" —— "+e.data.from:""}))},getBg:function(){a.a.get("https://acg.toubiec.cn/random?return=json").then((function(t){console.log(t)}))}}},f=(n(185),Object(h.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullScreen homePage"},[n("ColofulTouch",{staticClass:"colofulTouch"}),t._v(" "),n("div",{staticClass:"enter-wrap"},[t._m(0),t._v(" "),n("p",{staticClass:"HitoKoto"},[n("span",{staticClass:"text"},[t._v(t._s(t.hitokoto)+t._s(t.from))]),t._v(" "),n("span",{staticClass:"change",attrs:{title:"Hitokoto-一言"},on:{click:t.getHitoKoto}},[t._v("换一换")])]),t._v(" "),n("a",{staticClass:"enter",attrs:{href:"./note"}},[t._v("进入")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"img-wrap"},[e("img",{attrs:{src:"https://unsplash.it/200/200",alt:""}})])}],!1,null,null,null));e.a=f.exports},209:function(t,e,n){"use strict";var s={props:["post","top"],components:{PostHeader:n(138).a}},a=(n(187),n(10)),i={components:{PostItem:Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("article",{staticClass:"post"},[e("PostHeader",{attrs:{post:this.post,top:this.top}}),this._v(" "),e("section",{staticClass:"post-excerpt"},[e("p",{domProps:{innerHTML:this._s(this.post.frontmatter.excerpt)}})])],1)}),[],!1,null,"44735597",null).exports,CommentBar:n(139).a}},o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("div",{staticClass:"post-wrap"},[t._l(t.$tops,(function(t){return n("PostItem",{key:t.key+t.frontmatter.title,attrs:{post:t,top:!0}})})),t._v(" "),t._l(t.$posts,(function(e){return e.frontmatter.top?t._e():n("PostItem",{key:e.key,attrs:{post:e,top:!1}})}))],2),t._v(" "),n("ClientOnly",[n("CommentBar",{attrs:{show:!1}})],1)],1)}),[],!1,null,null,null);e.a=o.exports},210:function(t,e,n){"use strict";n(48);var s=n(138),a=n(35),i={computed:{post:function(){return this.$page},location:function(){return window.location},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,s=t.docsDir,a=void 0===s?"":s,i=t.docsBranch,o=void 0===i?"master":i,r=t.docsRepo,c=void 0===r?e:r;return c&&n&&this.$page.relativePath?this.createEditLink(e,c,a,o,this.$page.relativePath):void 0}}},methods:{createEditLink:function(t,e,n,s,i){return/bitbucket.org/.test(t)?(a.g.test(e)?e:t).replace(a.c,"")+"/src"+"/".concat(s,"/")+(n?n.replace(a.c,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(a.g.test(e)?e:"https://github.com/".concat(e)).replace(a.c,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(a.c,"")+"/":"")+i}}},o=(n(189),n(10)),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"copyright-info"}},[n("p",[n("span",[t._v("作者：")]),t._v(t._s(t.post.frontmatter.author))]),t._v(" "),n("p",[n("span",[t._v("发表日期：")]),t._v(t._s(t._f("toLocaleString")(t.post.publishDate)))]),t._v(" "),n("p",[n("span",[t._v("最后编辑时间：")]),t._v(t._s(t.post.lastUpdated))]),t._v(" "),n("p",[n("span",[t._v("本文 Github 地址：")]),n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.post.relativePath))]),n("OutboundLink")],1),t._v(" "),n("p",[n("span",[t._v("本文链接：")]),n("a",{attrs:{href:t.location.origin+t.post.path,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.location.origin+decodeURIComponent(t.post.path)))]),n("OutboundLink")],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("版权声明：本文为自己原创，未经允许，禁止转载。")])])}],!1,null,"2e6a8b42",null).exports,c=n(139),l={components:{PostHeader:s.a,Copyright:r,CommentBar:c.a},data:function(){return{password:""}},created:function(){},computed:{contentShow:function(){return!this.$page.frontmatter.password||this.password==this.$page.frontmatter.password},post:function(){return this.$page},lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t=this.$page.frontmatter.prev;return!(!1===t||this.$page.index<=0)&&this.$posts[this.$page.index-1]},next:function(){var t=this.$page.frontmatter.next;return!(!1===t||this.$page.index>=this.$posts.length-1)&&this.$posts[this.$page.index+1]},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,s=t.docsDir,a=void 0===s?"":s,i=t.docsBranch,o=void 0===i?"master":i,r=t.docsRepo,c=void 0===r?e:r;return c&&n&&this.$page.relativePath?this.createEditLink(e,c,a,o,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{showContent:function(){this.password=this.$refs.password.value},createEditLink:function(t,e,n,s,i){return/bitbucket.org/.test(t)?(a.g.test(e)?e:t).replace(a.c,"")+"/src"+"/".concat(s,"/")+(n?n.replace(a.c,"")+"/":"")+i+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(a.g.test(e)?e:"https://github.com/".concat(e)).replace(a.c,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(a.c,"")+"/":"")+i}}},u=(n(190),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),t.$page.frontmatter.noPostHeader?t._e():n("PostHeader",{attrs:{post:t.post}}),t._v(" "),t.contentShow?t._e():n("div",{staticClass:"password-wrap"},[n("p",{staticClass:"password-tip"},[t._v("本文内容已被加密，请输入密码后访问。")]),t._v(" "),n("div",{staticClass:"input-wrap"},[n("input",{ref:"password",attrs:{type:"password",name:"password",placeholder:"请输入密码"}}),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.showContent}},[t._v("确认")])])]),t._v(" "),t.contentShow?n("Content",{staticStyle:{padding:"20px 0"}}):t._e(),t._v(" "),(t.$page.frontmatter.noCopyright,t._e()),t._v(" "),t.$page.frontmatter.noPageEdit?t._e():n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":"+t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        上一篇:\n        "),n("router-link",{attrs:{to:t.prev.path,title:t.prev.frontmatter.title||""}},[t._v(t._s(t.prev.frontmatter.title||t.prev.frontmatter.description||t.prev.path))])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t._v("\n        下一篇:\n        "),n("router-link",{attrs:{to:t.next.path,title:t.next.frontmatter.title||""}},[t._v(t._s(t.next.frontmatter.title||t.next.frontmatter.description||t.next.path))])],1):t._e()])]):t._e(),t._v(" "),t.$page.frontmatter.noComment?t._e():n("CommentBar",{attrs:{show:!0}}),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null));e.a=u.exports},295:function(t,e,n){"use strict";n.r(e);var s=n(208),a=n(209),i=n(120),o=n(210);const r=/#.*$/,c=/\.(md|html)$/,l=/\/$/,u=/^[a-z]+:/i;function h(t){return decodeURI(t).replace(r,"").replace(c,"")}function p(t){return u.test(t)}function f(t){if(p(t))return t;const e=t.match(r),n=e?e[0]:"",s=h(t);return l.test(s)?t:s+".html"+n}function d(t,e,n){if(p(e))return{type:"external",path:e};n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const a=e.split("/");n&&a[a.length-1]||a.pop();const i=t.replace(/^\//,"").split("/");for(let t=0;t<i.length;t++){const e=i[t];".."===e?a.pop():"."!==e&&a.push(e)}""!==a[0]&&a.unshift("");return a.join("/")}(e,n));const s=h(e);for(let e=0;e<t.length;e++)if(h(t[e].regularPath)===s)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function v(t,e,n,s){const{pages:a,themeConfig:i}=n,o=s&&i.locales&&i.locales[s]||i;if("auto"===(t.frontmatter.sidebar||o.sidebar||i.sidebar))return function(t){const e=function(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const r=o.sidebar||i.sidebar;if(r){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(s)))return{base:s,config:e[s]};var n;return{}}(e,r);return n?n.map(e=>(function t(e,n,s,a=1){if("string"==typeof e)return d(n,e,s);if(Array.isArray(e))return Object.assign(d(n,e[0],s),{title:e[1]});{a>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const i=e.children||[];return 0===i.length&&e.path?Object.assign(d(n,e.path,s),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:i.map(e=>t(e,n,s,a+1)),collapsable:!1!==e.collapsable}}})(e,a,t)):[]}return[]}var m={components:{Home:s.a,Page:o.a,Navbar:i.a,Note:a.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return v(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1})),console.log(this.$router),console.log(this.$page),console.log(this.sidebarItems),console.log(this.$page,this.$page.regularPath,this.$site,this.$localePath)},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},g=n(10),_=Object(g.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),t.$page.frontmatter.home?n("Home"):t.$page.frontmatter.note?n("Note"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=_.exports},92:function(t,e,n){},94:function(t,e,n){},95:function(t,e,n){},96:function(t,e,n){},97:function(t,e,n){},99:function(t,e,n){"use strict";n(18),n(112),n(111),n(49);var s=n(35),a={props:{item:{required:!0}},computed:{link:function(){return Object(s.d)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:s.f}},i=n(10),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link}},[t._v(t._s(t.item.text))]):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.a=o.exports}}]);