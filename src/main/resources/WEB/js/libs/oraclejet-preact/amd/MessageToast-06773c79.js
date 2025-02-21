define(['exports', 'preact/jsx-runtime', 'preact/hooks', './LayerHost-639b3284', './EnvironmentProvider-c0e1e39b', './useMessagesFocusManager-8777bce0', './useBreakpointValues-3a067093', './MessagesContext-602a69a2', './useMessagesContext-1395a997', './useTranslationBundle-d07d4b20', './Message-621fb578', 'preact', './utils-5077c092', './useComponentTheme-5aa41a8f', './useTestId-b5cd4766', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'css!./IconStyle.styles.css', './IconButton-ae9a01ce', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './MessagesManager-d5686336', './Flex-3421f0df', './FocusTrap-60520575', './LiveRegion-9a362373', './UNSAFE_MessageToast/themes/redwood/MessageToastTheme', './MessageLayer-8bac8c50'], (function(e,s,t,n,o,a,r,i,l,c,u,d,g,m,h,p,f,y,M,v,x,T,R,b,F,k,C,S,j){"use strict";const E={entering:e=>({from:{transform:`translate(0, ${e.offsetHeight}px)`,opacity:1},to:{transform:"translate(0, 0)",opacity:1},end:{transform:"unset",opacity:1},options:{duration:250}}),exiting:{from:{opacity:1},to:{opacity:0},end:{opacity:0},options:{duration:250}}},U={opacity:0};e.MessageToast=function({data:e,detailRendererKey:n,iconRendererKey:i,renderers:d,onClose:p,offset:f,position:y,testId:M}){const v=h.useTestId(M),x=t.useRef(new Map),T=t.useRef(null),R=t.useRef(null),I=t.useRef(null),[L,w]=t.useState(),[B,_]=t.useState(e.length>0),[z,A]=t.useState(!1),N=c.useTranslationBundle("@oracle/oraclejet-preact"),{UNSAFE_messagesLayerId:V}=l.useMessagesContext(),$=t.useRef(e.length),H=t.useRef(0);$.current=e.length,t.useImperativeHandle(I,(()=>({focus:()=>!!e.length&&(T.current=x.current.get(e[0].key)??null,A(!0),!0),contains:s=>!(!e.length||!s)&&(R.current?.contains(s)??!1)})),[e]);const{controller:K,handlers:P}=a.useMessageFocusManager(I,{onFocus:t.useCallback((()=>{w(N.message_navigationFromMessagesRegion())}),[N]),onFocusLeave:t.useCallback((()=>{A(!1)}),[])},{handleEscapeKey:!1}),W=t.useCallback(((s,t,n)=>{const o=n?.contains(document.activeElement);if(0===$.current)return _(!1),A(!1),void(o&&setTimeout((()=>K.restorePriorFocus()),0));const a=t+1<e.length?t+1:t-1;if(a>-1&&o){const s=e[a].key;x.current.get(s)?.focus()}}),[K,e]),D=t.useCallback((e=>s=>x.current.set(e,s)),[]);t.useEffect((()=>{const s=H.current;if(H.current=e.length,e.length)return _(!0),e.length>s&&w(N.message_navigationToMessagesRegion()),void K.prioritize();w(s?N.messageToast_allMessagesClosed():"")}),[K,e.length,N]);const q=r.useBreakpointValues({sm:`calc(100vw - ${g.xUnits(8)})`,md:`calc(100vw - ${g.xUnits(12)})`,lg:`calc(150 * ${g.xUnits(1)})`}),G=r.useBreakpointValues({sm:{horizontal:"number"==typeof f?f:f?.horizontal??0,vertical:16+("number"==typeof f?f:f?.vertical??0)},lg:{horizontal:"number"==typeof f?f:f?.horizontal??0,vertical:24+("number"==typeof f?f:f?.vertical??0)}}),{classes:J}=m.useComponentTheme(S.MessageToastRedwoodTheme);return B||0!==e.length?s.jsxs(o.EnvironmentProvider,{environment:{colorScheme:"dark"},children:[s.jsx(j.MessageLayer,{offset:G,position:y,children:s.jsx("div",{class:J,ref:R,tabIndex:-1,id:V,...P,...v,children:s.jsx(k.FocusTrap,{autoFocusRef:T,isDisabled:!z,children:s.jsx(F.Flex,{direction:"column",gap:"1x",align:"center",maxWidth:q,children:s.jsx(b.MessagesManager,{animationStates:E,initialAnimationStyles:U,data:e,onMessageWillRemove:W,children:({item:e})=>s.jsx(u.Message,{messageRef:D(e.key),item:e,detailRenderer:b.getRenderer(e,n,d),iconRenderer:b.getRenderer(e,i,d),onClose:p,variant:"toast"},e.key)})})})})}),s.jsx(C.LiveRegion,{children:L})]}):s.jsx(C.LiveRegion,{children:L})}}));
//# sourceMappingURL=MessageToast-06773c79.js.map
