define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Text-e132dec0', './classNames-08d99695', './useId-c9578d26', './mergeProps-bcfa6a92', './usePress-a9ed1488', './useUser-9b166ca3', './useComponentTheme-5aa41a8f', './mergeInterpolations-9ede4cf7', './flexitem-5db48325', './useInteractionStyle-360d25a5', 'preact', 'preact/compat', './clientHints-030d25aa', './useToggle-a29f97af', './UNSAFE_Menu/themes/redwood/MenuItemTheme'], (function(e,n,t,o,r,s,a,u,i,c,l,d,m,p,f,g,y,h){"use strict";const C=e=>e.dataset.ojMenuItemKey,M=e=>{const n=e.closest("[data-oj-menu-item-key]");if(n){const e=C(n);return void 0===e?null:{key:e,elem:n}}return null},v=(e,n)=>{if(!n)return{};return{onKeyDown:t=>{"ltr"===e?"ArrowRight"===t.key&&n?.():"ArrowLeft"===t.key&&n?.()}}},b=p.createContext({isMobile:!1,onClose:()=>null,testId:""});function x(){return t.useContext(b)}const I=p.createContext({menuContainerRef:{current:null},currentKey:void 0,showFocusRing:!1,changeKey:()=>{},isContainerFocused:!1,menuContainerGeneralInformation:{current:{wasMouseMoved:!1,lastMouseLeaveMenuItemdRelatedTarget:null}}});function k(){return t.useContext(I)}const w=f.forwardRef((({id:e,label:s,onAction:p,startIcon:f,endIcon:g,role:C,isChecked:M,isDisabled:b=!1,variant:I="standard",type:w,hoverInfo:S,openSubmenu:T,menuItemLabelWeight:j="normal",isSubmenuOpen:P,submenuId:R,submenuRef:F},L)=>{const{onClose:E}=x(),{currentKey:A,changeKey:D,showFocusRing:K,menuContainerRef:N,menuContainerGeneralInformation:U,isContainerFocused:O}=k(),q=t.useRef(null),{direction:B}=i.useUser(),G=A===e,H=t.useCallback((e=>{"submenu"!==w&&E?.({reason:"itemAction"}),p?.(e)}),[w,E,p]),{hoverProps:V}=function(e){const{bool:n,setTrue:t,setFalse:o}=y.useToggle(!1);return{hoverProps:{ontouchend:t,onMouseEnter:t=>{n?o():e.onMouseEnter(t)},onMouseLeave:n=>{e.onMouseLeave(n)}}}}({onMouseEnter:n=>{S?.hoverStatus.current.recentClose||S?.hoverStatus.current.pendingUnhover||(S&&U.current.wasMouseMoved&&(S.hoverStatus.current.pendingUnhover=!0),U.current.wasMouseMoved&&(S?.hoverProps.onMouseEnter(n),D({key:e,reason:"mouseEnter"})))},onMouseLeave:e=>{S&&(S.hoverStatus.current.pendingUnhover=!1),(N.current?.contains(e.relatedTarget)||F?.current?.contains(e.relatedTarget))&&(U.current.lastMouseLeaveMenuItemdRelatedTarget=e.relatedTarget)}}),{pressProps:z}=u.usePress(H,{isDisabled:b});t.useLayoutEffect((()=>{G&&q.current?.focus()}),[G]);const{interactionProps:W}=m.useInteractionStyle(b),{classes:$,styles:{iconLabelContainer:_,iconContainer:J,startIconContainer:Q,labelContainer:X,endIconContainer:Y}}=c.useComponentTheme(h.MenuItemRedwoodTheme,{current:G?"isCurrent":"notCurrent",focusRing:K?"isFocusRing":"notFocusRing",variant:b?"disabled":I,containerFocused:O?"isContainerFocused":"notContainerFocused",submenuOpen:P?"isSubmenuOpen":"notSubmenuOpen"}),Z=l.mergeInterpolations([...Object.values(d.flexitemInterpolations)]),{class:ee,...ne}=Z({flex:"1 1 auto",alignSelf:"center"}),{class:te,...oe}=Z({flex:"0 0 auto",alignSelf:"center"}),re=r.classNames([te,_,J,Q]),se=r.classNames([ee,_,X]),ae=r.classNames([te,_,J,Y]);return n.jsx("div",{role:"presentation",...void 0!==R&&"submenu"===w&&{"aria-owns":R},children:n.jsxs("a",{ref:e=>{q.current=e,"function"==typeof L?L(e):L&&(L.current=e)},class:$,...a.mergeProps(W,V,z,v(B,T),(ue=e,ie=D,{onClick:()=>{ie({key:ue,reason:"click"})}})),role:C,"data-oj-menu-item-key":e,..."submenu"===w&&{"aria-haspopup":!0,"aria-expanded":!!P},...b&&{"aria-disabled":!0},..."select"===w&&{"aria-checked":!!M},tabIndex:G?0:-1,children:[f&&n.jsx("span",{style:oe,class:re,children:f}),n.jsx("span",{style:ne,class:se,children:n.jsx(o.Text,{variant:"inherit",size:"md",weight:j,children:s})}),g&&n.jsx("span",{style:oe,class:ae,children:g})]})});var ue,ie}));e.BaseMenuItem=w,e.MenuContainerContext=I,e.MenuContext=b,e.MenuItem=function(e){const o=s.useId(),r=t.useMemo((()=>`oj-menu-item-${o}`),[o]);return n.jsx(w,{...e,role:"menuitem",type:"simple",id:r})},e.getCloseSubmenuEvent=(e,n)=>{if(!n)return{};return{onKeyDown:t=>{("Escape"===t.key||"ltr"===e&&"ArrowLeft"===t.key||"rtl"===e&&"ArrowRight"===t.key)&&(t.stopPropagation(),n?.())}}},e.getIsMobile=()=>{const{deviceType:e}=g.getClientHints();return"phone"===e},e.getKeyboardCloseProps=(e,n)=>({onKeyDown:t=>{"Tab"===t.key?(t.stopPropagation(),e?.({reason:"dismissed"}),t.preventDefault()):"Escape"===t.key&&"main"===n&&(t.stopPropagation(),e?.({reason:"dismissed"}))}}),e.getLastVisible=e=>{if(e){const n=e.querySelectorAll("[data-oj-menu-item-key]"),t=n[n.length-1];if(t){const e=C(t);if(e)return e}}return null},e.getMenuContainerFocusMethods=(e,n)=>({onBlur:()=>{setTimeout((()=>{e()}),100)},onFocus:()=>{n()}}),e.getMenuContainerMouseLeave=e=>({onMouseLeave:n=>{e(n)}}),e.getMenuPointerDown=()=>({onPointerDown:e=>{const n=M(e.target);n?.key||e.preventDefault()}}),e.getNVisible=(e,n)=>{if(e){const t=e.querySelectorAll("[data-oj-menu-item-key]")[n];if(t){const e=C(t);if(e)return e}}return null},e.getPrevNext=(e,n,t)=>()=>{if(e){const o=Array.from(e.querySelectorAll("[data-oj-menu-item-key]"));let r=o.findIndex((e=>C(e)===t))+(n?-1:1);const s=o.length-1;r<0&&(r=s),r>s&&(r=0);const a=C(o[r]);return a||null}return null},e.keyElemExtractor=M,e.useMenuContainerContext=k,e.useMenuContext=x}));
//# sourceMappingURL=MenuItem-644f8619.js.map