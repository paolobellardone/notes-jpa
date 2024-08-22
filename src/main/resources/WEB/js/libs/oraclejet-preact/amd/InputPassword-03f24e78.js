define(['exports', 'preact/jsx-runtime', 'preact/compat', 'preact/hooks', './useFocusableTextField-c2f98a8b', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useTextField-e6877c79', './useHover-1890d6a0', './Label-3f8fc274', './TextFieldInput-dfd9529f', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-a5e85e5d', './StyledTextField-8ac3bbb4', './TextField-0fc70892', './useTranslationBundle-20bfc0f3', 'css!./LiveRegionStyles.styles.css', './LayerHost-0a244de8', './logger-0f873e29', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-f4d1fa1b', './CompactUserAssistance-b2cbdbad', './useTooltipControlled-18271c7a', 'preact', 'css!./IconStyle.styles.css', './Popup-b5495d55', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useToggle-a29f97af', './useClearIcon-05225968', './componentUtils-c14d7fce', './ClearIcon-a29e57fb', './useCurrentValueReducer-faded381', './RevealToggleIcon-ef89d654'], (function(e,s,a,t,l,o,n,i,d,r,c,u,p,b,m,x,y,f,h,F,v,C,T,A,g,I,S,R,w,U,L,P,E,j,V,D,_,k,B,H,N,q,W){"use strict";const O=a.forwardRef((({"aria-describedby":e,assistiveText:a,autoComplete:o="off",autoFocus:p=!1,columnSpan:f,hasClearIcon:h,hasRevealToggle:F="always",helpSourceLink:v,helpSourceText:C,isDisabled:T,isReadonly:A,isRequired:S=!1,isRequiredShown:R,label:w,labelEdge:U,labelStartWidth:L,messages:P,placeholder:E,textAlign:j,userAssistanceDensity:V,value:D,variant:_="default",onInput:O,onCommit:$,testId:G},M)=>{const{currentCommitValue:z,dispatch:J}=q.useCurrentValueReducer({value:D}),K=t.useCallback((e=>{J({type:"input",payload:e.value}),O?.(e)}),[O,J]),Q=t.useCallback((e=>{J({type:"commit",payload:e.value}),$?.(e)}),[$,J]),{isDisabled:X,isReadonly:Y,labelEdge:Z,labelStartWidth:ee,textAlign:se,userAssistanceDensity:ae}=n.useFormContext(),te=T??X,le=A??Y,oe=U??Z,ne=L??ee,ie=j??se,de=V??ae,{bool:re,setFalse:ce,setTrue:ue}=k.useToggle(!1),{enabledElementRef:pe,focusProps:be,isFocused:me,readonlyElementRef:xe}=l.useFocusableTextField({isDisabled:te,isReadonly:le,ref:M,onBlurWithin:ce}),{hoverProps:ye,isHover:fe}=r.useHover({isDisabled:le||te||!1}),{formFieldContext:he,inputProps:Fe,labelProps:ve,textFieldProps:Ce,userAssistanceProps:Te}=d.useTextField({ariaDescribedBy:e,helpSourceLink:v,helpSourceText:C,isDisabled:te,isFocused:me,isReadonly:le,isRequiredShown:R,labelEdge:oe,messages:P,styleVariant:_,userAssistanceDensity:de,value:D}),Ae=t.useCallback((()=>{re?ce():ue()}),[re,ce,ue]),ge=y.useTranslationBundle("@oracle/oraclejet-preact"),Ie=ge.inputPassword_hidden(),Se=ge.inputPassword_show(),Re=ge.inputPassword_hide(),we=te||"always"!==F?null:s.jsx(W.RevealToggleIcon,{accessibleLabel:Ie,isRevealed:re,onToggle:Ae,tooltipHide:Re,tooltipShow:Se,testId:`${G}_toggleicon`}),Ue=t.useCallback((()=>{pe.current?.focus(),K?.({previousValue:D,value:""})}),[K,D,pe]),Le=B.useClearIcon({clearIcon:s.jsx(N.ClearIcon,{onClick:Ue,testId:`${G}_clearicon`}),display:h,hasValue:he.hasValue,isFocused:me,isEnabled:!le&&!te,isHover:fe}),Pe=H.beforeVNode(we,Le),Ee="none"!==oe?s.jsx(c.Label,{...ve,children:w}):void 0,je={label:"none"!==oe?Ee:void 0,labelEdge:"none"!==oe?oe:void 0,labelStartWidth:"none"!==oe?ne:void 0},Ve="none"===oe?w:void 0,De="efficient"===de||"reflow"===de?te||le?"efficient"!==de?void 0:s.jsx(g.InlineUserAssistance,{userAssistanceDensity:de,...Te}):s.jsx(g.InlineUserAssistance,{assistiveText:a,helpSourceLink:v,helpSourceText:C,messages:P,isRequiredShown:R,userAssistanceDensity:de,...Te}):void 0,_e=t.useRef(null),ke="compact"===de?s.jsx(I.CompactUserAssistance,{anchorRef:_e,messages:P,assistiveText:a,...Te}):void 0;if(le){const e=s.jsx(b.ReadonlyTextFieldInput,{"aria-describedby":Fe["aria-describedby"],"aria-label":Ve,"aria-labelledby":ve.id,as:"input",autoFocus:p,elementRef:xe,textAlign:ie,type:"password",value:D,hasEmptyLabel:""===w&&"none"===oe,hasInsideLabel:void 0!==w&&"inside"===oe});return s.jsx(i.FormFieldContext.Provider,{value:he,children:s.jsx(m.ReadonlyTextField,{role:"presentation",columnSpan:f,compactUserAssistance:ke,inlineUserAssistance:De,ref:_e,mainContent:e,testId:G,...je})})}const Be=s.jsx(u.TextFieldInput,{"aria-label":Ve,autoComplete:o,autoFocus:p,currentCommitValue:z,hasEndContent:!(!Le&&!we),hasEmptyLabel:""===w&&"none"===oe,hasInsideLabel:void 0!==Ee&&"inside"===oe,inputRef:pe,isRequired:S,onInput:K,onCommit:Q,placeholder:E,textAlign:ie,value:D,type:re?"text":"password",...Fe});return s.jsx(i.FormFieldContext.Provider,{value:he,children:s.jsx(x.TextField,{columnSpan:f,endContent:Pe,inlineUserAssistance:De,compactUserAssistance:ke,mainContent:Be,onBlur:be.onFocusOut,onFocus:be.onFocusIn,mainFieldRef:_e,testId:G,...Ce,...je,...ye})})}));e.InputPassword=O}));
//# sourceMappingURL=InputPassword-03f24e78.js.map
