define(['exports', 'preact/jsx-runtime', 'preact/hooks', './positionUtils-6e4daa31', './Floating-5d98c1ca', './Layer-6f29b67f', 'preact/compat', './LayerHost-639b3284', './tabbableUtils-85aa6918', './clientHints-4f5a07b0', './useAnimation-5a74955f', './useUser-3ef25571', './useTestId-b5cd4766', './useBreakpointValues-3a067093', './useResizeObserver-275c3e83', './useComponentTheme-5aa41a8f', './classNames-08d99695', './UNSAFE_DrawerLayout/themes/redwood/DrawerLayoutTheme', './useFloating-bf8ed6cb', './refUtils-d354a169', './useOutsideClick-76c1ff6e', './arrayUtils-6ee96a35', './useModal-536cb7ff', './utils-5077c092', './Common/themes/themeContract.css', './colorUtils-7c069766', './_curry1-df649359', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-recipes-createRuntimeFn.esm-d881c69a', './vanilla-extract-dynamic.esm-eceadd82', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer/themes/LayerStyles.css', 'css!./LayerStyles.styles.css', './useThemeInterpolations-ab618dee', './useColorScheme-443e7cc7', './useScale-e311d35f', './theme-a8f3d819', './Theme-d945adae', './mergeInterpolations-9ede4cf7', './mergeDeepWithKey-aaab9019', './_curry3-83878f86', './_curry2-86c52b86', './_isObject-42bafc94', './useDensity-f0f7ae9a', 'preact', './Common/themes/redwood/theme', './head-9cb1a3da', './_arity-5a5f5f71', './_isArray-32602db6', './_isString-d0ada3cb', './useBreakpoints-52d11a72', './useVisAddBusyState-2d2ccb92', './VisBusyStateContext-63467849', './useVisBusyStateContext-7b0606e7', './logger-0f873e29', './UNSAFE_DrawerLayout/themes/DrawerLayoutStyles.css', 'css!./DrawerLayoutStyles.styles.css', './UNSAFE_DrawerLayout/themes/redwood/DrawerLayoutBaseTheme.css', 'module', './UNSAFE_DrawerLayout/themes/redwood/DrawerLayoutVariants.css'], (function(e,t,s,r,a,n,c,o,u,i,l,d,m,f,h,b,w,y,p,g,S,v,D,x,k,C,F,A,E,R,L,O,_,N,U,T,B,H,j,V,W,z,I,M,X,Y,$,K,P,q,G,J,Q,Z,ee,te,se,re,ae,ne,ce,oe,ue,ie,le){"use strict";e.DrawerLayout=({children:e,startDrawer:c,endDrawer:o,bottomDrawer:p,isStartOpen:g=!1,isEndOpen:S=!1,isBottomOpen:v=!1,startDisplay:D,endDisplay:x,bottomDisplay:k,onClose:C,onTransitionEnd:F,testId:A})=>{const E="0px",R=250,L="start",O="end",_="bottom",N="initial",U="opening",T="closing",B="unmounted",H="full-overlay",j="overlay",V="reflow",W="hidden",[z,I]=s.useState(g?N:B),[M,X]=s.useState(S?N:B),[Y,$]=s.useState(v?N:B),[K,P]=s.useState(W),[q,G]=s.useState(W),[J,Q]=s.useState(W),[Z,ee]=s.useState(),[te,se]=s.useState(),[re,ae]=s.useState(),ne=f.useBreakpointValues({sm:H,md:j,lg:V}),[ce,oe]=s.useState(ne),[ue,ie]=s.useState(ne),le=s.useRef(null),de=s.useRef(null),me=s.useRef(null),fe=s.useRef(null),he=s.useRef(null),be=s.useRef(null),we=s.useRef(null),ye=s.useRef(null),pe=s.useRef(null),ge=s.useRef(null),Se=s.useRef(null),[ve,De]=s.useState(null),[xe,ke]=s.useState(null),[Ce,Fe]=s.useState(null),Ae=s.useCallback((e=>Ye(e).current),[]),Ee=s.useCallback((()=>{const e=Ae(L),t=Ae(O),s=Ae(_),r=u.getActiveElement();return e&&e.contains(r)?L:t&&t.contains(r)?O:s&&s.contains(r)?_:null}),[Ae]),Re=s.useCallback((()=>{if(g||S||v){const e=Ee();if(e){be.current=e;const t=u.allTabbableElements(Ye(be.current).current,!0);we.current=t.indexOf(u.getActiveElement())}}}),[Ee,g,v,S]),Le=s.useCallback((e=>{let t=!1;switch(e){case L:t=g;break;case O:t=S;break;case _:t=v}return t}),[g,S,v]);s.useEffect((()=>{const e=be.current;if(e){const t=Ye(e);if(t.current&&Le(e)){const e=u.allTabbableElements(t.current,!0);null!=we.current&&e.length>we.current?u.focusOn(e[we.current]):u.focusWithin(t.current),be.current=null,we.current=null}}}),[ve,xe,Ce,Le]),s.useEffect((()=>{Re(),setTimeout((()=>{oe(ne)}),0)}),[ne,Re]);const Oe=e=>e?Math.round(e.offsetHeight):0,_e=s.useCallback((e=>`${Oe(e)}px`),[]),Ne=s.useCallback((e=>e?Math.round(e.getBoundingClientRect().width):0),[]),Ue=s.useCallback((e=>`${Ne(e)}px`),[Ne]),{direction:Te}=d.useUser(),Be="ltr"===Te,He=s.useCallback((e=>r.normalizePosition(e,Te)),[Te]),je=(e,t)=>`${"right"===He(e)?"":"-"}${Ue(t.current)}`,Ve=e=>_e(e.current),We=e=>[L,O].indexOf(e)>-1,ze=e=>e===_,Ie=e=>[U,T].indexOf(e)>-1,Me=e=>{switch(e){case L:return Ie(z);case O:return Ie(M);case _:return Ie(Y)}},Xe=(e,t)=>{switch(e){case L:return P(t);case O:return G(t);case _:return Q(t)}},Ye=e=>{switch(e){case L:return me;case O:return fe;case _:return he}},$e=e=>{switch(e){case L:return z;case O:return M;case _:return Y}},Ke=(e,t)=>{switch(e){case L:I(t);break;case O:X(t);break;case _:$(t)}},Pe=s.useCallback((e=>{switch(e){case L:return D;case O:return x;case _:return k}}),[D,x,k]),qe=s.useCallback((e=>{const t=Pe(e);return t||(We(e)?ce:ue)}),[Pe,ce,ue]),Ge=(e,t)=>{const s=ze(e);return qe(e)===V?s?{opening:()=>({from:{maxHeight:E},to:{maxHeight:_e(t.current)},options:{duration:R}}),closing:()=>({from:{maxHeight:_e(t.current)},to:{maxHeight:E},options:{duration:R}})}:{opening:()=>({from:{maxWidth:E},to:{maxWidth:Ue(t.current)},options:{duration:R}}),closing:()=>({from:{maxWidth:Ue(t.current)},to:{maxWidth:E},options:{duration:R}})}:s?{opening:()=>({from:{translateY:Ve(t)},to:{translateY:E},options:{duration:R}}),closing:()=>({from:{translateY:E},to:{translateY:Ve(t)},options:{duration:R}})}:{opening:()=>({from:{translateX:je(e,t)},to:{translateX:E},options:{duration:R}}),closing:()=>({from:{translateX:E},to:{translateX:je(e,t)},options:{duration:R}})}},Je=e=>{Ye(e).current?.contains(Se.current)&&u.focusOnElementOrNearestAncestor((e=>{switch(e){case L:return ye;case O:return pe;case _:return ge}})(e).current)};function Qe(e,t){const s=Le(e),r=$e(e);return l.useAnimation(r,{animationStates:Ge(e,t),isAnimatedOnMount:!0,onAnimationEnd:()=>{r===U?(dt(e)&&(e=>{const t=Ye(e),s=u.getAutofocusFocusables(t.current);s.length>0?u.focusOn(s[0]):u.focusWithin(t.current)})(e),(e=>{Ye(e).current.removeAttribute("style")})(e),Ke(e,"open"),F?.({placement:e,value:!0})):s||(dt(e)&&Je(e),(e=>{switch(e){case L:Ze(null);break;case O:et(null);break;case _:tt(null)}})(e),Xe(e,W),Ke(e,B),F?.({placement:e,value:!1}))}}).nodeRef}const Ze=Qe(L,me),et=Qe(O,fe),tt=Qe(_,he),st=m.useTestId(A);function rt(e){const t=Le(e),r=$e(e);s.useEffect((()=>{if(r!==B||t)if(r===B&&t)Ke(e,N);else{if(r===N&&t){const t=Ye(e),s=(e=>{switch(e){case L:return Ze;case O:return et;case _:return tt}})(e);return s(t.current),void Ke(e,U)}if(r===U&&t)return Xe(e,"visible"),void(e=>{const t=u.getActiveElement();switch(e){case L:ye.current=t;break;case O:pe.current=t;break;case _:ge.current=t}})(e);t||(Se.current=u.getActiveElement(),Ke(e,T))}}),[t,r,e])}rt(L),rt(O),rt(_);const at=e=>{ot(L,e)},nt=e=>{ot(O,e)},ct=e=>{ot(_,e)},ot=(e,t)=>{"Escape"===t.code&&dt(e)&&C?.({placement:e,reason:"escapeKey"})},{classes:ut,styles:it}=b.useComponentTheme(y.DrawerLayoutRedwoodTheme),lt=e=>e===W?it.visibilityHidden:it.visibilityVisible,dt=s.useCallback((e=>[H,j].indexOf(qe(e))>-1),[qe]),mt=e=>qe(e)===H,ft=e=>{const t=(e=>{switch(e){case L:return K;case O:return q;case _:return J}})(e),s=[lt(t)];dt(e)?(s.push(it.overlayDrawer),We(e)&&!mt(e)&&s.push(it.overlaySideDrawerNonFullWidth)):s.push(it.reflowDrawer),Me(e)&&s.push(it.animatedDrawer);return s.push((e=>{switch(e){case L:return dt(L)?Be?it.overlayDrawerLeft:it.overlayDrawerRight:Be?it.reflowDrawerLeft:it.reflowDrawerRight;case O:return dt(O)?Be?it.overlayDrawerRight:it.overlayDrawerLeft:Be?it.reflowDrawerRight:it.reflowDrawerLeft;case _:return dt(_)?it.overlayDrawerBottom:it.reflowDrawerBottom}})(e)),w.classNames(s)},ht=e=>{switch(e){case L:return c;case O:return o;case _:return p}},bt=e=>{switch(e){case L:return at;case O:return nt;case _:return ct}},wt=e=>t.jsx("div",{ref:Ye(e),className:ft(e),tabIndex:dt(e)?-1:void 0,onKeyDown:bt(e),children:ht(e)}),yt=i.getClientHints(),pt=s.useCallback((()=>"ios"===yt.platform?document.documentElement.clientHeight:window.innerHeight),[yt.platform]),gt=e=>{setTimeout((()=>{e()}),0)},St=s.useCallback((()=>{pt()>=600?ue!=V&&(Re(),ie(V)):ue!=j&&(Re(),ie(j))}),[ue,pt,Re]),vt=s.useCallback((()=>{gt(St)}),[St]);s.useEffect((()=>{const e=new ResizeObserver((()=>{vt()}));return e.observe(document.body),()=>{e.unobserve(document.body)}}),[vt]);const Dt=e=>{switch(e){case L:return Z;case O:return te;case _:return re}},xt=s.useCallback((e=>{const t=_e(de.current),s=Ye(e).current;s&&Le(e)&&dt(e)&&(s.style.height=t)}),[_e,Le,dt]),kt=s.useCallback((()=>{const e=he.current;if(e&&Le(_)&&dt(_)){const t=Ue(de.current);e.style.width=t}}),[Ue,Le,dt]),Ct=e=>{We(e)&&(xt(e),(e=>{const t=Ye(e).current;if(t&&Le(e)){const s=t.style;mt(e)?s.width=Ue(le.current):s.removeProperty("width")}})(e)),ze(e)&&kt()},Ft=s.useCallback((()=>{xt(L),xt(O),kt()}),[xt,kt]);h.useResizeObserver(le,(()=>{gt(Ft)}));const At=e=>{if(dt(e)){const t=(e=>{const t=Ae(e);return t?We(e)?-Ne(t):-Oe(t):0})(e);switch(e){case L:ee(t);break;case O:se(t);break;case _:ae(t)}}},Et=()=>{At(L),kt()};h.useResizeObserver(me,(()=>{gt(Et)}));const Rt=()=>{At(O),kt()};h.useResizeObserver(fe,(()=>{gt(Rt)}));const Lt=()=>{At(_)};h.useResizeObserver(he,(()=>{gt(Lt)}));const Ot=e=>{const t=qe(e);if((e=>{switch(e){case L:return ve;case O:return xe;case _:return Ce}})(e)!=t){switch(e){case L:De(t);case O:ke(t);case _:Fe(t)}Re()}},_t=e=>$e(e)!==B?(e=>{const s={mainAxis:!1,crossAxis:!1},r={mainAxis:!1,crossAxis:!1};return Ot(e),dt(e)?(Ct(e),Dt(e)||At(e),t.jsx("div",{children:t.jsx(n.Layer,{children:t.jsx(a.Floating,{anchorRef:e===_?de:le,placement:e,class:Me(e)?it.floating:"",offsetValue:Dt(e),flipOptions:r,shiftOptions:s,children:wt(e)})})})):wt(e)})(e):null;return t.jsxs("div",{ref:le,className:ut,...st,children:[_t(L),t.jsxs("div",{ref:de,className:it.centerSection,children:[t.jsx("div",{className:it.mainContent,children:e}),_t(_)]}),_t(O)]})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_DrawerLayout.js.map
