define(['exports', 'preact/hooks'], (function(e,t){"use strict";e.useTap=function(e,{isDisabled:n}={isDisabled:!1}){const o=t.useRef({pointerDownId:null,startTime:0}),r=t.useCallback((()=>{o.current={pointerDownId:null,startTime:0}}),[]),i=t.useCallback((e=>{"mouse"===e.pointerType&&0!==e.button||(o.current.pointerDownId?r():o.current={pointerDownId:e.pointerId,startTime:e.timeStamp})}),[r]),s=t.useCallback((t=>{if(t.pointerId===o.current.pointerDownId){t.timeStamp-o.current.startTime<=250&&e({x:t.offsetX,y:t.offsetY})}r()}),[e,r]);return{tapProps:n?{}:{onPointerDown:i,onPointerUp:s,onPointerLeave:r,onPointerCancel:r}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useTap.js.map