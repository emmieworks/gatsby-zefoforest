(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));var n=a("q1tI"),l=a.n(n),r=a("7oih"),i=a("EYWl"),o=a("SfDe"),c=a("Zg9t");t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,m=t.allMarkdownRemark.edges;return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:"Tags",url:n.pathname}),l.a.createElement("h1",{style:{marginBottom:60,fontSize:24,textAlign:"center"}},"Tag : ",a.tag),l.a.createElement("div",{className:"container",style:{marginBottom:100}},m.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement(o.a,{key:t.fields.slug,title:a,category:t.frontmatter.category,slug:t.fields.slug,date:t.frontmatter.date,description:t.frontmatter.description,excerpt:t.excerpt,tags:t.frontmatter.tags})}))),l.a.createElement(c.a,null))};var m="1691173464"},SfDe:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("vOnD").c.article.withConfig({displayName:"PostCard__Wrapper",componentId:"sc-1kplm6g-0"})(["margin-bottom:var(--smallMargin);padding-bottom:var(--smallMargin);border-bottom:1px dashed var(--lightGray);&:last-child{border-bottom:none;}display:flex;flex-direction:row;justify-content:space-between;align-items:center;.left{padding:10px 30px;}.right{width:100%;}h3{font-size:1.1rem;padding-bottom:15px;a{text-decoration:none;}}.info{display:flex;justify-content:space-between;color:var(--primary);}p{line-height:1.8;padding-bottom:20px;font-size:1rem;}@media screen and (max-width:780px){.left{padding:10px;}.info{flex-direction:column;.date{margin-bottom:10px;}}}.tag{font-size:0.8rem;color:var(--primary);border:1px solid var(--primary);border-radius:5px;padding:3px 5px;text-decoration:none;margin-right:10px;&:before{content:'#';}&:hover{background-color:var(--primary);color:var(--white);}}"]);t.a=function(e){var t=e.tags?e.tags.map((function(e){return l.a.createElement(r.Link,{to:("/tags/"+e+"/").toLowerCase(),className:"tag",key:e},e)})):"";return l.a.createElement(i,{key:e.slug},l.a.createElement("div",{className:"left"}),l.a.createElement("div",{className:"right"},l.a.createElement("h3",null,l.a.createElement(r.Link,{to:e.slug},e.title)),l.a.createElement("section",{className:"pc"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.description||e.excerpt}})),l.a.createElement("div",{className:"info"},l.a.createElement("small",{className:"date"},e.date),l.a.createElement("div",null,t))))}},Zg9t:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("vOnD"),i=a("Wbzz"),o=r.c.div.withConfig({displayName:"BlogMenu__Wrapper",componentId:"sc-1cq89ly-0"})(["margin-top:1rem;padding:1rem 0;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;div{width:30%;margin-top:var(--smallMargin);;margin-bottom:var(--smallMargin);;padding:0 auto;font-family:'Montserrat',sans-serif;a{text-decoration:none;}}ul{margin-top:10px;border-left:1px solid var(--secondary);padding-left:30px;li{padding:8px;}}@media screen and (max-width:780px){flex-direction:column;div{width:100%;}}}"]);t.a=function(){return l.a.createElement(o,{className:"container"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/programming/"},"Programming")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/html/"},"HTML")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/css/"},"CSS")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/javascript/"},"JavaScript")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/category/wordpress/"},"WordPress")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/gatsby/"},"Gatsby")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/git/"},"git")))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/design/"},"Design")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/illustrator/"},"illustrator")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/デザイン独学/"},"デザイン独学")))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/column/"},"Column")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/活動記録/"},"活動記録")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/journal/"},"Journal")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/私の愛用品/"},"私の愛用品")))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-e64646697c2a54dadb52.js.map