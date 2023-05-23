"use strict";(self.webpackChunkenterprise_docs=self.webpackChunkenterprise_docs||[]).push([[324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3,slug:"register_fydeos_device"},a="Register FydeOS device",l={unversionedId:"Getting Started/Register FydeOS device",id:"Getting Started/Register FydeOS device",title:"Register FydeOS device",description:"To enforce your device policies set on the FydeOS Cloud Management platform, you need to register FydeOS devices. These devices must adhere to the policies you set unless you erase or unconfigure all registered devices.",source:"@site/docs/Getting Started/3.Register FydeOS device.md",sourceDirName:"Getting Started",slug:"/Getting Started/register_fydeos_device",permalink:"/FydeOS-enterprise-docs/Getting Started/register_fydeos_device",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"register_fydeos_device"},sidebar:"tutorialSidebar",previous:{title:"How to Join the Enterprise",permalink:"/FydeOS-enterprise-docs/Getting Started/how_to_join_the_enterprise"},next:{title:"Q&A:FydeOS Subscription",permalink:"/FydeOS-enterprise-docs/Getting Started/fydeos_subscription"}},s={},d=[{value:"Register FydeOS device (Manually)",id:"register-fydeos-device-manually",level:2},{value:"Register FydeOS device (Zero-touch Enrollment)",id:"register-fydeos-device-zero-touch-enrollment",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Generating the image file through the FydeOS Management Cloud",id:"generating-the-image-file-through-the-fydeos-management-cloud",level:3},{value:"License for FydeOS Basic or Business+",id:"license-for-fydeos-basic-or-business",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register-fydeos-device"},"Register FydeOS device"),(0,i.kt)("p",null,"To enforce your device policies set on the FydeOS Cloud Management platform, you need to register FydeOS devices. These devices must adhere to the policies you set unless you erase or unconfigure all registered devices."),(0,i.kt)("h2",{id:"register-fydeos-device-manually"},"Register FydeOS device (Manually)"),(0,i.kt)("p",null,"To register FydeOS devices manually, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Download & Install")),(0,i.kt)("p",{parentName:"li"},"To download and install FydeOS, perform the following steps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visit the FydeOS download page at ",(0,i.kt)("a",{parentName:"li",href:"https://fydeos.com/download/"},"https://fydeos.com/download/"),"."),(0,i.kt)("li",{parentName:"ul"},"Select the appropriate version of FydeOS for your device."),(0,i.kt)("li",{parentName:"ul"},"Follow the installation guide to burn the FydeOS image to a USB drive."),(0,i.kt)("li",{parentName:"ul"},"Insert the USB drive into your PC and restart the computer."),(0,i.kt)("li",{parentName:"ul"},'Configure your PC to boot from the USB drive and follow the prompts on the boot screen to install FydeOS on your hard drive. You can either select the "Installer" option on the boot screen to install FydeOS directly or use the "Installer" app in the FydeOS app store to install FydeOS after booting into the system.'),(0,i.kt)("li",{parentName:"ul"},"Once completed, the process of downloading and installing FydeOS is finished."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"To manage the devices on the FydeOS Management Cloud:")),(0,i.kt)("p",{parentName:"li"},"To register and manage devices on the FydeOS Management Cloud, follow these steps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visit ",(0,i.kt)("a",{parentName:"li",href:"https://account.fydeos.com/"},"https://account.fydeos.com/")," and register a FydeOS account."),(0,i.kt)("li",{parentName:"ul"},"Contact the sales team to obtain a trial license for the FydeOS Management Cloud associated with your account."),(0,i.kt)("li",{parentName:"ul"},"Turn on the device and go through the Out-of-Box Experience (OOBE). Follow the prompts to select the language, network, and user agreement."),(0,i.kt)("li",{parentName:"ul"},'When you reach the login or registration step, click on "More options" and then choose "Enterprise registration". Enter the account and password that have been granted the trial license.'),(0,i.kt)("li",{parentName:"ul"},'With this, the enterprise registration is complete, and you will see the message "Your FydeOS device is managed by XX Enterprise" at the top of the settings page.')))),(0,i.kt)("h2",{id:"register-fydeos-device-zero-touch-enrollment"},"Register FydeOS device (Zero-touch Enrollment)"),(0,i.kt)("p",null,"Zero-touch enrollment is an alternative method for device registration. It involves generating a zero-touch enrollment image file through the FydeOS Management Cloud and flashing it onto the FydeOS device to be registered. Once the FydeOS device is turned on and connected to the Internet, it will automatically register with the enterprise's domain."),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compatible FydeOS device."),(0,i.kt)("li",{parentName:"ul"},"System image file for zero-touch enrollment generated through the FydeOS Management Cloud."),(0,i.kt)("li",{parentName:"ul"},"FydeOS Basic or Business+ license.")),(0,i.kt)("h3",{id:"generating-the-image-file-through-the-fydeos-management-cloud"},"Generating the image file through the FydeOS Management Cloud"),(0,i.kt)("p",null,"The image file mentioned here refers to the system image file for zero-touch enrollment generated through the FydeOS Management Cloud. This file can be used for multiple devices and remains valid until invalidated by the administrator. Separate image files can also be generated for each organizational department."),(0,i.kt)("p",null,"To generate the image file through the FydeOS Management Cloud, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the FydeOS Management Cloud, go to Devices > Image List."),(0,i.kt)("li",{parentName:"ol"},"On the left, select the top organization or a specific organizational department to generate the image file directly associated with that department."),(0,i.kt)("li",{parentName:"ol"},'Click on "Generate Image (Zero-touch Enrollment)" in the upper right corner.'),(0,i.kt)("li",{parentName:"ol"},'Select the appropriate model and version, and click "Generate Image File". A new image generation record will appear in the image list.'),(0,i.kt)("li",{parentName:"ol"},"The image file generation process takes approximately 30 minutes. Please wait patiently."),(0,i.kt)("li",{parentName:"ol"},'Once the status of the image file changes from "Generating" to "Normal", the image file can be used. Click on "More > Download" to download the image file.'),(0,i.kt)("li",{parentName:"ol"},"Follow")),(0,i.kt)("p",null,"the flashing tutorial to flash the image file onto the device, transforming it into a FydeOS device. After turning on and connecting to the Internet, the device will automatically register within the enterprise's domain."),(0,i.kt)("h3",{id:"license-for-fydeos-basic-or-business"},"License for FydeOS Basic or Business+"),(0,i.kt)("p",null,"To check the enterprise's current subscription status in the FydeOS Management Cloud, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the FydeOS Management Cloud, go to Devices > Image List."),(0,i.kt)("li",{parentName:"ol"},'Click on "Current Subscription" in the top right corner to view the enterprise\'s current subscription status.')),(0,i.kt)("p",null,"Each time a FydeOS device is successfully registered within an enterprise, it consumes one of the enterprise's subscription licenses. If the available licenses are insufficient, the device cannot be registered successfully. In such cases, additional licenses must be purchased before further registrations can be carried out."),(0,i.kt)("p",null,"The device license type used during device registration can be adjusted in Settings - Users and Browsers - Enrollment controls - Device License Type."))}p.isMDXComponent=!0}}]);