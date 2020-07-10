/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 */
define(['./DvtToolkit'], function(dvt) {
  "use strict";
  // Internal use only.  All APIs and functionality are subject to change at any time.

!function(t){t.TimeAxis=function(t,e,s){this.Init(t,e,s)},t.Obj.createSubclass(t.TimeAxis,t.BaseComponent),t.TimeAxis.ORIENTATION_VERTICAL="vertical",t.TimeAxis.supportsTouch=function(){return t.Agent.isTouchDevice()},t.TimeAxis.getDatePosition=function(t,e,s,i){var r=(s-t)*i,o=e-t;return 0==r||0==o?0:r/o},t.TimeAxis.getPositionDate=function(t,e,s,i){var r=s*(e-t);return 0==r||0==i?t:r/i+t},t.TimeAxis.newInstance=function(e,s,i){return new t.TimeAxis(e,s,i)},t.TimeAxis._VALID_SCALES=["seconds","minutes","hours","days","weeks","months","quarters","years"],t.TimeAxis.prototype.Init=function(i,r,o){t.TimeAxis.superclass.Init.call(this,i,r,o),this._calendar=new e,this._borderWidth=n.DEFAULT_BORDER_WIDTH,this.setBorderVisibility(!1,!1,!1,!1),this._dateToIsoWithTimeZoneConverter=i.getLocaleHelpers().dateToIsoWithTimeZoneConverter,this._dateFormatStrings={dayNames:i.LocaleData.getDayNames("abbreviated").concat(i.LocaleData.getDayNames("wide")),monthNames:i.LocaleData.getMonthNames("abbreviated").concat(i.LocaleData.getMonthNames("wide"))},this.Defaults=new s(i)},t.TimeAxis.prototype.SetOptions=function(t){this.Options=this.Defaults.calcOptions(t)},t.TimeAxis.prototype.Parse=function(t){return this._parser=new r,this._parser.parse(t)},t.TimeAxis.prototype._applyParsedProperties=function(e){var s=e.orientation;s&&s==t.TimeAxis.ORIENTATION_VERTICAL?this._isVertical=!0:this._isVertical=!1,this.setIsVertical(this._isVertical),this._shortDesc=e.shortDesc,this._zoomOrder=e.zoomOrder?e.zoomOrder.reverse():[e.scale],this._timeZoneOffsets=e.timeZoneOffsets,this._customTimeScales=e.customTimeScales,this._customFormatScales=e.customFormatScales,this._start=e.start,this._end=e.end,this._inlineStyle=e.inlineStyle,this._scale=e.scale,this._converter=e.converter,this.applyStyleValues()},t.TimeAxis.prototype.getDateFormatStrings=function(){return this._dateFormatStrings},t.TimeAxis.prototype.getContentLength=function(){return this._contentLength},t.TimeAxis.prototype.setContentLength=function(t,e){null==e&&(e=this._canvasLength),this._contentLength=e<t?t:e},t.TimeAxis.prototype.getAxisLength=function(){return this._axisLength},t.TimeAxis.prototype.isRTL=function(){return t.Agent.isRightToLeft(this.getCtx())},t.TimeAxis.prototype.isVertical=function(){return this._isVertical},t.TimeAxis.prototype.render=function(t,e,s){t&&(this.Width=e,this.Height=s,this._prepareCanvasViewport(),this.getPreferredLength(t,this._canvasLength)),this._handleResize(e,s),this.RenderComplete()},t.TimeAxis.prototype.getPreferredLength=function(t,e){this.SetOptions(t),this._resources=this.Options._resources,null==this._resources&&(this._resources=[]),this._locale=this.Options._locale?this.Options._locale:"en-US";var s=this._resources.firstDayOfWeek;null==s&&(s=0),this._calendar.setFirstDayOfWeek(s),this._dateToIsoWithTimeZoneConverter||(this._dateToIsoWithTimeZoneConverter=this.getCtx().getLocaleHelpers().dateToIsoWithTimeZoneConverter);var i=this.Parse(this.Options);return this._applyParsedProperties(i),this.hasValidOptions()&&this.prepareTimeAxisZoomLevelIntervals(this._start,this._end,e),this._contentLength},t.TimeAxis.prototype.hasValidOptions=function(){var e=this._scale&&-1!=t.TimeAxis._VALID_SCALES.indexOf(this._scale),s=this._scale&&this._customTimeScales&&this._customTimeScales[this._scale],i=this._start&&this._end&&this._end>this._start;return(e||s)&&i},t.TimeAxis.prototype.GetComponentDescription=function(){return this._shortDesc?this._shortDesc:this.Options.translations.componentName},t.TimeAxis.prototype.applyStyleValues=function(){this._axisStyle=new t.CSSStyle(n.getAxisStyle(this.Options)),this._axisStyle.parseInlineStyle(this._inlineStyle);var e=this._axisStyle.getBorderWidth(),s="border:"+2*e+"px;";this._axisStyle.parseInlineStyle(s),this.setBorderWidth(e)},t.TimeAxis.prototype._prepareCanvasViewport=function(){this._isVertical?(this._canvasLength=this.Height,this._canvasSize=this.Width):(this._canvasLength=this.Width,this._canvasSize=this.Height)},t.TimeAxis.prototype._setAxisDimensions=function(){null!==this._canvasSize&&this.setContentSize(this._canvasSize-this.getSizeBorderWidth()),this._axisLength=this._contentLength+this.getSizeBorderWidth()-n.DEFAULT_SEPARATOR_WIDTH},t.TimeAxis.prototype._updateDimensions=function(t,e){this.Width=t,this.Height=e,this._prepareCanvasViewport(),this.setContentLength(this._canvasLength),this._setAxisDimensions()},t.TimeAxis.prototype._handleResize=function(t,e){this._updateDimensions(t,e),o.renderTimeAxis(this)},t.TimeAxis.prototype.prepareTimeAxisZoomLevelIntervals=function(t,e,s){this.setConverter(this._converter),this.setType("short",this._dateFormatStrings),this._dates=[],this._labels=[],this._zoomLevelLengths=[],this._isVertical?this.setDefaultConverter(this._resources.converterVert):this.setDefaultConverter(this._resources.converter),this._timeZoneOffsets&&this.setTimeZoneOffsets(this._timeZoneOffsets);for(var i=this._scale,r=0;r<this._zoomOrder.length;r++){var o=this._zoomOrder[r],n=this._prepareScaleDatesLabels(o,i,t,e);this._prepareZoomLevelLengths(r,o,t,e,n,s)}this.setScale(i)},t.TimeAxis.prototype._prepareScaleDatesLabels=function(e,s,i,r){this.setScale(e);var o,a,h=1/0,c=0;if(this._customTimeScales&&this._customTimeScales[e]){var l=this._customTimeScales[e];o=l.times,a=l.labels}else if(this._customFormatScales&&this._customFormatScales[e]){var u=this._customFormatScales[e];o=u.times,a=u.labels}else{o=[],a=[];var _=this.adjustDate(i).getTime();for(o.push(_);_<r;)a.push(this.formatDate(new Date(_))),_=this.getNextDate(_).getTime(),o.push(_)}for(var m=[],d=0;d<a.length;d++){_=o[d];var g=new t.OutputText(this.getCtx(),a[d],0,0,"s_label"+_);g.setCSSStyle(n.getAxisLabelStyle(this.Options)),g.time=_;var p=o[d+1],f=g.getDimensions();if(this._isVertical)var T=f.h,x=f.w,y=n.DEFAULT_INTERVAL_HEIGHT;else T=f.w,x=f.h,y=n.DEFAULT_INTERVAL_WIDTH;var A=(p-_)/Math.max(y,T+2*n.DEFAULT_INTERVAL_PADDING);A<h&&(h=A),x>c&&(c=x),m.push(g)}return this.setContentSize(c+2*n.DEFAULT_INTERVAL_PADDING),this._dates.push(o),this._labels.push(m),this.setScale(s),h},t.TimeAxis.prototype._prepareZoomLevelLengths=function(t,e,s,i,r,o){if(null!==this._canvasSize)var n=o;else n=(i-s)/r;this._zoomLevelLengths.push(n),e==this._scale&&(this._zoomLevelOrder=t,this.setContentLength(n,o)),0==t&&(this._maxContentLength=this._labels[this._labels.length-1].length*o)},t.TimeAxis.prototype.setScale=function(t){this._scale=t},t.TimeAxis.prototype.getScale=function(){return this._scale},t.TimeAxis.prototype.setTimeZoneOffsets=function(t){this._timeZoneOffsets=t},t.TimeAxis.prototype.increaseScale=function(){for(var t=0;t<this._zoomOrder.length-1;t++)if(this._zoomOrder[t]==this._scale)return this._scale=this._zoomOrder[t+1],!0;return!1},t.TimeAxis.prototype.decreaseScale=function(){for(var t=1;t<this._zoomOrder.length;t++)if(this._zoomOrder[t]==this._scale)return this._scale=this._zoomOrder[t-1],!0;return!1},t.TimeAxis.prototype.setConverter=function(t){this._converter=t},t.TimeAxis.prototype.setDefaultConverter=function(t){this._defaultConverter=t},t.TimeAxis.prototype.getContentSize=function(){return this._contentSize},t.TimeAxis.prototype.setContentSize=function(t){t>this._contentSize&&(this._contentSize=t)},t.TimeAxis.prototype.getTimeAxisWidth=function(){return null==this._timeAxisWidth&&(this._timeAxisWidth=30),this._timeAxisWidth},t.TimeAxis.prototype.setBorderWidth=function(t){this._borderWidth=t},t.TimeAxis.prototype.setBorderVisibility=function(t,e,s,i){this._borderTopWidth=(0|t)*this._borderWidth,this._borderRightWidth=(0|e)*this._borderWidth,this._borderBottomWidth=(0|s)*this._borderWidth,this._borderLeftWidth=(0|i)*this._borderWidth},t.TimeAxis.prototype.calcStrokeDashArray=function(){if(this._isVertical)var t={top:this.getSize(),right:this.getAxisLength(),bottom:this.getSize(),left:this.getAxisLength()};else t={top:this.getAxisLength(),right:this.getSize(),bottom:this.getAxisLength(),left:this.getSize()};for(var e=[],s=0,i=1,r=["top","right","bottom","left"],o=0;o<r.length;o++){this.getBorderWidth(r[o])>0==i?s+=t[r[o]]:(e.push(s),s=t[r[o]],i=Math.abs(i-1))}return e.push(s),e.toString()},t.TimeAxis.prototype.getSizeBorderWidth=function(){return this._borderTopWidth+this._borderBottomWidth},t.TimeAxis.prototype.getLengthBorderWidth=function(){return this._borderRightWidth+this._borderLeftWidth},t.TimeAxis.prototype.getBorderWidth=function(t){switch(t){case"top":return this._borderTopWidth;case"right":return this._borderRightWidth;case"bottom":return this._borderBottomWidth;case"left":return this._borderLeftWidth;default:return this._borderWidth}},t.TimeAxis.prototype.getSize=function(){return this._contentSize+this.getSizeBorderWidth()},t.TimeAxis.prototype.setType=function(t,e){this._formatter=new i("short"==t?i.SHORT:i.LONG,e,this._locale)},t.TimeAxis.prototype.adjustDate=function(t){return this._calendar.adjustDate(new Date(t),this._scale)},t.TimeAxis.prototype.getNextDate=function(t){return this.getAdjacentDate(t,this._scale,"next")},t.TimeAxis.prototype.getAdjacentDate=function(t,e,s){return this._calendar.getAdjacentDate(t,e,s)},t.TimeAxis.prototype.formatDate=function(t,e,s){var i=this.getScale();if("axis"==(s=s||"axis"))(e=e||this._converter)&&(e[i]?e=e[i]:e.default&&(e=e.default)),e&&e.format||!this._defaultConverter||!this._defaultConverter[i]||(e=this._defaultConverter[i]);else if(!e){var r=this._resources.defaultDateTimeConverter,o=this._resources.defaultDateConverter;if(!r||!o){var n="toLocaleDateString",a={year:"numeric",month:"short",day:"numeric"};"hours"!=i&&"minutes"!=i&&"seconds"!=i||(n="toLocaleString",a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});try{return t[n](this._locale,a)}catch(e){if("RangeError"===e.name)return t[n]()}return t[n]()}e="hours"==i||"minutes"==i||"seconds"==i?r:o}return e&&e.format?e.format(this._dateToIsoWithTimeZoneConverter?this._dateToIsoWithTimeZoneConverter(t):t):this._formatter.format(t,i,this._timeZoneOffsets)},t.TimeAxis.prototype.getZoomOrder=function(){return this._zoomOrder},t.TimeAxis.prototype.setZoomOrder=function(t){this._zoomOrder=t},t.TimeAxis.prototype.setIsVertical=function(t){this._contentSize=t?n.DEFAULT_INTERVAL_WIDTH:n.DEFAULT_INTERVAL_HEIGHT},t.TimeAxis.prototype.setCanvasSize=function(t){this._canvasSize=t},t.TimeAxis.prototype.getZoomLevelLengths=function(){return this._zoomLevelLengths},t.TimeAxis.prototype.getMaxContentLength=function(){return this._maxContentLength},t.TimeAxis.prototype.getZoomLevelOrder=function(){return this._zoomLevelOrder},t.TimeAxis.prototype.setZoomLevelOrder=function(t){this._zoomLevelOrder=t};var e=function(t){this.Init(t)};t.Obj.createSubclass(e,t.Obj),e.prototype.Init=function(){this._dayInMillis=864e5,this._firstDayOfWeek=0},e.prototype.setFirstDayOfWeek=function(t){this._firstDayOfWeek=t},e.prototype.getFirstDayOfWeek=function(){return this._firstDayOfWeek},e.prototype.adjustDate=function(t,e){var s=new Date(t.getTime());if("weeks"==e){s.setHours(0,0,0);var i=(t.getDay()-this.getFirstDayOfWeek()+7)%7;i>0&&s.setTime(s.getTime()-i*this._dayInMillis)}else"months"==e?s.setDate(1):"days"==e?s.setHours(0,0,0):"hours"==e?s.setMinutes(0,0,0):"minutes"==e?s.setSeconds(0,0):"seconds"==e?s.setMilliseconds(0):"quarters"==e?(s.setDate(1),(i=2-(t.getMonth()+11)%3)>0&&s.setMonth(s.getMonth()+i)):"halfyears"==e?(s.setDate(1),(i=5-(t.getMonth()+11)%6)>0&&s.setMonth(s.getMonth()+i)):"years"==e?(s.setMonth(0),s.setDate(1)):"twoyears"==e&&(s.setMonth(0),s.setDate(1));return s},e.prototype.getNextDate=function(t,e){return this.getAdjacentDate(t,e,"next")},e.prototype.getAdjacentDate=function(t,e,s){var i="next"==s?1:-1;if("milliseconds"==e)return new Date(t+1*i);if("seconds"==e)return new Date(t+1e3*i);if("minutes"==e)return new Date(t+6e4*i);if("hours"==e)return new Date(t+36e5*i);var r=new Date(t);return"days"==e?r.setDate(r.getDate()+1*i):"weeks"==e?r.setDate(r.getDate()+7*i):"months"==e?r.setMonth(r.getMonth()+1*i):"quarters"==e?r.setMonth(r.getMonth()+3*i):"halfyears"==e?r.setMonth(r.getMonth()+6*i):"years"==e?r.setFullYear(r.getFullYear()+1*i):"twoyears"==e?r.setFullYear(r.getFullYear()+2*i):r.setYear(r.getYear()+1*i),r};var s=function(t){this.Init({alta:s.VERSION_1},t)};t.Obj.createSubclass(s,t.BaseComponentDefaults),s.VERSION_1={backgroundColor:"rgba(255,255,255,0)",borderColor:"#d9dfe3",separatorColor:"#bcc7d2",labelStyle:new t.CSSStyle(t.BaseComponentDefaults.FONT_FAMILY_ALTA_12+"color: #333333;")};var i=function(t,e,s){this.Init(t,e,s)};t.Obj.createSubclass(i,t.Obj),i.LONG=0,i.SHORT=1,i.prototype.Init=function(t,e,s){this._type=t,this._dateFormatStrings=e,this._locale=s,this._formats=[],this._formats[0]=new Object,this._formats[0].seconds="HH:MM:ss",this._formats[0].minutes="HH:MM",this._formats[0].hours="HH:MM",this._formats[0].days="dddd",this._formats[0].weeks="m/dd",this._formats[0].months="mmmm",this._formats[0].quarters="mmmm",this._formats[0].halfyears="yyyy",this._formats[0].years="yyyy",this._formats[0].twoyears="yyyy",this._formats[1]=new Object,this._formats[1].seconds="HH:MM:ss",this._formats[1].minutes="HH:MM",this._formats[1].hours="HH:MM",this._formats[1].days="m/dd",this._formats[1].weeks="m/dd",this._formats[1].months="mmm",this._formats[1].quarters="mmm",this._formats[1].halfyears="yy",this._formats[1].years="yy",this._formats[1].twoyears="yy"},i.prototype.setPattern=function(t,e){this._formats[this._type][t]=e},i.prototype.format=function(t,e,s){var i=this._formats[this._type][e];if(null!=i){var r=!1;if(s){for(var o=t.getTime(),n=Object.keys(s),a=0,h=0;h<n.length;h++)o>=parseInt(n[h],10)&&(a=s[n[h]]);t=new Date(o+a),r=!0}if(-1!=i.indexOf(":"))var c=":";else-1!=i.indexOf("/")&&(c="/");if(c){i=i.split(c);var l=this.getDateFormatValue(t,i[0],r);for(h=1;h<i.length;h++)l+=c+this.getDateFormatValue(t,i[h],r);return l}return this.getDateFormatValue(t,i,r)}try{return t.toLocaleString(this._locale)}catch(e){if("RangeError"===e.name)return t.toLocaleString()}return t.toLocaleString()},i.prototype.getDateFormatValue=function(t,e,s){if(s)switch(e){case"ss":var i=t.getUTCSeconds();return i<10?"0"+i:i;case"HH":return(i=t.getUTCHours())<10?"0"+i:i;case"MM":return(i=t.getUTCMinutes())<10?"0"+i:i;case"dd":return(i=t.getUTCDate())<10?"0"+i:i;case"dddd":return this._dateFormatStrings.dayNames[t.getUTCDay()+7];case"m":return t.getUTCMonth()+1;case"mmm":return this._dateFormatStrings.monthNames[t.getUTCMonth()];case"mmmm":return this._dateFormatStrings.monthNames[t.getUTCMonth()+12];case"yy":return t.getUTCFullYear().toString().substring(2,4);default:return t.getUTCFullYear()}else switch(e){case"ss":return(i=t.getSeconds())<10?"0"+i:i;case"HH":return(i=t.getHours())<10?"0"+i:i;case"MM":return(i=t.getMinutes())<10?"0"+i:i;case"dd":return(i=t.getDate())<10?"0"+i:i;case"dddd":return this._dateFormatStrings.dayNames[t.getDay()+7];case"m":return t.getMonth()+1;case"mmm":return this._dateFormatStrings.monthNames[t.getMonth()];case"mmmm":return this._dateFormatStrings.monthNames[t.getMonth()+12];case"yy":return t.getFullYear().toString().substring(2,4);default:return t.getFullYear()}};var r=function(){};t.Obj.createSubclass(r,t.Obj),r.prototype.parse=function(t){this._startTime=new Date(t.start),this._endTime=new Date(t.end);var e=this.ParseRootAttributes();return e.inlineStyle=t.style,e.id=t.id,e.shortDesc=t.shortDesc,e.timeZoneOffsets=t._tzo,e.itemPosition=t._ip,e.customTimeScales=t._cts,e.customFormatScales=t._cfs,e.scale=t.scale,e.converter=t.converter,e.zoomOrder=t.zoomOrder?t.zoomOrder:null,e.orientation=t.orientation?t.orientation:"horizontal",e},r.prototype.ParseRootAttributes=function(){var t=new Object;return t.start=this._startTime.getTime(),t.end=this._endTime.getTime(),t};var o=new Object;t.Obj.createSubclass(o,t.Obj),o.renderTimeAxis=function(t){if(t.hasValidOptions()){var e=t.getSize();o._renderAxisBlock(t,0,e,n.getAxisSeparatorStyle(t.Options))}},o._renderAxisBlock=function(e,s,i,r){var a=e.getCtx();if(null==e._axis){var h=new t.ClipPath;e.isVertical()?(e._axis=new t.Rect(a,s,-e.getBorderWidth("top"),i,e.getAxisLength(),"axis"),h.addRect(s,0,i,e._contentLength)):(e._axis=new t.Rect(a,-e.getBorderWidth("left"),s,e.getAxisLength(),i,"axis"),h.addRect(0,s,e._contentLength,i)),e._axis.setCSSStyle(e._axisStyle),e._axis.setPixelHinting(!0),e._axis.setClipPath(h),e.addChild(e._axis);var c=n.getAxisClass(e.Options);c&&e._axis.getElem().setAttribute("class",c)}else e._axis.setClipPath(null),h=new t.ClipPath,e.isVertical()?(e._axis.setX(s),e._axis.setY(-e.getBorderWidth("top")),e._axis.setWidth(i),e._axis.setHeight(e.getAxisLength()),h.addRect(s,0,i,e._contentLength)):(e._axis.setX(-e.getBorderWidth("left")),e._axis.setY(s),e._axis.setWidth(e.getAxisLength()),e._axis.setHeight(i),h.addRect(0,s,e._contentLength,i)),e._axis.setClipPath(h);e._axis.removeChildren(),e._axis.getElem().setAttribute("stroke-dasharray",e.calcStrokeDashArray());r=new t.CSSStyle(r);e._separatorStroke=new t.Stroke(r.getStyle(t.CSSStyle.COLOR));i=e.getContentSize();var l=(s=s+e.isVertical()?e.getBorderWidth("left"):e.getBorderWidth("top"))+i;o._renderAxisTicksLabels(e,0,e._canvasSize,e._axis,e._contentLength,l,s,s)},o._renderAxisTicksLabels=function(e,s,i,r,a,h,c,l){var u=e.getCtx(),_=t.Agent.isRightToLeft(u),m=new t.Container(u,"block_"+s+"_"+i);m.startPos=s,m.endPos=i,r.addChild(m);for(var d=n.getAxisLabelClass(e.Options),g=n.getAxisSeparatorClass(e.Options),p=e.getContentSize(),f=e._dates[e._zoomLevelOrder],T=e._labels[e._zoomLevelOrder],x=0;x<f.length-1;x++){var y=f[x],A=f[x+1],S=T[x],v=t.TimeAxis.getDatePosition(e._start,e._end,y,a),D=t.TimeAxis.getDatePosition(e._start,e._end,A,a);if(0!=v){if(e.isVertical())var L=o._addTick(u,m,h,c,v,v,e._separatorStroke,"s_tick"+y,g);else L=_?o._addTick(u,m,a-v,a-v,h,c,e._separatorStroke,"s_tick"+y,g):o._addTick(u,m,v,v,h,c,e._separatorStroke,"s_tick"+y,g);L.time=y}S.isTruncated()&&S.setTextString(S.getUntruncatedTextString());var b=!1;if(e.isVertical())S.alignCenter(),o._addAxisLabel(m,S,l+(h-l)/2,v+(D-v)/2,h-l,D-v,d);else{if(0===x&&v<0){var C=S.getDimensions().w,O=D-Math.max(0,(D-v-C)/2);_||S.alignRight();var W=Math.max(0,O);b=!0}else x===f.length-2&&D>a?(C=S.getDimensions().w,O=a-v-Math.max(0,(D-v-C)/2),_&&S.alignRight(),W=Math.max(v,v+(D-v)/2-C/2)):(O=D-v,W=v+(D-v)/2,S.alignCenter());var I=l+(h-l)/2,z=_?a-W:W;o._addAxisLabel(m,S,z,I,O,p,d,b)}}},o._addAxisLabel=function(e,s,i,r,o,n,a,h){var c=t.TextUtils.fitText(s,o,n,e);if(h&&s.isTruncated()&&c){var l=s.getTextString(),u=s.getUntruncatedTextString();if(l!==u){var _=s.getTextString().length-1,m=u.length,d=Math.max(0,m-_),g=t.OutputText.ELLIPSIS+u.substring(d,m);s.setTextString(g)}}s.setX(i),t.TextUtils.centerTextVertically(s,r),a&&s.getElem().setAttribute("class",a)},o._addTick=function(e,s,i,r,o,n,a,h,c){var l=new t.Line(e,i,o,r,n,h);return l.setStroke(a),l.setPixelHinting(!0),s.addChild(l),c&&l.getElem().setAttribute("class",c),l};var n=new Object;t.Obj.createSubclass(n,t.Obj),n.DEFAULT_BORDER_WIDTH=1,n.DEFAULT_SEPARATOR_WIDTH=1,n.DEFAULT_INTERVAL_WIDTH=50,n.DEFAULT_INTERVAL_HEIGHT=21,n.DEFAULT_INTERVAL_PADDING=2,n.getAxisStyle=function(t){var e="",s=n.getBackgroudColor(t);return s&&(e=e+"background-color:"+s+";"),(s=n.getBorderColor(t))&&(e=e+"border-color:"+s+";"),(s=n.getBorderWidth())&&(e=e+"border-width:"+s+";"),e},n.getBackgroudColor=function(t){return t.backgroundColor},n.getBorderColor=function(t){return t.borderColor},n.getBorderWidth=function(){return n.DEFAULT_BORDER_WIDTH},n.getAxisLabelStyle=function(t){return t.labelStyle},n.getSeparatorColor=function(t){return t.separatorColor},n.getAxisSeparatorStyle=function(t){var e="",s=n.getSeparatorColor(t);return s&&(e=e+"color:"+s+";"),e},n.getAxisClass=function(t){return t._resources?t._resources.axisClass:void 0},n.getAxisBorderClass=function(t){return t._resources?t._resources.axisBorderClass:void 0},n.getAxisLabelClass=function(t){return t._resources?t._resources.axisLabelClass:void 0},n.getAxisSeparatorClass=function(t){return t._resources?t._resources.axisSeparatorClass:void 0},n.isBorderTopVisible=function(t){return!!t._resources&&t._resources.borderTopVisible},n.isBorderRightVisible=function(t){return!!t._resources&&t._resources.borderRightVisible},n.isBorderBottomVisible=function(t){return!!t._resources&&t._resources.borderBottomVisible},n.isBorderLeftVisible=function(t){return!!t._resources&&t._resources.borderLeftVisible}}(dvt);
  return dvt;
});
