!function(){var e={1991:function(e,t){var n;!function(){"use strict";var a=function(){function e(){}function t(e,t){for(var n=t.length,a=0;a<n;++a)r(e,t[a])}e.prototype=Object.create(null);var n={}.hasOwnProperty,a=/\s+/;function r(e,r){if(r){var l=typeof r;"string"===l?function(e,t){for(var n=t.split(a),r=n.length,l=0;l<r;++l)e[n[l]]=!0}(e,r):Array.isArray(r)?t(e,r):"object"===l?function(e,t){if(t.toString===Object.prototype.toString||t.toString.toString().includes("[native code]"))for(var a in t)n.call(t,a)&&(e[a]=!!t[a]);else e[t.toString()]=!0}(e,r):"number"===l&&function(e,t){e[t]=!0}(e,r)}}return function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var l=new e;t(l,a);var o=[];for(var c in l)l[c]&&o.push(c);return o.join(" ")}}();e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.i18n,a=window.wp.hooks,r=window.wp.components,l=n(1991),o=n.n(l);function c(t){const{label:n,help:a,className:r,children:l,...c}=t;return(0,e.createElement)("div",{...c,className:o()("lazyblocks-component-base-control",r)},n?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__label"},n):null,l,a?(0,e.createElement)("div",{className:"lazyblocks-component-base-control__help"},a):null)}const{controls:i={}}=window.lazyblocksConstructorData||window.lazyblocksGutenberg;function s(e,{className:t,...n}={}){const a=(r=e.data.type)&&i[r]?i[r]:!!i.undefined&&i.undefined;var r;return{label:!!a.restrictions.label_settings&&e.data.label,help:!!a.restrictions.help_settings&&e.data.help,className:o()(`lazyblocks-control lazyblocks-control-${e.data.type}`,t),"data-lazyblocks-control-name":e.data.name,...n}}(0,a.addFilter)("lzb.editor.control.email.render","lzb.editor",((t,n)=>{const a=n.data.characters_limit?parseInt(n.data.characters_limit,10):"";return(0,e.createElement)(c,{...s(n,{label:!1})},(0,e.createElement)(r.TextControl,{type:"email",label:n.data.label,maxLength:a,placeholder:n.data.placeholder,value:n.getValue(),onChange:n.onChange}))})),(0,a.addFilter)("lzb.constructor.control.email.settings","lzb.constructor",((n,a)=>{const{updateData:l,data:o}=a;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.PanelBody,null,(0,e.createElement)(r.TextControl,{label:(0,t.__)("Placeholder","lazy-blocks"),value:o.placeholder,onChange:e=>l({placeholder:e})})),(0,e.createElement)(r.PanelBody,null,(0,e.createElement)(r.TextControl,{label:(0,t.__)("Characters Limit","lazy-blocks"),help:(0,t.__)("Maximum number of characters allowed. Leave blank to no limit.","lazy-blocks"),value:o.characters_limit?parseInt(o.characters_limit,10):"",type:"number",min:0,max:524288,onChange:e=>l({characters_limit:`${e}`})})))}))}()}();