define(['exports', 'preact/hooks', './keys-cc1cb01d', './useUser-9b166ca3'], (function(e,t,r,s){"use strict";e.useCurrentKey=function(e,n,c,i,o,u,l,a,y){const{direction:f}=s.useUser(),K=t.useCallback(((e,t)=>y?y(e,t):e===t),[y]),k=t.useCallback((e=>{if(a&&r.isKeyDefined(l)){const t="rtl"===f,s={ArrowUp:c,ArrowDown:i,ArrowLeft:t?u:o,ArrowRight:t?o:u};if(Object.keys(s).includes(e.key)&&(n||!e.shiftKey)&&!e.metaKey&&!e.ctrlKey){const t=s[e.key]?.();r.isKeyDefined(t)&&!K(l,t)&&a({value:t}),e.preventDefault()}}}),[l,a,c,i,o,u,K,n,f]),d=t.useCallback((t=>{if(a&&!t.shiftKey){const s=e(t.target);r.isKeyDefined(s)&&!K(l,s)&&a({value:s})}}),[l,e,a,K]);return{currentKeyProps:null==a?{}:{onClickCapture:d,onKeyDown:k}}}}));
//# sourceMappingURL=useCurrentKey-26170e5e.js.map
