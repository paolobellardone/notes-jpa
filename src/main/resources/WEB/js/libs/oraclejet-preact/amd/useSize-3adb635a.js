define(['exports', 'preact/hooks', './useResizeObserver-275c3e83'], (function(e,o,t){"use strict";e.useSize=(e,s={box:"content-box"})=>{const[i,r]=o.useState();return t.useResizeObserver(e,o.useCallback((e=>{const o="border-box"===s.box?e.borderBoxSize:e.contentBoxSize,t=o[0].inlineSize,i=o[0].blockSize;r({width:t,height:i})}),[s]),s),i}}));
//# sourceMappingURL=useSize-3adb635a.js.map
