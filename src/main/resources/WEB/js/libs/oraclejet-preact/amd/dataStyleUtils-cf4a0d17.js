define(['exports', './colorUtils-f7626960', './accUtils-e8b80434', './PathUtils-e255fa4e', './Common/themes/themeContract.css', './utils-225c0e9a', './layoutUtils-30a7103a'], (function(e,r,t,n,o,u,s){"use strict";function a(e,r,t){const{seriesIndex:n,groupIndex:o}=e,u=o+1;if(!(u>r))return t(n,u)?{seriesIndex:n,groupIndex:u}:a({seriesIndex:n,groupIndex:u},r,t)}function l(e,r,t){const{seriesIndex:n,groupIndex:o}=e,u=o-1;if(!(u<r)){if(t(n,u))return{seriesIndex:n,groupIndex:u};if(0!==u)return l({seriesIndex:n,groupIndex:u},r,t)}}function i(e,r){const{seriesIndex:t,groupIndex:n}=e,o=t-1;if(!(o<0))return r(o,n)?{seriesIndex:o,groupIndex:n}:i({seriesIndex:o,groupIndex:n},r)}function c(e,r,t){const{seriesIndex:n,groupIndex:o}=e,u=n+1;if(!(u>=r))return t(u,o)?{seriesIndex:u,groupIndex:o}:c({seriesIndex:u,groupIndex:o},r,t)}function g(e,r,t,n){const{groupIndex:o,seriesIndex:u}=e,s=t(u,o);if(!s)return e;let a=Number.MAX_VALUE,l=u;for(let e=0;e<r;e++){const r=t(e,o)?.value;!r||r<s.value||!n(e,o)||u===e||r<a&&(a=r,l=e)}return{seriesIndex:l,groupIndex:o}}function d(e,r,t,n){const{groupIndex:o,seriesIndex:u}=e,s=t(u,o);if(!s)return e;let a=Number.MIN_VALUE,l=u;for(let e=0;e<r;e++){const r=t(e,o)?.value;!r||r>s.value||!n(e,o)||u===e||r>a&&(a=r,l=e)}return{seriesIndex:l,groupIndex:o}}function p(){return["square","circle","diamond","plus","triangleDown","triangleUp"]}e.getCmdsForArea=function(e,r,t,o,u){return"straight"===t?function(e,r){let t;return e.length>0&&(t=e.map(((e,r)=>`${0===r?"M":"L"} ${e[0]} ${e[1]}`)).join(" ")+[...r].reverse().map((e=>`L ${e[0]} ${e[1]}`)).join(" ")+"Z"),t}(e,r):function(e,r,t,o,u){let s;return e.length>0&&(s=u?n.curveThroughPoints(e,!1,o)+" "+n.curveThroughPoints([...r].reverse(),!0,o)+" Z":n.curveThroughPoints(e,t,o)+[...r].reverse().map((e=>`L ${e[0]} ${e[1]}`)).join(" ")+"Z"),s}(e,r,!1,o?"mh":"mv",u)},e.getCmdsForLine=function(e,r,t){return"straight"===r?e.join(" "):n.curveThroughPoints(e,!1,t?"mh":"mv")},e.getCumulativeSeries=function(e,r,t,n,o){const u=[];for(let s=0;s<e;s+=1){const e=[],a=u[s-1];for(let u=0;u<r;u+=1){const r=t(s,u);!r||n?.has(r.id)||o&&r.value<=0||(e[u]=s?r.value+a[u]:r.value)}u.push(e)}return u},e.getItemAriaLabel=function(e,r,t,n,o,u,s,a){const l=e.chart_labelSeries(),i=e.chart_labelGroup(),c=e.chart_labelValue(),g=a||`${l}: ${r}; ${i}: ${t}; ${c}: ${n};`,d=e.dataVisualization_stateSelected(),p=e.dataVisualization_stateUnselected(),I=e.viz_drillable();return[g,o?u?d:p:"",s?I:""].filter(Boolean).join(" ")},e.getItemColor=function(e,t,n,o){const u=o(e,t);if(u?.color)return u.color;if(u.markerColor)return u.markerColor;const s=n[e],a=r.getColorRamp();return s.color||s.lineColor||s.areaColor||a[e%a.length]},e.getLineAreaChartNavUtil=function(e,r,t,n,o,u,s){const p=(r,t)=>{const n=e(r,t);return Boolean(n)};return(I,f)=>{let m;const x={groupIndex:I.groupIndex,seriesIndex:I.seriesIndex};return x.groupIndex<t?(x.groupIndex=t,x):x.groupIndex>n?(x.groupIndex=n,x):(m="ArrowLeft"===f?s?u?g(x,r,e,p):d(x,r,e,p):u?a(x,n,p):l(x,t,p):"ArrowRight"===f?s?u?d(x,r,e,p):g(x,r,e,p):u?l(x,t,p):a(x,n,p):"ArrowDown"===f?s?a(x,n,p):o?i(x,p):d(x,r,e,p):s?l(x,t,p):o?c(x,r,p):g(x,r,e,p),m||x)}},e.getLineAreaSegments=function(e,r,t,n,o,u,a,l,i,c,g){const d=[];let p=[];for(let I=n;I<o+1;I+=1){const n=t[I];if(null==n||a&&n<=0){d.push(p),p=[];continue}const f=u?e.transform(n):s.getGroupCenterCoord(l[I],I,r,c(i,I),g),m=u?s.getGroupCenterCoord(l[I],I,r,c(i,I),g):e.transform(n);p.push([f,m]),I===o&&d.push(p)}return d},e.getMarkerFillAndStroke=function(e,r,t,n,s,a,l){let i,c,g;return r?s?e?(i=l||a,g=u.rgb(o.colorSchemeVars.palette.neutral[130]),c=u.rgb(o.colorSchemeVars.palette.neutral[0])):(i=u.rgb(o.colorSchemeVars.palette.neutral[0]),c=t||n?l||a:u.rgb(o.colorSchemeVars.palette.neutral[130])):t||n?(c=l||a,i=u.rgb(o.colorSchemeVars.palette.neutral[0])):e?(i=l||a,c=u.rgb(o.colorSchemeVars.palette.neutral[0])):(i=u.rgba(o.colorSchemeVars.palette.neutral[0],0),c=u.rgba(o.colorSchemeVars.palette.neutral[0],0)):e?(i=l||a,c=u.rgb(o.colorSchemeVars.palette.neutral[0])):(c=n?l||a:u.rgba(o.colorSchemeVars.palette.neutral[0],0),i=u.rgba(o.colorSchemeVars.palette.neutral[0],0)),{fill:i,stroke:c,outerStroke:g}},e.getMarkerType=function(e,r,t,n){if("bar"===t)return"circle";const o=n(e,r);if(o.markerType)return o.markerType;const u=["square","circle","diamond","plus","triangleDown","triangleUp"];return u[e%u.length]},e.getMarkers=p,e.getNextItemInGroup=c,e.getNextItemInSeries=a,e.getPrevItemInGroup=i,e.getPrevItemInSeries=l,e.getSeriesData=function(e,r,t,n,o){const u=[];for(let s=0;s<e;s+=1){const e=[];for(let u=0;u<r;u+=1){const r=t(s,u);!r||n?.has(r.id)||o&&r.value<=0||(e[u]=r.value)}u.push(e)}return u}}));
//# sourceMappingURL=dataStyleUtils-cf4a0d17.js.map