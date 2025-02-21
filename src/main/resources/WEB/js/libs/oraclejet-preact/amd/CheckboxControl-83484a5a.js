define(['exports', 'preact/jsx-runtime', 'preact/compat', './CheckboxRadioContext-6a0fead0', './HiddenAccessible-037ef42d', './useComponentTheme-5aa41a8f', './useFocus-4194fc59', './classNames-08d99695', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './useTranslationBundle-d07d4b20', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', 'preact/hooks', './Flex-3421f0df', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', './useId-c9578d26', './LayerHost-639b3284', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'css!./IconStyle.styles.css', './IconButton-ae9a01ce', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './logger-0f873e29', './TransitionGroup-3b9d81b6', './MessagesContext-602a69a2', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './FormContext-5130e198', './FormFieldContext-3c44aaaa', './InputGroupContext-372087af', './Popup-66e79afa', './UNSAFE_Separator/themes/SeparatorStyles.css', './useFocusWithin-5a504fca', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './IconUserAssistance-37107cea', './StyledCheckbox-616b89fc', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './useActive-bb5dc069', './stringUtils-0ae982c2', './LayoutStyles.css-c8bc984d'], (function(e,s,o,t,a,n,c,l,i,r,d,u,b,h,p,m,y,S,C,x,F,f,A,T,U,g,k,w,M,v,B,N,E,_,R,L,j,D,I,V,P,K,H,q,G,W,$,z,J,O,Q){"use strict";const X=o.forwardRef((({"aria-describedby":e,name:i,value:u,children:b,isChecked:h,isDisabled:p,isReadonly:m,isRequired:y,onChange:S,onKeyUp:C,assistiveText:x,helpSourceLink:f,helpSourceText:A,columnSpan:T=1},U=null)=>{const g=F.useId(),k=o.useRef(null),{isTabbable:w}=r.useTabbableMode(),{isActive:M,activeProps:v}=J.useActive(),{isFocusRingShown:B}=t.useCheckboxRadioContext(),N=o.createRef(),{isFocus:E,focusProps:{onFocus:_,onBlur:R}}=c.useFocus(),{classes:L,styles:{valueLabelStyle:j,checkboxSpanStyle:D}}=n.useComponentTheme(z.CheckboxRedwoodTheme,{disabled:p?"isDisabled":"notDisabled",focused:E&&B?"isFocused":"notFocused"}),I=!(p||m||!x&&!f),V=I?`${g}-help-available`:void 0,P=I?`${g}-icon-ua`:void 0,{formControl_helpAvailable:H}=d.useTranslationBundle("@oracle/oraclejet-preact"),q=H(),G=I?s.jsx(a.HiddenAccessible,{id:V,children:q}):void 0;delete v.onKeyDown;const{focusProps:X,isFocused:Y}=K.useFocusWithin();o.useEffect((()=>{E&&B&&N?.current?.scrollIntoView({block:"nearest"})}),[E,B,N]);const Z=Q.layoutSpanStyles.layoutSpanColumn[T];return s.jsxs("label",{ref:N,class:l.classNames([L,Z]),children:[s.jsx("span",{class:D,...v,children:s.jsx($.StyledCheckbox,{"aria-describedby":O.merge([e,V]),name:i,value:u,onChange:S,onBlur:R,onFocus:_,onKeyUp:C,onKeyDown:e=>{const{key:s}=e;m||void 0===s||" "!==s||e.preventDefault()},isActive:M,isChecked:h?"checked":"unchecked",isDisabled:p,isReadonly:m,isRequired:y,ref:U})}),G,s.jsxs("span",{class:j,children:[s.jsx("span",{...v,...X,onMouseDown:e=>{const s=e.target.closest("a");s&&k.current?.contains(s)?e.stopPropagation():v.onMouseDown?.(e)},ref:k,children:b}),I&&s.jsx(W.IconUserAssistance,{assistiveText:x,helpSourceLink:f,helpSourceText:A,isTabbable:w&&(E||Y),id:P})]})]})}));e.CheckboxControl=X}));
//# sourceMappingURL=CheckboxControl-83484a5a.js.map
