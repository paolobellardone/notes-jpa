define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useLegendLayout-bd3a8ed1', './mergeProps-bae345c4', './LegendUtils-779781c9', './useItemFocus-d6cc7be4', './Flex-0052275f', './UNSAFE_Legend/themes/LegendStyles.css', './useCssVars-f196ea65', './classNames-49c3ba27', './useTestId-dfceb92d'], (function(e,t,n,o,i,s,d,l,r,a,c,m){"use strict";function I(e,t){const{sectionIdx:n,itemIdx:o}=e;if(-1==n&&-1==o){const e=t[t.length-1].items.length;return t[t.length-1].items[e-1]}return t[n].items[o]}function g(e){return{getItem:t=>I(t,e),getDetailFromInfo:t=>{if(!t)return{itemId:void 0,sectionId:void 0};const n=I(t,e),o=e[t.sectionIdx].id;return{itemId:n.id,sectionId:o}},getPrevItemInfo:t=>function(e,t){let{itemIdx:n,sectionIdx:o}=e;return-1==o&&-1==n&&(n=t[t.length-1].items.length-1,o=t.length-1),n-=1,n<0&&(0===o?n=0:(n=t[o-1].items.length-1,o-=1)),{itemIdx:n,sectionIdx:o}}(t,e),getNextItemInfo:t=>function(e,t){let{itemIdx:n,sectionIdx:o}=e;return-1==o&&-1==n?{itemIdx:t[t.length-1].items.length-1,sectionIdx:t.length-1}:(n+=1,n>=t[o].items.length&&(o===t.length-1?n=e.itemIdx:(o+=1,n=0)),{itemIdx:n,sectionIdx:o})}(t,e)}}e.SectionalLegend=function({orientation:e="horizontal",sectionTitleHAlign:I="start",sections:u,isReadOnly:f=!0,onItemAction:x,onInput:h,testId:p,...y}){const F=m.useTestId(p),S=n.useRef(null),v=n.useRef(),{resolvedVars:L,cssContent:R}=a.useCssVars(s.legendVars),{getItem:T,getDetailFromInfo:b,getPrevItemInfo:W,getNextItemInfo:P}=g(u),j=s.getLegendTextStyle({fontStyle:y.textFontStyle,fontSize:y.textFontSize?.toString(),fontWeight:y.textFontWeight?.toString(),fontFamily:y.textFontFamily},L),{textMeasureContent:w,layoutInfo:C}=o.useLegendLayout({rootRef:S,rootDimsRef:v,resolvedVars:L,sections:u,orientation:e,legendFontStylesObj:j,symbolWidth:y.symbolWidth}),{focusedItemInfo:D,hoveredItemInfo:z,...N}=o.useEvents(!f,null!=y.hiddenIds,b,W,P,x,h),{focusedItemRef:V}=d.useItemFocus(D),A=s.getDatatipText(u,T,D,z),{tooltipContent:B,tooltipProps:O}=o.useLegendTooltip({text:A,rootDimsRef:v,focusedItemInfo:D,focusedItemRef:V}),E=s.getAriaProps(f,y["aria-label"],y.hiddenIds),U=i.mergeProps(N,O),k={fontFamily:y.sectionTitleFontFamily,fontSize:y.sectionTitleFontSize,color:y.sectionTitleColor,fontStyle:y.sectionTitleFontStyle,fontWeight:y.sectionTitleFontWeight,textDecoration:y.sectionTitleTextDecoration},{sectionalLegendBaseStyles:G,renderedLegendStyle:H,preRenderedLegendStyle:M}=r.styles,_="horizontal"===e,q="vertical"===e||!!C;return t.jsxs("div",{ref:S,tabIndex:f?void 0:0,role:"application",class:c.classNames([G,q?H:M]),...F,...E,...U,children:[q?t.jsx(l.Flex,{direction:_?"row":"column",wrap:"wrap",gap:"4x",children:u.map(((n,i)=>{const d=f?"":s.getRandomId(),r=!!C&&C.isWrapped,a=!_||r?"column":"row",c=!_||r?"start":"center",{itemsPerCol:m,itemsPerRow:g}=s.getGridNums(n.items.length,C);return t.jsxs(l.Flex,{align:c,direction:a,maxWidth:"100%",justify:"start",wrap:"wrap",children:[t.jsx(o.LegendText,{text:n.title,...k,type:"title",id:d,align:I}),t.jsx(o.BaseLegend,{...y,focusedItemRef:V,labelledBy:d,sectionIdx:i,items:n.items,orientation:e,itemsPerRow:g,itemsPerCol:m,itemWidth:C?.isWrapped?C?.maxItemWidth:void 0,isReadOnly:f,focusedItemInfo:D,hoveredItemInfo:z,activeId:N["aria-activedescendant"]})]})}))}):null,B,w,R]})}}));
//# sourceMappingURL=SectionalLegend-4f948041.js.map
