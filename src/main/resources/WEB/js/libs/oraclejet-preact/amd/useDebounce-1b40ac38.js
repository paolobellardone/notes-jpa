define(['exports', 'preact/hooks'], (function(e,t){"use strict";e.useDebounce=function(e,u){const[n,o]=t.useState(e);return t.useEffect((()=>{const t=setTimeout((()=>{o(e)}),u);return()=>clearTimeout(t)}),[e,u]),n}}));
//# sourceMappingURL=useDebounce-1b40ac38.js.map
