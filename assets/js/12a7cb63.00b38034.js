"use strict";(self.webpackChunkcdi_website_api_docs=self.webpackChunkcdi_website_api_docs||[]).push([[784],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9471:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1,title:"POST /contact-us",hide_title:!0},p=void 0,s={unversionedId:"api/contact-us/contact-us",id:"api/contact-us/contact-us",title:"POST /contact-us",description:"POST /contact-us",source:"@site/docs/api/contact-us/contact-us.md",sourceDirName:"api/contact-us",slug:"/api/contact-us/",permalink:"/cdi-api-documentation/api/contact-us/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"POST /contact-us",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"POST /apply",permalink:"/cdi-api-documentation/api/apply/"},next:{title:"POST /tell-us",permalink:"/cdi-api-documentation/api/tell-us/"}},u={},c=[{value:"POST /contact-us",id:"post-contact-us",level:2},{value:"Request Header Schema",id:"request-header-schema",level:3},{value:"Request Header Sample",id:"request-header-sample",level:3},{value:"Request Body Schema",id:"request-body-schema",level:3},{value:"Request Body Sample",id:"request-body-sample",level:3},{value:"Response Body Sample",id:"response-body-sample",level:3},{value:"Response Codes",id:"response-codes",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"post-contact-us"},"POST /contact-us"),(0,l.kt)("p",null,"Submits a message to the system"),(0,l.kt)("h3",{id:"request-header-schema"},"Request Header Schema"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"none")),(0,l.kt)("h3",{id:"request-header-sample"},"Request Header Sample"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"none")),(0,l.kt)("h3",{id:"request-body-schema"},"Request Body Schema"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the sender.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"email")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},'(required, format = "email")')),(0,l.kt)("td",{parentName:"tr",align:null},"The email of the sender.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"subject")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"The subject of the message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},"String ",(0,l.kt)("strong",{parentName:"td"},"(required)")),(0,l.kt)("td",{parentName:"tr",align:null},"The body of the message.")))),(0,l.kt)("h3",{id:"request-body-sample"},"Request Body Sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": String,\n  "email": String,\n  "subject": String,\n  "message": String\n}\n')),(0,l.kt)("p",null,"Media-type: ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("h3",{id:"response-body-sample"},"Response Body Sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n  success: true\n  message: 'Successfully sent a message.',\n}\n")),(0,l.kt)("p",null,"Media-type: ",(0,l.kt)("inlineCode",{parentName:"p"},"application/json")),(0,l.kt)("h3",{id:"response-codes"},"Response Codes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"Successful sent a message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Required parameter(s) are missing or has invalid format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5xx"),(0,l.kt)("td",{parentName:"tr",align:null},"Unexpected error.")))))}m.isMDXComponent=!0}}]);