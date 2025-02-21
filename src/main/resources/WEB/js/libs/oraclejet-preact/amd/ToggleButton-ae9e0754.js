define(['exports', 'preact/jsx-runtime', 'preact/compat', './BaseButton-19a622bc', './useToggleAction-59741954', './mergeProps-bcfa6a92', './toggleButtonUtils-c8f12580', './buttonUtils-97878e90', './ToggleButtonLabel-330c8f8b'], (function(e,t,o,a,s,l,i,n,r){"use strict";const g=o.forwardRef((({startIcon:e,endIcon:o,variant:g="outlined",size:d="md",isDisabled:c=!1,isSelected:u=!1,onToggle:b,display:p="all",autofocus:f,testId:B,label:T,"aria-label":y,"aria-describedby":m,width:I,...v},x)=>{const{globalEventProps:D}=n.processGlobals(v),P=!e&&!o||"label"===p,{triggerProps:h}=s.useToggleAction({isDisabled:c,onToggle:b}),j=i.toggleStyling("auto",u,!1,!1,"outlined"===g,void 0,P),w={"aria-describedby":m};return t.jsx(a.BaseButton,{...l.mergeProps(h,D,w),ref:x,variant:g,isDisabled:c,size:d,width:I,"aria-pressed":u,autofocus:f,styling:j,"aria-label":y??T,testId:B,...D,children:t.jsx(r.ToggleButtonLabel,{onAction:()=>b?.({value:u}),label:T,isDisabled:c,display:p,startIcon:e,endIcon:o})})}));g.displayName="ToggleButton",e.ToggleButton=g}));
//# sourceMappingURL=ToggleButton-ae9e0754.js.map
