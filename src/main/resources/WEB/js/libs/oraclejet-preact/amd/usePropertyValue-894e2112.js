define(['exports', 'preact/hooks', './_curry1-df649359', './curryN-bf872ffa'], (function(r,e,t,u){"use strict";var c=t._curry1((function(r){return u.curryN(r.length,r)}));const n=c(((r,e)=>getComputedStyle(r).getPropertyValue(e)));r.curry=c,r.usePropertyValue=()=>{const r=r=>"",[t,u]=e.useState((()=>r=>""));return[e.useCallback((e=>{u(null!==e?()=>n(e):()=>r)}),[]),t]}}));
//# sourceMappingURL=usePropertyValue-894e2112.js.map
