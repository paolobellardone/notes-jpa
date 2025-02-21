define(['exports', './accUtils-530bdb90', './colorUtils-a785c4c4', './useChartDnd-947ed9e4'], (function(e,r,n,o){"use strict";function t(e,r,n){const{seriesIndex:o,groupIndex:i}=e,s=i+1;if(!(s>r))return n(o,s)?{seriesIndex:o,groupIndex:s}:t({seriesIndex:o,groupIndex:s},r,n)}function i(e,r,n){const{seriesIndex:o,groupIndex:t}=e,s=t-1;if(!(s<r)){if(n(o,s))return{seriesIndex:o,groupIndex:s};if(0!==s)return i({seriesIndex:o,groupIndex:s},r,n)}}function s(e,r){const{seriesIndex:n,groupIndex:o}=e,t=n-1;if(!(t<0))return r(t,o)?{seriesIndex:t,groupIndex:o}:s({seriesIndex:t,groupIndex:o},r)}function u(e,r,n){const{seriesIndex:o,groupIndex:t}=e,i=o+1;if(!(i>=r))return n(i,t)?{seriesIndex:i,groupIndex:t}:u({seriesIndex:i,groupIndex:t},r,n)}function d(e,r,n,o){const t=e=>"value"in e&&void 0!==e.value?e.value:"y"in e&&void 0!==e.y?e.y:void 0,{groupIndex:i,seriesIndex:s}=e,u=n(s,i),d=t(u);if(!u||void 0===d)return e;let I=Number.MAX_VALUE,l=s;for(let e=0;e<r;e++){const r=n(e,i),u=void 0!==r?t(r):void 0;void 0===u||u<d||!o(e,i)||s===e||u<I&&(I=u,l=e)}return{seriesIndex:l,groupIndex:i}}function I(e,r,n,o){const t=e=>"value"in e&&void 0!==e.value?e.value:"y"in e&&void 0!==e.y?e.y:void 0,{groupIndex:i,seriesIndex:s}=e,u=n(s,i),d=t(u);if(!u||void 0===d)return e;let I=Number.MIN_VALUE,l=s;for(let e=0;e<r;e++){const r=n(e,i),u=void 0!==r?t(r):void 0;void 0===u||u>d||!o(e,i)||s===e||u>I&&(I=u,l=e)}return{seriesIndex:l,groupIndex:i}}e.getItemAriaLabel=function(e,n,o,t,i,s,u,d,I,l){const c=e.chart_labelSeries(),x=e.chart_labelGroup();let a="";if(d){a=`${e.chart_labelValue()}: ${d}`}else if(I&&l){a=`${e.chart_labelX()}: ${I}, ${e.chart_labelY()}: ${l}`}const g=u||`${c}: ${n}, ${x}: ${o}, ${a}`;return r.generateAriaLabel(e,g,{isSelected:t?i:void 0,isDrillable:s})},e.getItemColor=function(e,r,o,t){const i=t(e,r);if(i?.color)return i.color;if(i?.markerColor)return i.markerColor;const s=o[e],u=n.getColorRamp();return s.color||s.lineColor||s.areaColor||u[e%u.length]},e.getLineAreaChartNavUtil=function(e,r,n,o,l,c,x){const a=(r,n)=>{const o=e(r,n);return Boolean(o)};return(g,p)=>{let f;const v={groupIndex:g.groupIndex,seriesIndex:g.seriesIndex};return v.groupIndex<n?(v.groupIndex=n,v):v.groupIndex>o?(v.groupIndex=o,v):(f="ArrowLeft"===p?x?c?d(v,r,e,a):I(v,r,e,a):c?t(v,o,a):i(v,n,a):"ArrowRight"===p?x?c?I(v,r,e,a):d(v,r,e,a):c?i(v,n,a):t(v,o,a):"ArrowDown"===p?x?t(v,o,a):l?s(v,a):I(v,r,e,a):x?i(v,n,a):l?u(v,r,a):d(v,r,e,a),f||v)}},e.getMarkerType=function(e,r,n){const t=n(e,r);if(t?.markerType)return t.markerType;const i=o.getMarkers();return i[e%i.length]},e.getNextItemInGroup=u,e.getNextItemInSeries=t,e.getPrevItemInGroup=s,e.getPrevItemInSeries=i}));
//# sourceMappingURL=dataStyleUtils-7ba616b8.js.map
