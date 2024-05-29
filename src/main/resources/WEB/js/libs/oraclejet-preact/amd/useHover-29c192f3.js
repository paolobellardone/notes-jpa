define(['exports', './useToggle-a59ec51a'], (function(e,s){"use strict";e.useHover=function(e={isDisabled:!1}){const{bool:o,setTrue:t,setFalse:u}=s.useToggle(!1),{bool:n,setTrue:i,setFalse:r}=s.useToggle(!1),l=e.isDisabled?{}:{ontouchend:i,onMouseEnter:()=>{n?r():t()},onMouseLeave:u};return{isHover:!e.isDisabled&&o,hoverProps:l}}}));
//# sourceMappingURL=useHover-29c192f3.js.map
