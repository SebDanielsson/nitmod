"use strict";(self.webpackChunknitmod=self.webpackChunknitmod||[]).push([[4283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7533:(e,t,r)=>{r.r(t),r.d(t,{Blue:()=>d,Green:()=>s,Red:()=>c,Yellow:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={slug:"nitmod-2.3.4-b4",title:"N!tmod 2.3.4 Beta 4",author:"N!trox*",author_title:"Founder",author_image_url:"/img/nitmod-square.webp",hide_table_of_contents:!1,tags:["nitmod","release","changelog","beta"],draft:!1,date:new Date("2021-06-12T00:00:00.000Z"),description:"",image:"/static/img/nitmod.webp"},l=void 0,i={permalink:"/blog/nitmod-2.3.4-b4",editUrl:"https://github.com/sebdanielsson/nitmod-docusaurus/edit/main/blog/blog/2021-06-12-nitmod-2.3.4-b4.md",source:"@site/blog/2021-06-12-nitmod-2.3.4-b4.md",title:"N!tmod 2.3.4 Beta 4",description:"",date:"2021-06-12T00:00:00.000Z",formattedDate:"June 12, 2021",tags:[{label:"nitmod",permalink:"/blog/tags/nitmod"},{label:"release",permalink:"/blog/tags/release"},{label:"changelog",permalink:"/blog/tags/changelog"},{label:"beta",permalink:"/blog/tags/beta"}],hasTruncateMarker:!1,authors:[{name:"N!trox*",title:"Founder",imageURL:"/img/nitmod-square.webp"}],frontMatter:{slug:"nitmod-2.3.4-b4",title:"N!tmod 2.3.4 Beta 4",author:"N!trox*",author_title:"Founder",author_image_url:"/img/nitmod-square.webp",hide_table_of_contents:!1,tags:["nitmod","release","changelog","beta"],draft:!1,date:"2021-06-12T00:00:00.000Z",description:"",image:"/static/img/nitmod.webp"},nextItem:{title:"N!tmod 2.3.4 Beta 3",permalink:"/blog/nitmod-2.3.4-b3"}},p={authorsImageUrls:[void 0]},m=[{value:"Changelog",id:"changelog",level:2}],s=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#25c2a0"}},t)},d=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#1877F2"}},t)},c=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#CA1111"}},t)},u=e=>{let{children:t}=e;return(0,a.kt)("span",{style:{color:"#FFBA00",fontSize:"smaller"}},t)},g={toc:m,Green:s,Blue:d,Red:c,Yellow:u};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(s,{mdxType:"Green"},"Added:"))," ",(0,a.kt)("small",null,"EXPERIMENTAL - Compatibility with ET: Legacy server demos"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(d,{mdxType:"Blue"},"Fixed:"))," ",(0,a.kt)("small",null,"g_fixedPhysics was broken (since version 2.2)"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(d,{mdxType:"Blue"},"Fixed:"))," ",(0,a.kt)("small",null,"UI_Alloc crash on Linux/MacOS x86_64"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(d,{mdxType:"Blue"},"Fixed:"))," ",(0,a.kt)("small",null,"Empty awards during intermission"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(d,{mdxType:"Blue"},"Fixed:"))," ",(0,a.kt)("small",null,"Empty crashlogs on Linux x86_64"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(u,{mdxType:"Yellow"},"Modified:"))," ",(0,a.kt)("small",null,"Separate server crash logs (crash_mapname_date_time.log)"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(u,{mdxType:"Yellow"},"Modified:"))," ",(0,a.kt)("small",null,"MAX_CUSTOM_COMMANDS from 64 to 96 (feature request, not recommended)"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(u,{mdxType:"Yellow"},"Modified:"))," ",(0,a.kt)("small",null,"Optimized ClientUserInfoChanged checks and log messages when dropping a client"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(u,{mdxType:"Yellow"},"Modified:"))," ",(0,a.kt)("small",null,"SQLite errors are now logged to g_log"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(u,{mdxType:"Yellow"},"Modified:"))," ",(0,a.kt)("small",null,"NxAC version 2.2 - Improved stability")))}b.isMDXComponent=!0}}]);