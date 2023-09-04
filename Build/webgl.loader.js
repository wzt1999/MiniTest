function createUnityInstance(e,r,n){function t(e,n){if(!t.aborted&&r.showBanner)return"error"==n&&(t.aborted=!0),r.showBanner(e,n);switch(n){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function o(e){var r=e.reason||e.error,n=r?r.toString():e.message||e.reason||"",t=r&&r.stack?r.stack.toString():"";if(t.startsWith(n)&&(t=t.substring(n.length)),n+="\n"+t.trim(),n&&h.stackTraceRegExp&&h.stackTraceRegExp.test(n)){var o=e.filename||r&&(r.fileName||r.sourceURL)||"",a=e.lineno||r&&(r.lineNumber||r.line)||0;l(n,o,a)}}function a(e){e.preventDefault()}function i(e,r,n){if(e.indexOf("fullscreen error")==-1){if(h.startupErrorHandler)return void h.startupErrorHandler(e,r,n);if(!(h.errorHandler&&h.errorHandler(e,r,n)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),i.didShowErrorMessage))){var e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e;e.indexOf("DISABLE_EXCEPTION_CATCHING")!=-1?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":e.indexOf("Cannot enlarge memory arrays")!=-1?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":e.indexOf("Invalid array buffer length")==-1&&e.indexOf("Invalid typed array length")==-1&&e.indexOf("out of memory")==-1&&e.indexOf("could not allocate memory")==-1||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),i.didShowErrorMessage=!0}}}function s(e,r){var n="(wasm-function\\[)(\\d+)(\\])",t=new RegExp(n);return e.replace(new RegExp(n,"g"),function(e){var n=e.match(t);return n[1]+(r[n[2]]?r[n[2]]+"@":"")+n[2]+n[3]})}function l(e,r,n){h.symbols?i(s(e,h.symbols),r,n):h.symbolsUrl?u("symbolsUrl").then(function(t){for(var o="",a=0;a<t.length;a++)o+=String.fromCharCode(t[a]);h.symbols=JSON.parse(o),i(s(e,h.symbols),r,n)}).catch(function(t){i(e,r,n)}):i(e,r,n)}function d(e,r){if("symbolsUrl"!=e){var t=h.downloadProgress[e];t||(t=h.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof r||"progress"!=r.type&&"load"!=r.type||(t.started||(t.started=!0,t.lengthComputable=r.lengthComputable),t.total=r.total,t.loaded=r.loaded,"load"==r.type&&(t.finished=!0));var o=0,a=0,i=0,s=0,l=0;for(var e in h.downloadProgress){var t=h.downloadProgress[e];if(!t.started)return 0;i++,t.lengthComputable?(o+=t.loaded,a+=t.total,s++):t.finished||l++}var d=i?(i-l-(a?s*(a-o)/a:0))/i:0;n(.9*d)}}function u(e){d(e);var r="no-store",n=h.fetchWithProgress,o=n(h[e],{method:"GET",companyName:h.companyName,productName:h.productName,control:r,onProgress:function(r){d(e,r)}});return o.then(function(e){return e.parsedBody}).catch(function(r){var n="Failed to download file "+h[e];"file:"==location.protocol?t(n+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(n)})}function c(){return new Promise(function(e,r){var n=document.createElement("script");n.src=h.frameworkUrl,n.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var r=[["br","br"],["gz","gzip"]];for(var o in r){var a=r[o];if(h.frameworkUrl.endsWith("."+a[0])){var i="Unable to parse "+h.frameworkUrl+"!";if("file:"==location.protocol)return void t(i+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error");if(i+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+a[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==a[0]&&"http:"==location.protocol){var s=["localhost","127.0.0.1"].indexOf(location.hostname)!=-1?"":"Migrate your server to use HTTPS.";i=/Firefox/.test(navigator.userAgent)?"Unable to parse "+h.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+s+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+h.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'}return void t(i,"error")}}t("Unable to parse "+h.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var l=unityFramework;unityFramework=null,n.onload=null,e(l)},n.onerror=function(e){t("Unable to load file "+h.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(n),h.deinitializers.push(function(){document.body.removeChild(n)})})}function f(){c().then(function(e){e(h)});var e=u("dataUrl");h.preRun.push(function(){h.addRunDependency("dataUrl"),e.then(function(e){var r=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,t="UnityWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(n,n+t.length))==t)throw"unknown data format";n+=t.length;var o=r.getUint32(n,!0);for(n+=4;n<o;){var a=r.getUint32(n,!0);n+=4;var i=r.getUint32(n,!0);n+=4;var s=r.getUint32(n,!0);n+=4;var l=String.fromCharCode.apply(null,e.subarray(n,n+s));n+=s;for(var d=0,u=l.indexOf("/",d)+1;u>0;d=u,u=l.indexOf("/",d)+1)h.FS_createPath(l.substring(0,d),l.substring(d,u-1),!0,!0);h.FS_createDataFile(l,null,e.subarray(a,a+i),!0,!0,!0)}h.removeRunDependency("dataUrl")})})}n=n||function(){};var h={canvas:e,webglContextAttributes:{preserveDrawingBuffer:!1},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,r){var n=window.setInterval(e,r);return this.intervals[n]=!0,n},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&e.indexOf("wasm streaming compile failed")!=-1&&(e.toLowerCase().indexOf("mime")!=-1?t('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+h.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):t('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+h.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};for(var g in r)h[g]=r[g];h.streamingAssetsUrl=new URL(h.streamingAssetsUrl,document.URL).href;var p=h.disabledCanvasEvents.slice();p.forEach(function(r){e.addEventListener(r,a)}),window.addEventListener("error",o),window.addEventListener("unhandledrejection",o),h.deinitializers.push(function(){h.disableAccessToMediaDevices(),p.forEach(function(r){e.removeEventListener(r,a)}),window.removeEventListener("error",o),window.removeEventListener("unhandledrejection",o);for(var r in h.intervals)window.clearInterval(r);h.intervals={}}),h.QuitCleanup=function(){for(var e=0;e<h.deinitializers.length;e++)h.deinitializers[e]();h.deinitializers=[],"function"==typeof h.onQuit&&h.onQuit()};var m="",b="";document.addEventListener("webkitfullscreenchange",function(r){var n=document.webkitCurrentFullScreenElement;n===e?e.style.width&&(m=e.style.width,b=e.style.height,e.style.width="100%",e.style.height="100%"):m&&(e.style.width=m,e.style.height=b,m="",b="")});var v={Module:h,SetFullscreen:function(){return h.SetFullscreen?h.SetFullscreen.apply(h,arguments):void h.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){return h.SendMessage?h.SendMessage.apply(h,arguments):void h.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,r){h.shouldQuit=!0,h.onQuit=e})}};return h.SystemInfo=function(){function e(e,r,n){return e=RegExp(e,"i").exec(r),e&&e[n]}for(var r,n,t,o,a,i,s=navigator.userAgent+" ",l=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]],d=0;d<l.length;++d)if(n=e(l[d][0]+"[/ ](.*?)[ \\)]",s,1)){r=l[d][1];break}"Safari"==r&&(n=e("Version/(.*?) ",s,1)),"Internet Explorer"==r&&(n=e("rv:(.*?)\\)? ",s,1)||n);for(var u=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_.]+)","macOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],c=0;c<u.length;++c)if(o=e(u[c][0],s,1)){t=u[c][1],o=o.replace(/_/g,".");break}var f={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"};o=f[o]||o,a=document.createElement("canvas"),a&&(gl=a.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=a&&a.getContext("webgl"))&&(glVersion=1),gl&&(i=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937)));var h="undefined"!=typeof SharedArrayBuffer,g="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:s.trim(),browser:r||"Unknown browser",browserVersion:n||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:t||"Unknown OS",osVersion:o||"Unknown OS Version",gpu:i||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:h,hasWasm:g,hasWasmThreads:!1}}(),h.abortHandler=function(e){return l(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),h.fetchWithProgress=function(){function e(e,r){if(!r)return 0;var n=e.headers.get("Content-Encoding"),t=parseInt(e.headers.get("Content-Length"));switch(n){case"br":return Math.round(5*t);case"gzip":return Math.round(4*t);default:return t}}function r(r,n){var t=function(){};return n&&n.onProgress&&(t=n.onProgress),fetch(r,n).then(function(r){function n(){return"undefined"==typeof a?r.arrayBuffer().then(function(e){return t({type:"progress",total:e.length,loaded:0,lengthComputable:i}),new Uint8Array(e)}):a.read().then(function(e){return e.done?o():(u+e.value.length<=l.length?(l.set(e.value,u),c=u+e.value.length):d.push(e.value),u+=e.value.length,t({type:"progress",total:Math.max(s,u),loaded:u,lengthComputable:i}),n())})}function o(){if(u===s)return l;if(u<s)return l.slice(0,u);var e=new Uint8Array(u);e.set(l,0);for(var r=c,n=0;n<d.length;++n)e.set(d[n],r),r+=d[n].length;return e}var a="undefined"!=typeof r.body?r.body.getReader():void 0,i="undefined"!=typeof r.headers.get("Content-Length"),s=e(r,i),l=new Uint8Array(s),d=[],u=0,c=0;return i||console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),n().then(function(e){return t({type:"load",total:e.length,loaded:e.length,lengthComputable:i}),r.parsedBody=e,r})})}return r}(),new Promise(function(e,r){h.SystemInfo.hasWebGL?h.SystemInfo.hasWasm?(h.startupErrorHandler=r,n(0),h.postRun.push(function(){n(1),delete h.startupErrorHandler,e(v)}),f()):r("Your browser does not support WebAssembly."):r("Your browser does not support WebGL.")})}