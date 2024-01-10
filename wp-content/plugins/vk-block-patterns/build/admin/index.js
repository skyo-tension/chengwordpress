!function(){"use strict";var e,t={406:function(e,t,n){var r=window.wp.element,a=window.wp.i18n,l=window.wp.components,o=window.wp.api,i=n.n(o);(0,r.render)((0,r.createElement)((()=>{const e="1"===vkpOptions.showPatternsLink,t="1"===vkpOptions.disableCorePattern,n="1"===vkpOptions.disablePluginPattern,o="1"===vkpOptions.savePluginData,[s,c]=(0,r.useState)({role:vkpOptions.role,showPatternsLink:e,VWSMail:vkpOptions.VWSMail,disableCorePattern:t,disablePluginPattern:n,savePluginData:o}),u=vkpOptions.ajaxUrl,p=e=>{c(e)},[k,v]=(0,r.useState)(!1),[b,m]=(0,r.useState)(""),[d,h]=(0,r.useState)(!1),[_,g]=(0,r.useState)(""),[f,E]=(0,r.useState)(!1),P=()=>{h(!0);const e=new XMLHttpRequest;e.open("POST",u,!0),e.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e.send("action=clear_patterns_cache"),h(!1),g(!0)},S=(0,a.getLocaleData)()[""].lang,C=vkpOptions.adminUrl+"edit.php?post_type=vk-block-patterns",w=vkpOptions.template;return(0,r.useEffect)((()=>{b&&setTimeout((()=>{m()}),3e3)}),[b]),(0,r.useEffect)((()=>{_&&setTimeout((()=>{g()}),3e3)}),[_]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",null,(0,r.createElement)("section",null,(0,r.createElement)("h3",{id:"role-setting"},(0,a.__)("Role Setting","vk-block-patterns")),(0,r.createElement)("p",null,(0,a.__)("User permission to register patterns in VK Block Patterns","vk-block-patterns")," ","[ ",(0,r.createElement)("a",{href:C},"VK Block Patterns")," ]"),(0,r.createElement)(l.SelectControl,{value:s.role,onChange:e=>{p({...s,role:e})},options:[{label:(0,a.__)("Contributor or higher","vk-block-patterns"),value:"contributor"},{label:(0,a.__)("Author or higher","vk-block-patterns"),value:"author"},{label:(0,a.__)("Editor or higher","vk-block-patterns"),value:"editor"},{label:(0,a.__)("Administrator only","vk-block-patterns"),value:"administrator"}]})),(0,r.createElement)("section",null,(0,r.createElement)("h3",{id:"default-patterns-setting"},(0,a.__)("Default Pattern Setting","vk-block-patterns")),(0,r.createElement)(l.ToggleControl,{label:(0,a.__)("Disable WordPress Core Patterns","vk-block-patterns"),checked:s.disableCorePattern,onChange:e=>{p({...s,disableCorePattern:e})}}),(0,r.createElement)(l.ToggleControl,{label:(0,a.__)("Disable default patterns of this plugin","vk-block-patterns"),checked:s.disablePluginPattern,onChange:e=>{p({...s,disablePluginPattern:e})}}),"ja_JP"===S&&""!==s.VWSMail&&"x-t9"===w&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(l.ToggleControl,{label:(0,a.__)("Disable X-T9 patterns","vk-block-patterns"),checked:s.disableXT9Pattern,onChange:e=>{p({...s,disableXT9Pattern:e})}}))),"ja_JP"===S&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("h3",{id:"pattern-library-setting"},(0,a.__)("VK Pattern Library Setting","vk-block-patterns")),(0,r.createElement)("section",null,(0,r.createElement)("h4",null,"アカウント連携"),(0,r.createElement)("p",null,(0,r.createElement)("a",{href:"https://vws.vektor-inc.co.jp/vektor-passport?ref=vkbp-admin",target:"_blank",rel:"noreferrer"},"Vektor Passport")," ","あるいは Lightning G3 Pro Pack のライセンスをお持ちのユーザーは"," ",(0,r.createElement)("a",{href:"https://patterns.vektor-inc.co.jp/",target:"_blank",rel:"noreferrer"},"VK Pattern Library")," ","でお気に入りに登録したパターンをエディター上で直接呼び出す事ができます。"),(0,r.createElement)("p",null,"お気に入り登録・連携を利用するには VK Pattern Library のユーザーアカウントを発行する必要があります。",(0,r.createElement)("br",null),"["," ",(0,r.createElement)("a",{href:"https://patterns.vektor-inc.co.jp/about/about-favorite/",target:"_blank",rel:"noreferrer"},(0,a.__)("Click here for more information on Favorites","vk-block-patterns"))," ","]"),(0,r.createElement)(l.TextControl,{type:"email",className:"vws-mail-address",label:"VK Pattern Library のアカウントのメールアドレス",value:s.VWSMail,onChange:e=>{p({...s,VWSMail:e}),E(!0)}})),(0,r.createElement)("section",null,(0,r.createElement)("h4",null,(0,a.__)("Editor Setting","vk-block-patterns")),(0,r.createElement)(l.ToggleControl,{label:(0,a.__)("Show VK Pattern Library link in editor toolbar","vk-block-patterns"),checked:s.showPatternsLink,onChange:e=>{p({...s,showPatternsLink:e})}})),(0,r.createElement)("section",null,(0,r.createElement)("h4",null,(0,a.__)("Uninstall Setting","vk-block-patterns")),(0,r.createElement)(l.ToggleControl,{label:(0,a.__)("When Uninstall This Plugin, Save Data of This Plugin","vk-block-patterns"),checked:s.savePluginData,onChange:e=>{p({...s,savePluginData:e})}})),(0,r.createElement)("section",null,(0,r.createElement)("h3",{id:"cache-setting"},(0,a.__)("Patterns data cache setting","vk-block-patterns")),(0,r.createElement)("p",null,(0,a.__)("If the VK Pattern Library data is old, please try clearing the cache.","vk-block-patterns")),(0,r.createElement)(l.Button,{isSecondary:!0,onClick:P,isBusy:d},(0,a.__)("Clear Cache","vk-block-patterns")),d&&(0,r.createElement)(l.Spinner,null),!0===_&&(0,r.createElement)("div",null,(0,r.createElement)(l.Snackbar,null,(0,a.__)("Cache cleared","vk-block-patterns")," ")))),(0,r.createElement)(l.Button,{isPrimary:!0,onClick:()=>{v(!0),i().loadPromise.then((()=>{const e=new(i().models.Settings)({vk_block_patterns_options:s}).save();e.success((()=>{setTimeout((()=>{v(!1),m(!0)}),600),!0===f&&(P(),location.reload())})),e.error((()=>{setTimeout((()=>{v(!1),m(!1)}),600)}))}))},isBusy:k},(0,a.__)("Save setting","vk-block-patterns")),k&&(0,r.createElement)(l.Spinner,null),!0===b&&(0,r.createElement)("div",null,(0,r.createElement)(l.Snackbar,null,(0,a.__)("Save Success","vk-block-patterns")," ")),!1===b&&(0,r.createElement)("div",null,(0,r.createElement)(l.Snackbar,null,(0,a.__)("Failed to save.","vk-block-patterns")," "))))}),null),document.getElementById("vk_block_patterns_admin"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,a,l){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],l=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&l||o>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={846:0,966:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,o=n[0],i=n[1],s=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var u=s(r)}for(t&&t(n);c<o.length;c++)l=o[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunkvk_block_patterns=self.webpackChunkvk_block_patterns||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[966],(function(){return r(406)}));a=r.O(a)}();