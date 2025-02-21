define("oj-c/progress-button/progress-button",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","ojs/ojvcomponent","@oracle/oraclejet-preact/UNSAFE_ProgressButton","@oracle/oraclejet-preact/UNSAFE_IconProgressButton","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/hooks/UNSAFE_useTooltip","@oracle/oraclejet-preact/utils/UNSAFE_mergeProps","preact/hooks","preact/compat","css!oj-c/progress-button/progress-button-styles.css"],(function(require,e,t,o,r,s,n,c,i,l,u,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressButton=void 0,e.ProgressButton=(0,r.registerCustomElement)("oj-c-progress-button",(0,a.forwardRef)((function({chroming:e="outlined",disabled:o=!1,size:s="md",display:n="all",startIcon:c,edge:i="none",tooltip:l,isLoading:a,width:b,label:g,onOjAction:f,...m},j){const y=(0,u.useRef)(),h=(0,u.useRef)(),P=(0,u.useRef)(),x="icons"!=n||!c&&"icons"==n,k=b||"none"!==i?{style:{width:"bottom"===i?"100%":b}}:{},v={"aria-label":g};return(0,u.useImperativeHandle)(j,(()=>({blur:()=>x?h.current?.blur():P?.current?.blur(),focus:()=>x?h.current?.focus():P?.current?.focus(),click:()=>x?h.current?.click():P?.current?.click()})),[x,h,P]),x?(0,t.jsx)(r.Root,{ref:y,...k,children:(0,t.jsx)(d,{ref:h,type:"submit",variant:e,isDisabled:o,width:"100%",onAction:f,startIcon:c,isLoading:a,size:s,label:"icons"==n&&c?"":g,display:"icons"!=n?n:"all",...m})}):(0,t.jsx)(r.Root,{ref:y,...k,children:(0,t.jsx)(p,{width:"100%",ref:P,type:"submit",variant:e,isDisabled:o,isLoading:a,tooltip:g,onAction:f,size:s,...v,...m,children:c})})})),"ProgressButton",{properties:{label:{type:"string"},tooltip:{type:"string"},disabled:{type:"boolean"},isLoading:{type:"boolean"},width:{type:"number|string"},display:{type:"string",enumValues:["all","label","icons"]},size:{type:"string",enumValues:["sm","md","lg"]},edge:{type:"string",enumValues:["none","bottom"]},chroming:{type:"string",enumValues:["solid","borderless","outlined","callToAction"],binding:{consume:{name:"containerChroming"}}}},slots:{startIcon:{}},events:{ojAction:{bubbles:!0}},methods:{focus:{},blur:{},click:{}}},{chroming:"outlined",disabled:!1,size:"md",display:"all",edge:"none"},{"@oracle/oraclejet-preact":o.default},{consume:[c.TabbableModeContext]});const d=(0,a.forwardRef)(((e,o)=>{const r=(0,u.useRef)();(0,u.useImperativeHandle)(o,(()=>({focus:()=>r.current?.focus(),blur:()=>r.current?.blur(),click:()=>r.current?.click()})),[]);const{tooltipContent:n,tooltipProps:c}=(0,i.useTooltip)({text:e.tooltip,isDisabled:e.isDisabled});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.ProgressButton,{ref:r,...(0,l.mergeProps)(e,c)}),n]})})),p=(0,a.forwardRef)(((e,o)=>{const r=(0,u.useRef)();return(0,u.useImperativeHandle)(o,(()=>({focus:()=>r.current?.focus(),blur:()=>r.current?.blur(),click:()=>r.current?.click()})),[]),(0,t.jsx)(n.IconProgressButton,{ref:r,...e})}))})),define("oj-c/progress-button",["require","exports","oj-c/progress-button/progress-button"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressButton=void 0,Object.defineProperty(e,"ProgressButton",{enumerable:!0,get:function(){return t.ProgressButton}})}));
//# sourceMappingURL=progress-button.js.map