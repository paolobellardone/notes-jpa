define(['exports', './utils-225c0e9a'], (function(t,e){"use strict";const s=new RegExp(`^-?\\d*\\.?\\d+(${["ch","cm","mm","in","pc","pt","px","em","ex","rem","vh","vw","vmin","vmax"].join("|")})$`),i=new RegExp("^-?\\d*\\.?\\d+x$");t.sizeToCSS=t=>0===t||(t=>0===parseFloat(t))(t)?0:(t=>t.startsWith("var(")&&t.endsWith(")"))(t)||(t=>t.startsWith("calc(")&&t.endsWith(")"))(t)||(t=>t.endsWith("%"))(t)||(t=>s.test(t))(t)?t:(t=>t.startsWith("--"))(t)?`var(${t})`:(t=>i.test(t))(t)?(t=>{const s=t.slice(0,t.length-1),i=Number(s);return isNaN(i)?0:e.xUnits(i)})(t):0}));
//# sourceMappingURL=size-6d3a087d.js.map
