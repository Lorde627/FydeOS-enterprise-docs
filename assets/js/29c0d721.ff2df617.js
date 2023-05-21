"use strict";(self.webpackChunkenterprise_docs=self.webpackChunkenterprise_docs||[]).push([[962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,slug:"kiosk_guide"},a="Kiosk User's Guide",s={unversionedId:"Kiosk/Kiosk",id:"Kiosk/Kiosk",title:"Kiosk User's Guide",description:"Introduction",source:"@site/docs/Kiosk/1.Kiosk.md",sourceDirName:"Kiosk",slug:"/Kiosk/kiosk_guide",permalink:"/FydeOS-enterprise-docs/docs/Kiosk/kiosk_guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"kiosk_guide"},sidebar:"tutorialSidebar",previous:{title:"Kiosk",permalink:"/FydeOS-enterprise-docs/docs/category/kiosk"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Steps",id:"steps",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kiosk-users-guide"},"Kiosk User's Guide"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kiosk:"),"\nThe device does not enter the desktop after startup but displays the specified website in full screen.\nIt is suitable for scenes with many displays and few or no interactions, such as milk tea shop order display screens, airport flight information boards, etc."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure that the device has been registered to the enterprise, and the top of the settings page will show: Your FydeOS device is managed by XXX"),(0,o.kt)("li",{parentName:"ol"},"Log in to the FydeOS Management Cloud ",(0,o.kt)("a",{parentName:"li",href:"https://admin.fydeos.com/Dashboard"},"https://admin.fydeos.com")," with the enterprise administrator account"),(0,o.kt)("li",{parentName:"ol"},'In the left navigation bar, find "Apps & Extensions - Kiosk", click the plus sign in the lower right corner, select "Add from URL", and then enter the URL that needs to be displayed, starting with "HTTP/HTTPS". For example, enter ',(0,o.kt)("a",{parentName:"li",href:"https://baidu.com/"},"https://baidu.com/")),(0,o.kt)("li",{parentName:"ol"},'In the "Auto-launched App" column, find the "Installation Policy" and switch the "Installation Policy" from "None" to "',(0,o.kt)("a",{parentName:"li",href:"https://baidu.com/"},"https://baidu.com"),'" and the system will prompt "Operation Completed Successfully."'),(0,o.kt)("li",{parentName:"ol"},'In the URL column, click "Other Settings" to make more detailed settings, such as whether to allow the app to manage power, whether to allow the use of a screen keyboard, etc. If there are no other settings, the default is not allowed.'),(0,o.kt)("li",{parentName:"ol"},"At this point, the Kiosk has been set up, as shown in the following figure ",(0,o.kt)("img",{parentName:"li",src:"https://wp-uploads.fydeos.com/wp-content/uploads/2023/01/802ea4191983403cfb2352362e56539a.png",alt:"Kiosk Setup"})),(0,o.kt)("li",{parentName:"ol"},'Open the FydeOS device, enter the browser, enter chrome://policy, click "Reload Policy", and you will see that the "Last Policy Refresh Timestamp" in the device list has changed to 0 seconds ago.'),(0,o.kt)("li",{parentName:"ol"},'Click the time button in the lower right corner, select "Restart" in the pop-up window, and then the device will restart and automatically enter the Kiosk mode.'),(0,o.kt)("li",{parentName:"ol"},"At this point, the FydeOS device will automatically open the specified URL in full screen after restarting and will not enter the desktop.")))}u.isMDXComponent=!0}}]);