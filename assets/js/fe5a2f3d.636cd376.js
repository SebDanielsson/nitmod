"use strict";(self.webpackChunknitmod=self.webpackChunknitmod||[]).push([[1012],{2938:(e,n,s)=>{s.r(n),s.d(n,{Blue:()=>m,Green:()=>c,Red:()=>h,Yellow:()=>x,assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(5893),t=s(1151);const i={slug:"nitmod-2.3.4-b2",title:"N!tmod 2.3.4 Beta 2",author:"N!trox*",author_title:"Founder",author_image_url:"/img/nitmod-square.webp",hide_table_of_contents:!1,tags:["nitmod","release","changelog","beta"],draft:!1,date:new Date("2021-06-02T00:00:00.000Z"),description:"",image:"/static/img/nitmod.webp"},d=void 0,o={permalink:"/nitmod/blog/nitmod-2.3.4-b2",editUrl:"https://github.com/sebdanielsson/nitmod/edit/main/blog/blog/2021-06-02-nitmod-2.3.4-b2.md",source:"@site/blog/2021-06-02-nitmod-2.3.4-b2.md",title:"N!tmod 2.3.4 Beta 2",description:"",date:"2021-06-02T00:00:00.000Z",formattedDate:"June 2, 2021",tags:[{label:"nitmod",permalink:"/nitmod/blog/tags/nitmod"},{label:"release",permalink:"/nitmod/blog/tags/release"},{label:"changelog",permalink:"/nitmod/blog/tags/changelog"},{label:"beta",permalink:"/nitmod/blog/tags/beta"}],hasTruncateMarker:!1,authors:[{name:"N!trox*",title:"Founder",imageURL:"/img/nitmod-square.webp"}],frontMatter:{slug:"nitmod-2.3.4-b2",title:"N!tmod 2.3.4 Beta 2",author:"N!trox*",author_title:"Founder",author_image_url:"/img/nitmod-square.webp",hide_table_of_contents:!1,tags:["nitmod","release","changelog","beta"],draft:!1,date:"2021-06-02T00:00:00.000Z",description:"",image:"/static/img/nitmod.webp"},unlisted:!1,prevItem:{title:"N!tmod 2.3.4 Beta 3",permalink:"/nitmod/blog/nitmod-2.3.4-b3"},nextItem:{title:"N!tmod 2.3.4 Beta 1",permalink:"/nitmod/blog/nitmod-2.3.4-b1"}},l={authorsImageUrls:[void 0]},a=[{value:"Changelog",id:"changelog",level:2}],c=({children:e})=>{const n={span:"span",...(0,t.a)()};return(0,r.jsx)(n.span,{style:{color:"#25c2a0"},children:e})},m=({children:e})=>{const n={span:"span",...(0,t.a)()};return(0,r.jsx)(n.span,{style:{color:"#1877F2"},children:e})},h=({children:e})=>{const n={span:"span",...(0,t.a)()};return(0,r.jsx)(n.span,{style:{color:"#CA1111"},children:e})},x=({children:e})=>{const n={span:"span",...(0,t.a)()};return(0,r.jsx)(n.span,{style:{color:"#FFBA00",fontSize:"smaller"},children:e})};function g(e){const n={br:"br",h2:"h2",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(m,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Increased MAX_MENUS and MAX_MENUITEMS to fix some server's custom menus not loading"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(m,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Don't activate triggers (escort vehicles for example) when playing dead"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(m,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"First blood and First headshot announces (broken in 2.3.4-b1)"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(m,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Vote message sometimes staying on screen (untested, very tricky to reproduce, but should no longer happen)"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(m,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Crash/freeze on Windows after vid_restart/map change due to NxAC"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(m,{children:"Fixed:"})})," ",(0,r.jsx)("small",{children:"Faster SQLite queries"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Re-enabled macOS 32 bit support (untested)"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"macOS server library (qagame_mac) AKA it is now possible to host a N!tmod server on macOS!"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Added: It is now possible to find users by IP address or MAC address with !userlist"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Added: Players muted through votes will be muted for g_defaultMute seconds"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Added: /csinfo 'dumpall' argument (server side, for debugging purposes)"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(c,{children:"Added:"})})," ",(0,r.jsx)("small",{children:"Added: Server's NxAC status icon on map loading screen"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(x,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"Modified some N!tmod specific menus"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(x,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:'Enabled "configstrings" command again (client side, for debugging purposes)'}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(x,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"Nicer shoutcaster/spectator names above players"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(x,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"Modified macOS Minimum version to 10.8 (was 10.12 in 2.3.4-b1)"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(x,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"More code cleanup and compiler warnings fixed"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(x,{children:"Modified:"})})," ",(0,r.jsx)("small",{children:"Some critical parts of the NxAC code on Windows have been rewritten from scratch"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.strong,{children:(0,r.jsx)(h,{children:"Removed:"})})," ",(0,r.jsx)("small",{children:"Server's Punkbuster status icon on map loading screen"})]})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>d});var r=s(7294);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);