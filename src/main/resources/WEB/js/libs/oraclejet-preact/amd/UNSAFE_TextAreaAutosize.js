define(['exports', './TextAreaAutosize-2033cda7', 'preact/jsx-runtime', 'preact', 'preact/compat', './FormContext-598efe92', './useFormContext-9b29eeaf', 'preact/hooks', './FormFieldContext-57ac57ba', './useFocusableTextField-0a8d5c6d', './useFocusWithin-dbdce73a', './Label-16321133', './useFormFieldContext-cbd8677f', './classNames-49c3ba27', './useComponentTheme-9a36e65b', './logger-36c6eea0', './TabbableModeContext-c9143afd', './TopLayerHost-d9bd8ecf', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dc16b39', './Flex-0052275f', './dimensions-094b9f7d', './size-6d3a087d', './utils-225c0e9a', './colorUtils-f1647b17', './_curry1-73b01864', './mergeInterpolations-497657fd', './_curry3-1e42149e', './_curry2-b8890f0a', './_isObject-8093a293', './boxalignment-a67cc263', './arrayUtils-bef2e8fb', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-c890dd1b', './flexbox-4b93b535', 'css!./flexbox.styles.css', './flexitem-8052fa2b', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles.css', './Floating-aaafdcf7', './useFloating-e7375283', './useUser-6c8723b4', './positionUtils-5e82645b', './refUtils-64b1b5b1', './useOutsideClick-d7ba24e7', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-5df7b135', './UNSAFE_Floating/themes/FloatingContract.css', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles.css', 'css!./IconStyle.styles.css', './IconButton-edf452c8', './BaseButton-4a512058', './usePress-465090ef', './useHover-29c192f3', './useToggle-a59ec51a', './useActive-152990ee', './useTabbableMode-c39b463d', './useId-e0c3517c', './useColorScheme-33c4f510', './clientHints-5a067fae', './mergeProps-bae345c4', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './useTestId-dfceb92d', './ButtonLayout-071d379d', './Text-77df83fd', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutTheme', './UNSAFE_ButtonLayout/themes/ButtonLayoutStyles.css', 'css!./ButtonLayoutStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutVariants.css', 'css!./ButtonLayoutVariants.styles.css', './useTooltip-f1e6a531', './useTooltipControlled-4401c2d2', './Layer-ea9920e0', './useThemeInterpolations-eb2b5ee2', './useScale-f847e1c0', './theme-f0ff48ad', './Theme-748163ef', './useFocus-dab1b280', './useTouch-68d1a08f', './useAnimation-24256140', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', './EnvironmentProvider-fbf8d770', './LayerManager-b2837363', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './getLocale-6daccf20', './stringUtils-c9076bae', './Message.types-180b4242', './TransitionGroup-f4f056d2', './MessagesContext-ec60ba60', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './InputGroupContext-6c5f432c', './Popup-c6026a77', './tabbableUtils-a1aa6b01', './head-990e418e', './_arity-9286283c', './_isArray-f8c70222', './_isString-668b4c85', './FocusTrap-fdb3a0ed', './FocusTracker-8296f9cd', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-93466d5f', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './useAnimationStatus-37ce08c6', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', 'css!./PopupStyles.styles.css', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./SeparatorStyles.styles.css', './CompactLabelAssistance-c936e7a6', './useTranslationBundle-20ce0acf', './CompactHelpSource-824e6791', './Help-1dd33d8b', './Icon-6b14fc3e', './UNSAFE_Icon/themes/IconStyle.css', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./TextFieldVariants.styles.css', './TextFieldInput-90149232', './useAccessibleContext-723ca770', './useTextFieldInputHandlers-05409fd5', './textAlign-a02ed68b', 'css!./text.styles.css', './TextFieldUtils-da033871', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css', 'css!./TextFieldInputVariants.styles.css', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-4085579c', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldInputStyles.css', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './StyledTextField-9933e630', './LabelValueLayout-deee3466', 'css!./LabelValueLayoutStyles.styles.css', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_RadioItem/themes/RadioStyles.css', 'css!./RadioStyles.styles.css', './UNSAFE_RadioItem/themes/redwood/RadioBaseTheme.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/FormLayoutStyles.css', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './UNSAFE_Checkbox/themes/CheckboxStyles.css', 'css!./CheckboxStyles.styles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', 'css!./CheckboxVariants.styles.css', './LayoutStyles.css-defee9f4', 'css!./LayoutStyles.styles.css', './useInputGroupContext-4f428bd7', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './TextField-ed261bdd', './MaxLengthLiveRegion-d4047f1f', './useDebounce-1b40ac38', './LiveRegion-dba61c3a', 'css!./LiveRegionStyles.styles.css', './useTextField-5da71f2f', './useMessageSeverity-57195beb', './useFormFieldContextProps-29db0330', './InlineUserAssistance-96d6436b', './ComponentMessageContainer-7a5e377a', './MessagesManager-43d0389d', './useMessagesContext-dde6f9c9', './Transition-4c8a0bab', './ComponentMessage-08a172f3', './MessageStartIcon-94a5f4d2', './SuccessS-584d6276', './ErrorS-905bce15', './InformationS-5581ccca', './WarningS-cf815827', './PRIVATE_Message/themes/MessageStyles.css', './MessageSummary-161b06f8', './MessageUtils-652ca803', './soundUtils-01a0eb35', './HiddenAccessible-00402562', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', './InlineHelp-50fa2c98', './InlineHelpSource-f9e63eec', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', './CompactUserAssistance-b25c5537', './Separator-f7e57213', './useLengthFilter-68237bc5', './lengthFilter-7d7c2b7c', './useCurrentValueReducer-6907b03d', './TextArea-d0c7423b', 'css!./MaxLengthCounterStyles.styles.css'], (function(e,s,t,o,a,l,d,c,n,i,r,m,F,S,h,y,u,T,b,A,U,p,x,_,E,N,g,f,C,w,B,L,M,k,I,R,V,P,v,H,z,O,j,G,W,D,q,J,K,Q,X,Y,Z,$,ee,se,te,oe,ae,le,de,ce,ne,ie,re,me,Fe,Se,he,ye,ue,Te,be,Ae,Ue,pe,xe,_e,Ee,Ne,ge,fe,Ce,we,Be,Le,Me,ke,Ie,Re,Ve,Pe,ve,He,ze,Oe,je,Ge,We,De,qe,Je,Ke,Qe,Xe,Ye,Ze,$e,es,ss,ts,os,as,ls,ds,cs,ns,is,rs,ms,Fs,Ss,hs,ys,us,Ts,bs,As,Us,ps,xs,_s,Es,Ns,gs,fs,Cs,ws,Bs,Ls,Ms,ks,Is,Rs,Vs,Ps,vs,Hs,zs,Os,js,Gs,Ws,Ds,qs,Js,Ks,Qs,Xs,Ys,Zs,$s,et,st,tt,ot,at,lt,dt,ct,nt,it,rt,mt,Ft,St,ht,yt,ut,Tt,bt,At,Ut,pt,xt,_t,Et,Nt,gt,ft,Ct,wt,Bt,Lt,Mt,kt,It,Rt,Vt,Pt,vt,Ht,zt,Ot,jt,Gt,Wt,Dt,qt,Jt,Kt,Qt,Xt,Yt,Zt,$t,eo,so,to,oo,ao,lo,co,no,io,ro,mo,Fo,So,ho,yo,uo,To,bo,Ao,Uo,po,xo,_o,Eo,No,go,fo,Co,wo,Bo,Lo,Mo,ko,Io){"use strict";e.TextAreaAutosize=s.TextAreaAutosize,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_TextAreaAutosize.js.map
