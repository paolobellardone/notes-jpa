define(['exports', 'preact/jsx-runtime', './useActionable-d75af68a', 'preact/hooks', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './UNSAFE_Chip/themes/ChipStyles.css', './useInteractionStyle-76a64325', './mergeProps-bcfa6a92', './useTestId-b5cd4766'], (function(e,s,a,t,i,o,l,r,c,n){"use strict";e.Chip=function({isSelected:e,isDisabled:i,"aria-label":d,children:b,testId:u,onToggle:p}){const v=t.useCallback((()=>{p?.({previousValue:e,value:!e})}),[e,p]),{actionableProps:h}=a.useActionable(v),{interactionProps:y,applyActiveStyle:S,applyHoverStyle:H,applyPseudoHoverStyle:P}=r.useInteractionStyle(),T=c.mergeProps(h,y),f=l.multiVariantStyles({disabled:i?"isDisabled":"notDisabled",hover:!H||i||e?"notHover":"isHover",pseudoHover:!P||i||e?"notPseudoHover":"isPseudoHover",active:e||S?"isActive":"notActive"}),{isTabbable:x}=o.useTabbableMode(),A=n.useTestId(u);return i?s.jsx("div",{class:f,...A,children:b}):s.jsx("div",{...T,class:f,...A,tabIndex:x?0:-1,"aria-label":d,role:"switch","aria-checked":e?"true":"false",children:b})}}));
//# sourceMappingURL=Chip-cd210507.js.map
