"use strict";(self.webpackChunkenterprise_docs=self.webpackChunkenterprise_docs||[]).push([[9229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,slug:"managing_device_policies",title:"Managing device policies"},o=void 0,s={unversionedId:"Managing Devices/Managing device policies",id:"Managing Devices/Managing device policies",title:"Managing device policies",description:"Introduction",source:"@site/docs/Managing Devices/1.Managing device policies.md",sourceDirName:"Managing Devices",slug:"/Managing Devices/managing_device_policies",permalink:"/FydeOS-enterprise-docs/docs/Managing Devices/managing_device_policies",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Managing Devices/1.Managing device policies.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"managing_device_policies",title:"Managing device policies"},sidebar:"tutorialSidebar",previous:{title:"Managing Devices",permalink:"/FydeOS-enterprise-docs/docs/category/managing-devices"},next:{title:"Device Erasure",permalink:"/FydeOS-enterprise-docs/docs/Managing Devices/device_erasure"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As an enterprise-level IT administrator, you can leverage FydeOS's device management strategy to implement unified policy management for devices within your organization. This approach ensures network security and enhances work efficiency. The FydeOS Management Cloud offers a range of powerful features to support your device management efforts."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Here are the key features provided by FydeOS's device management solution:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Application and Website Access Control"),": Gain control over which applications and website URLs are accessible to employees. This feature allows you to enable or block specific applications and websites, promoting orderly management of network resources and preventing access to irrelevant or unsafe websites.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Privacy and Security Policy Enforcement"),": Safeguard enterprise data by setting and enforcing privacy and security policies. This ensures protection against data leakage and unauthorized access, providing a secure environment for sensitive information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enterprise Application and Extension Management"),": Centralize the installation, updating, and management of enterprise-level applications and extensions. This feature ensures that the applications used by employees are always up-to-date and aligned with the organization's needs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Managed Guest Sessions"),": Enable temporary access privileges for guests while ensuring the normal functioning of the network and preserving internal enterprise resources. This feature allows guests to utilize the network without impacting critical operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Device Disable and Restore"),": In case of a lost or stolen device, remotely disable it through the enterprise control platform to safeguard enterprise data security. Additionally, you can restore recovered devices, minimizing potential data breaches.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Disable Device Powerwash Function"),": Prevent accidental or malicious restoration of devices to their factory settings by disabling the Powerwash function. This measure mitigates the risks of data loss and device failure.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"FydeOS Automatic Update Management"),": Manage automatic updates for FydeOS systems, ensuring that all devices are running the latest system version. This improves system stability and enhances overall security."))),(0,r.kt)("p",null,"For more advanced features and detailed operation steps, please visit the FydeOS Management Cloud. This platform empowers you to flexibly set and adjust management policies based on the specific needs of your enterprise, facilitating efficient management of IT resources."))}d.isMDXComponent=!0}}]);