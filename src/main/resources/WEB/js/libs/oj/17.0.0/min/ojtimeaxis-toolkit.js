/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojdvt-toolkit"],function(e,t){"use strict";class s{constructor(){this._dayInMillis=864e5,this._firstDayOfWeek=0}setFirstDayOfWeek(e){this._firstDayOfWeek=e}getFirstDayOfWeek(){return this._firstDayOfWeek}adjustDate(e,t){var s=new Date(e.getTime());if("weeks"===t){s.setHours(0,0,0,0);var i=(e.getDay()-this.getFirstDayOfWeek()+7)%7;i>0&&s.setDate(s.getDate()-i)}else if("months"===t)s.setDate(1),s.setHours(0,0,0,0);else if("days"===t)s.setHours(0,0,0,0);else if("hours"===t)s.setMinutes(0,0,0);else if("minutes"===t)s.setSeconds(0,0);else if("seconds"===t)s.setMilliseconds(0);else if("quarters"===t){var r=Math.floor(s.getMonth()/3);s.setDate(1),s.setHours(0,0,0,0),s.setMonth(3*r)}else"years"===t&&(s.setMonth(0),s.setDate(1),s.setHours(0,0,0,0));return s}getAdjacentDate(e,t,s){var i="next"===s?1:-1;if("seconds"===t)return new Date(e+1e3*i);if("minutes"===t)return new Date(e+6e4*i);if("hours"===t)return new Date(e+36e5*i);var r=new Date(e);return"days"===t?r.setDate(r.getDate()+1*i):"weeks"===t?r.setDate(r.getDate()+7*i):"months"===t?r.setMonth(r.getMonth()+1*i):"quarters"===t?r.setMonth(r.getMonth()+3*i):"years"===t?r.setFullYear(r.getFullYear()+1*i):r.setYear(r.getYear()+1*i),r}}class i extends t.BaseComponentDefaults{constructor(e){super({alta:{backgroundColor:"rgba(255,255,255,0)",borderColor:"#d9dfe3",separatorColor:"#bcc7d2",labelStyle:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA_12+"color: #333333;")}},e)}getNoCloneObject(){return{_secondaryAxis:!0,scale:!0,zoomOrder:!0,converter:!0,_resources:{converter:!0,converterVert:!0,defaultDateConverter:!0,defaultDateTimeConverter:!0}}}}class r{parse(e){this._startTime=new Date(e.start),this._endTime=new Date(e.end);var t=this.ParseRootAttributes();return t.inlineStyle=e.style,t.id=e.id,t.shortDesc=e.shortDesc,t.itemPosition=e._ip,t.customTimeScales=e._cts,t.customFormatScales=e._cfs,t.scale=e.scale,t.converter=e.converter,t.zoomOrder=e.zoomOrder?e.zoomOrder:null,t.orientation=e.orientation?e.orientation:"horizontal",t}ParseRootAttributes(){return{start:this._startTime.getTime(),end:this._endTime.getTime()}}}const n={DEFAULT_BORDER_WIDTH:1,DEFAULT_SEPARATOR_WIDTH:1,DEFAULT_INTERVAL_WIDTH:50,DEFAULT_INTERVAL_HEIGHT:21,DEFAULT_INTERVAL_PADDING:4,getAxisStyle:e=>{var t="",s=n.getBackgroudColor(e);return s&&(t=t+"background-color:"+s+";"),(s=n.getBorderColor(e))&&(t=t+"border-color:"+s+";"),(s=n.getBorderWidth())&&(t=t+"border-width:"+s+";"),t},getBackgroudColor:e=>e.backgroundColor,getBorderColor:e=>e.borderColor,getBorderWidth:()=>n.DEFAULT_BORDER_WIDTH,getAxisLabelStyle:e=>e.labelStyle,getSeparatorColor:e=>e.separatorColor,getAxisSeparatorStyle:e=>{var t="",s=n.getSeparatorColor(e);return s&&(t=t+"color:"+s+";"),t},getAxisClass:e=>e._resources?e._resources.axisClass:void 0,getAxisLabelClass:e=>e._resources?e._resources.axisLabelClass:void 0,getAxisSeparatorClass:e=>e._resources?e._resources.axisSeparatorClass:void 0},a={supportsTouch:()=>t.Agent.isTouchDevice(),getDatePosition:(e,t,s,i)=>{var r=(s-e)*i,n=t-e;return 0===r||0===n?0:r/n},getPositionDate:(e,t,s,i)=>{var r=s*(t-e);return 0===r||0===i?e:r/i+e}},o={renderTimeAxis:(e,s,i,r,n)=>{if(!e.hasValidOptions())return;const l=()=>{e.removeChildren(),o._renderBackground(e);const n=new t.Container(e.getCtx()),l=e.getViewportDates(e.getScale(),s,i),h=l.map(t=>({date:t,pos:a.getDatePosition(e._start,e._end,t.getTime(),e._contentLength)})),g=e.getDateLabelTexts(l,e.getScale()).slice(0,l.length-1),c=o._renderLabels(n,e,h,g);e._axis.addChild(n);const _=o._renderReferenceObjects(n,e,r,h,c);let d=l,m=!1;const u=e.Options._secondaryAxis;let T=u?u.getViewportDates(u.getScale(),s,i):[];if(u&&"alta"!==e.getCtx().getThemeBehavior()){const e=l,t=new Set(T.map(e=>e.getTime())),r=new Set(e.map(e=>e.getTime()));m=0===T.filter(e=>e.getTime()>s&&e.getTime()<i&&!r.has(e.getTime())).length,d=m?e.filter(e=>!t.has(e.getTime())):e}const S=d.filter(e=>!_.has(e.getTime())).map(t=>({date:t,pos:a.getDatePosition(e._start,e._end,t.getTime(),e._contentLength)}));if(o._renderTicks(n,e,S),m){const t=T.filter(e=>!_.has(e.getTime())).map(t=>({date:t,pos:a.getDatePosition(e._start,e._end,t.getTime(),e._contentLength)}));o._renderTicks(n,u,t)}};n?e.__isRendering||(requestAnimationFrame(()=>{l(),e.__isRendering=!1}),e.__isRendering=!0):l()},_renderBackground:e=>{const s=e.getSize(),i=e.getCtx();e._axis&&e._axis.setClipPath(null);const r=new t.ClipPath;e.isVertical()?(e._axis=new t.Path(i,t.PathUtils.roundedRectangle(0,-e.getBorderWidth("top"),s,e.getAxisLength(),0,0,0,0),"axis"),r.addRect(0,0,s,e._contentLength)):(e._axis=new t.Path(i,t.PathUtils.roundedRectangle(-e.getBorderWidth("left"),0,e.getAxisLength(),s,0,0,0,0),"axis"),r.addRect(0,0,e._contentLength,s)),e._axis.setCSSStyle(e._axisStyle);const a=e._axis.getElem();let o=e._axisStyle.getStyle("background-color");o&&t.ToolkitUtils.setAttrNullNS(a,"fill",o),o=e._axisStyle.getStyle("border-color"),o&&t.ToolkitUtils.setAttrNullNS(a,"stroke",o),o=e._axisStyle.getStyle("border-width"),o&&t.ToolkitUtils.setAttrNullNS(a,"stroke-width",o),e._axis.setPixelHinting(!0),e._axis.setClipPath(r),e.addChild(e._axis);const l=n.getAxisClass(e.Options)||"";e._axis.getElem().setAttribute("class",l),e._axis.getElem().setAttribute("stroke-dasharray",e.calcStrokeDashArray())},_renderTicks:(e,s,i)=>{const r=s.getCtx(),a=t.Agent.isRightToLeft(r),o=s.isVertical()?s.getBorderWidth("left"):s.getBorderWidth("top"),l=o+s.getContentSize();let h="";for(let e=0;e<i.length;e++){let r=i[e].pos;s.isVertical()?h+=t.PathUtils.moveTo(o,r)+t.PathUtils.horizontalLineTo(l):a?(r=s._contentLength-r,e===i.length-1&&(r=Math.round(r)+.5),h+=t.PathUtils.moveTo(r,o)+t.PathUtils.verticalLineTo(l)):(0===e&&(r=Math.round(r)+.5),h+=t.PathUtils.moveTo(r,o)+t.PathUtils.verticalLineTo(l))}const g=new t.Path(s.getCtx(),h),c=new t.CSSStyle(n.getAxisSeparatorStyle(s.Options));g.setStroke(new t.Stroke(c.getStyle(t.CSSStyle.COLOR))),g.setPixelHinting(!0);const _=n.getAxisSeparatorClass(s.Options)||"";g.getElem().setAttribute("class",_),e.addChild(g)},_renderLabels:(e,s,i,r)=>{const a=s.getCtx(),o=s.isVertical()?s.getBorderWidth("left"):s.getBorderWidth("top"),l=o+s.getContentSize(),h=t.Agent.isRightToLeft(a),g=n.getAxisLabelStyle(s.Options),c=n.getAxisLabelClass(s.Options)||"",_=s.getScale(),d=s.Options._scaleLabelPosition[s.isTimeComponentScale(_)?_.name:_],m=s.Options._labelAlignment[s.isVertical()?"vertical":"horizontal"],u=[];for(let _=0;_<i.length-1;_++){const T=i[_].pos,S=i[_+1].pos,p=new t.OutputText(a,r[_],0,0);u.push(p),p.setCSSStyle(g),p.getElem().setAttribute("class",c);const D=!h||s.isVertical()?T+(S-T)/2:s._contentLength-(T+(S-T)/2),L=o+(l-o)/2;let f,v=s.isVertical()?D:L;if("start"===d)s.isVertical()?(f=L,p.alignCenter()):h?(f=s._contentLength-(T+n.DEFAULT_INTERVAL_PADDING),p.alignRight()):(f=T+n.DEFAULT_INTERVAL_PADDING,p.alignLeft());else f=s.isVertical()?L:D,p.alignCenter();if(p.setX(f),"top"===m)p.setY(o);else t.TextUtils.centerTextVertically(p,v);const x=s.getContentSize(),C=S-T,A=s.isVertical()?x:C,O=s.isVertical()?C:x;if(t.TextUtils.fitText(p,A,O,e),!s.isVertical())if(0===_&&i[_].date.getTime()<s._start){p.isTruncated()&&p.setTextString(p.getUntruncatedTextString());const i=p.getDimensions().w;let r;if("start"===d)r=S-Math.max(0,S-T-i-2*n.DEFAULT_INTERVAL_PADDING);else r=S-Math.max(0,(S-T-i)/2);const a=Math.max(0,r);h?(p.alignLeft(),p.setX(s._contentLength-a)):(p.alignRight(),p.setX(a));const o=t.TextUtils.fitText(p,r,O,e);if(p.isTruncated()&&o){const e=p.getTextString(),s=p.getUntruncatedTextString();if(e!==s){const e=p.getTextString().length-1,i=s.length,r=Math.max(0,i-e),n=t.OutputText.ELLIPSIS+s.substring(r,i);p.setTextString(n)}}}else if(_===i.length-2&&i[_+1].date.getTime()>s._end){let i,r;if(p.isTruncated()&&p.setTextString(p.getUntruncatedTextString()),"start"===d)i=s._contentLength-T-2*n.DEFAULT_INTERVAL_PADDING,r=T+n.DEFAULT_INTERVAL_PADDING;else{const e=p.getDimensions().w;i=s._contentLength-T-Math.max(0,(S-T-e)/2),r=Math.max(T,T+(S-T)/2-e/2)}h?(p.alignRight(),p.setX(s._contentLength-r)):(p.alignLeft(),p.setX(r)),t.TextUtils.fitText(p,i,O,e)}if(p.isTruncated()&&s.parentCompEventManager){const e=p.getUntruncatedTextString();s.parentCompEventManager.associate(p,new t.SimpleObjPeer(e))}}return u},_renderReferenceObjects:(e,s,i,r,o)=>{if(s.isVertical())return new Set;const l=s.getCtx(),h=t.Agent.isRightToLeft(l),g=0+s.getContentSize(),c=i.defaultStyleClass||"",_=n.getAxisLabelStyle(s.Options),d=n.getAxisLabelClass(s.Options)||"",m=s.Options._labelAlignment.horizontal,u=i.referenceObjects.filter(e=>{const t="area"!==e.type,s=null!=e.value&&!isNaN(new Date(e.value).getTime()),i=e.label&&""!==e.label.length;return t&&s&&i}),T=[];u.forEach(r=>{let o=a.getDatePosition(s._start,s._end,new Date(r.value).getTime(),s._contentLength);h&&(o=s._contentLength-o);const u=new t.Line(l,o,0,o,g),S=r.svgStyle,p=r.svgClassName||"";null!=S&&u.setStyle(S),u.setClassName(c+" "+p,!0),i.defaultStroke&&u.setStroke(i.defaultStroke),u.setPixelHinting(!0),e.addChild(u);const D=h?o-n.DEFAULT_INTERVAL_PADDING:o+n.DEFAULT_INTERVAL_PADDING,L=new t.OutputText(l,r.label,D,0);L.setCSSStyle(_),L.getElem().setAttribute("class",d);const f=window.getComputedStyle(u.getElem()).getPropertyValue("stroke");L.setStyle({fill:f}),h?L.alignRight():L.alignLeft();const v=0+(g-0)/2;if("top"===m)L.setY(0);else t.TextUtils.centerTextVertically(L,v);e.addChild(L),T.push(L)});const S=[];return T.forEach(e=>{const t=e.getDimensions();o.forEach(e=>{const s=e.getDimensions();t.intersects(s)&&e.removeFromParent()}),r.forEach(e=>{const i=h?s._contentLength-e.pos:e.pos;i>=t.x&&i<=t.x+t.w&&S.push(e.date.getTime())})}),new Set(S)}};class l extends t.BaseComponent{constructor(e,t,r){super(e,t,r),this._calendar=new s,this._borderWidth=n.DEFAULT_BORDER_WIDTH,this.setBorderVisibility(!1,!1,!1,!1),this._dateToIsoWithTimeZoneConverter=e.getLocaleHelpers().dateToIsoWithTimeZoneConverter,this.Defaults=new i(e)}SetOptions(e){this.Options=this.Defaults.calcOptions(e)}Parse(e){return this._parser=new r,this._parser.parse(e)}_applyParsedProperties(e){var t=e.orientation;this._isVertical=!(!t||"vertical"!==t),this.setIsVertical(this._isVertical),this._shortDesc=e.shortDesc,this._zoomOrder=e.zoomOrder?e.zoomOrder.slice().reverse():[e.scale],this._customTimeScales=e.customTimeScales,this._customFormatScales=e.customFormatScales,this._start=e.start,this._end=e.end,this._inlineStyle=e.inlineStyle,this._scale=e.scale,this._converter=e.converter,this.applyStyleValues()}setContentLength(e,t){null==t&&(t=this._canvasLength),this._contentLength=t<e?e:t}getAxisLength(){return this._axisLength}isRTL(){return t.Agent.isRightToLeft(this.getCtx())}isVertical(){return this._isVertical}render(e,t,s){var i=e&&null==e._viewStartTime,r=null==e;this.parentCompEventManager=r?null:e._eventManager,this.Width=t,this.Height=s,this._prepareCanvasViewport(),i&&this.getPreferredLength(e,this._canvasLength),this.setContentLength(this._canvasLength),this._setAxisDimensions();var n=e&&e._viewStartTime?e._viewStartTime:this._start,a=e&&e._viewEndTime?e._viewEndTime:this._end,l=e&&e._referenceObjects?e._referenceObjects:{referenceObjects:[]},h=e&&e._throttle||!1;o.renderTimeAxis(this,n,a,l,h),(i||r)&&this.RenderComplete()}hasValidOptions(){var e=this._scale&&(-1!==l.VALID_SCALES.indexOf(this._scale)||this.isTimeComponentScale(this._scale)),t=this._scale&&this._customTimeScales&&this._customTimeScales[this._scale],s=this._start&&this._end&&this._end>this._start;return(e||t)&&s}isTimeComponentScale(e){return null!=e.getNextDate&&null!=e.getPreviousDate&&null!=e.formatter&&null!=e.name}isEqualScale(e,t){return e===t||null!=e.name&&null!=t&&e.name===t.name}applyStyleValues(){this._axisStyle=new t.CSSStyle(n.getAxisStyle(this.Options)),this._axisStyle.parseInlineStyle(this._inlineStyle);var e=this._axisStyle.getBorderWidth(),s="border:"+2*e+"px;";this._axisStyle.parseInlineStyle(s),this.setBorderWidth(e)}_prepareCanvasViewport(){this._isVertical?(this._canvasLength=this.Height,this._canvasSize=this.Width):(this._canvasLength=this.Width,this._canvasSize=this.Height)}_setAxisDimensions(){null!==this._canvasSize&&this.setContentSize(this._canvasSize-this.getSizeBorderWidth()),this._axisLength=this._contentLength+this.getSizeBorderWidth()-n.DEFAULT_SEPARATOR_WIDTH}getPreferredLength(e,t){this.SetOptions(e),this._resources=this.Options._resources?this.Options._resources:[],this._locale=this.Options._locale?this.Options._locale:"en-US";var s=this._resources.firstDayOfWeek?this._resources.firstDayOfWeek:0;this._calendar.setFirstDayOfWeek(s),this._dateToIsoWithTimeZoneConverter||(this._dateToIsoWithTimeZoneConverter=this.getCtx().getLocaleHelpers().dateToIsoWithTimeZoneConverter);var i=this.Parse(this.Options);if(this._applyParsedProperties(i),this.hasValidOptions()){this.setConverter(this._converter),this._isVertical?this.setDefaultConverter(this._resources.converterVert):this.setDefaultConverter(this._resources.converter),this._zoomLevelLengths=this._zoomOrder.map(()=>0);var r=this._zoomOrder.map((e,t)=>t),n=this._isVertical?{type:"range",params:{startTime:this._start,endTime:this._end}}:{type:"sparse",params:{numSections:4,numIntervalsPerSection:10}};this._maxContentLength=t,this.updateDimensions(r,n,t),null!==this._canvasSize&&(this._zoomLevelLengths[this._zoomLevelOrder]=t)}return this._contentLength}updateDimensions(e,t,s){for(var i=0;i<e.length;i++){var r=e[i];if(r>=0&&r<this._zoomOrder.length){var n,a=this._zoomOrder[r];if(this.isEqualScale(a,this._scale)&&(this._zoomLevelOrder=r),"sparse"===t.type){n=this._sampleIntervals(a,t.params.numSections,t.params.numIntervalsPerSection);var o=Object.keys(n),l=o.reduce((e,t)=>e+(n[t]-t),0)/o.length,h=(this._end-this._start)/l;this._maxContentLength=Math.max(this._maxContentLength,h*s)}else{n={};for(var g=this.getViewportDates(a,t.params.startTime,t.params.endTime),c=0;c<g.length-1;c++)n[g[c].getTime()]=g[c+1].getTime();this._maxContentLength=Math.max(this._maxContentLength,Object.keys(n).length*s)}this._updateZoomLevelLength(r,n)}}this.setContentLength(this._zoomLevelLengths[this._zoomLevelOrder],s)}_updateZoomLevelLength(e,s){var i=this.getCtx(),r=n.getAxisLabelStyle(this.Options),a=2*n.DEFAULT_INTERVAL_PADDING,o=t.TextUtils.getTextStringHeight(this.getCtx(),r)+a,l=this._zoomOrder[e],h=n.DEFAULT_INTERVAL_WIDTH,g=1/0,c=1/0;Object.keys(s).forEach(e=>{var n=s[e],_=this.formatDate(new Date(n),null,"axis",l),d=t.TextUtils.getTextStringWidth(i,_,r)+a;h=Math.max(h,d),g=Math.min(g,(n-e)/h),c=Math.min(c,(n-e)/o)});var _=this._isVertical?c:g,d=(this._end-this._start)/_;this._zoomLevelLengths[e]=d,this.setContentSize(this._isVertical?h:o)}_sampleIntervals(e,t,s){for(var i={},r=Math.floor((this._end-this._start)/t),n=0;n<t;n++){for(var a=this._start+r*n,o=Math.min(this._start+r*(n+1),this._end),l=this.adjustDate(a,e).getTime(),h=0;h<s&&!(l>=o);h++){var g=this.getNextDate(l,e).getTime();i[l]=g,l=g}i[l=this.adjustDate(o-1,e).getTime()]=this.getNextDate(l,e).getTime()}return i}getViewportDates(e,t,s){const i=[this.adjustDate(t,e)];for(;i[i.length-1].getTime()<s;)i.push(this.getNextDate(i[i.length-1].getTime(),e));return i}getDateLabelTexts(e,t){return e.map(e=>this.formatDate(e,null,"axis",t))}setScale(e){this._scale=e}getScale(){return this._scale}increaseScale(){for(var e=0;e<this._zoomOrder.length-1;e++)if(this.isEqualScale(this._zoomOrder[e],this._scale))return this._scale=this._zoomOrder[e+1],!0;return!1}decreaseScale(){for(var e=1;e<this._zoomOrder.length;e++)if(this._zoomOrder[e]===this._scale)return this._scale=this._zoomOrder[e-1],!0;return!1}setConverter(e){this._converter=e}setDefaultConverter(e){this._defaultConverter=e}getContentSize(){return this._contentSize}setContentSize(e){e>this._contentSize&&(this._contentSize=e)}setBorderWidth(e){this._borderWidth=e}setBorderVisibility(e,t,s,i){this._borderTopWidth=(0|e)*this._borderWidth,this._borderRightWidth=(0|t)*this._borderWidth,this._borderBottomWidth=(0|s)*this._borderWidth,this._borderLeftWidth=(0|i)*this._borderWidth}calcStrokeDashArray(){if(this._isVertical)var e={top:this.getSize(),right:this.getAxisLength(),bottom:this.getSize(),left:this.getAxisLength()};else e={top:this.getAxisLength(),right:this.getSize(),bottom:this.getAxisLength(),left:this.getSize()};for(var t=[],s=0,i=!0,r=["top","right","bottom","left"],n=0;n<r.length;n++){this.getBorderWidth(r[n])>0===i?s+=e[r[n]]:(t.push(s),s=e[r[n]],i=!i)}return t.push(s),t.toString()}getSizeBorderWidth(){return this._borderTopWidth+this._borderBottomWidth}getBorderWidth(e){switch(e){case"top":return this._borderTopWidth;case"right":return this._borderRightWidth;case"bottom":return this._borderBottomWidth;case"left":return this._borderLeftWidth;default:return this._borderWidth}}getSize(){return this._contentSize+this.getSizeBorderWidth()}adjustDate(e,t){var s=t||this._scale;return this.isTimeComponentScale(s)?new Date(s.getPreviousDate(new Date(e))):this._calendar.adjustDate(new Date(e),s)}getNextDate(e,t){var s=t||this._scale;return this.isTimeComponentScale(s)?new Date(s.getNextDate(new Date(e))):this.getAdjacentDate(e,s,"next")}getAdjacentDate(e,t,s){var i=t||this._scale;if(this.isTimeComponentScale(i)){let t=new Date(i.getNextDate(new Date(e)));return"next"===s?t:new Date(2*e-t)}return this._calendar.getAdjacentDate(e,t,s)}formatDate(e,t,s,i){s=s||"axis";var r=this._dateToIsoWithTimeZoneConverter?this._dateToIsoWithTimeZoneConverter(e):e;if("general"===s&&t)return t.format(r);var n=i||this.getScale();if(this.isTimeComponentScale(n))return n.formatter(r);if("axis"===s)(t=t||this._converter)&&(t[n]?t=t[n]:t.default&&(t=t.default)),t&&t.format||!this._defaultConverter||!this._defaultConverter[n]||(t=this._defaultConverter[n]);else if(!t){var a=this._resources.defaultDateTimeConverter,o=this._resources.defaultDateConverter;t="hours"===n||"minutes"===n||"seconds"===n?a:o}return t.format(r)}getZoomOrder(){return this._zoomOrder}setIsVertical(e){this._contentSize=e?n.DEFAULT_INTERVAL_WIDTH:n.DEFAULT_INTERVAL_HEIGHT}setCanvasSize(e){this._canvasSize=e}getZoomLevelLengths(){return this._zoomLevelLengths}getMaxContentLength(){return this._maxContentLength}getZoomLevelOrder(){return this._zoomLevelOrder}setZoomLevelOrder(e){this._zoomLevelOrder=e}}l.VALID_SCALES=["seconds","minutes","hours","days","weeks","months","quarters","years"],e.TimeAxis=l,e.TimeAxisUtils=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojtimeaxis-toolkit.js.map