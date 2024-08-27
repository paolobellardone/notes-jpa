define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Text-e132dec0', './usePress-a9ed1488', './mergeProps-bcfa6a92', './classNames-08d99695', './useInteractionStyle-360d25a5', './useComponentTheme-5aa41a8f', 'preact', './mergeInterpolations-9ede4cf7', './flexitem-5db48325', './UNSAFE_NavigationListCommon/themes/redwood/NavigationListItemTheme', './Flex-db3ddadb', './WarningS-0c6b3eb7', './ErrorS-f41bce95', './InformationS-28ac133d', './SuccessS-e1f2cad9', './Badge-b28ef084'], (function(e,s,t,n,a,i,o,r,l,c,d,m,u,g,v,p,x,S,h){"use strict";const f=c.createContext(null);function C(){return t.useContext(f)}const y=d.mergeInterpolations([...Object.values(m.flexitemInterpolations)]),{class:b,...j}=y({alignSelf:"center"});e.BaseNavigationListItem=function({itemKey:e,label:c,badge:d,metadata:m,severity:f="none",removeIcon:y}){const I=t.useRef(null),{itemId:N,itemHandlers:H,itemClasses:T,isSelected:L,labelContainerClasses:P,labelContainerStyle:w}=function({itemKey:e}){const{onSelectionChange:s,selection:n,currentKey:c,showFocusRing:d,navigationListItemPrefix:m}=C(),g=c===e,v=n===e,{interactionProps:p,applyPseudoHoverStyle:x,applyHoverStyle:S,applyActiveStyle:h}=r.useInteractionStyle(),{classes:f,styles:{labelContainerClasses:y}}=l.useComponentTheme(u.NavigationListItemRedwoodTheme,{focusRing:d?"isFocusRing":"notFocusRing",current:g?"isCurrent":"notCurrtent",selected:v?"isSelected":"notSelected",hybridHover:S?"isHybridHover":"notHybridHover",pseudoHover:x?"isPseudoHover":"notPseudoHover",active:h?"isActive":"notActive"}),I=t.useCallback((()=>{s?.({value:e,reason:"pointer"})}),[e,s]),{pressProps:N}=a.usePress(I);return{itemId:m+e,itemHandlers:i.mergeProps(p,N),itemClasses:o.classNames([f]),isSelected:v,labelContainerClasses:o.classNames([y,b]),labelContainerStyle:j}}({itemKey:e}),R=!("none"===f||void 0===f),{styles:{iconLabelContainer:F,iconContainer:A,navigationItemMetadata:K}}=l.useComponentTheme(u.NavigationListItemRedwoodTheme),k=o.classNames([K]),B=o.classNames([F,A]),{styles:{navigationlistRemoveIcon:E}}=l.useComponentTheme(u.NavigationListItemRedwoodTheme),z=o.classNames([E]);return s.jsxs("li",{role:"tab",...H,"data-oj-key":e,id:N,class:T,"aria-selected":L,ref:I,children:[c&&s.jsx("span",{class:P,style:w,children:s.jsx(n.Text,{size:"inherit",weight:"inherit",variant:"inherit",children:c})}),(m||R||d||y)&&s.jsxs(g.Flex,{gap:"2x",align:"center",justify:"end",flex:"1 1 auto",children:[" ",d&&s.jsx("span",{class:B,children:s.jsx(h.Badge,{size:"md",variant:"neutralSubtle",children:d})}),m&&s.jsx("span",{class:k,children:s.jsx(n.Text,{children:"( "+m+" )"})}),R&&s.jsx("span",{class:B,children:(e=>{switch(e){case"error":return s.jsx(p.SvgErrorS,{color:"danger"});case"warning":return s.jsx(v.SvgWarningS,{color:"warning"});case"info":return s.jsx(x.SvgInformationS,{color:"info"});case"confirmation":return s.jsx(S.SvgSuccessS,{color:"success"});default:return null}})(f)}),y&&s.jsx("span",{class:z,children:y})]})]})},e.NavigationListContext=f,e.useNavigationListContext=C}));
//# sourceMappingURL=BaseNavigationListItem-4a940426.js.map
