define("oj-c/utils/PRIVATE_ItemsMenu/menu-item-icon",["require","exports","preact/jsx-runtime"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MenuItemIcon=function(e){return"img"===e.icon.type?(0,t.jsx)("img",{src:e.icon.src}):(0,t.jsx)("span",{class:e.icon.class})}})),define("oj-c/utils/PRIVATE_ItemsMenu/menu-select-items",["require","exports","preact/jsx-runtime","./menu-item-icon","@oracle/oraclejet-preact/UNSAFE_Menu"],(function(require,e,t,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MenuSelectItems=function(e){return(0,t.jsx)(t.Fragment,{children:e.items.map((e=>e&&(0,t.jsx)(o.SelectMenuItem,{label:e.label,isDisabled:e.disabled,endIcon:e.endIcon?(0,t.jsx)(n.MenuItemIcon,{icon:e.endIcon}):void 0,value:e.value})))})}})),define("oj-c/utils/PRIVATE_ItemsMenu/items-menu",["require","exports","preact/jsx-runtime","./menu-item-icon","./menu-select-items","@oracle/oraclejet-preact/UNSAFE_Menu"],(function(require,e,t,n,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ItemsMenu=void 0;e.ItemsMenu=({items:s=[],selection:r={},onSelectionChanged:u,onOjMenuAction:c,isSplitMenu:l=!1,onOjMenuSelection:a})=>{const m=e=>{const t=r[e];return t&&"string"==typeof t?t:void 0},d=e=>{const t=r[e];return Array.isArray(t)?t:[]};function p(e,t,n){return o=>{n?.({value:o.value,menuSelectionGroupKey:e}),a?.({value:o.value,menuSelectionGroupKey:e}),u?.(((e,t,n)=>{const o={...e};return Array.isArray(n)&&0===n.length?delete o[t]:o[t]=n,o})(t,e,o.value))}}return(0,t.jsx)(t.Fragment,{children:s.map((s=>{switch(s.type){case"divider":case"separator":return(0,t.jsx)(i.MenuSeparator,{});case"submenu":return s.items&&s.label&&!l?(0,t.jsx)(i.Submenu,{label:s.label,itemKey:s.key,children:(0,t.jsx)(e.ItemsMenu,{items:s.items,selection:r,onSelectionChanged:u,onOjMenuSelection:a,onOjMenuAction:c})}):void 0;case"selectsingle":return s.items&&s.key&&!l?(0,t.jsx)(i.SelectSingleMenuGroup,{groupKey:s.key,value:s.selection||m(s.key),onCommit:p(s.key,r,s.onSelection),children:(0,t.jsx)(o.MenuSelectItems,{items:s.items})}):void 0;case"selectmultiple":return s.items&&s.key&&!l?(0,t.jsx)(i.SelectMultipleMenuGroup,{groupKey:s.key,value:s.selection||d(s.key),onCommit:p(s.key,r,s.onSelection),children:(0,t.jsx)(o.MenuSelectItems,{items:s.items})}):void 0;case void 0:case"item":return s.label?(0,t.jsx)(i.MenuItem,{itemKey:s.key,label:s.label,isDisabled:s.disabled,variant:l?void 0:s.variant,startIcon:!l&&s.startIcon&&(0,t.jsx)(n.MenuItemIcon,{icon:s.startIcon}),endIcon:!l&&s.endIcon&&(0,t.jsx)(n.MenuItemIcon,{icon:s.endIcon}),onAction:(b=s.key,j=s.onAction,()=>{j?.(),c?.({key:b})})}):void 0;default:return}var b,j}))})}})),define("oj-c/split-menu-button/split-menu-button",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","ojs/ojvcomponent","@oracle/oraclejet-preact/UNSAFE_SplitMenuButton","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/hooks/UNSAFE_useTooltip","@oracle/oraclejet-preact/utils/UNSAFE_mergeProps","../utils/PRIVATE_ItemsMenu/items-menu","preact/hooks","preact/compat","css!oj-c/split-menu-button/split-menu-button-styles.css"],(function(require,e,t,n,o,i,s,r,u,c,l,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SplitMenuButton=void 0,e.SplitMenuButton=(0,o.registerCustomElement)("oj-c-split-menu-button",(0,a.forwardRef)((function({label:e,chroming:n="outlined",disabled:i=!1,size:s="md",items:r=[],width:u,tooltip:a,onOjMenuAction:d,onOjAction:p,"aria-describedby":b,...j},M){const y=(0,l.useRef)(),f=(0,l.useRef)(),v=u?{width:u}:{};return(0,l.useImperativeHandle)(M,(()=>({blur:()=>f.current?.blur(),focus:()=>f.current?.focus(),click:()=>f.current?.click()})),[f]),(0,t.jsx)(o.Root,{style:v,ref:y,children:(0,t.jsx)(m,{tooltip:a,label:e,ref:f,variant:n,size:s,width:"100%","aria-describedby":b,isDisabled:i,onAction:p,...j,children:(0,t.jsx)(c.ItemsMenu,{isSplitMenu:!0,items:r,onOjMenuAction:d})})})})),"SplitMenuButton",{properties:{label:{type:"string"},items:{type:"Array<object>"},tooltip:{type:"string"},disabled:{type:"boolean"},size:{type:"string",enumValues:["sm","md","lg"]},width:{type:"number|string"},chroming:{type:"string",enumValues:["solid","outlined","callToAction"],binding:{consume:{name:"containerChroming"}}}},events:{ojMenuAction:{bubbles:!0},ojAction:{bubbles:!0}},extension:{_OBSERVED_GLOBAL_PROPS:["aria-describedby"]},methods:{focus:{},blur:{},click:{}}},{chroming:"outlined",disabled:!1,size:"md",items:[]},{"@oracle/oraclejet-preact":n.default},{consume:[s.TabbableModeContext]});const m=(0,a.forwardRef)(((e,n)=>{const o=(0,l.useRef)();(0,l.useImperativeHandle)(n,(()=>({focus:()=>o.current?.focus(),blur:()=>o.current?.blur(),click:()=>o.current?.dispatchEvent(new Event("ojAction",{bubbles:!0}))})),[]);const{tooltipContent:s,tooltipProps:c}=(0,r.useTooltip)({text:e.tooltip,isDisabled:e.isDisabled});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.SplitMenuButton,{ref:o,...(0,u.mergeProps)(e,c)}),s]})}))})),define("oj-c/split-menu-button",["require","exports","oj-c/split-menu-button/split-menu-button"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SplitMenuButton=void 0,Object.defineProperty(e,"SplitMenuButton",{enumerable:!0,get:function(){return t.SplitMenuButton}})}));
//# sourceMappingURL=split-menu-button.js.map