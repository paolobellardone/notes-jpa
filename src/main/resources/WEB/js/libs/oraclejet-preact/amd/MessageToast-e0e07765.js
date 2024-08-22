define(['exports', 'preact/jsx-runtime', 'preact/hooks', './LayerHost-0a244de8', './EnvironmentProvider-9e71b5c2', './useMessagesFocusManager-8777bce0', './useBreakpointValues-3a067093', './MessagesContext-602a69a2', './useMessagesContext-1395a997', './useTranslationBundle-20bfc0f3', './Message-51d787d0', 'preact', './utils-61ef4ad6', './useTooltipControlled-18271c7a', 'css!./IconStyle.styles.css', './IconButton-1b328b69', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './MessagesManager-78a10f78', './Flex-db3ddadb', './useTestId-f3b8b319', './FocusTrap-eb3989cb', './LiveRegion-09197914', './useComponentTheme-5aa41a8f', './UNSAFE_MessageToast/themes/redwood/MessageToastTheme', './MessageLayer-cf2fbea9'], (function(e,s,t,n,a,o,r,i,l,c,u,d,g,m,f,h,p,y,M,v,x,b,R,T,F,k){"use strict";const C={entering:e=>({from:{transform:`translate(0, ${e.offsetHeight}px)`,opacity:1},to:{transform:"translate(0, 0)",opacity:1},end:{transform:"unset",opacity:1},options:{duration:250}}),exiting:{from:{opacity:1},to:{opacity:0},end:{opacity:0},options:{duration:250}}},j={opacity:0};e.MessageToast=function({data:e,detailRendererKey:n,iconRendererKey:i,renderers:d,onClose:m,offset:f,position:h,testId:p}){const y=x.useTestId(p),S=t.useRef(new Map),I=t.useRef(null),L=t.useRef(null),E=t.useRef(null),[B,U]=t.useState(),[w,z]=t.useState(e.length>0),[_,$]=t.useState(!1),A=c.useTranslationBundle("@oracle/oraclejet-preact"),{UNSAFE_messagesLayerId:H}=l.useMessagesContext(),K=t.useRef(e.length),P=t.useRef(0);K.current=e.length,t.useImperativeHandle(E,(()=>({focus:()=>!!e.length&&(I.current=S.current.get(e[0].key)??null,$(!0),!0),contains:s=>!(!e.length||!s)&&(L.current?.contains(s)??!1)})),[e]);const{controller:V,handlers:N}=o.useMessageFocusManager(E,{onFocus:t.useCallback((()=>{U(A.message_navigationFromMessagesRegion())}),[A]),onFocusLeave:t.useCallback((()=>{$(!1)}),[])},{handleEscapeKey:!1}),W=t.useCallback(((s,t,n)=>{const a=n?.contains(document.activeElement);if(0===K.current)return z(!1),$(!1),void(a&&setImmediate((()=>V.restorePriorFocus())));const o=t+1<e.length?t+1:t-1;if(o>-1&&a){const s=e[o].key;S.current.get(s)?.focus()}}),[V,e]),D=t.useCallback((e=>s=>S.current.set(e,s)),[]);t.useEffect((()=>{const s=P.current;if(P.current=e.length,e.length)return z(!0),e.length>s&&U(A.message_navigationToMessagesRegion()),void V.prioritize();U(s?A.messageToast_allMessagesClosed():"")}),[V,e.length,A]);const q=r.useBreakpointValues({sm:`calc(100vw - ${g.xUnits(8)})`,md:`calc(100vw - ${g.xUnits(12)})`,lg:`calc(150 * ${g.xUnits(1)})`}),G=r.useBreakpointValues({sm:{horizontal:"number"==typeof f?f:f?.horizontal??0,vertical:16+("number"==typeof f?f:f?.vertical??0)},lg:{horizontal:"number"==typeof f?f:f?.horizontal??0,vertical:24+("number"==typeof f?f:f?.vertical??0)}}),{classes:J}=T.useComponentTheme(F.MessageToastRedwoodTheme);return w||0!==e.length?s.jsxs(a.EnvironmentProvider,{environment:{colorScheme:"dark"},children:[s.jsx(k.MessageLayer,{offset:G,position:h,children:s.jsx("div",{class:J,ref:L,tabIndex:-1,id:H,...N,...y,children:s.jsx(b.FocusTrap,{autoFocusRef:I,isDisabled:!_,children:s.jsx(v.Flex,{direction:"column",gap:"1x",align:"center",maxWidth:q,children:s.jsx(M.MessagesManager,{animationStates:C,initialAnimationStyles:j,data:e,onMessageWillRemove:W,children:({item:e})=>s.jsx(u.Message,{messageRef:D(e.key),item:e,detailRenderer:M.getRenderer(e,n,d),iconRenderer:M.getRenderer(e,i,d),onClose:m,variant:"toast"},e.key)})})})})}),s.jsx(R.LiveRegion,{children:B})]}):s.jsx(R.LiveRegion,{children:B})}}));
//# sourceMappingURL=MessageToast-e0e07765.js.map