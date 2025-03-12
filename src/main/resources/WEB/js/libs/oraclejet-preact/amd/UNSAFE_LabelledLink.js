define(['exports', 'preact/jsx-runtime', './Label-3912beb2', './Link-c4a57187', './Text-cd61a065', 'preact/hooks', './keyboardUtils-fbb389f8', 'preact/compat', './TextFieldInput-ba4e508c', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './useAccessibleContext-23e8a333', './FormContext-5130e198', './useFormContext-30acdd33', './TabbableModeContext-a9c97640', './textAlign-ef924afd', './FormFieldContext-3c44aaaa', './logger-0f873e29', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './LayerHost-639b3284', './StyledTextField-b4278437', './Flex-3421f0df', 'css!./LabelValueLayoutStyles.styles.css', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./RadioStyles.styles.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', 'module', 'css!./CheckboxStyles.styles.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', './InputGroupContext-372087af', 'css!./LiveRegionStyles.styles.css', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'css!./IconStyle.styles.css', './IconButton-ae9a01ce', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './TransitionGroup-3b9d81b6', './MessagesContext-602a69a2', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './Popup-66e79afa', './UNSAFE_Separator/themes/SeparatorStyles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './View-bd5c7fa7', './useTextField-e6877c79', './HiddenAccessible-037ef42d', './classNames-08d99695', './useComponentTheme-5aa41a8f', './mergeInterpolations-9ede4cf7', './UNSAFE_LabelledLink/themes/redwood/LabelledLinkTheme', './useFormFieldContext-8196183c', './CompactLabelAssistance-c6928282', './useTooltip-b43ad881', './useTooltipControlled-ee3276de', './useId-c9578d26', './useHover-7964884c', './useToggle-a29f97af', './useFocus-4194fc59', './useTouch-37489bb5', './mergeProps-bcfa6a92', './useAnimation-5a74955f', './useTestId-b5cd4766', './useThemeInterpolations-ab618dee', './useColorScheme-443e7cc7', './useScale-e311d35f', './theme-a8f3d819', './Theme-d945adae', './useDensity-f0f7ae9a', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'css!./TooltipContentVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-d881c69a', './useTranslationBundle-d07d4b20', './CompactHelpSource-74498e92', './useTabbableMode-dc440317', './Help-000f2775', './Icon-2d38c876', './size-a75b3f13', './utils-5077c092', './Common/themes/themeContract.css', './colorUtils-7c069766', './_curry1-df649359', './UNSAFE_Icon/themes/IconStyle.css', './useFocusWithin-5a504fca', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'css!./TextFieldVariants.styles.css', './usePressClick-b7b38da2', './useInteractionStyle-76a64325', './clientHints-4f5a07b0', './useActive-bb5dc069', './UNSAFE_Link/themes/redwood/LinkTheme', './UNSAFE_Link/themes/LinkStyles.css', 'css!./LinkStyles.styles.css', './UNSAFE_Link/themes/redwood/LinkBaseTheme.css', 'module', './UNSAFE_Link/themes/redwood/LinkVariants.css', 'css!./LinkVariants.styles.css', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './useTextFieldInputHandlers-390330d9', './TextFieldUtils-f3868e96', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css', 'css!./TextFieldInputVariants.styles.css', 'css!./text.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-84d30764', './Common/themes/redwood/theme', './LabelValueLayout-194e64d9', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_RadioItem/themes/RadioStyles.css', './UNSAFE_RadioItem/themes/redwood/RadioBaseTheme.css', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './UNSAFE_Checkbox/themes/CheckboxStyles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxBaseTheme.css', 'css!./CheckboxVariants.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './LayoutStyles.css-c8bc984d', 'css!./LayoutStyles.styles.css', './useInputGroupContext-e6e19f4f', './useUser-3ef25571', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles2.css', './boxalignment-905057dc', './arrayUtils-6ee96a35', 'css!./boxalignment.styles.css', './dimensions-60420dbb', './flexbox-8521f6aa', 'css!./flexbox.styles.css', './flexitem-5db48325', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', './ComponentMessageContainer-8028ba70', './MessagesManager-d5686336', './SuccessS-c5d520d2', './ErrorS-d2efaf06', './InformationS-2f6b535d', './WarningS-2b4729ba', './PRIVATE_Message/themes/MessageStyles.css', './soundUtils-f6535f03', './useMessagesContext-1395a997', './Transition-04efcc49', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', './InlineHelp-a169f974', './InlineHelpSource-85961e81', 'css!./MessageBannerVariants.styles.css', './EnvironmentProvider-c0e1e39b', './LayerManager-2972de92', './Floating-5d98c1ca', './useFloating-bf8ed6cb', './positionUtils-6e4daa31', './refUtils-d354a169', './useOutsideClick-76c1ff6e', './Layer-6f29b67f', './UNSAFE_Layer/themes/LayerStyles.css', 'css!./LayerStyles.styles.css', './useModal-536cb7ff', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-eceadd82', './UNSAFE_Floating/themes/FloatingContract.css', './BaseButton-19a622bc', './usePress-949a0d03', './UNSAFE_BaseButton/themes/redwood/BaseButtonTheme', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './UNSAFE_BaseButton/themes/redwood/BaseButtonVariants.css', 'module', './ButtonLabelLayout-2e0e8d09', './useButtonLabelLayoutTheme-3237026f', './UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutTheme', './UNSAFE_ButtonLabelLayout/themes/ButtonLabelLayoutStyles.css', 'css!./ButtonLabelLayoutStyles.styles.css', './UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutVariants.css', 'css!./ButtonLabelLayoutVariants.styles.css', './buttonUtils-97878e90', './id-c70ab33c', './getLocale-ae79e654', './stringUtils-0ae982c2', './tabbableUtils-85aa6918', './head-9cb1a3da', './_arity-5a5f5f71', './_curry3-83878f86', './_curry2-86c52b86', './_isArray-32602db6', './_isString-d0ada3cb', './FocusTrap-60520575', './FocusTracker-2ac5bbfe', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-7bece8d5', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './WindowOverlay-43c10424', './UNSAFE_WindowOverlay/themes/WindowOverlayStyles.css', 'css!./WindowOverlayStyles.styles.css', './UNSAFE_WindowOverlay/themes/WindowOverlayContract.css', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayTheme', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayBaseTheme.css', 'module', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayVariants.css', './usePopupAnimation-6e53a0fe', './useAnimationStatus-86746674', './popupAnimationUtils-49b93365', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'css!./PopupStyles.styles.css', 'css!./SeparatorStyles.styles.css', './borders-e15a6927', './colors-5f64f302', './padding-77507928', './aria-232c9168', './equals-e73adbe3', './_isObject-42bafc94', './useMessageSeverity-1d69e1ae', './useFormFieldContextProps-4e36b4c3', './mergeDeepWithKey-aaab9019', './UNSAFE_LabelledLink/themes/LabelledLinkStyles.css', 'css!./LabelledLinkStyles.styles.css', './UNSAFE_LabelledLink/themes/redwood/LabelledLinkVariants.css', 'css!./LabelledLinkVariants.styles.css'], (function(e,s,t,a,o,l,n,d,i,r,c,m,y,h,F,S,u,b,A,T,U,L,p,x,_,E,N,w,B,f,g,k,C,I,M,v,V,R,P,W,O,j,H,D,G,z,$,q,K,J,Q,X,Y,Z,ee,se,te,ae,oe,le,ne,de,ie,re,ce,me,ye,he,Fe,Se,ue,be,Ae,Te,Ue,Le,pe,xe,_e,Ee,Ne,we,Be,fe,ge,ke,Ce,Ie,Me,ve,Ve,Re,Pe,We,Oe,je,He,De,Ge,ze,$e,qe,Ke,Je,Qe,Xe,Ye,Ze,es,ss,ts,as,os,ls,ns,ds,is,rs,cs,ms,ys,hs,Fs,Ss,us,bs,As,Ts,Us,Ls,ps,xs,_s,Es,Ns,ws,Bs,fs,gs,ks,Cs,Is,Ms,vs,Vs,Rs,Ps,Ws,Os,js,Hs,Ds,Gs,zs,$s,qs,Ks,Js,Qs,Xs,Ys,Zs,et,st,tt,at,ot,lt,nt,dt,it,rt,ct,mt,yt,ht,Ft,St,ut,bt,At,Tt,Ut,Lt,pt,xt,_t,Et,Nt,wt,Bt,ft,gt,kt,Ct,It,Mt,vt,Vt,Rt,Pt,Wt,Ot,jt,Ht,Dt,Gt,zt,$t,qt,Kt,Jt,Qt,Xt,Yt,Zt,ea,sa,ta,aa,oa,la,na,da,ia,ra,ca,ma,ya,ha,Fa,Sa,ua,ba,Aa,Ta,Ua,La,pa,xa,_a,Ea,Na,wa,Ba,fa,ga,ka,Ca,Ia,Ma,va,Va,Ra,Pa,Wa,Oa,ja,Ha,Da,Ga,za,$a,qa,Ka,Ja,Qa,Xa,Ya,Za,eo,so,to){"use strict";const ao=({children:e,id:a})=>s.jsx(ue.HiddenAccessible,{isHidden:!0,children:s.jsx(t.Label,{id:a,children:e})});function oo({hasInsideLabel:e,isFormLayout:s,isFormReadonly:t,textAlign:a}){const o=[...Object.values(F.textInterpolations)],l=Te.mergeInterpolations(o),{class:n}=l({textAlign:a}),{classes:d}=Ae.useComponentTheme(Ue.LabelledLinkRedwoodTheme,{formLayout:s?"isFormLayout":"notFormLayout",readonlyForm:t?"isReadonlyForm":"notReadonlyForm",insideLabel:e?"hasInsideLabel":"noInsideLabel"});return{classes:be.classNames([n,d])}}e.LabelledLink=({"aria-describedby":e,children:l,columnSpan:n,href:d,label:i,labelEdge:r,labelStartWidth:m,onClick:h,target:F,textAlign:u,userAssistanceDensity:b})=>{const{isFormLayout:A,isReadonly:T,labelEdge:L,labelStartWidth:p,textAlign:x,userAssistanceDensity:_}=y.useFormContext(),E=r??L,N=m??p,w=u??x,B=b??_,f=l??d,{baseId:g,formFieldContext:k,labelProps:C,inputProps:I,userAssistanceProps:M}=Se.useTextField({ariaDescribedBy:e,isReadonly:!0,labelEdge:E,value:f}),v=s.jsx(t.Label,{...C,children:i}),V={label:"none"!==E?v:void 0,labelEdge:"none"!==E?E:void 0,labelStartWidth:"none"!==E?N:void 0},R="efficient"===B?s.jsx(z.InlineUserAssistance,{userAssistanceDensity:B,...M}):void 0,{classes:P}=oo({hasInsideLabel:"inside"===E,isFormLayout:A,isFormReadonly:T,textAlign:w}),W=""===i,O="none"===E,{containerAria:j,hiddenLabelAria:H,linkAria:D}=function({"aria-describedby":e,baseId:s,hasEmptyLabel:t,hasHiddenLabel:a,labelId:o}){const l=`${s}--container`,n=o??`${s}--hidden-label`,{UNSAFE_ariaLabelledBy:d}=c.useAccessibleContext();return{containerAria:{id:l},hiddenLabelAria:a?{id:n}:{},linkAria:{"aria-describedby":e,"aria-labelledby":be.classNames([n,t&&a&&d,l])}}}({"aria-describedby":I["aria-describedby"],baseId:g,hasEmptyLabel:W,hasHiddenLabel:O,labelId:C.id});return s.jsx(S.FormFieldContext.Provider,{value:k,children:s.jsx(U.ReadonlyTextField,{columnSpan:n,role:"presentation",inlineUserAssistance:R,...V,mainContent:s.jsxs("div",{class:P,...j,children:[O&&s.jsx(ao,{...H,children:i}),s.jsx(Fe.View,{width:"100%",children:s.jsx(a.Link,{href:d,target:F,onClick:h,...D,children:s.jsx(o.Text,{size:"md",variant:"inherit",children:f})})})]})})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_LabelledLink.js.map
