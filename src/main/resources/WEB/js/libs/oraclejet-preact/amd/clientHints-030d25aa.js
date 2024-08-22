define(['exports'], (function(o){"use strict";const e={browser:"unknown",browserMajorVersion:-1,deviceType:"unknown",platform:"unknown",touchSupport:"unknown",hoverSupport:"unknown"};let r;function n(o,e){let r;const n=o.match(e);if(n){const o=n[1];o&&(r=parseInt(o))}return r??-1}o.getClientHints=function(o){if(void 0===r||o){let i;const t=navigator?.userAgentData;if(i=t?function(o){const r={...e};for(const e of o.brands){const o=e.brand.toLowerCase();if(o.indexOf("chrome")>-1?r.browser="chrome":o.indexOf("edge")>-1&&(r.browser="edge"),"unknown"!==r.browser){r.browserMajorVersion=Number(e.version);break}}const n=o.platform.toLowerCase();"windows"===n?r.platform="windows":"android"===n?(r.platform="android",r.deviceType=o.mobile?"phone":"tablet"):"macos"===n&&(r.platform="mac");return r}(t):function(o){const r={...e};(o=o.toLowerCase()).indexOf("iphone")>-1?(r.platform="ios",r.deviceType="phone"):o.indexOf("ipad")>-1||o.indexOf("macintosh")>-1&&navigator?.maxTouchPoints>0?(r.platform="ios",r.deviceType="tablet"):o.indexOf("mac")>-1?r.platform="mac":o.indexOf("android")>-1?r.platform="android":o.indexOf("win")>-1&&(r.platform="windows");o.indexOf("edg")>-1?(r.browser="edge",r.browserMajorVersion=n(o,/edg\/(\d+)/)):o.indexOf("chrome")>-1?(r.browser="chrome",r.browserMajorVersion=n(o,/chrome\/(\d+)/)):o.indexOf("crios")>-1?(r.browser="chrome",r.browserMajorVersion=n(o,/crios\/(\d+)/)):o.indexOf("fxios")>-1?(r.browser="firefox",r.browserMajorVersion=n(o,/fxios\/(\d+)/)):o.indexOf("firefox")>-1?(r.browser="firefox",r.browserMajorVersion=n(o,/rv:(\d+)/)):o.indexOf("safari")>-1&&(r.browser="safari",r.browserMajorVersion=n(o,/version\/(\d+)/));return r}(o??navigator?.userAgent??""),void 0!==o)return i;!function(o){"undefined"==typeof window||!("ontouchstart"in window)&&0===navigator.maxTouchPoints?o.touchSupport="none":window.matchMedia?.("(pointer: coarse)").matches?o.touchSupport="primary":window.matchMedia?.("(any-pointer: coarse)").matches&&(o.touchSupport="secondary")}(i),function(o){"undefined"==typeof window||window.matchMedia?.("(hover: none)").matches?o.hoverSupport="none":"none"!==o.touchSupport&&window.matchMedia?.("(pointer: fine)").matches?o.hoverSupport="events":o.hoverSupport="pseudo-classes"}(i),r={...i},Object.freeze(r)}return r}}));
//# sourceMappingURL=clientHints-030d25aa.js.map