define(['exports'], (function(e){"use strict";const n=(()=>{let e;try{const n=window?.sessionStorage?.getItem("ojet.logLevel");switch(n){case"none":e=0;break;case"error":e=1;break;case"warning":e=2;break;case"info":e=3;break;case"log":e=4;break;default:e=void 0}}catch(e){}return e})();let o=1,t=null;const r=()=>void 0===n?o:n,i=(e,n,o,...i)=>{if(r()<n)return;const l=(()=>{let e;return t?e=t:"undefined"!=typeof window&&void 0!==window.console&&(e=window.console),e})();if(l){let t=[o];if(i&&(t=t.concat(i)),1===t.length&&t[0]instanceof Function){const e=t[0]();t=Array.isArray(e)?e:[e]}l.write?(t.unshift(n),l.write(...t)):l[e].apply(l,t)}},l=i.bind(null,"log",4),s=i.bind(null,"info",3),a=i.bind(null,"warn",2),c=i.bind(null,"error",1);e.ERROR=1,e.INFO=3,e.LOG=4,e.NONE=0,e.WARN=2,e.error=c,e.getLogLevel=r,e.info=s,e.log=l,e.setLogLevel=e=>{o=e},e.setLogWriter=e=>{t=e},e.warn=a}));
//# sourceMappingURL=logger-36c6eea0.js.map