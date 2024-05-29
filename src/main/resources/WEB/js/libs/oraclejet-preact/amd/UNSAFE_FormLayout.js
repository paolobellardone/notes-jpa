define(['exports', 'preact/jsx-runtime', './vanilla-extract-dynamic.esm-5df7b135', './useComponentTheme-9a36e65b', './FormContext-598efe92', './useFormContext-9b29eeaf', './UNSAFE_FormLayout/themes/FormLayoutStyles.css', './LayoutStyles.css-defee9f4', './UNSAFE_FormLayout/themes/redwood/FormLayoutTheme', './classNames-49c3ba27', './logger-36c6eea0', 'preact', 'preact/hooks', 'css!./LayoutStyles.styles.css', 'css!./FormLayoutStyles.styles.css', './UNSAFE_FormLayout/themes/redwood/FormLayoutBaseTheme.css', 'module', './UNSAFE_FormLayout/themes/redwood/FormLayoutVariants.css', 'css!./FormLayoutVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dc16b39'], (function(e,s,t,a,o,r,l,n,i,m,u,c,y,d,F,h,p,L,b,S){"use strict";e.compoundVariants=l.compoundVariants,e.styles=l.styles,e.variants=l.variants,e.FormLayout=({columns:e=1,columnBehavior:u="responsive",columnSpan:c=1,direction:y="row",isFullWidth:d,isReadonly:F,labelEdge:h,labelStartWidth:p,labelWrapping:L,userAssistanceDensity:b,children:S})=>{const{isDisabled:x,isFormLayout:v,isReadonly:g,labelEdge:f,labelStartWidth:A,labelWrapping:W,textAlign:C,userAssistanceDensity:E}=r.useFormContext(),N=F??g,T=h??f,_=p??A,w=L??W,V=b??(v?E:"efficient"),j=t.assignInlineVars({[n.layoutLocalVars.columnCount]:`${e}`}),{baseTheme:D,classes:R}=a.useComponentTheme(i.FormLayoutRedwoodTheme,{columnBehavior:u,direction:y});return s.jsx(o.FormContext.Provider,{value:{isDisabled:x,isFormLayout:!0,isReadonly:N,labelEdge:T,labelStartWidth:_,labelWrapping:w,textAlign:C,userAssistanceDensity:V},children:s.jsx("div",{class:m.classNames([D,l.styles.rootWrapperStyle,d&&l.styles.rootWrapperFullWidthStyle,n.layoutSpanStyles.layoutSpanColumn[c]]),style:j,children:s.jsx("div",{class:R,children:S})})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_FormLayout.js.map
