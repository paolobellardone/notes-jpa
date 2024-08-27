define(['exports', 'preact/jsx-runtime', './TrackResizeContainer-905caab2', './classNames-08d99695', './colorUtils-7c069766', './layoutUtils-3c2d340e', './eventsUtils-5d567a9d', './accUtils-1557920a', './UNSAFE_TagCloud/themes/TagCloudStyles.css', './useVisEvents-ac97d087', 'preact/hooks', './useUser-9b166ca3', './useDatatip-34fb67d2', './util-5bb1f200', './mergeProps-bcfa6a92', './useTranslationBundle-20bfc0f3', './useTextDimensions-b37344b4', './useSelection-91c04393', './useTestId-f3b8b319', './useContextMenu-e6b10380', './Menu-6a5d7fce', './MenuItem-644f8619', 'preact', './useTooltipControlled-18271c7a', 'css!./IconStyle.styles.css', './SelectMenuGroupContext-67f24a8f', './logger-0f873e29', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./MenuSeparatorStyles.styles.css', 'module', './UNSAFE_Menu/themes/redwood/MenuSeparatorVariants.css', 'preact/compat', './LayerHost-0a244de8', './useVisTouchResponse-36416652', './stringUtils-0ae982c2'], (function(e,t,n,o,s,i,r,l,c,a,u,d,f,h,x,p,g,m,b,S,y,I,C,M,v,w,R,T,z,U,D,E,P,k,A){"use strict";function F(e,t){const{idx:n}=e;return t[n]}function N(e){return null!=e?.15*e:0}function L(e){return{getItem:t=>F(t,e),getDetailFromInfo:t=>{if(!t)return{id:void 0,data:void 0};const n=F(t,e);return{id:n.id,data:n}},getPrevItemInfo:t=>function(e,t){let n=e.idx;return n=Math.max(0,n-1),{idx:n,id:t[n].id}}(t,e),getNextItemInfo:t=>function(e,t){let n=e.idx;return n=Math.min(t.length-1,n+1),{idx:n,id:t[n].id}}(t,e)}}const V=20,j=(e,t,n,o)=>t===n?12:12+Math.ceil((o-1)*(e-t)/(n-t)*12);function H(e){const t=[];let n=Number.MAX_VALUE,o=-Number.MAX_VALUE;for(let t=0;t<e.length;t++)n=Math.min(n,e[t].value),o=Math.max(o,e[t].value);for(let s=0;s<e.length;s++){const i=j(e[s].value,n,o,3);t.push({...e[s],fontSize:i})}return t}function $(e,t){const n=[0];let o=e[0].w+2;if(e.length>1)for(let s=1;s<e.length;s++)o+e[s].w>t&&(n.push(s),o=0),o+=e[s].w+2;return n}function _(e,t,n,o,s,r){let l;return l="cloud"!==e&&e?function(e,t,n,o,s){const i=[],r=[];let l=0,c=0,a=0;const u=H(e);for(let e=0;e<u.length;e++){const t=u[e],n=s(t.label,{fontSize:t.fontSize+"px"});l=Math.max(l,n.width),c=Math.max(c,n.height),a=Math.max(a,t.fontSize),r.push({w:n.width,h:n.height,x:n.x,y:n.y})}let d,f,h=0,x=(t-0)/l;for(;x-h>.001;)d=(h+x)/2,f=$(r,(t-0)/d),f.length*(d*c+2)-2>n-0?x=d:h=d;d=h,f=$(r,(t-0)/d),f.push(u.length);for(let e=0;e<f.length-1;e++){const n=f[e],s=f[e+1];let l=5,a=0,h=!0;if(s-n>1){let o=0;for(let e=n;e<s;e++)o+=r[e].w*d,a=Math.max(a,r[e].h*d);if(l=(t-0-o)/(s-n-1),e==f.length-2){const e=.5*a;e<l&&o+(s-n)*e<.9*(t-0)&&(l=e,h=!1)}}const x=0+(e+1)*(c*d+2)-2;let p=0;for(let e=n;e<s;e++){const c=u[e],a=c.fontSize*d;c.fontSize=a;const f=r[e].w*d;c.y=0+x+r[e].y*d-V,h&&e===s-1&&e!==n?c.x=o?0+f+0-t:0+t-f-0:(c.x=0+p,o?p-=r[e].w*d+l:p+=r[e].w*d+l),i.push({...c,w:f,h:r[e].h*d})}}return i}(t,n,o,s,r):function(e,t,n,o,s){const r=[],l=180;let c=10/l,a=10/l;t>n?c*=t/n:a*=n/t;const u=2*Math.PI/l;let d=null,f=0;const h=[],x=[],p=[],g=H(e);for(let e=0;e<g.length;e++){let t=!1,n=0,o=4;const p=g[e],m=s(p.label,{fontSize:p.fontSize+"px"});f=Math.max(f,p.fontSize);let b=-1;for(;!t;){const s=n%l;void 0===h[s]&&(h[s]=Math.cos(n*u)),void 0===x[s]&&(x[s]=Math.sin(n*u));const f=c*n*h[s],g=a*n*x[s],S=N(m.height),y={x:f,y:g,w:m.width+2*S,h:m.height+2*S};if(t=!0,-1!==b&&i.intersects(r[b],y)&&(t=!1),t)for(let n=0;n<e;n++)if(i.intersects(r[n],y)){b=n,t=!1;break}t&&(d=d?i.getUnion(d,y):y,b=-1,r[e]=y,p.x=f,p.y=g,p.w=m.width,p.h=m.height),3600==n?o=3:5400==n?o=2:10800==n&&(o=1),n+=o}}if(d){const e=Math.max(d.w/t,d.h/n),s=d.x+d.w/2,i=d.y+d.h/2;for(let r=0;r<g.length;r++){let l;const c=g[r];l=o?null!=c.x?0-c.x/e-(t/2-s/e):0:null!=c.x?0+c.x/e+(t/2-s/e):0;const a=null!=c.y?0+c.y/e+(n/2-i/e):0,u=null!=c.w?c.w/e:0,d=null!=c.h?c.h/e:0,f=c.fontSize/e;p.push({...c,x:l,y:a,fontSize:f,w:u,h:d})}}return p}(t,n,o,s,r),l}function B(e,t,n,o,i,r,l,c,a){let u,d=!1;if(!o){const e=t===l?.idx,n=t===i?.idx;d=!!(e&&l?.isCurrent||n&&i?.isCurrent)}const f=function(e,t){if(t)return 0===t.length||new Set(t).has(e)}(e.id,c),h=function(e,t){return!(!t||0===t.length)&&new Set(t).has(e)}(e.id,r);if(e.color){let t,n,o;h?(n=e.color,t=s.getContrastingTextColor(n)):t=e.color,u={color:t,backgroundColor:n,backgroundImage:o}}else n||(u={backgroundColor:"none"});return{isCurrent:d,isHighlighted:f,isSelected:h,isFocused:!!l&&X(l,t),key:e.id,itemIdx:t,style:u,activeId:d?a:void 0,isReadOnly:o,...e}}function O(e){const t=e.dataset.idx;if(null!=t)return{idx:Number(t)}}function G(e,t){return e?.idx===t?.idx}function X(e,t){if(!e.isFocusVisible)return!1;const{idx:n}=e;return n===t}function q(e,t,n){return o=>{switch(o.code){case"Space":case"Enter":e(),r.cancelEvent(o);break;case"Tab":t({...n,isCurrent:!0,isFocusVisible:!0}),r.cancelEvent(o)}}}const J=e=>{const{itemBase:n,itemStyle:s,hoverUnselectedItemStyle:i,selectedItemStyle:r,hoveredSelectedItemStyle:a,dimmedItemStyle:u,interactiveCursorStyle:d}=c.styles,f=e.isHighlighted||null==e.isHighlighted,h=o.classNames([n,e.isSelected?r:s,e.isCurrent?e.isSelected?a:e.isFocused||e.supportsSelection?i:"":"",f?"":u,e.supportsAction||e.supportsSelection?d:""]),x=(p=!!e.supportsSelection,g=e.translations,m=e.isSelected,b=e.accessibleLabel,S=e.role,{"aria-label":l.generateAriaLabel(g,b,{isSelected:p?m:void 0})||void 0,role:S||"img"});var p,g,m,b,S;const y=N(e.h);return t.jsx("div",{class:h,"data-id":`${e.id}`,"data-idx":e.itemIdx,style:{...e.style,transform:`translate(${(e.x||0)-y}px,${(e.y||0)-y}px)`,fontSize:e.fontSize,padding:`${y}px`,lineHeight:e.fontSize+"px"},id:e.activeId,...x,children:e.label})},K=(e,t,n,o)=>{if(o?.current&&t.isCurrent&&e.current&&null!=o?.current.x&&null!=o?.current.w&&null!=o?.current.y&&null!=o?.current.h){const t={x:o.current.x,y:o.current.y,width:o.current.w,height:o.current.h},s=e.current.getBoundingClientRect();return h.calculateOffset(n,s.width,t)}return h.calculateOffset(n,0,void 0)},Q=({touchResponse:e,datatip:t,rootRef:n,focusedItemRef:o,focusedItemInfo:s})=>{const{direction:i}=d.useUser(),r="rtl"===i,[l,c]=u.useState(K(n,s,r,o));u.useLayoutEffect((()=>{c(K(n,s,r,o))}),[s,o,r,n]);const a=s?.isCurrent?"element":"pointer",{datatipContent:h,datatipProps:x}=f.useDatatip({content:t?.content,borderColor:t?.borderColor,anchor:a,placement:"top-start",offset:l,touchResponse:e});return{datatipContent:h,datatipProps:x}},W=({getItemInfo:e,focusedItemInfo:t,rootRef:n,contextMenuConfig:o,items:s,onContextMenuDismissed:i})=>{const{contextMenuProps:r,contextMenuContent:l}=S.useContextMenu({onContextMenuHandler:({gesture:o,target:i})=>{let r,l;"keyboard"===o?(r=t.idx,l=n.current?.querySelector(`[data-idx="${r}"]`)):r=e(i)?.idx;const c=void 0!==r?s[r]:null;let a;return a=c?{type:"item",data:c}:{type:"background"},{context:a,elem:l}},contextMenuOptions:{isDisabled:!o},rootRef:n,contextMenuConfig:o,onContextMenuDismissed:i});return{contextMenuContent:l,contextMenuProps:r}};function Y({selectionMode:e="none",layout:n="cloud",width:o,height:s,items:i,onItemAction:r,onItemHover:l,onItemFocus:f,testId:h,contextMenuConfig:S,...y}){const I=b.useTestId(h),C=u.useRef(null),M=u.useRef(null),v=p.useTranslationBundle("@oracle/oraclejet-preact"),w=i&&0!==i.length,R=!(!e||"none"===e),T=null!=r,z=T&&null===l&&null===f,U=new Map(i.map((e=>[e.id,e]))),{getItem:D,getDetailFromInfo:E,getPrevItemInfo:P,getNextItemInfo:F}=L(i),{touchResponse:N,touchResponseStyle:V}=k.useVisTouchResponse({type:"auto",supportsTouchDragGestures:!1,rootRef:C}),{focusedItemInfo:j,hoveredItemInfo:H,onContextMenuDismissed:$,activeId:X,eventsProps:K}=a.useVisEvent(N,!z&&w,(()=>!z),q,E,P,F,r,l,f,G,O,{idx:0}),Y=function(e,t,n,o,s){const i=n.isCurrent?n:o?.isCurrent&&null!=o.idx?o:void 0;if(!i)return{content:void 0,borderColor:void 0};const r=t(i,e);return s&&r?s({data:r}):{content:r?.accessibleLabel,borderColor:void 0}}(i,D,j,H,y.datatip),{datatipContent:Z,datatipProps:{"aria-describedby":ee,...te}}=Q({touchResponse:N,datatip:Y,rootRef:C,focusedItemInfo:j,focusedItemRef:M}),ne=function(e,t,n,o,s){return{"aria-label":`${n||""} ${t?"":e.vis_noData()}`,role:"application","aria-describedby":o,"aria-labelledby":s}}(v,w,y.accessibleLabel,A.merge([y["aria-describedby"],ee]),y["aria-labelledby"]),{selectionContent:oe,selectionProps:se}=m.useSelection({idExtracter:e=>{const t="keyup"===e.type?j:O(e.target);return E(t).id},selection:y.selectedIds,selectionMode:e,onChange:y.onSelectionChange,getDataById:e=>U.get(e)}),{direction:ie}=d.useUser(),{textMeasureContent:re,getTextDimensions:le}=g.useTextDimensions(),ce=u.useMemo((()=>le&&w?_(n,i,o,s,"rtl"===ie,le):[]),[n,i,w,o,s,ie,le]),{contextMenuContent:ae,contextMenuProps:ue}=W({getItemInfo:O,focusedItemInfo:j,rootRef:C,contextMenuConfig:S,items:i,onContextMenuDismissed:$}),de=x.mergeProps(K,te,se,ue);return t.jsxs("div",{ref:C,tabIndex:z?void 0:0,style:{width:o,height:s,...V},class:c.baseStyles,...I,...ne,...de,"aria-activedescendant":X,children:[ce.map(((e,n)=>{const o=B(e,n,R,z,H,y.selectedIds,j,y.highlightedIds,X);return j.idx===n&&(M.current=e),t.jsx(J,{fontSize:e.fontSize,x:e.x,y:e.y,accessibleLabel:e.accessibleLabel,supportsSelection:R,supportsAction:T,translations:v,...o})})),re,Z,ae,oe]})}e.TagCloud=function({height:e,width:o,...s}){return t.jsx(n.TrackResizeContainer,{width:o,height:e,class:c.dimensionStyle,children:(e,n)=>t.jsx(Y,{width:e,height:n,...s})})}}));
//# sourceMappingURL=TagCloud-a37fcea5.js.map
