"use strict";(self.webpackChunkwebpack_exercise=self.webpackChunkwebpack_exercise||[]).push([[826],{426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"body {\r\n  background-color: rgb(238, 234, 234);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.my-list {\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  border: 1px solid rgb(209, 208, 208);\r\n  width: 27%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgb(204, 203, 203);\r\n  height: 40px;\r\n}\r\n\r\nh1 {\r\n  font-size: 15px;\r\n  color: rgb(117, 112, 112);\r\n  margin-left: 3px;\r\n}\r\n\r\n.text {\r\n  border: none;\r\n  height: 40px;\r\n}\r\n\r\n.list-items {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgb(219, 218, 218);\r\n}\r\n\r\n.list-button {\r\n  height: 40px;\r\n  background-color: rgb(255, 255, 255);\r\n  border-top: 1px solid rgb(219, 218, 218);\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-class {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 5px;\r\n}\r\n\r\n.para-text {\r\n  padding-right: 9rem;\r\n}\r\n\r\n.list-images {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-top: 1rem;\r\n}\r\n\r\n#refresh {\r\n  margin-right: 6px;\r\n  color: rgb(168, 160, 160);\r\n}\r\n\r\n.material-icons {\r\n  margin-right: 6px;\r\n  color: rgb(168, 160, 160);\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var p=r(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},907:(n,e,r)=>{var t=r(379),o=r.n(t),i=r(795),a=r.n(i),c=r(569),s=r.n(c),l=r(565),p=r.n(l),d=r(216),u=r.n(d),f=r(589),m=r.n(f),h=r(426),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b=r.p+"9ccdbeb99784d3162ca9.png",v=[{description:"wash the dishes",completed:!0,index:1},{description:"clean the house",completed:!1,index:2},{description:"complete the project",completed:!0,index:3}],x=document.querySelector(".container");for(let n=0;n<v.length;n+=1){const e=document.createElement("div");e.classList.add("list-class"),x.append(e);const r=document.createElement("input");r.type="checkbox",e.append(r);const t=document.createElement("p");t.classList.add("para-text"),t.innerText=v[n].description,e.append(t);const o=document.createElement("img");o.classList.add("list-images"),e.append(o),o.src=b}}},n=>{n(n.s=907)}]);