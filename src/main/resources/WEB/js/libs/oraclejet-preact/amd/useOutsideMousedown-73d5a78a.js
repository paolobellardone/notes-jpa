define(['exports', 'preact/hooks', './arrayUtils-6ee96a35'], (function(e,n,r){"use strict";const t=e=>e?.ownerDocument??document;e.useOutsideMousedown=({isDisabled:e=!1,ref:o,handler:s})=>{n.useEffect((()=>{const n=r.coerceArray(o);if(!s||e||n.length>0&&n.findIndex((e=>null===e.current))>-1)return;const u=e=>{((e,n)=>{const r=e.target;if(r&&!t(r).contains(r))return!1;return n.every((e=>!e.current?.contains(r)))})(e,n)&&s?.(e)},c=n[0],i=t(c.current);return i?(i.addEventListener("mousedown",u,!0),()=>{i.removeEventListener("mousedown",u,!0)}):void 0}),[e,s,o])}}));
//# sourceMappingURL=useOutsideMousedown-73d5a78a.js.map
