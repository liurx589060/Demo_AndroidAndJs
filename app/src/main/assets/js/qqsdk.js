!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var t=o();for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(){return function(e){function o(n){if(t[n])return t[n].exports;var i=t[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}([function(e,o,t){e.exports=t(1)},function(e,o,t){function n(e){var o=e.split("."),t=r;return o.forEach(function(e){!t[e]&&(t[e]={}),t=t[e]}),t}for(var i,a=t(2),r={},c=[t(5),t(9),t(18),t(31),t(32),t(33),t(34)],l=0;i=c[l];l++)for(var d in i){var s=d.lastIndexOf(".");if(s==-1)r[d]=a(i[d]);else{var p=d.split("."),u=p[p.length-1],f=n(d.substring(0,s));f[u]=a(i[d])}}e.exports={H5YSDK:r}},function(e,o,t){function n(){}function i(e){return r.isObject(e)?e.__static__?(delete e.__static__,e):a.isYYB?e.yyb||n:a.isIOS?e.ios||n:e.other||n:e}var a=t(3),r=t(4);e.exports=i},function(e,o){var t=navigator.userAgent,n=/\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/,i=/\bAndroid([^;]+)/,a=/\/qqdownloader\/(\d+)(?:\/(appdetail|external|sdk))?/,r=n.test(t),c=i.test(t),l=a.test(t);e.exports={isIOS:r,isAndroid:c,isYYB:l}},function(e,o){var t={},n="Object,Function,String,Number,Boolean,Date,Undefined,Null";n.split(",").forEach(function(e,o){t["is"+e]=function(o){return Object.prototype.toString.call(o)==="[object "+e+"]"}}),e.exports=t},function(e,o,t){var n={},i=t(3),a=t(6),r=t(7),c=t(8);a(n,[i,c,r]),e.exports=n},function(e,o){function t(e,o,n){if(o instanceof Array)for(var i=0,a=o.length;i<a;i++)t(e,o[i],n);else for(var i in o)!n&&i in e||(e[i]=o[i]);return e}e.exports=t},function(e,o){var t={SUCCESS:0,FAIL:-1};e.exports={"STATE.SUCCESS":t.SUCCESS,"STATE.FAIL":t.FAIL}},function(e,o){function t(){var e=document.createElement("iframe");return a.push(e),e.style.cssText="position:absolute;left:0;top:0;width:0;height:0;visibility:hidden;",e.frameBorder="0",document.body.appendChild(e),e}function n(e,o,t,n){var i=["jsb:/",e,l,"H5YSDK.callback?"].join("/"),a=[];for(var c in o)a.push(encodeURIComponent(c)+"="+encodeURIComponent(o[c]+""));i+=a.join("&"),d[l++]={callback:t,callbackChain:n},r(i)}function i(){if(p=0,1==s.length){var e=s[0];n(e.name,e.args,e.callback,e.callbackChain)}else{for(var e,o=[],t=0;e=s[t];t++){if(e.args)for(var i in e.args)e.args.hasOwnProperty(i)&&e.args[i]&&(e.args[i]=encodeURIComponent(e.args[i]));o.push({method:e.name,seqid:l,args:e.args,callback:"H5YSDK.callback"}),d[l++]={callback:e.callback}}var a=["jsb://callBatch",l++,"H5YSDK.callback?param="].join("/");a+=encodeURIComponent(JSON.stringify(o)),r(a)}s=[]}window.H5YSDK=window.H5YSDK||{};var a=[],r=callWithScheme=function(e){for(var o,n=0;(o=a[n])&&o._busy;n++);o&&!o._busy||(o=t()),o._busy=!0,o.src=e,setTimeout(function(){o._busy=!1},0)},c=!0,l=1,d={},s=[],p=0,u=_call=function(e,o,t){o=o||{};var a=[].slice.call(arguments,3);c?(s.push({name:e,args:o,callback:t,callbackChain:a}),!p&&(p=setTimeout(i,0))):n(e,o,t,a)},f=function(e){var o,t,n;d[e.seqid]&&(o=d[e.seqid],n=o.callbackChain,t=o.callback&&o.callback(e),delete d[e.seqid]),t&&"object"==typeof t&&u.apply(null,[t.name,t.args||{}].concat(n||[]))};e.exports={call:u,callWithScheme:callWithScheme,callback:f}},function(e,o,t){var n={},i=t(6),a=t(10),r=t(15),c=t(16),l=t(3),d=t(8);l.isYYB&&d.callWithScheme("http://qzs.qq.com/open/mobile/h5gamesdk/downMidas.html?"),i(n,[a,r,c,{PAY_STATE:t(17)}]),e.exports=n},function(e,o,t){function n(e){e=e||{},e.onError&&e.onError({code:1,msg:"ios env not support"}),s.click("new.ios")}function i(e){e=e||{},e.onError&&e.onError({code:2,msg:"not yyb env"}),s.click("new.nyyb")}function a(e){e=e||{},r=e.onError,c=e.onSuccess;var o=e.saveValue||"",t=e.zoneId||"1",n=e.offerid||d("offerid"),i=e.openid||d("openid"),a=e.openkey||d("openkey"),u=e.pf||d("pf"),f=e.pfkey||d("pfkey"),y={openId:i,offerId:n,payType:1};if(!(n&&i&&a&&u&&f))return e.onError&&e.onError({code:3,msg:"args error"}),void s.click("new.argserr");s.click("new.callpay");var b={offerId:n,pf:u,pfKey:f,openId:i,openKey:a,sessionId:"openid",sessionType:"openkey",zoneId:t,saveValue:o};l.call("requestMidas",b,function(e){0==e.result&&0==e.payState?(c&&c({code:0,msg:"success"}),s.click("new.0")):(r&&r({code:e.code,msg:"支付插件错误"}),s.click("new."+e.code)),s.reportPay(p({payAction:2,code:e.code},y))}),s.reportPay(p({payAction:1},y))}var r=null,c=null,l=t(8),d=t(11),s=t(12),p=t(6);e.exports={pay:{ios:n,yyb:a,other:i}}},function(e,o){function t(e,o){var t=o||location.href,n=new RegExp("(?:\\?|#|&)"+e+"=([^&#?]*)(?:\\?|$|&|#)","i"),i=n.exec(t);return i?i[1]:""}e.exports=t},function(e,o,t){function n(e){TCISD&&TCISD.hotClick(c+"."+e,"yyb-h5.qq.com","/open/mobile/h5game")}function i(e){var o=[],t=[{file:"h5sdk_report"}];o.push(e.openId||""),o.push(e.offerId||""),o.push(e.payType+""),o.push(e.payAction?e.payAction+"":""),o.push(void 0!==e.code?e.code+"":""),o.push(location.href),t[0].params=o,d("http://appicsh.qq.com/cgi-bin/appstage/newgame_report?data="+encodeURIComponent(JSON.stringify(t)))}function a(){var e=document.createElement("script");e.onload=function(){TCISD.pv("yyb-h5.qq.com","/open/mobile/h5game",{referDomain:"ADTAG",referPath:"h5game"+(r("offerid")&&("."+r("offerid")||""))}),document.body.removeChild(e)},e.src="http://qzs.qq.com/ac/qzfl/stat.js",document.body.appendChild(e),l()}var r=t(11),c=r("offerid")||"unkonw",l=t(13),d=t(14);a(),e.exports={click:n,reportPay:i}},function(e,o,t){function n(){p+=s-u}function i(){var e=[],o=[{file:"newgame_tick"}];e.push(l("openid")),e.push(l("YYBAppid")),e.push(location.href),e.push(""+parseInt(p/1e3)),e.push(""+parseInt(s/1e3)),o[0].params=e,d("http://appicsh.qq.com/cgi-bin/appstage/newgame_report?data="+encodeURIComponent(JSON.stringify(o)))}function a(){f&&clearTimeout(f),f=setTimeout(function(){return u=s,s=+new Date,s-u>7e4?(n(),void a()):(i(),void a())},6e4)}function r(){i(),a()}var c=+new Date,l=t(11),d=t(14),s=c,p=c,u=c,f=0;e.exports=r},function(e,o){function t(e){var o=new Image;window[o.id="__ping"+n++]=o,o.onload=o.onerror=function(){window[o.id]=null,o.onload=o.onerror=null},o.src=e}var n=0;e.exports=t},function(e,o,t){function n(e){e=e||{},e.onError&&e.onError({code:-1,msg:"ios env not support"}),s.click("old.ios")}function i(e){e=e||{},e.onError&&e.onError({code:-2,msg:"not yyb env"}),s.click("old.nyyb")}function a(e){e=e||{},r=e.onError,c=e.onSuccess;var o=e.saveValue||"",t=e.zoneId||"1",n=[];o&&n.push("saveValue="+o),t&&n.push("zoneId="+t),n.push("offerid="+(e.offerid||d("offerid"))),s.click("old.callpay"),l.callWithScheme("http://qzs.qq.com/open/mobile/h5gamesdk/pay.html?"+n.join("&"))}var r=null,c=null,l=t(8),d=t(11),s=t(12),p=function(e){0==e.result&&0==e.payState?(c&&c({code:0,msg:"success"}),s.click("old.0")):(s.click("old."+e.code),e.code==-3?r&&r({code:-4,msg:"当前应用宝版本过低，请更新应用宝"}):e.code==-2?r&&r({code:-3,msg:"支付插件下载中，请稍后刷新页面"}):3==e.code?r&&r({code:-5,msg:"支付插件初始化中"}):r&&r({code:-6,msg:"充值失败，稍后重请试"}))};e.exports={requestPay:{ios:n,yyb:a,other:i},payCallback:p}},function(e,o,t){function n(){s.forEach(function(e){i(e)}),s=[]}function i(e){var o={openId:e.openId,offerId:e.offerId,payType:2};c("requestMidasForGood",{offerId:e.offerId,openId:e.openId,openKey:e.openKey,sessionId:e.sessionId||"openid",sessionType:e.sessionType||"openkey",zoneId:e.zoneId||"1",pf:e.pf||"myapp_m_qq-2001-android-2011-xxxx",pfKey:e.pfKey||"pfKey",goodsTokenUrl:e.goodsTokenUrl,mallType:0,tokenType:1,prodcutId:"",saveValue:"",isCanChange:e.isCanChange&&!0,resId:"",reserv:"",unit:e.unit||"",isShowSaveNum:e.isShowSaveNum&&!0},function(t){var i=e.callback;r.isFunction(i)||(i=function(){}),0==t.result?i(a.SUCCESS):t.code==a.PLUGINERROR||t.code==a.PLUGININIT||t.code==a.PLUGCOPY?s.push(e):t.code==a.AVAILABLE?n():i(t.code),l.reportPay(d({payAction:2,code:t.code},o))}),l.reportPay(d({payAction:1},o))}var a=t(17),r=t(4),c=t(8).call,l=t(12),d=t(6),s=[];e.exports={requestPayForGood:i}},function(e,o){e.exports={__static__:!0,AVAILABLE:12,SUCCESS:14,ARGSERROR:-1,PLUGININIT:-2,PLUGINENONE:-3,PLUGINERROR:3,PLUGCOPY:6,USERCANCEL:15,UNKNOW:100,ACCESSERROR:101,UNLOGIN:102}},function(e,o,t){var n="#&yybBeforeBack",i=t(19),a=t(20),r=t(21);setTimeout(function(){a(),window.addEventListener("hashchange",function(){if(location.hash!==n){var e=i.createEvent("H5YSDKbeforeback");i.trigger(window,e),e.defaultPrevented||r(e)}},!1)},1e3),e.exports={"webview.cancelBack":a}},function(e,o){function t(e,o,t){if(!("defaultPrevented"in o)){o.defaultPrevented=!1;var n=o.preventDefault;o.preventDefault=function(){this.defaultPrevented=!0,n.call(this)}}o.data=t,e.dispatchEvent(o)}function n(e,o){var t=document.createEvent("Events"),n=!0;if(o)for(var i in o)"bubbles"==i?n=!!o[i]:t[i]=o[i];return t.initEvent(e,n,!0,null,null,null,null,null,null,null,null,null,null,null,null),t}e.exports={trigger:t,createEvent:n}},function(e,o){function t(){location.hash!=n&&(history.pushState?history.pushState(null,null,n):location.hash=n)}var n="#&yybBeforeBack";e.exports=t},function(e,o,t){function n(e){var o=e.target,t=o.getAttribute("data-action");"continue"==t?(p(),y.hide()):"moreGame"==t?(location.href="tmast://webview?mode=0&url=http%3a%2f%2fqzs.qq.com%2fopen%2fmobile%2fgame_h5%2frecommend.html%3fgftatmospheretab%3d11%2c0%2c%e8%bd%bb%e6%b8%b8%e6%88%8f%2c%e6%89%93%e5%bc%80%e5%8d%b3%e7%8e%a9%20%e6%97%a0%e9%9c%80%e4%b8%8b%e8%bd%bd",u.call("closeWebView")):"close"==t?u.call("closeWebView"):"showGuide"==t&&(y.show({html:d(),onClick:n}),b&&m&&(m.push(b),f.setLocalStorage("yybShowedDialog",m.join("-"))))}function i(){y.show({html:l(),onClick:n})}function a(){y.show({html:c(),onClick:n})}function r(e){b=s("appid")||location.host+location.pathname||1;var o=f.getLocalStorage("yybShowedDialog");o?(m=o.split("-")||[],o.indexOf(b)!==-1?a():i()):i()}t(22);var c=t(26),l=t(27),d=t(28),s=t(11),p=t(20),u=t(8),f=t(29),y=t(30),b=null,m=[];e.exports=r},function(e,o,t){var n=t(23);"string"==typeof n&&(n=[[e.id,n,""]]);t(25)(n,{});n.locals&&(e.exports=n.locals)},function(e,o,t){o=e.exports=t(24)(),o.push([e.id,".yyb-mod-img{position:relative;vertical-align:top;width:64px;height:64px;overflow:hidden}.yyb-mod-img:before{content:\"\";width:1px}.yyb-mod-img:before,.yyb-mod-img img{display:block;vertical-align:top;float:left;height:100%}.yyb-mod-img:after,.yyb-mod-img img{position:relative;top:-100%}.yyb-mod-img:after{content:\"\";display:block;vertical-align:top;float:left;width:100%;height:100%}.yyb-mod-img.is-contain,.yyb-mod-img.is-cover{background-repeat:no-repeat;background-position:-9999px -9999px}.yyb-mod-img.is-contain{background-size:contain}.yyb-mod-img.is-cover{background-size:cover}.yyb-mod-img.is-contain:before,.yyb-mod-img.is-cover:before{position:relative;background-repeat:inherit;background-size:inherit;background-position:50%;background-image:inherit;z-index:1;width:100%;margin:0 -100% 0 0;box-sizing:content-box;border-right:1px solid transparent}.yyb-mod-img.is-contain img,.yyb-mod-img.is-cover img{visibility:hidden;min-height:100%;margin:0 -21px 0 100%;max-width:21px}.yyb-mod-img.is-contain:after,.yyb-mod-img.is-cover:after{margin:0 -100% 0 1px}.yyb-mod-mask{position:fixed;top:0;right:0;left:0;bottom:0;margin:-1px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-box-pack:center;-webkit-box-align:center;background:rgba(0,0,0,.5);outline:none;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-focus-ring-color:transparent;z-index:99999}.yyb-mod-dialog{position:relative;width:280px;margin:0 auto;padding:16px 8px 8px;background:#fff}.yyb-mod-dialog-title{line-height:24px;font-size:16px;padding:0 12px;color:#000;font-weight:400;margin-bottom:8px}.yyb-mod-dialog-content{-webkit-box-orient:vertical;padding:0 12px;color:#000}.yyb-mod-dialog-action,.yyb-mod-dialog-content{display:-webkit-box;line-height:22px;font-size:14px}.yyb-mod-dialog-action{-webkit-box-pack:end;margin-top:20px}.yyb-mod-dialog-button,.yyb-mod-dialog-cancel,.yyb-mod-dialog-ok{display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;color:#1d82ff;padding:0 18px;height:36px;text-decoration:none}.yyb-mod-dialog-button:not(:first-child),.yyb-mod-dialog-cancel:not(:first-child),.yyb-mod-dialog-ok:not(:first-child){margin-left:8px}.yyb-mod-dialog-button:active,.yyb-mod-dialog-cancel:active,.yyb-mod-dialog-ok:active{background:#ebebeb}.yyb-mod-dialog-button.is-disable,.yyb-mod-dialog.is-ok-disable .yyb-mod-dialog-ok{color:#969696}.yyb-mod-dialog-button.is-disable:active,.yyb-mod-dialog.is-ok-disable .yyb-mod-dialog-ok:active{background:none}.yyb-icon-default,.yyb-icon-default-after:after,.yyb-icon-default-before:before{background:#e6e6e6 url(\"data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20120%20120'%3E%3Cpath%20d='M92.5,74C90.1,60.5,74,51,71.9,49.2c-2-1.9-3.1-3.6-3.8-6.4c-0.8-2.8,0.7-10,7.8-10.9s12.1,6.7,12.1,6.7%20%20C100.9,56.8,92.5,74,92.5,74z%20M48.7,48.1c-1.9,2-3.6,3.1-6.4,3.8s-10-0.7-10.9-7.8c-1-7.1,6.7-12.1,6.7-12.1%20%20c18.3-12.8,35.5-4.4,35.5-4.4C60.1,29.9,50.6,46,48.7,48.1z%20M48.1,70.8c2,1.9,3.1,3.6,3.8,6.4c0.8,2.8-0.7,10-7.8,10.9%20%20s-12.1-6.7-12.1-6.7C19.1,63.2,27.5,46,27.5,46C29.9,59.5,46,69,48.1,70.8z%20M70.8,71.9c1.9-2,3.6-3.1,6.4-3.8%20%20c2.8-0.8,10,0.7,10.9,7.8s-6.7,12.1-6.7,12.1C63.2,100.9,46,92.5,46,92.5C59.5,90.1,69,74,70.8,71.9z'%20fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;background-size:contain}.yyb-mod-dialog{box-sizing:border-box;line-height:24px;font-size:14px;color:#000;-webkit-user-select:none;-webkit-text-size-adjust:none}.yyb-mod-dialog a{text-decoration:none}.yyb-background,.yyb-background .yyb-mod-img{width:100%;height:100%}.yyb-mod-dialog2 .yyb-mod-dialog{padding-top:0;padding-left:0;padding-right:0}.yyb-mod-dialog2 .yyb-mod-dialog-content{padding-left:0;padding-right:0}.yyb-mod-dialog2 .yyb-phone{position:relative;padding-top:70.71429%;width:auto;height:0}.yyb-mod-dialog2 .yyb-phone .yyb-mod-img{position:absolute;top:0;left:0;width:100%;height:100%}.yyb-mod-dialog2 .yyb-text{line-height:24px;font-size:16px;margin:20px 0 -4px;-webkit-margin-collapse:separate;margin-collapse:separate;padding:0 14px}.yyb-mod-dialog2 .yyb-mod-dialog-action{margin-top:30px;margin-left:8px;margin-right:8px}.yyb-mod-dialog3 .mod-dialog{padding:16px 0}.yyb-mod-dialog3 .yyb-text{line-height:24px;font-size:16px;margin:12px 0 2px;-webkit-margin-collapse:separate;margin-collapse:separate;text-align:center}.yyb-mod-dialog3 .yyb-button{text-decoration:none;margin:18px 0 0;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align:center;color:#1d82ff;height:36px}",""])},function(e,o){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],o=0;o<this.length;o++){var t=this[o];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(o,t){"string"==typeof o&&(o=[[null,o,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(n[a]=!0)}for(i=0;i<o.length;i++){var r=o[i];"number"==typeof r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),e.push(r))}},e}},function(e,o,t){function n(e,o){for(var t=0;t<e.length;t++){var n=e[t],i=f[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(d(n.parts[a],o))}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(d(n.parts[a],o));f[n.id]={id:n.id,refs:1,parts:r}}}}function i(e){for(var o=[],t={},n=0;n<e.length;n++){var i=e[n],a=i[0],r=i[1],c=i[2],l=i[3],d={css:r,media:c,sourceMap:l};t[a]?t[a].parts.push(d):o.push(t[a]={id:a,parts:[d]})}return o}function a(e,o){var t=m(),n=v[v.length-1];if("top"===e.insertAt)n?n.nextSibling?t.insertBefore(o,n.nextSibling):t.appendChild(o):t.insertBefore(o,t.firstChild),v.push(o);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(o)}}function r(e){e.parentNode.removeChild(e);var o=v.indexOf(e);o>=0&&v.splice(o,1)}function c(e){var o=document.createElement("style");return o.type="text/css",a(e,o),o}function l(e){var o=document.createElement("link");return o.rel="stylesheet",a(e,o),o}function d(e,o){var t,n,i;if(o.singleton){var a=h++;t=g||(g=c(o)),n=s.bind(null,t,a,!1),i=s.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(o),n=u.bind(null,t),i=function(){r(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(o),n=p.bind(null,t),i=function(){r(t)});return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else i()}}function s(e,o,t,n){var i=t?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(o,i);else{var a=document.createTextNode(i),r=e.childNodes;r[o]&&e.removeChild(r[o]),r.length?e.insertBefore(a,r[o]):e.appendChild(a)}}function p(e,o){var t=o.css,n=o.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function u(e,o){var t=o.css,n=o.sourceMap;n&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([t],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var f={},y=function(e){var o;return function(){return"undefined"==typeof o&&(o=e.apply(this,arguments)),o}},b=y(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=y(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,h=0,v=[];e.exports=function(e,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=b()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var t=i(e);return n(t,o),function(e){for(var a=[],r=0;r<t.length;r++){var c=t[r],l=f[c.id];l.refs--,a.push(l)}if(e){var d=i(e);n(d,o)}for(var r=0;r<a.length;r++){var l=a[r];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete f[l.id]}}}};var x=function(){var e=[];return function(o,t){return e[o]=t,e.filter(Boolean).join("\n")}}()},function(module,exports){module.exports=function anonymous(locals,escape,include,rethrow){function encode_char(e){return _ENCODE_HTML_RULES[e]||e}escape=escape||function(e){return void 0==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g,__output=[],__append=__output.push.bind(__output);with(locals||{})__append('<div class="yyb-mod-dialog-content yyb-mod-dialog3"><div class="yyb-text">是否退出游戏？</div><a href="javascript:;" class="yyb-button" data-action="continue">继续玩</a> <a href="javascript:;" class="yyb-button" data-action="moreGame">更多页游</a> <a href="javascript:;" class="yyb-button" data-action="close">退出</a></div>');return __output.join("")}},function(module,exports){module.exports=function anonymous(locals,escape,include,rethrow){function encode_char(e){return _ENCODE_HTML_RULES[e]||e}escape=escape||function(e){return void 0==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g,__output=[],__append=__output.push.bind(__output);with(locals||{})__append('<div class="yyb-mod-dialog-content">是否退出游戏？</div><div class="yyb-mod-dialog-action"><a href="javascript:;" data-action="continue" class="yyb-mod-dialog-button">继续玩</a> <a href="javascript:;" data-action="showGuide" class="yyb-mod-dialog-button">退出</a></div>');return __output.join("")}},function(module,exports){module.exports=function anonymous(locals,escape,include,rethrow){function encode_char(e){return _ENCODE_HTML_RULES[e]||e}escape=escape||function(e){return void 0==e?"":String(e).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g,__output=[],__append=__output.push.bind(__output);with(locals||{})__append('<div class="yyb-mod-dialog-content yyb-mod-dialog2"><div class="yyb-phone"><div class="yyb-mod-img yyb-icon-default-after"><img src="http://qzonestyle.gtimg.cn/open/mobile/h5gamesdk/img/phone.jpg"></div></div><div class="yyb-text">你可以在轻游戏栏目看更多</div></div><div class="yyb-mod-dialog-action"><a href="javascript:;" class="yyb-mod-dialog-button" data-action="moreGame">去轻游戏栏目</a> <a href="javascript:;" class="yyb-mod-dialog-button" data-action="close">我知道了</a></div>');return __output.join("")}},function(e,o){function t(e){if(e){try{return localStorage.getItem(e)||""}catch(e){}return!1}}function n(e,o){if(e&&"undefined"!=typeof o){try{return localStorage.setItem(e,o),!0}catch(e){}return!1}}function i(e){if(e){try{return localStorage.removeItem(e),!0}catch(e){}return!1}}e.exports={getLocalStorage:t,setLocalStorage:n,removeLocalStorage:i}},function(e,o){function t(){if(a&&r)return a.style.display="",void(r.style.display="");if(a=document.createElement("div"),a.className="yyb-mod-mask",r=document.createElement("div"),r.className="yyb-mod-dialog",a.appendChild(r),document.body.appendChild(a),document.body.style.zoom){var e=document.body.style.zoom,o=e.match(/(.*)%/);o&&o[1]?a.style.zoom=100/o[1]:a.style.zoom=1/e}}function n(e){c&&r.removeEventListener("click",c),t(),r.innerHTML=e.html,e.onClick&&(r.addEventListener("click",e.onClick,!1),c=e.onClick)}function i(){a.style.display="none",r.style.display="none"}var a=null,r=null,c=null;e.exports={show:n,hide:i}},function(e,o,t){function n(e,o){r("setWebView",{titlebar:e},function(e){0==e.result?o&&o(c["STATE.SUCCESS"]):o&&o(c["STATE.FAIL"])})}function i(e){n(l.SHOW,e)}function a(e){n(l.HIDE,e)}var r=t(8).call,c=t(7),l={HIDE:0,SHOW:1};a(),e.exports={"ui.titleBar.show":i,"ui.titleBar.hide":a}},function(e,o,t){function n(e,o){i("setRequestedOrientation",{orientation:e},function(e){0==e.result?o&&o(a["STATE.SUCCESS"]):o&&o(a["STATE.FAIL"])})}var i=t(8).call,a=t(7);e.exports={"ui.setOrientation":n}},function(e,o,t){function n(){i("closeWebView")}var i=t(8).call;e.exports={"ui.closeWebView":n}},function(e,o,t){function n(e){i.call("addGameDesktopShortCut",null,function(o){0==o.result?e&&e(a["STATE.SUCCESS"]):e&&e(a["STATE.FAIL"])})}var i=t(8),a=t(7);e.exports={addGameDesktopShortCut:n}}])});/*  |xGv00|7740671e0e8c03289d76729718e5e525 */