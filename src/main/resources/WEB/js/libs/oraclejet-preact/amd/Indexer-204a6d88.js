define(['exports', 'preact/jsx-runtime', 'preact', 'preact/hooks', './Flex-db3ddadb', './mergeProps-bcfa6a92', './useSingleSelection-c1bd8b03', './useCurrentKey-26170e5e', './useCollectionFocusRing-64636529', './collectionUtils-6740111c', './useId-c9578d26', './useTranslationBundle-20bfc0f3', './HiddenAccessible-037ef42d', './Collection-46cfa244', './classNames-08d99695', 'preact/compat', './useComponentTheme-5aa41a8f', './UNSAFE_Indexer/themes/redwood/IndexerTheme', './useTestId-f3b8b319'], (function(e,t,s,n,r,o,a,c,l,i,u,d,y,f,x,k,b,h,j){"use strict";const m=Object.freeze({key:"__others__",label:"#"}),v="[data-oj-key]",T=k.forwardRef(((e,s)=>{const n=d.useTranslationBundle("@oracle/oraclejet-preact"),{context:r,selectedKey:o}=e,a=r.data.key===o,c=R(e,s),{classes:l}=b.useComponentTheme(h.IndexerRedwoodTheme,{focused:c.ref&&c.isFocusRingVisible?"isFocused":"notFocused",disabled:r.data.isDisabled?"isDisabled":"notDisabled",selected:a?"isSelected":"notSelected"}),i=x.classNames([l]),u=r.data.label||r.data.key,y=r.data.isDisabled?n.indexer_disabledLabel({SECTION:`${u}`}):`${u}`;return t.jsx("li",{...c,class:i,"data-oj-valuetext":y,"data-oj-disabled":r.data.isDisabled,children:r.data.label||r.data.key})}));function R({context:e,currentKey:t,valueNow:s,isFocusRingVisible:n},r){return{...e.data.key===t&&{ref:r},key:e.data.key,"data-oj-key":e.data.key,"data-oj-key-type":typeof e.data.key,"data-oj-valuenow":s,isFocusRingVisible:!!n}}const g=k.forwardRef((({lastValueNow:e,...n},r)=>{const o={...n,ref:r};return t.jsxs(s.Fragment,{children:[t.jsx(T,{...o}),t.jsx(p,{...o,ref:r,context:{index:-1,data:m},valueNow:e})]})})),p=k.forwardRef(((e,s)=>{const{context:n,selectedKey:r}=e,o=R(e,s),a=n.data.key===r,{classes:c}=b.useComponentTheme(h.IndexerRedwoodTheme,{focused:o.ref&&o.isFocusRingVisible?"isFocused":"notFocused",selected:a?"isSelected":"notSelected"}),l=x.classNames([c]),i=m.label;return t.jsx("li",{...o,class:l,"data-oj-valuetext":i,children:n.data.label})})),w=k.forwardRef(((e,s)=>{const n=d.useTranslationBundle("@oracle/oraclejet-preact"),{context:o,sections:a}=e,c=R(e,s),{from:l,to:i}=F(e),{classes:u,styles:{dotStyle:y}}=b.useComponentTheme(h.IndexerRedwoodTheme,{focused:c.ref&&c.isFocusRingVisible?"isFocused":"notFocused"});if(!I(o.index,l,i))return null;const f=a[l].label||a[l].key,k=a[i].label||a[i].key,j=x.classNames([u]),m=n.indexer_separatorLabel({FROM_SECTION:`${f}`,TO_SECTION:`${k}`});return t.jsx("li",{...c,class:j,"data-oj-valuetext":m,children:t.jsx(r.Flex,{align:"center",justify:"center",children:t.jsx("div",{class:y})})})}));function F({context:e,sectionsPerTruncation:t,last:s}){const n=e.index-e.index%t+1;let r=n+t-2;return r=r>=s?s-1:r,{from:n,to:r}}function I(e,t,s){return e===Math.floor((t+s)/2)}const S=[{key:"A"},{key:"B"},{key:"C"},{key:"D"},{key:"E"},{key:"F"},{key:"G"},{key:"H"},{key:"I"},{key:"J"},{key:"K"},{key:"L"},{key:"M"},{key:"N"},{key:"O"},{key:"P"},{key:"Q"},{key:"R"},{key:"S"},{key:"T"},{key:"U"},{key:"V"},{key:"W"},{key:"X"},{key:"Y"},{key:"Z"}];const C=(e,t,s)=>e===t.current?void 0===s?null:s:i.keyExtractor(e,v),N=(e,t,s)=>{if(e.value===m.key)t({value:m.key});else{t({value:s.find((t=>t.key===e.value)).key})}},E=(e,t,s,n,r,o,a)=>{if(0===e||0===t)return;const c=e/t,l=s-1;if(c<2)r!==l&&(o(l),a(n));else if(c>s||s-c<.01)r>1&&(o(1),a(n));else{const e=_(c,l);e!==r&&e<s&&(o(e),a(n))}},_=(e,t)=>{e-=2,e/=2;const s=Math.round(t/e)+1,n=t%s,r=Math.floor(t/s)+(n>1?1:0);let o=t-(r-1)*s,a=s;for(;a>o;)a-=1,o=t-(r-1)*a;return a!=s&&(a+=1),a};function K(e){return i.isMobile()?e.indexer_touchInstructionText():e.indexer_keyboardInstructionText()}e.Indexer=function({sections:e=S,value:x,onCommit:k=(()=>{}),testId:m}){const R=n.useRef(null),p=n.useRef(null),_=s.createRef(),[V,O]=n.useState(e[0]?.key),[A,P]=n.useState(-1),D=n.useRef(-1),H=n.useRef(0),M=u.useId(),[B,U]=l.useCollectionFocusRing(R,["ArrowUp","ArrowDown"]),{currentKeyProps:$}=c.useCurrentKey((e=>i.keyExtractor(e,v)),!0,i.getPrevNextKey(R.current,V,!0,v),i.getPrevNextKey(R.current,V,!1,v),void 0,void 0,V,(e=>O(e.value))),{selectionProps:L}=a.useSingleSelection((e=>C(e,p,V)),void 0,(t=>N(t,k,e))),z=n.useCallback((t=>{for(const s of t)E(s.contentRect.height,H.current,e.length,e[0]?.key,A,P,O)}),[e,A]);n.useEffect((()=>{p.current&&(p.current.setAttribute("aria-valuemax",D.current+1+""),p.current.setAttribute("aria-valuetext",_.current?.dataset?.ojValuetext||""),p.current.setAttribute("aria-valuenow",_.current?.dataset?.ojValuenow||"")),D.current=-1})),n.useEffect((()=>{const t=R.current;t&&(H.current=t.querySelector("li")?.offsetHeight||0,E(t.offsetHeight,H.current,e.length,e[0]?.key,A,P,O))}),[e,A]),n.useEffect((()=>{const e=R.current;if(e){const t=new ResizeObserver((e=>{z(e)}));return t.observe(e),()=>{t.unobserve(e)}}}),[A,z]);const q=d.useTranslationBundle("@oracle/oraclejet-preact"),{styles:{baseStyle:G,innerStyle:J}}=b.useComponentTheme(h.IndexerRedwoodTheme),Q=j.useTestId(m);return t.jsxs("div",{ref:R,class:G,...Q,children:[t.jsx(r.Flex,{align:"center",width:"6x",height:"100%",children:t.jsx("ul",{...o.mergeProps($,U,L),ref:p,tabIndex:0,"aria-label":"Indexer","aria-orientation":"vertical","aria-valuemin":0,"aria-describedby":M,role:"slider",class:J,children:t.jsx(f.Collection,{items:e,children:s=>{const n=e.length-1;D.current+=1;const r={context:s,ref:_,currentKey:V,selectedKey:x,valueNow:D.current,isFocusRingVisible:!!B};if(s.index===n)return t.jsx(g,{...r,lastValueNow:D.current+1});if(A<=1||s.index%A==0)return t.jsx(T,{...r});const o={...r,sectionsPerTruncation:A,last:n,sections:e};return function(e){const{from:t,to:s}=F(e);return I(e.context.index,t,s)}(o)?t.jsx(w,{...o}):(D.current-=1,null)}})})}),t.jsx(y.HiddenAccessible,{children:t.jsx("span",{id:M,children:K(q)})})]})},e.SECTION_OTHERS=m}));
//# sourceMappingURL=Indexer-204a6d88.js.map