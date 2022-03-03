"use strict";(self.webpackChunkcdi_website_api_docs=self.webpackChunkcdi_website_api_docs||[]).push([[324],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6866:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return d},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={sidebar_position:3,title:"GET /careers/{id}",hide_title:!0},p=void 0,s={unversionedId:"api/careers/get_one",id:"api/careers/get_one",title:"GET /careers/{id}",description:"GET /careers/",source:"@site/docs/api/careers/get_one.md",sourceDirName:"api/careers",slug:"/api/careers/get_one",permalink:"/cdi-api-documentation/api/careers/get_one",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"GET /careers/{id}",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"GET /careers",permalink:"/cdi-api-documentation/api/careers/get_all"},next:{title:"PUT /careers/{id}",permalink:"/cdi-api-documentation/api/careers/update"}},c={},d=[{value:"GET /careers/{id}",id:"get-careersid",level:2},{value:"URL Parameter Schema",id:"url-parameter-schema",level:3},{value:"Request Header Schema",id:"request-header-schema",level:3},{value:"Request Header Sample",id:"request-header-sample",level:3},{value:"Request Body Schema",id:"request-body-schema",level:3},{value:"Request Body Sample",id:"request-body-sample",level:3},{value:"Response Body Sample",id:"response-body-sample",level:3},{value:"Response Codes",id:"response-codes",level:3}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-careersid"},"GET /careers/{id}"),(0,i.kt)("p",null,"Retrieves career based on id"),(0,i.kt)("h3",{id:"url-parameter-schema"},"URL Parameter Schema"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:null},"String ",(0,i.kt)("strong",{parentName:"td"},"(required)")),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the careeer.")))),(0,i.kt)("h3",{id:"request-header-schema"},"Request Header Schema"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"none")),(0,i.kt)("h3",{id:"request-header-sample"},"Request Header Sample"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"none")),(0,i.kt)("h3",{id:"request-body-schema"},"Request Body Schema"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"none")),(0,i.kt)("h3",{id:"request-body-sample"},"Request Body Sample"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"none")),(0,i.kt)("h3",{id:"response-body-sample"},"Response Body Sample"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "success": true,\n  "message": "Successfully retrieved career",\n  "data": {\n    "GSI1PK": "CAREERS",\n    "created": "2022-03-03T03:03:05.196Z",\n    "id": "25rE...",\n    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/career_images/...",\n    "GSI1SK": "2022-03-03T03:03:05.196Z#25rE...",\n    "title": "Sample Career Title"\n  }\n}\n')),(0,i.kt)("p",null,"Media-type: ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json")),(0,i.kt)("h3",{id:"response-codes"},"Response Codes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful retrieved career.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"404"),(0,i.kt)("td",{parentName:"tr",align:null},"Career does not exists.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5xx"),(0,i.kt)("td",{parentName:"tr",align:null},"Unexpected error.")))))}m.isMDXComponent=!0}}]);