(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=n.createContext&&n.createContext(l),i=function(){return(i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&(a[n[l]]=e[n[l]])}return a};function c(e){return function(t){return n.createElement(m,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,i({key:a},t.attr),e(t.child))}))}(e.child))}}function m(e){var t=function(t){var a,l=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var r=e.attr,c=e.title,m=o(e,["attr","title"]);return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,m,{className:a,style:i({color:e.color||t.color},t.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==r?n.createElement(r.Consumer,null,(function(e){return t(e)})):t(l)}},Zg9t:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("vOnD"),i=a("Wbzz"),o=r.c.div.withConfig({displayName:"BlogMenu__Wrapper",componentId:"sc-1cq89ly-0"})(["margin-top:1rem;padding:1rem 0;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;div{width:30%;margin-top:var(--smallMargin);;margin-bottom:var(--smallMargin);;padding:0 auto;font-family:'Montserrat',sans-serif;a{text-decoration:none;}}ul{margin-top:10px;border-left:1px solid var(--secondary);padding-left:30px;li{padding:8px;}}@media screen and (max-width:780px){flex-direction:column;div{width:100%;}}}"]);t.a=function(){return l.a.createElement(o,{className:"container"},l.a.createElement("div",null,l.a.createElement("p",null,"Content"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/about/"},"About")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/service/"},"Service")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/category/webnote/"},"Web制作ノート")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/category/diary/"},"Diary")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/contact/"},"Contact")))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/webnote/"},"WebNote")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/wordpress/"},"WordPress")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/html/css/"},"HTML/CSS")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/gatsby/"},"Gatsby")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/git/"},"git")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/python/"},"python")))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/diary/"},"Diary")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/活動記録/"},"活動記録")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/手帳/"},"手帳")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/手芸/"},"手芸")))))}},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return x}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("7oih"),o=a("EYWl"),c=a("vOnD"),m=a("9eSz"),s=a.n(m),d=a("ma3e"),u=c.c.nav.withConfig({displayName:"Pagenation__Wrapper",componentId:"sc-1hykamt-0"})(["ul{display:flex;justify-content:space-between;align-items:center;list-style:none;li{padding:10px 0px 15px 0px;font-size:0.8rem;a{transition:0.3s ease;display:flex;align-items:center;text-decoration:none;font-weight:600;i{letter-spacing:0.1rem;display:inline-block;padding:5px;}}@media screen and (max-width:780px){flex-direction:column;}}"]),p=function(e){var t=e.numPages,a=e.currentPage,n=e.pathBase,i=1===a,o=a===t,c=a-1==1?n:n+(a-1).toString(),m=n+(a+1).toString();return l.a.createElement(u,null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,i?"":l.a.createElement(r.Link,{to:c,rel:"prev"},l.a.createElement(d.a,null),l.a.createElement("i",null,"前のページ"))),Array.from({length:t},(function(e,t){return t+1===a?l.a.createElement("li",{key:"pagination-number"+(t+1),className:"active"},t+1):l.a.createElement("li",{key:"pagination-number"+(t+1)},l.a.createElement(r.Link,{to:n+(0===t?"":t+1)},t+1))})),l.a.createElement("li",null,o?"":l.a.createElement(r.Link,{to:m,rel:"next"},l.a.createElement("i",null,"次のページ"),l.a.createElement(d.b,null))))))},g=a("Zg9t"),f=c.c.h1.withConfig({displayName:"blog__PageTitle",componentId:"sc-1olayog-0"})(["text-align:center;margin-bottom:30px;position:relative;padding:10px;font-family:allura,cursive;font-size:2rem;&:after{position:absolute;bottom:10px;left:calc(50% - 30px);width:60px;height:1px;content:'';border-radius:3px;background:var(--gray);}"]),E=c.c.article.withConfig({displayName:"blog__Article",componentId:"sc-1olayog-1"})(["margin-bottom:var(--smallMargin);padding-bottom:var(--smallMargin);border-bottom:1px dashed var(--lightGray);&:last-child{border-bottom:none;}.flex{z-index:10;display:flex;flex-direction:row;justify-content:space-between;align-items:center;@media screen and (max-width:780px){flex-direction:column;.left,.right{width:100%;max-width:100%;flex:1;}}}.left{flex:2;position:relative;}.right{flex:3;padding:30px;@media screen and (max-width:780px){padding:30px 0;}}.category{font-family:'Allura',cursive;font-size:1.8rem;position:absolute;color:var(--secondary);top:0px;left:-20px;transform:rotate(-15deg);z-index:10;}h3{font-size:1.1rem;padding-bottom:15px;a{text-decoration:none;}}p{font-size:0.9rem;line-height:1.8;padding-bottom:15px;}.info{display:flex;justify-content:space-between;color:var(--primary);@media screen and (max-width:780px){flex-direction:column;.date{margin-bottom:10px;}}}.tag{font-size:0.8rem;display:inline-block;color:var(--primary);text-decoration:none;transition:all 200ms ease-in;position:relative;&:not(:last-child):after{content:'/';padding:0.5rem;}}"]),x=(t.default=function(e){var t=e.data,a=e.location,n=e.pageContext,c=t.allMarkdownRemark.edges;return l.a.createElement(i.a,null,l.a.createElement(o.a,{title:"Blog",url:a.pathname,type:"article"}),l.a.createElement("div",{className:"container"},l.a.createElement(f,null,"Blog"),c.map((function(e){var a=e.node,n=a.frontmatter.tags?a.frontmatter.tags.map((function(e){return l.a.createElement(r.Link,{to:("/tags/"+e+"/").toLowerCase(),className:"tag",key:e},e)})):"";return l.a.createElement(E,{key:a.fields.slug},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"category"},a.frontmatter.category),l.a.createElement("figure",null,l.a.createElement(r.Link,{to:a.fields.slug,className:"link"},a.frontmatter.featured?l.a.createElement(s.a,{fluid:a.frontmatter.featured.childImageSharp.fluid,alt:a.frontmatter.title}):l.a.createElement(s.a,{fluid:t.noimage.childImageSharp.fluid,alt:a.frontmatter.title})))),l.a.createElement("div",{className:"right"},l.a.createElement("h3",null,l.a.createElement(r.Link,{to:a.fields.slug,className:"link"},a.frontmatter.title)),l.a.createElement("section",{className:"pc"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}})),l.a.createElement("div",{className:"info"},l.a.createElement("small",{className:"date"},a.frontmatter.date),l.a.createElement("div",null,n)))))})),l.a.createElement(p,{numPages:n.numPages,currentPage:n.currentPage,pathBase:n.pathBase})),l.a.createElement(g.a,null))},"3732625852")}}]);
//# sourceMappingURL=component---src-templates-blog-js-9cdaed721e7db4f17eea.js.map