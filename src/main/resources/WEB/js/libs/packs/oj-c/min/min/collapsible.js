define("oj-c/collapsible/collapsible",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/UNSAFE_Collapsible","ojs/ojvcomponent","preact/hooks","ojs/ojcontext","css!oj-c/collapsible/collapsible-styles.css"],(function(require,e,o,t,a,l,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Collapsible=void 0,e.Collapsible=(0,l.registerCustomElement)("oj-c-collapsible",(e=>{const{id:t,children:s,disabled:i,expanded:c,iconPosition:d,variant:p,header:u}=e,b=(0,n.useRef)(null),j=(0,n.useRef)(!1),x=(0,n.useRef)(),f=(0,n.useCallback)((e=>r.getContext(b.current).getBusyContext()?.addBusyState({description:`oj-c-collapsible: id='${t}' is ${e}.`})),[]);(0,n.useEffect)((()=>{j.current?(x.current&&x.current(),x.current=f("animating")):j.current=!0}),[c]);return(0,o.jsx)(l.Root,{id:t,ref:b,children:(0,o.jsx)(a.Collapsible,{header:u,iconPosition:d,variant:p,isExpanded:c,isDisabled:i,onToggle:async o=>{let t=o.target;for(;t&&t!==b?.current;t=t.parentElement)if("disabled"===t.getAttribute("data-oj-clickthrough"))return;const a=o.value?e.onOjBeforeExpand:e.onOjBeforeCollapse;try{await(a?.(o)),e.onExpandedChanged?.(o.value)}catch(e){}},onTransitionEnd:o=>{const t=o.value?e.onOjExpand:e.onOjCollapse;t?.(o),x.current&&(x.current(),x.current=void 0)},children:s})})}),"Collapsible",{slots:{"":{},header:{}},properties:{disabled:{type:"boolean"},expanded:{type:"boolean",writeback:!0},iconPosition:{type:"string",enumValues:["end","start"]},variant:{type:"string",enumValues:["basic","horizontal-rule"]}},events:{ojBeforeCollapse:{cancelable:!0},ojBeforeExpand:{cancelable:!0},ojCollapse:{},ojExpand:{}},extension:{_WRITEBACK_PROPS:["expanded"],_READ_ONLY_PROPS:[],_OBSERVED_GLOBAL_PROPS:["id"]}},void 0,{"@oracle/oraclejet-preact":t.default})}));
//# sourceMappingURL=collapsible.js.map