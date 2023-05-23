"use strict";(self.webpackChunkenterprise_docs=self.webpackChunkenterprise_docs||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(n),p=a,m=g["".concat(l,".").concat(p)]||g[p]||d[p]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,slug:"managing_users",title:"Managing Users"},s=void 0,i={unversionedId:"Managing Users/Managing Users",id:"Managing Users/Managing Users",title:"Managing Users",description:"This tutorial will guide you on how to add, move, and delete users on the FydeOS Management Cloud to meet the needs of your enterprise organization.",source:"@site/docs/Managing Users/1.Managing Users.md",sourceDirName:"Managing Users",slug:"/Managing Users/managing_users",permalink:"/FydeOS-enterprise-docs/Managing Users/managing_users",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"managing_users",title:"Managing Users"},sidebar:"tutorialSidebar",previous:{title:"Managing Users",permalink:"/FydeOS-enterprise-docs/category/managing-users"},next:{title:"Managing User Policy",permalink:"/FydeOS-enterprise-docs/Managing Users/managing_user_policy"}},l={},u=[{value:"<strong>Adding Users</strong>",id:"adding-users",level:2},{value:"1. <strong>Access the User Management Interface</strong>",id:"1-access-the-user-management-interface",level:3},{value:"<strong>2. Click &quot;Invite Users&quot;</strong>",id:"2-click-invite-users",level:3},{value:"<strong>3. Fill in User Information</strong>",id:"3-fill-in-user-information",level:3},{value:"<strong>4. Bulk Import Users (Optional)</strong>",id:"4-bulk-import-users-optional",level:3},{value:"<strong>Deleting Users</strong>",id:"deleting-users",level:2},{value:"<strong>1. Access the User Management Interface</strong>",id:"1-access-the-user-management-interface-1",level:3},{value:"<strong>2. Locate the User to be Deleted</strong>",id:"2-locate-the-user-to-be-deleted",level:3},{value:"<strong>3. Click &quot;Delete&quot;</strong>",id:"3-click-delete",level:3},{value:"<strong>Moving Users</strong>",id:"moving-users",level:2}],c={toc:u},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will guide you on how to add, move, and delete users on the FydeOS Management Cloud to meet the needs of your enterprise organization."),(0,a.kt)("h2",{id:"adding-users"},(0,a.kt)("strong",{parentName:"h2"},"Adding Users")),(0,a.kt)("p",null,"To add new users to your enterprise, you need to send them an invitation."),(0,a.kt)("h3",{id:"1-access-the-user-management-interface"},"1. ",(0,a.kt)("strong",{parentName:"h3"},"Access the User Management Interface")),(0,a.kt)("p",null,'In the sidebar of the FydeOS Management Cloud, click the "Users" button to access the user management interface.'),(0,a.kt)("h3",{id:"2-click-invite-users"},(0,a.kt)("strong",{parentName:"h3"},'2. Click "Invite Users"')),(0,a.kt)("p",null,'In the top left corner of the user management interface, click the "Invite Users" button to open the invite user dialog.'),(0,a.kt)("h3",{id:"3-fill-in-user-information"},(0,a.kt)("strong",{parentName:"h3"},"3. Fill in User Information")),(0,a.kt)("p",null,"In the invite user dialog, fill in the following information as prompted:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the appropriate organizational department to categorize the user into the respective team."),(0,a.kt)("li",{parentName:"ul"},"Write a concise and friendly welcome message to provide a warm welcome to the new user."),(0,a.kt)("li",{parentName:"ul"},'Fill in the user\'s details, including their "email" and "name."')),(0,a.kt)("h3",{id:"4-bulk-import-users-optional"},(0,a.kt)("strong",{parentName:"h3"},"4. Bulk Import Users (Optional)")),(0,a.kt)("p",null,"If you need to import users in bulk, you can download the import template, fill in the user information according to the template format, and then upload it to the system."),(0,a.kt)("h2",{id:"deleting-users"},(0,a.kt)("strong",{parentName:"h2"},"Deleting Users")),(0,a.kt)("p",null,"To remove users from your enterprise organization, follow the steps below:"),(0,a.kt)("h3",{id:"1-access-the-user-management-interface-1"},(0,a.kt)("strong",{parentName:"h3"},"1. Access the User Management Interface")),(0,a.kt)("p",null,'In the sidebar of the FydeOS Management Cloud, click the "Users" button to access the user management interface.'),(0,a.kt)("h3",{id:"2-locate-the-user-to-be-deleted"},(0,a.kt)("strong",{parentName:"h3"},"2. Locate the User to be Deleted")),(0,a.kt)("p",null,"In the user list, find the user you want to delete."),(0,a.kt)("h3",{id:"3-click-delete"},(0,a.kt)("strong",{parentName:"h3"},'3. Click "Delete"')),(0,a.kt)("p",null,'In the row of the target user, click the "Delete" button, and then click "Confirm" in the pop-up confirmation dialog to successfully delete the user. Please note that deletion cannot be undone, so please proceed with caution.'),(0,a.kt)("h2",{id:"moving-users"},(0,a.kt)("strong",{parentName:"h2"},"Moving Users")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Comming Soon")))}d.isMDXComponent=!0}}]);