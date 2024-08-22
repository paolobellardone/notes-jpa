define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useAccessibleContext-23e8a333', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './useTextFieldInputHandlers-69ae614a', './classNames-08d99695', './textAlign-ef924afd', './mergeInterpolations-9ede4cf7', './mergeProps-bcfa6a92', './TextFieldUtils-f3868e96', './useComponentTheme-5aa41a8f', './useTranslationBundle-20bfc0f3', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme'], (function(e,a,t,n,o,s,i,l,r,u,d,c,p,b,m,x,f){"use strict";const h=[...Object.values(d.textInterpolations)],v=c.mergeInterpolations(h),C=["text","search","url","tel","password","textarea"];e.TextFieldInput=({as:e="input","aria-autocomplete":o,"aria-controls":i,"aria-describedby":d,"aria-expanded":c,"aria-invalid":h,"aria-label":F,"aria-labelledby":y,"aria-valuemax":T,"aria-valuemin":I,"aria-valuenow":w,"aria-valuetext":S,autoComplete:E,autoFocus:P,currentCommitValue:g,hasEmptyLabel:L,hasEndContent:A=!1,hasInsideLabel:R=!1,hasPrefix:B=!1,hasStartContent:D=!1,hasSuffix:j=!1,id:U,inputRef:V,placeholder:K,isRequired:M,role:N,rows:k,spellcheck:_,type:q,value:H="",variant:O="default",onInput:z,onCommit:G,onKeyDown:J,onKeyUp:Q,onBlur:W,onFocus:X,...Y})=>{const{isDisabled:Z,isFocused:$,isLoading:ee,isReadonly:ae}=s.useFormFieldContext(),{class:te}=v(Y),ne=""!==H,oe="textarea"===e,se="input"===e,ie="password"===q,le=!Z&&B,re=!Z&&j,ue=b.isInputPlaceholderShown(R,ne,$)?K:void 0,{classes:de}=m.useComponentTheme(f.TextFieldInputRedwoodTheme,{type:ie?"isPassword":"notPassword",styleVariant:O,textarea:oe?"isTextArea":"notTextArea",input:se?"isInput":"notInput",div:"notDiv",prefix:le?"hasPrefix":"noPrefix",suffix:re?"hasSuffix":"noSuffix",startContent:D?"hasStartContent":"noStartContent",endContent:A?"hasEndContent":"noEndContent",insideLabel:R?"hasInsideLabel":"noInsideLabel",value:ne?"hasValue":"noValue",focused:$?"isFocused":"notFocused",disabled:Z?"isDisabled":"notDisabled"}),ce=u.classNames([de,te]),pe=e||"input",be=t.useRef({start:0,end:0}),me=r.useTextFieldInputHandlers({currentCommitValue:g,isCommitOnEnter:"input"===e,value:H,onInput:z,onCommit:G,onKeyDown:J,selectionRef:be}),xe=p.mergeProps(me,{onBlur:W,onFocus:X}),{isTabbable:fe,tabbableModeProps:he}=l.useTabbableMode(),{UNSAFE_ariaLabelledBy:ve}=n.useAccessibleContext(),Ce=L?function(...e){return e.filter(Boolean).join(" ")||void 0}(y,ve):y,Fe=x.useTranslationBundle("@oracle/oraclejet-preact").formControl_loading();return t.useLayoutEffect((()=>{if("function"!=typeof V){const e=V?.current;document.activeElement===e&&e&&C.includes(e.type)&&e.setSelectionRange(be.current.start,be.current.end)}}),[H,V]),a.jsx(pe,{"aria-autocomplete":o,"aria-controls":i,"aria-describedby":d,"aria-expanded":c,"aria-invalid":h,"aria-label":ee?Fe:F||void 0,"aria-labelledby":Ce,"aria-required":!!M||void 0,"aria-valuemax":T,"aria-valuemin":I,"aria-valuenow":w,"aria-valuetext":S,autocomplete:E,autofocus:P,class:ce,disabled:Z,id:U,onKeyUp:Q,placeholder:ue,readonly:ae,ref:V,role:N,rows:k,spellcheck:_,type:q,value:H,...xe,...!fe&&he})}}));
//# sourceMappingURL=TextFieldInput-dfd9529f.js.map