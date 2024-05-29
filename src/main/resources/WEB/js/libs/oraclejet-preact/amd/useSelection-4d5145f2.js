define(['exports', 'preact/hooks', './keys-3892d3c6', './useUser-6c8723b4'], (function(e,t,r,n){"use strict";const l=(e,t,n,l,o,c,s,u,i,y)=>{const a=t(e.target);if(null==a)return;if(e.shiftKey&&void 0!==u&&y&&((e,t,n,l,o)=>"multiple"===n&&"toggle"!==l&&(o||r.containsKey(t,e)))(u,n,l,o,"click"===e.type))return y({value:{start:u,end:a}}),void(s&&(s.current=a));let k=n;r.containsKey(n,a)?"Enter"!==e.key&&("toggle"===o||e.ctrlKey||e.metaKey||" "===e.key?k=r.removeKey(n,a,c):"multiple"===l&&(n.all||n.keys.size>1)&&(k={all:!1,keys:new Set([a])})):k="single"===l||"Enter"===e.key||"replace"===o&&!e.ctrlKey&&!e.metaKey?{all:!1,keys:new Set([a])}:r.addKey(n,a),n!=k&&i&&(i({value:k,target:e.target}),"click"===e.type&&e.stopPropagation())};e.useSelection=function(e,o,c,s,u,i,y,a,k,K,d,f,p){const g=t.useRef(),v=t.useRef(!1),w=t.useCallback((e=>{v.current="touch"===e.pointerType}),[v]),h=t.useCallback((t=>{l(t,e,o,c,v.current?"toggle":u,s,g,k,y,p),t.shiftKey||(g.current=void 0)}),[e,o,c,u,s,g,k,y,p]),m=t.useCallback((t=>{(" "===t.key||"Enter"===t.key&&i)&&l(t,e,o,c,u,s,g,a,y,t.shiftKey&&" "===t.key?p:void 0)}),[e,o,c,u,s,a,y,p,i]),{direction:b}=n.useUser(),C=t.useCallback((e=>{if(" "===e.key)return void e.preventDefault();const t=g.current||k,n="rtl"===b,l={ArrowUp:K?.(t,!0),ArrowDown:K?.(t,!1),ArrowLeft:d?.(t,!n),ArrowRight:d?.(t,n)},u=K&&d;if(Object.keys(l).includes(e.key))if(e.shiftKey&&f&&"multiple"===c){let t=o;!g.current&&r.isKeyDefined(k)&&(t={all:!1,keys:new Set([k])});const n=l[e.key],c=n?.();null!=c&&(f(c),u?p&&null!=k&&p({value:{start:k,end:c}}):(r.containsKey(t,c)?null!=g.current&&g.current!==c&&(t=r.removeKey(t,g.current,s)):t=r.addKey(t,c),o!=t&&y&&y({value:t,target:e.target})),g.current=c)}else g.current=void 0}),[o,s,y,k,K,d,f,b,p,c]);return{selectionProps:"none"===c||null==y?{}:{onPointerDown:w,onClick:h,onKeyDown:C,onKeyUp:m}}}}));
//# sourceMappingURL=useSelection-4d5145f2.js.map
