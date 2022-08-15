"use strict";(self.webpackChunknitmod=self.webpackChunknitmod||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(f,r(r({ref:t},m),{},{components:n})):a.createElement(f,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,id:"installation",title:"Installation",hide_title:!1,hide_table_of_contents:!1},r=void 0,s={unversionedId:"installation",id:"installation",title:"Installation",description:"Download",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/nitmod/docs/installation",draft:!1,editUrl:"https://github.com/sebdanielsson/nitmod/edit/main/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"installation",title:"Installation",hide_title:!1,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/nitmod/docs/introduction"},next:{title:"Cvar Reference",permalink:"/nitmod/docs/cvar-reference"}},l={},d=[{value:"Download",id:"download",level:2},{value:"Install/Update",id:"installupdate",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Setting up the SQLite database",id:"setting-up-the-sqlite-database",level:3},{value:"Admin levels",id:"admin-levels",level:3},{value:"Description",id:"description",level:3},{value:"Custom commands",id:"custom-commands",level:3},{value:"Description custom commands",id:"description-custom-commands",level:4},{value:"Custom votes",id:"custom-votes",level:3},{value:"Description custom votes",id:"description-custom-votes",level:4}],m={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://etmods.net/downloads/nitmod_2.3.4-b4.zip"},"Nitmod 2.3.4 Beta 4")),(0,o.kt)("h2",{id:"installupdate"},"Install/Update"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the server."),(0,o.kt)("li",{parentName:"ol"},"If installing for the first time, create a nitmod folder next to your etmain folder."),(0,o.kt)("li",{parentName:"ol"},"Copy the .pk3 and the library file to the nitmod folder. If you're running a Windows server, it's the .dll. For macOS it's qagame_mac. For Linux x86 and x64 it's i386.so and x86_64.so respectively. If you're making an upgrade, delete the old .pk3."),(0,o.kt)("li",{parentName:"ol"},"If installing for the first time, change your server's ",(0,o.kt)("inlineCode",{parentName:"li"},"fs_game")," cvar to ",(0,o.kt)("inlineCode",{parentName:"li"},"nitmod")," (either in your control panel for rented game servers, or in your startup command if you're hosting it yourself)."),(0,o.kt)("li",{parentName:"ol"},"Start the server.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"N!tmod releases come with a sample configuration file ",(0,o.kt)("a",{target:"_blank",href:n(6752).Z},"nitmod-sample.cfg"),". It should be saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"nitmod/nitmod.cfg"),". It contains every mod cvar set to it's default value, and a small description of what it is used for.\nFor more information, read the ",(0,o.kt)("a",{parentName:"p",href:"cvar-reference"},"Cvar Reference"),"."),(0,o.kt)("h3",{id:"setting-up-the-sqlite-database"},"Setting up the SQLite database"),(0,o.kt)("p",null,"Some features, like the admin system, ",(0,o.kt)("a",{parentName:"p",href:"cvar-reference#g_xpsave"},"g_XPSave")," and ",(0,o.kt)("a",{parentName:"p",href:"cvar-reference#n_maprecords"},"n_mapRecords")," are disabled by default since they need access to a SQLite database to function. To create the database, use the cvar ",(0,o.kt)("a",{parentName:"p",href:"cvar-reference#n_sqlitedbpath"},"n_SQLiteDBPath")," to set a location for the SQLite database file to reside on. The database file will be automaticly created if the above cvar is set correctly and the server process has read/write permissions on the specified path. If an invalid filename is provided, N!tmod will attempt to create the database inside the nitmod directory."),(0,o.kt)("h3",{id:"admin-levels"},"Admin levels"),(0,o.kt)("p",null,"To setup admin levels on your server, you need to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"nitmod/levels.db"),". Here is a ",(0,o.kt)("a",{target:"_blank",href:n(5658).Z},"levels-sample.db"),"."),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-raw"},"**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every level.\nlevel =     // Level Number\nname =      // Level Name\nflags =     // Flags\ngtext =     // Optional Greeting Text (user's greeting text overrides this value)\ngsound =    // Optional Greeting Sound (user's greeting sound overrides this value)\n")),(0,o.kt)("p",null,"This file can be edited ingame (or through rcon) using ",(0,o.kt)("inlineCode",{parentName:"p"},"!levedit"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"!levadd")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"!levdelete")," commands.\nThe file will automaticly be overwritten when using one of these commands.\nIf you manually edit this file while the server is running, use ",(0,o.kt)("inlineCode",{parentName:"p"},"!readconfig")," command to load modifications.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"!levlist")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"!levinfo")," commands to display informations about existing levels."),(0,o.kt)("h3",{id:"custom-commands"},"Custom commands"),(0,o.kt)("p",null,"N!tmod allows adding custom commands to the existing admin system commands set.\nTo setup custom commands on your server, you must create ",(0,o.kt)("inlineCode",{parentName:"p"},"nitmod/commands.db"),". Here is ",(0,o.kt)("a",{target:"_blank",href:n(417).Z},"commands-sample.db"),"."),(0,o.kt)("h4",{id:"description-custom-commands"},"Description custom commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-raw"},'**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every command.\nname =      // Command name (ex: "test")\nexec =      // Command sent to server (ex: chat "^3Test command")\ndesc =      // Text displayed in !help cmdname (ex: "Test command")\nlevels =    // Levels having access to this command, delimited by spaces (ex: 0 1 2)\n')),(0,o.kt)("p",null,"If you manually edit this file while the server is running, use ",(0,o.kt)("inlineCode",{parentName:"p"},"!readconfig")," command to load modifications."),(0,o.kt)("h3",{id:"custom-votes"},"Custom votes"),(0,o.kt)("p",null,"To setup custom votes on your server, you must create ",(0,o.kt)("inlineCode",{parentName:"p"},"nitmod/votes.db"),". Here is ",(0,o.kt)("a",{target:"_blank",href:n(2992).Z},"votes-sample.db"),"."),(0,o.kt)("h4",{id:"description-custom-votes"},"Description custom votes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-raw"},"**********  // Delimiter (10 *) Must IMPERATIVELY be placed BEFORE every vote.\nname =      // max 20 chars vote name (to use with /callvote)\nmessage =   // max 256 chars message displayed on clients when vote is called\nhelp =      // max 256 chars vote description (ex: /callvote *name* ?)\nexec =      // max 1024 chars command to execute on server side when vote passes\npasstext =  // max 256 chars message displayed on clients if vote passes\nlevels =    // max 64 levels allowed to call this vote (if empty, vote is available for all levels)\n")),(0,o.kt)("p",null,"If you manually edit this file while the server is running, use !readconfig command to load modifications."),(0,o.kt)("p",null,"To call one a custom vote, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"/callvote")," command in your console, followed by the custom vote name.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Example:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/callvote mycustomvote")))}c.isMDXComponent=!0},417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/commands-sample-de15896ed3e26f40c3c2ec67ff2730de.db"},5658:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/levels-sample-d237ef92521f3fa5071033086a58037f.db"},6752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/nitmod-sample-b73a820d3e6588e92cec086986024518.cfg"},2992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/votes-sample-11231ee9c663f17678ade61afa2d45ad.db"}}]);