define("oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useMergedFormContext=void 0,e.useMergedFormContext=function({propContainerReadonly:e,propLabelWrapping:a,propReadonly:n,propUserAssistanceDensity:r}){const s=(0,t.useFormContext)(),o=r??s.userAssistanceDensity,i=n??s.isReadonly,{isFormLayout:l,isReadonly:u,labelWrapping:d,...c}=s;return{containerProps:{...c,isFormLayout:void 0!==e||l,isReadonly:e??u,labelWrapping:a??d},readonlyValue:i,uadValue:o}}})),define("oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText",["require","exports","preact/hooks"],(function(require,e,t){"use strict";function a(e,t,a,n,r,s){const o="compact"!==s?a?.definition:void 0;return e?.instruction||("none"===r?.validatorHint?void 0:t)||o||("none"===r?.converterHint?void 0:n)}function n(e){if(!e.length)return;return e.map((e=>"function"==typeof e.getHint?e.getHint():void 0)).filter(Boolean).join("\n")}Object.defineProperty(e,"__esModule",{value:!0}),e.useAssistiveText=void 0,e.useAssistiveText=function({addBusyState:e,converter:r,displayOptions:s,help:o,helpHints:i,userAssistanceDensity:l,validators:u}){const[d,c]=(0,t.useState)(u&&u.length?n(u):void 0),p=(0,t.useRef)();(0,t.useEffect)((()=>{if(!u||!u.length)return void c(void 0);c(n(u));const t=u.map((e=>e.hint)).filter(Boolean),a=p.current=Symbol(),r=e?.("resolving the async validator hints");Promise.allSettled(t).then((e=>{c((t=>{const n=e.map((e=>"fulfilled"===e.status?e.value:void 0)).filter(Boolean);return a===p.current&&n.length?[t,...n].join("\n"):t})),r?.()}))}),[u]);const m="compact"!==l?i?.sourceText:i?.definition||i?.sourceText;return{assistiveText:a(o,d,i,r?.getHint?.()??void 0,s,l),helpSourceLink:i?.source,helpSourceText:m}}})),define("oj-c/editable-value/utils/utils",["require","exports"],(function(require,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isShallowEqual=e.normalizeValue=e.treatNull=e.createMessageFromError=void 0,e.createMessageFromError=function(e){return"function"==typeof e.getMessage?{severity:"error",detail:e.getMessage().detail}:{severity:"error",detail:e.message}},e.treatNull=function(e,t){return null===e?t:e},e.normalizeValue=function(e){return"string"==typeof e&&""===e?null:e};e.isShallowEqual=(e,t)=>e===t||e.length===t.length&&e.every(((e,a)=>e===t[a]))})),define("oj-c/editable-value/UNSAFE_useComponentMessaging/useComponentMessaging",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../utils/utils"],(function(require,e,t,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useComponentMessaging=void 0,e.useComponentMessaging=function({messagesCustom:e=[],onMessagesCustomChanged:r}){const[s,o]=(0,t.useUncontrolledState)(e,r),[i,l]=(0,a.useState)([]),[u,d]=(0,a.useState)([]),c=(0,a.useRef)(e),p=(0,a.useCallback)(((...e)=>{l((t=>[...t,...e]))}),[]),m=(0,a.useCallback)((e=>{l((t=>[...t,e]))}),[]),v=(0,a.useCallback)((()=>{l([]),d([])}),[]),f=(0,a.useCallback)((()=>{d([])}),[]),g=(0,a.useCallback)((()=>{l([]),d([]),o([])}),[]),b=(0,a.useCallback)((()=>s.some((e=>"error"===e.severity))),[s]),y=(0,a.useCallback)((()=>0===i.length&&0===u.length&&!1===b()),[i,u,b]),V=(0,a.useCallback)((()=>0!==u.length),[u]),C=(0,a.useCallback)((()=>{l([...i,...u]),d([])}),[i,u]);return(0,a.useEffect)((()=>{c.current!==e&&(c.current=e,(0,n.isShallowEqual)(s,e)||o(e))}),[s,e]),(0,a.useMemo)((()=>({componentMessages:i,deferredComponentMessages:u,messagesCustom:s,visibleMessages:[...s,...i],addComponentMessage:p,addDeferredComponentMessage:m,clearAllComponentMessages:v,clearAllMessages:g,clearDeferredComponentMessages:f,hasCustomErrorMessages:b,hasHiddenMessages:V,hasNoErrorMessages:y,setComponentMessages:l,setDeferredComponentMessages:d,showHiddenMessages:C})),[i,u,s,b,V,y,C])}})),define("oj-c/editable-value/UNSAFE_useConverter/useConverter",["require","exports","ojs/ojconverter-nativenumber","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle","../utils/utils"],(function(require,e,t,a,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useConverter=e.ConverterErrorSymbol=void 0,e.ConverterErrorSymbol=Symbol("ConverterError"),e.useConverter=function({componentMessagingState:s,validationState:o,converter:i}){const l=(0,n.useTranslationBundle)("@oracle/oraclejet-preact").inputNumber_converterParseError(),u=(0,a.useCallback)((a=>{if(!i||(""===(n=a)||null===n))return a;var n;try{return i.parse(a)}catch(a){const n=a?.cause===t.USER_INPUT_ERROR?{severity:"error",detail:l}:(0,r.createMessageFromError)(a);return s.setComponentMessages([n]),o.setValid("invalidShown"),e.ConverterErrorSymbol}}),[i,s,o]),d=(0,a.useCallback)(((e,t=!1)=>{if(!i||function(e){return null===e}(e))return(0,r.treatNull)(e,"")??"";try{return i.format(e)}catch(a){return t||(s.setComponentMessages([(0,r.createMessageFromError)(a)]),o.setValid("invalidShown")),(0,r.treatNull)(e,"")}}),[i,s,o]);return(0,a.useMemo)((()=>({format:d,parse:u})),[d,u])}})),define("oj-c/editable-value/UNSAFE_useConverterLifecycle/useConverterLifecycle",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useConverterLifecycle=void 0,e.useConverterLifecycle=function({converter:e,validationState:a,refreshDisplayValue:n,runFullValidationAndUpdateValue:r}){const s=(0,t.useRef)(e);(0,t.useEffect)((()=>{if(s.current===e)return;s.current=e;const{valid:t}=a;if("invalidShown"===t)r();else n()}),[e,a,n,r])}})),define("oj-c/editable-value/UNSAFE_useDeferredValidators/useDeferredValidators",["require","exports","ojs/ojvalidator-required","preact/hooks","@oracle/oraclejet-preact/hooks/UNSAFE_useTranslationBundle"],(function(require,e,t,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useDeferredValidators=void 0,e.useDeferredValidators=function({labelHint:e,required:r,requiredMessageDetail:s}){const o=(0,n.useTranslationBundle)("@oracle/oraclejet-preact"),i=s||o.formControl_requiredMessageDetail(),l=(0,a.useMemo)((()=>r?new t({label:e,messageDetail:i}):null),[r]);return(0,a.useMemo)((()=>[l].filter(Boolean)),[l])}})),define("oj-c/editable-value/UNSAFE_useStaleIdentity/useStaleIdentity",["require","exports","preact/hooks"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useStaleIdentity=void 0,e.useStaleIdentity=function(){const e=(0,t.useRef)(new Map);return{setStaleIdentity:(0,t.useCallback)((t=>{const a=Symbol();return e.current.set(t,a),{isStale:()=>a!==e.current.get(t)}}),[])}}})),define("oj-c/editable-value/UNSAFE_useValidators/useValidators",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../UNSAFE_useStaleIdentity/useStaleIdentity","../utils/utils"],(function(require,e,t,a,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValidators=e.ValidationResult=void 0,e.ValidationResult={VALID:"VALID",INVALID:"INVALID",STALE:"STALE"},e.useValidators=function({componentMessagingState:s,defaultValidState:o,deferredValidators:i=[],validators:l=[],addBusyState:u,onValidChanged:d}){const[c,p]=(0,t.useUncontrolledState)(o,d),{setStaleIdentity:m}=(0,n.useStaleIdentity)();(0,a.useLayoutEffect)((()=>{void 0!==o&&d?.(o)}),[]);const{addComponentMessage:v,clearAllComponentMessages:f,clearAllMessages:g,hasCustomErrorMessages:b,setComponentMessages:y}=s,V=(0,a.useCallback)((async(e,t={})=>{const{doNotClearMessagesCustom:a=!1}=t,n=b();if(p("pending"),a?f():g(),0===l.length&&0===i.length)return p(n&&a?"invalidShown":"valid"),!0;function s(e,t){try{const a=e.validate(t);if(a instanceof Promise)return a.then((()=>{}),(e=>(0,r.createMessageFromError)(e)))}catch(e){return(0,r.createMessageFromError)(e)}}const o=[],d=[],c=C(e);if(void 0!==c&&o.push(...c),null!=e)for(const t of l){const a=s(t,e);void 0!==a&&(a instanceof Promise?d.push(a):o.push(a))}if(!o.length&&!d.length)return p(n&&a?"invalidShown":"valid"),!0;const V=0!==o.length;if(V&&(y(o),p("invalidShown")),!d.length)return!V;const h=u?.("running validation"),{isStale:S}=m("useValidators-validate");let M=!1;for(const e of d){const t=await e;t&&!S()&&(v(t),p("invalidShown"),M=!0)}return V||M||S()||p(n&&a?"invalidShown":"valid"),h?.(),!V&&!M}),[v,f,g,i,l]),C=(0,a.useCallback)((e=>{const t=[];for(const a of i)try{a.validate(e)}catch(e){t.push((0,r.createMessageFromError)(e))}if(t.length)return t}),[i]),h=(0,a.useCallback)((async(t,a={})=>{const{isStale:n}=m("useValidationLifeCycle-validateValueOnInternalChange"),r=u?.("running validateValueOnInternalChange"),s=await V(t,a);return r?.(),n()?e.ValidationResult.STALE:s?e.ValidationResult.VALID:e.ValidationResult.INVALID}),[u,V]),S=(0,a.useCallback)((t=>{const{clearAllMessages:a,setDeferredComponentMessages:n}=s;a();const r=C(t);return r?(n(r),p("invalidHidden")):p("valid"),e.ValidationResult.VALID}),[s,C]);return(0,a.useMemo)((()=>({valid:c,setValid:p,deferredValidate:C,fullValidate:V,validateValueOnExternalChange:S,validateValueOnInternalChange:h})),[c,C,V,S,h])}})),define("oj-c/editable-value/UNSAFE_useValidationLifecycle/useValidationLifecycle",["require","exports","preact/hooks","../UNSAFE_useConverter/useConverter","../UNSAFE_useValidators/useValidators","../utils/utils"],(function(require,e,t,a,n,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValidationLifecycle=void 0,e.useValidationLifecycle=function({componentMessagingState:e,disabled:s,deferredValidators:o,readonly:i,validationState:l,validators:u,getValueForValidation:d,setValueAfterValidation:c}){const p=(0,t.useRef)(o),m=(0,t.useRef)(u),v=(0,t.useRef)(e.messagesCustom),f=(0,t.useRef)(i),g=(0,t.useRef)(s),b=(0,t.useRef)(!0),y=(0,t.useCallback)((async()=>{if(i||s)return;const{valid:e,validateValueOnInternalChange:t}=l,r=d(e);if(r===a.ConverterErrorSymbol)return;await t(r,{doNotClearMessagesCustom:!0})===n.ValidationResult.VALID&&c(r)}),[s,i,l,d,c]);return(0,t.useEffect)((()=>{if(!b.current)return;if(b.current=!1,i||s)return;const t=d("valid");if(t===a.ConverterErrorSymbol)return;const{deferredValidate:n,setValid:r}=l,{hasCustomErrorMessages:o,setDeferredComponentMessages:u}=e,c=n(t);c&&(u(c),r("invalidHidden")),o()&&r("invalidShown")}),[s,i]),(0,t.useEffect)((()=>{const t=p.current!==o&&0===o.length;if(p.current===o&&f.current===i&&g.current===s)return;f.current=i,g.current=s,p.current=o;if(!(t||!i&&!s))return;const{valid:n,deferredValidate:r,setValid:u}=l,{clearDeferredComponentMessages:c,setDeferredComponentMessages:m}=e;switch(n){case"valid":const e=d(n);if(e!==a.ConverterErrorSymbol){const t=r(e);t&&(m(t),u("invalidHidden"))}break;case"invalidHidden":0===o.length&&(u("valid"),c());break;case"invalidShown":y()}}),[s,i,o,e,l,d,y]),(0,t.useEffect)((()=>{if(m.current!==u&&(m.current=u,!i&&!s&&"invalidShown"===l.valid))y()}),[s,i,u,l]),(0,t.useEffect)((()=>{if((0,r.isShallowEqual)(v.current,e.messagesCustom))return;const{messagesCustom:t,hasCustomErrorMessages:a,hasHiddenMessages:n,hasNoErrorMessages:s}=e,{valid:o,setValid:i}=l;if(v.current=t,a())i("invalidShown");else{if("pending"===o)return;s()?i("valid"):n()&&i("invalidHidden")}}),[e,l]),{runFullValidationAndUpdateValue:y}}})),define("oj-c/editable-value/UNSAFE_useValue/useValue",["require","exports","@oracle/oraclejet-preact/hooks/UNSAFE_useUncontrolledState","preact/hooks","../utils/utils"],(function(require,e,t,a,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValue=void 0,e.useValue=function({value:e,format:r,parse:s,onRawValueChanged:o,onTransientValueChanged:i,onValueChanged:l}){const[u,d]=(0,t.useUncontrolledState)(r(e,!0),o),[c,p]=(0,t.useUncontrolledState)(e,l);(0,a.useEffect)((()=>{void 0!==u&&o?.(u)}),[]);const[m,v]=(0,t.useUncontrolledState)(e,i);return(0,a.useEffect)((()=>{void 0!==e&&i?.(e)}),[]),{displayValue:u,transientValue:m,value:c,getValueForValidation:(0,a.useCallback)((e=>"invalidShown"!==e?c:s((0,n.normalizeValue)(u))),[u,c,s]),setValueAfterValidation:(0,a.useCallback)((e=>{p(e),d(r(e))}),[r]),setDisplayValue:d,setTransientValue:v,setValue:p,refreshDisplayValue:(0,a.useCallback)((()=>{d(r(c))}),[c,r])}}})),define("oj-c/editable-value/UNSAFE_useValueLifecycle/useValueLifecycle",["require","exports","preact/hooks","../UNSAFE_useValidators/useValidators"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useValueLifecycle=void 0,e.useValueLifecycle=function({value:e,valueState:n,format:r,validateValueOnExternalChange:s}){const o=(0,t.useRef)(e);if((0,t.useEffect)((()=>{const{value:e,setDisplayValue:t}=n;t(r(e))}),[]),o.current!==e&&(o.current=e,void 0!==e&&e!==n.value)){const{setDisplayValue:t,setValue:o}=n;s(e)===a.ValidationResult.VALID&&(o(e),t(r(e)))}}})),define("oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue",["require","exports","preact/hooks","../UNSAFE_useComponentMessaging/useComponentMessaging","../UNSAFE_useConverter/useConverter","../UNSAFE_useConverterLifecycle/useConverterLifecycle","../UNSAFE_useDeferredValidators/useDeferredValidators","../UNSAFE_useValidationLifecycle/useValidationLifecycle","../UNSAFE_useValidators/useValidators","../UNSAFE_useValue/useValue","../UNSAFE_useValueLifecycle/useValueLifecycle","../utils/utils"],(function(require,e,t,a,n,r,s,o,i,l,u,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useEditableValue=void 0,e.useEditableValue=function({ariaDescribedBy:e,converter:c,disabled:p,displayOptions:m,implicitComponentValidator:v,labelHint:f,messagesCustom:g,readonly:b,required:y,requiredMessageDetail:V,shouldNormalizeValueOnCommit:C=!0,validators:h,value:S,addBusyState:M,onMessagesCustomChanged:E,onRawValueChanged:A,onValidChanged:x,onValueChanged:_,onTransientValueChanged:N,wrapValueState:j}){const F=(0,a.useComponentMessaging)({messagesCustom:g,onMessagesCustomChanged:E}),{clearAllMessages:D,visibleMessages:R}=F,w=(0,s.useDeferredValidators)({labelHint:f,required:y,requiredMessageDetail:V}),k=v?h?[v,...h]:[v]:h,U=(0,i.useValidators)({componentMessagingState:F,defaultValidState:"valid",deferredValidators:w,validators:k,addBusyState:M,onValidChanged:x}),{validateValueOnExternalChange:I,validateValueOnInternalChange:O}=U,{format:L,parse:P}=(0,n.useConverter)({componentMessagingState:F,converter:c,validationState:U}),q=(0,l.useValue)({value:S,format:L,parse:P,onRawValueChanged:A,onTransientValueChanged:N,onValueChanged:_}),T=j?j(q):q,{displayValue:H,value:B,getValueForValidation:W,setValueAfterValidation:z,refreshDisplayValue:K,setDisplayValue:$,setTransientValue:G,setValue:Y}=T,{runFullValidationAndUpdateValue:J}=(0,o.useValidationLifecycle)({componentMessagingState:F,validationState:U,deferredValidators:w,validators:h,getValueForValidation:W,setValueAfterValidation:z,readonly:b,disabled:p});(0,r.useConverterLifecycle)({converter:c,validationState:U,refreshDisplayValue:K,runFullValidationAndUpdateValue:J}),(0,u.useValueLifecycle)({value:S,valueState:T,format:L,validateValueOnExternalChange:I});const Q=(0,t.useCallback)((e=>P(C?(0,d.normalizeValue)(e):e)),[C,P]),X=(0,t.useCallback)((async(e,t=!0)=>{const a=await O(e);return a===i.ValidationResult.VALID&&t&&Y(e),a}),[O]),Z=(0,t.useCallback)((async({value:e})=>{const t=Q(e);if(t===n.ConverterErrorSymbol)return;const a=t;await X(a)===i.ValidationResult.VALID&&$(L(a))}),[L,X,Q]),ee=(0,t.useCallback)((({value:e})=>{$(e??"")}),[]),te=(0,t.useCallback)((()=>{D(),I(B),K()}),[B,D,K,I]),ae=(0,t.useCallback)((async()=>{if(b||p)return"valid";const{fullValidate:e}=U,{displayValue:t,value:a,setValueAfterValidation:r}=T,s=Q(t);if(s===n.ConverterErrorSymbol)return"invalid";const o=s,i=M?.("running component method validate"),l=await e(o);return i?.(),l?(o!==a&&r(o),"valid"):"invalid"}),[U,T,M,Q,b,p]),ne=(0,t.useCallback)((()=>{const{hasHiddenMessages:e,showHiddenMessages:t}=F,{setValid:a}=U;e()&&(t(),a("invalidShown"))}),[F,U]);return{value:B,setValue:Y,displayValue:H,setDisplayValue:$,setTransientValue:G,methods:{reset:te,validate:ae,showMessages:ne},textFieldProps:{messages:"none"!==m?.messages?R:void 0,value:H,"aria-describedby":e,onCommit:Z,onInput:ee},onCommitValue:X,format:L,normalizeAndParseValue:Q,validateValueOnExternalChange:I}}})),define("oj-c/input-number/useImplicitNumberConverter",["require","exports","ojs/ojconverter-nativenumber","preact/hooks"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImplicitNumberConverter=void 0,e.useImplicitNumberConverter=function({converter:e}){return(0,a.useMemo)((()=>e??new t.NumberConverter),[e])}})),define("oj-c/input-number/useImplicitNumberRangeValidator",["require","exports","preact/hooks","ojs/ojvalidator-numberrange"],(function(require,e,t,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useImplicitNumberRangeValidator=void 0,e.useImplicitNumberRangeValidator=function({converter:e,max:n,min:r,numberRangeExactMessageDetail:s,numberRangeOverflowMessageDetail:o,numberRangeUnderflowMessageDetail:i}){return(0,t.useMemo)((()=>void 0!==r||void 0!==n?new a({converter:e,max:n,min:r,messageDetail:{exact:s,rangeOverflow:o,rangeUnderflow:i}}):null),[e,r,n])}})),define("oj-c/input-number/stepBasisUtils",["require","exports"],(function(require,e){"use strict";function t(e,t,a,n,r,s){let o=null!=s?s:n;null==o&&(o=0);try{a=parseFloat(a.toFixed(0))}catch(e){e instanceof TypeError&&(a=+a)}let i=a-o,l=Math.round(i/t)*t;l=parseFloat(l.toFixed(0));let u;if(l===i?u=a+e:(i=e<0?Math.ceil(i/t)*t:Math.floor(i/t)*t,u=o+i+e),u=parseFloat(u.toFixed(0)),null!=s&&u<s)return s;if(null!=r&&u>r){let e=Math.floor((r-o)/t)*t+o;return e=parseFloat(e.toFixed(0)),e}return u}function a(e){const t=e.toString(),a=t.indexOf(".");return-1===a?0:t.length-a-1}Object.defineProperty(e,"__esModule",{value:!0}),e.determineSteppedValue=void 0,e.determineSteppedValue=function(e,n,r,s,o,i){const l=function(e,t,n){let r=a(e);null!=n&&(r=Math.max(r,a(n)));null!=t&&(r=Math.max(r,a(t)));return r}(n,s,i);if(l>0){const a=Math.pow(10,l),u=void 0!==i?Math.round(i*a):i,d=null!=o?Math.round(o*a):o,c=Math.round(n*a);return t(Math.round(e*a),c,Math.round(r*a),null!=s?Math.round(s*a):s,d,u)/a}return t(e,n,r,s,o,i)}})),define("oj-c/input-number/useNumberInputTextPreact",["require","exports","oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue","oj-c/editable-value/UNSAFE_useValidators/useValidators","./useImplicitNumberConverter","./useImplicitNumberRangeValidator","preact/hooks","oj-c/editable-value/utils/utils","./stepBasisUtils"],(function(require,e,t,a,n,r,s,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useNumberInputTextPreact=void 0,e.useNumberInputTextPreact=function({autocomplete:e="on",autofocus:l,converter:u,disabled:d,displayOptions:c,inputPrefix:p,inputSuffix:m,labelEdge:v,labelHint:f,labelStartWidth:g,max:b,messagesCustom:y,min:V,numberRangeExactMessageDetail:C,numberRangeOverflowMessageDetail:h,numberRangeUnderflowMessageDetail:S,placeholder:M,readonly:E,required:A,requiredMessageDetail:x,step:_,stepperVariant:N,textAlign:j,userAssistanceDensity:F,validators:D,value:R,virtualKeyboard:w,onMessagesCustomChanged:k,onRawValueChanged:U,onTransientValueChanged:I,onValidChanged:O,onValueChanged:L,...P},q){const T=(0,o.treatNull)(V),H=(0,o.treatNull)(b),B=(0,n.useImplicitNumberConverter)({converter:u}),W=(0,r.useImplicitNumberRangeValidator)({converter:B,max:H,min:T,numberRangeExactMessageDetail:C,numberRangeOverflowMessageDetail:h,numberRangeUnderflowMessageDetail:S}),{onCommitValue:z,format:K,normalizeAndParseValue:$,methods:G,textFieldProps:Y,value:J,setValue:Q,displayValue:X,setDisplayValue:Z,setTransientValue:ee}=(0,t.useEditableValue)({ariaDescribedBy:P["aria-describedby"],converter:B,disabled:d,displayOptions:c,implicitComponentValidator:W,messagesCustom:y,readonly:E,required:A,requiredMessageDetail:x,validators:D,value:R,addBusyState:q,onMessagesCustomChanged:k,onRawValueChanged:U,onTransientValueChanged:I,onValidChanged:O,onValueChanged:L}),te=void 0!==T,ae=void 0!==H,ne=(0,s.useRef)(!1),re=(0,s.useRef)(new Array),se=(0,s.useRef)(X),oe=(0,s.useRef)((0,o.treatNull)(R));R!==J&&(oe.current=(0,o.treatNull)(R));const[ie,le]=(0,s.useState)((0,o.treatNull)(J)),[ue,de]=(0,s.useState)(J);J!==ue&&(de(J),le((0,o.treatNull)(J)),ee(J));const[ce,pe]=(0,s.useState)(!1);se.current=X;const me=(0,s.useCallback)((async({value:e})=>{pe(!1);const t=$(e),n=t;if("symbol"==typeof t)return void le(void 0);if(await z(n)===a.ValidationResult.VALID){const e=K(n);Z(e)}else le(n)}),[K,$,z]),ve=(0,s.useCallback)((({value:e})=>{Z(e??""),pe(!0)}),[]),fe={...Y,onCommit:me,onInput:ve},ge=(0,s.useCallback)((async(e,t)=>{if(void 0===_||ne.current)return;const n=se.current||"0",r=$(n);if("symbol"==typeof r)return;const s=r;let o;if(void 0!==e){const t="increase"===e?_:-1*_;o=(0,i.determineSteppedValue)(t,_,s,oe.current,H,T)}else o=s;ne.current=!0;const l=K(o);Z(l),se.current=l;const u=await z(o,t),d=!1===t,c=t&&u===a.ValidationResult.VALID;d&&u===a.ValidationResult.VALID&&ee(o),c||le(o),ne.current=!1}),[J,X,K,$,z]),be=(0,s.useCallback)((async e=>{if(await ge(e,!0),re.current.length>0){const e=re.current.shift();be(e)}}),[ge]),ye=(0,s.useCallback)((async({direction:e})=>{ne.current?re.current.push(e):be(e)}),[be]),Ve=(0,s.useCallback)((async({direction:e})=>{re.current=[],ge(e,!1)}),[ge]),Ce=(0,s.useCallback)((async()=>{const e=$(se.current),t=e;"symbol"!=typeof e&&await z(t)}),[z,$]),he=function(e,t,a,n){if(!e)return""!==t?t:void 0;let r;a&&(r=n(a));return""===r||null===r?void 0:r}(ce,X,ie,K);return{value:J,setValue:Q,methods:G,inputNumberProps:{"aria-valuemax":H,"aria-valuemin":T,"aria-valuenow":ie??void 0,"aria-valuetext":he,autoComplete:e,autoFocus:l,hasSteppers:void 0!==_&&_>0,isDisabled:d,isReadonly:E,isRequired:A,isRequiredShown:A&&("compact"===F||void 0===(0,o.treatNull)(J)),label:f,labelEdge:v,labelStartWidth:g,stepperVariant:N,onSpin:_?Ve:void 0,onSpinComplete:_?Ce:void 0,onStep:_?ye:void 0,placeholder:M,prefix:p,suffix:m,isStepDownDisabled:d||te&&(void 0!==ie&&ie<=T||""===X&&0===T),isStepUpDisabled:d||ae&&(void 0!==ie&&ie>=H||""===X&&0===H),textAlign:j,userAssistanceDensity:F,virtualKeyboard:w,...fe}}}})),define("oj-c/input-number/input-number",["require","exports","preact/jsx-runtime","@oracle/oraclejet-preact/translationBundle","@oracle/oraclejet-preact/hooks/UNSAFE_useFormContext","oj-c/hooks/UNSAFE_useMergedFormContext/useMergedFormContext","@oracle/oraclejet-preact/hooks/UNSAFE_useFormVariantContext","@oracle/oraclejet-preact/hooks/UNSAFE_useTabbableMode","@oracle/oraclejet-preact/UNSAFE_NumberInputText","oj-c/editable-value/UNSAFE_useAssistiveText/useAssistiveText","ojs/ojcontext","ojs/ojvcomponent","preact/compat","preact/hooks","./useNumberInputTextPreact","@oracle/oraclejet-preact/utils/UNSAFE_styles/Layout","css!oj-c/input-number/input-number-styles.css"],(function(require,e,t,a,n,r,s,o,i,l,u,d,c,p,m,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputNumber=void 0;const f={converterHint:"display",messages:"display",validatorHint:"display"},g={instruction:""},b={definition:"",source:""},y=[],V=[];e.InputNumber=(0,d.registerCustomElement)("oj-c-input-number",(0,c.forwardRef)((({autocomplete:e="on",columnSpan:a=1,converter:o=null,containerReadonly:c,disabled:C=!1,displayOptions:h=f,help:S=g,helpHints:M=b,id:E,labelWrapping:A,messagesCustom:x=y,readonly:_,required:N=!1,stepperVariant:j="directional",userAssistanceDensity:F,validators:D=V,virtualKeyboard:R="auto",value:w=null,...k},U)=>{const I=(0,p.useRef)(),O=(0,p.useRef)(),L=(0,p.useCallback)(((e="InputNumber: busyState")=>I.current?u.getContext(I.current).getBusyContext().addBusyState({description:`oj-c-input-number id=${E} is ${e}`}):()=>{}),[E]),{containerProps:P,uadValue:q,readonlyValue:T}=(0,r.useMergedFormContext)({propContainerReadonly:c,propLabelWrapping:A,propReadonly:_,propUserAssistanceDensity:F}),{inputNumberProps:H,methods:B}=(0,m.useNumberInputTextPreact)({autocomplete:e,converter:o,disabled:C,displayOptions:h,messagesCustom:x,readonly:T,required:N,stepperVariant:j,userAssistanceDensity:q,validators:D,virtualKeyboard:R,value:w,...k},L);(0,p.useImperativeHandle)(U,(()=>({blur:()=>O.current?.blur(),focus:()=>O.current?.focus(),...B})),[B]);const W=(0,l.useAssistiveText)({displayOptions:h,help:S,helpHints:M,userAssistanceDensity:H.userAssistanceDensity,validators:D}),z=(0,s.useFormVariantContext)();if(void 0!==k.step&&k.step<0)throw new Error("step must be a positive number");if(null!=k.min&&null!=k.max&&k.max<k.min)throw new Error("max cannot be less than min");return(0,t.jsx)(d.Root,{id:E,ref:I,class:v.layoutSpanStyles.layoutSpanColumn[a],children:(0,t.jsx)(n.FormContext.Provider,{value:P,children:(0,t.jsx)(i.NumberInputText,{ref:O,...W,...H,variant:z})})})})),"InputNumber",{properties:{autocomplete:{type:"string"},columnSpan:{type:"number"},containerReadonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},converter:{type:"object|null"},disabled:{type:"boolean"},displayOptions:{type:"object",properties:{converterHint:{type:"string",enumValues:["none","display"]},messages:{type:"string",enumValues:["none","display"]},validatorHint:{type:"string",enumValues:["none","display"]}}},help:{type:"object",properties:{instruction:{type:"string"}}},helpHints:{type:"object",properties:{definition:{type:"string"},source:{type:"string"},sourceText:{type:"string"}}},inputPrefix:{type:"string"},inputSuffix:{type:"string"},labelEdge:{type:"string",enumValues:["none","start","top","inside"],binding:{consume:{name:"containerLabelEdge"}}},labelHint:{type:"string"},labelStartWidth:{type:"number|string",binding:{consume:{name:"labelWidth"}}},labelWrapping:{type:"string",enumValues:["truncate","wrap"],binding:{consume:{name:"labelWrapping"}}},max:{type:"number|null"},min:{type:"number|null"},messagesCustom:{type:"Array<object>",writeback:!0},numberRangeExactMessageDetail:{type:"string"},numberRangeOverflowMessageDetail:{type:"string"},numberRangeUnderflowMessageDetail:{type:"string"},placeholder:{type:"string"},readonly:{type:"boolean",binding:{consume:{name:"containerReadonly"}}},required:{type:"boolean"},requiredMessageDetail:{type:"string"},step:{type:"number"},stepperVariant:{type:"string",enumValues:["directional","quantitative"]},textAlign:{type:"string",enumValues:["end","start","right"]},userAssistanceDensity:{type:"string",enumValues:["compact","reflow","efficient"],binding:{consume:{name:"containerUserAssistanceDensity"}}},validators:{type:"Array<object>|null"},value:{type:"number|null",writeback:!0},virtualKeyboard:{type:"string",enumValues:["number","auto","text"]},rawValue:{type:"string",readOnly:!0,writeback:!0},transientValue:{type:"number",readOnly:!0,writeback:!0},valid:{type:"string",enumValues:["pending","valid","invalidHidden","invalidShown"],readOnly:!0,writeback:!0}},extension:{_WRITEBACK_PROPS:["messagesCustom","rawValue","transientValue","valid","value"],_READ_ONLY_PROPS:["rawValue","transientValue","valid"],_OBSERVED_GLOBAL_PROPS:["aria-describedby","id","autofocus"]},methods:{blur:{},focus:{},showMessages:{},reset:{},validate:{}}},{autocomplete:"on",columnSpan:1,converter:null,disabled:!1,displayOptions:{converterHint:"display",messages:"display",validatorHint:"display"},help:{instruction:""},helpHints:{definition:"",source:""},messagesCustom:[],required:!1,stepperVariant:"directional",validators:[],virtualKeyboard:"auto",value:null},{"@oracle/oraclejet-preact":a.default},{consume:[s.FormVariantContext,o.TabbableModeContext]})})),define("oj-c/input-number",["require","exports","oj-c/input-number/input-number"],(function(require,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.InputNumber=void 0,Object.defineProperty(e,"InputNumber",{enumerable:!0,get:function(){return t.InputNumber}})}));
//# sourceMappingURL=input-number.js.map