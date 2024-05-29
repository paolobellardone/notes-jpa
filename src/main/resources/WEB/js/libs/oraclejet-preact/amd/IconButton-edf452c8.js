define(['exports', 'preact/jsx-runtime', 'preact', './BaseButton-4a512058', './ButtonLayout-071d379d', 'preact/compat', './useTooltip-f1e6a531', 'preact/hooks', './Floating-aaafdcf7', './TopLayerHost-d9bd8ecf', './logger-36c6eea0', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css'], (function(t,e,o,s,i,a,n,l,r,d,c,p,u,y){"use strict";const b=a.forwardRef((({variant:t="outlined",isDisabled:a=!1,isRepeat:l=!1,size:r="md",type:d="button",autofocus:c,onAction:p,width:u,tooltip:y,testId:b,"aria-label":f,"aria-describedby":h,...m},T)=>{const{tooltipContent:B,tooltipProps:x}=n.useTooltip({text:y||f,isDisabled:a}),g={type:"button",buttonType:d};return e.jsxs(o.Fragment,{children:[e.jsx(s.BaseButton,{...x,ref:T,elementDetails:g,isDisabled:a,isRepeat:l,size:r,autofocus:c,variant:t,width:u,styling:["min"],onAction:p,"aria-describedby":h,"aria-label":f??y,testId:b,children:e.jsx(i.ButtonLayout,{display:"icons",startIcon:m.children,size:r})}),B]})}));b.displayName="IconButton",t.IconButton=b}));
//# sourceMappingURL=IconButton-edf452c8.js.map