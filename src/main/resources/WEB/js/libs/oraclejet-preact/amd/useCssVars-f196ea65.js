define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useUser-6c8723b4', './useTheme-fae6a27c', './useColorScheme-33c4f510', './useScale-f847e1c0'], (function(e,s,r,t,o,c,n){"use strict";e.useCssVars=function(e){const u=r.useRef(null),[a,f]=r.useState({}),{forcedColors:l}=t.useUser(),{name:i}=o.useTheme(),p=n.useScale(),d=c.useColorScheme(),h=e.reduce(((e,s)=>(s.cssProp&&(e[s.cssProp]=s.tokenVar),e)),{}),m=s.jsx("div",{ref:u,style:{display:"none",...h}});return r.useLayoutEffect((()=>{if(!u.current)return;const s=window.getComputedStyle(u.current),r={};e.forEach((e=>{const t=e.cssProp||function(e){const s=e.match(/var\((--[a-zA-Z_0-9\-]+)\)/);return s&&s.length>1?s[1]:""}(e.tokenVar);r[e.key]=s.getPropertyValue(t)})),f(r)}),[l,i,d,p,e]),{resolvedVars:a,cssContent:m}}}));
//# sourceMappingURL=useCssVars-f196ea65.js.map