"use strict";(self.webpackChunksnxdocs=self.webpackChunksnxdocs||[]).push([[385],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),c=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},u=function(e){var a=c(e.components);return r.createElement(i.Provider,{value:a},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),y=n,m=d["".concat(i,".").concat(y)]||d[y]||s[y]||l;return t?r.createElement(m,p(p({ref:a},u),{},{components:t})):r.createElement(m,p({ref:a},u))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=y;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[d]="string"==typeof e?e:n,p[1]=o;for(var c=2;c<l;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},711:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const l={sidebar_position:4},p="Update Playerdata",o={unversionedId:"snx-core/updateplayerdata",id:"snx-core/updateplayerdata",title:"Update Playerdata",description:"Get Player",source:"@site/docs/snx-core/updateplayerdata.md",sourceDirName:"snx-core",slug:"/snx-core/updateplayerdata",permalink:"/snx.github.io/snx-core/updateplayerdata",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get Playerdata",permalink:"/snx.github.io/snx-core/getplayerdata"}},i={},c=[{value:"Get Player",id:"get-player",level:3},{value:"Update player / character data",id:"update-player--character-data",level:3}],u={toc:c},d="wrapper";function s(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"update-playerdata"},"Update Playerdata"),(0,n.kt)("h3",{id:"get-player"},"Get Player"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"local player = exports['wc_core']:getPlayer(source)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: ",(0,n.kt)("inlineCode",{parentName:"li"},"table"))),(0,n.kt)("h3",{id:"update-player--character-data"},"Update player / character data"),(0,n.kt)("p",null,"Here you've two options to update player data.",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"Update one item at a time")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"player.updatePlayerData(category, item, value)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"category: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"player categories: ",(0,n.kt)("inlineCode",{parentName:"li"},"player_groups, char_identity, char_job, char_vitality, char_metadata")))),(0,n.kt)("li",{parentName:"ul"},"item: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"category items: ",(0,n.kt)("inlineCode",{parentName:"li"},"firstname, health etc..")))),(0,n.kt)("li",{parentName:"ul"},"value: ",(0,n.kt)("inlineCode",{parentName:"li"},"string / number"))),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"player.updatePlayerData('char_identity', 'firstname', 'James') #Firstname has been updated to James\n\nplayer.updatePlayerData('char_job', 'grade', 2) #Character job grade has been updated to 2\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Update whole table")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"player.updatePlayerData(category, value)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"category: ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"player categories: ",(0,n.kt)("inlineCode",{parentName:"li"},"player_groups, char_identity, char_job, char_vitality, char_metadata")))),(0,n.kt)("li",{parentName:"ul"},"value: ",(0,n.kt)("inlineCode",{parentName:"li"},"table"))),(0,n.kt)("p",null,"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"local playerJob = player.char_job\nplayerJob.name = 'newjob'\nplayerJob.grade = 2\n\nplayer.updatePlayerData('char_job', playerJob) #Character job and grade has updated\n")))}s.isMDXComponent=!0}}]);