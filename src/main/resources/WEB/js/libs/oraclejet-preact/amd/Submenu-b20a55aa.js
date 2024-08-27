define(['exports', 'preact/jsx-runtime', 'preact/compat', './DirectionalExpandArrowIcon-c8f2e596', './useId-c9578d26', './MenuItem-644f8619', './Menu-6a5d7fce', 'preact/hooks', './DirectionalCollapseArrowIcon-09a24655'], (function(e,n,t,s,u,o,r,c,a){"use strict";const l=({label:e,children:c,startIcon:a})=>{const l=u.useId(),m=u.useId(),d=t.useMemo((()=>`oj-menu-item-${m}`),[m]),{changeKey:b,currentKey:p}=o.useMenuContainerContext(),f=t.useRef(null),I=t.useRef(null),[x,y]=t.useState(!1),[h,k]=t.useState("none");t.useEffect((()=>{d!==p&&y(!1)}),[p,d]);const j=t.useCallback((e=>{f.current?.focus(),y(!0),"keyup"===e.type?k("firstItem"):k("none")}),[]),C=t.useRef({recentClose:!1,pendingUnhover:!1});return n.jsxs(n.Fragment,{children:[n.jsx(o.BaseMenuItem,{startIcon:a,id:d,submenuId:l,ref:f,label:e,endIcon:n.jsx(s.DirectionalExpandArrowIcon,{}),type:"submenu",role:"menuitem",onAction:j,hoverInfo:{hoverProps:{onMouseEnter:e=>{j(e)}},hoverStatus:C},openSubmenu:()=>{y(!0),k("firstItem")},submenuRef:I,isSubmenuOpen:x}),n.jsx(r.DropdownMenu,{isOpen:x,menuLevel:"sub",menuId:l,closeSubmenu:()=>{C.current.recentClose=!0,b({key:p,reason:"keyboard"}),setTimeout((()=>{C.current.recentClose=!1}),i),y(!1),f.current?.focus()},ref:I,anchorRef:f,defaultPlacement:"end-top",currentFocus:h,offsetValue:{mainAxis:-8,crossAxis:-8},flipOptions:{crossAxis:!0,mainAxis:!0,fallbackPlacements:["start-top","end-bottom","start-bottom"]},children:c})]})},i=100,m=({label:e,children:t,startIcon:l})=>{const i=u.useId(),m=u.useId(),d=u.useId(),b=c.useRef(null),[p,f]=c.useState(!1),[I,x]=c.useState("menu"),{menuContainerRef:y,changeKey:h}=o.useMenuContainerContext();c.useEffect((()=>{p&&y.current&&(y.current.style.display="none")}),[p,y]);const k=c.useCallback((()=>{f(!0),x("secondItem")}),[]),j=c.useCallback((e=>{f(!0),"keyup"===e.type?x("secondItem"):x("menu")}),[]),C=c.useCallback((()=>{h({key:m,reason:"keyboard"}),b.current?.focus()}),[h,m,b]),M=()=>{f(!1),y.current&&(y.current.style.display="block")};return n.jsxs(n.Fragment,{children:[n.jsx(o.BaseMenuItem,{startIcon:l,id:m,submenuId:i,ref:b,label:e,endIcon:n.jsx(s.DirectionalExpandArrowIcon,{}),type:"submenu",role:"menuitem",onAction:j,openSubmenu:k,isSubmenuOpen:p}),p?n.jsxs(r.SheetMenu,{menuId:i,closeSubmenu:()=>{M(),C()},menuLevel:"sub",anchorRef:b,currentFocus:I,children:[n.jsx(o.BaseMenuItem,{id:d,menuItemLabelWeight:"bold",role:"menuitem",type:"submenu",startIcon:n.jsx(a.DirectionalCollapseArrowIcon,{}),onAction:e=>{M(),"keyup"===e.type?C():(h({key:void 0,reason:"click"}),y.current?.focus())},label:e}),t]}):null]})};e.Submenu=e=>{const{isMobile:t}=o.useMenuContext();return n.jsx(n.Fragment,{children:t?n.jsx(m,{...e}):n.jsx(l,{...e})})}}));
//# sourceMappingURL=Submenu-b20a55aa.js.map
