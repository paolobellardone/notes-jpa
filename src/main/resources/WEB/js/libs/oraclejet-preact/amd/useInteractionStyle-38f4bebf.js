define(['exports', './mergeProps-bae345c4', './clientHints-5a067fae', './useHover-29c192f3', './useActive-152990ee'], (function(e,t,s,o,r){"use strict";e.useInteractionStyle=(e=!1)=>{const i=s.getClientHints(),p="ios"===i.platform?{ontouchstart:function(){}}:{},c="events"===i.hoverSupport,{activeProps:n,isActive:v}=r.useActive(),{hoverProps:a,isHover:u}=o.useHover({isDisabled:!c}),l=!c&&!v&&!e,P=c&&u&&!v&&!e,H=v&&!e;return{interactionProps:t.mergeProps(p,n,a),baseProps:{iosProps:p,activeProps:n,hoverProps:a},applyPseudoHoverStyle:l,applyHoverStyle:P,applyActiveStyle:H,baseStates:{isActive:v,isHover:u}}}}));
//# sourceMappingURL=useInteractionStyle-38f4bebf.js.map
