/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 */
define(['./DvtToolkit'], function(dvt) {
  "use strict";
  // Internal use only.  All APIs and functionality are subject to change at any time.

!function(t){t.BaseAxisInfo=function(){},t.Obj.createSubclass(t.BaseAxisInfo,t.Obj),t.BaseAxisInfo.MINIMUM_AXIS_BUFFER=10,t.BaseAxisInfo.prototype.Init=function(i,a,e){this._context=i,this.Position=a.position,this._radius=a._radius,"top"==this.Position||"bottom"==this.Position?(this.StartCoord=e.x,this.EndCoord=e.x+e.w):"left"==this.Position||"right"==this.Position?(this.StartCoord=e.y,this.EndCoord=e.y+e.h):"radial"==this.Position?(this.StartCoord=0,this.EndCoord=this._radius):"tangential"==this.Position&&(t.Agent.isRightToLeft(i)?(this.StartCoord=2*Math.PI,this.EndCoord=0):(this.StartCoord=0,this.EndCoord=2*Math.PI)),this.MinValue=null,this.MaxValue=null,this.GlobalMin=null,this.GlobalMax=null,this.DataMin=null,this.DataMax=null,this.StartOverflow=0,this.EndOverflow=0,null==a.leftBuffer&&(a.leftBuffer=1/0),null==a.rightBuffer&&(a.rightBuffer=1/0),this.Options=a},t.BaseAxisInfo.prototype.getCtx=function(){return this._context},t.BaseAxisInfo.prototype.getOptions=function(){return this.Options},t.BaseAxisInfo.prototype.getValueAt=function(t){if(null==t)return null;var i=Math.min(this.StartCoord,this.EndCoord),a=Math.max(this.StartCoord,this.EndCoord);return t<i||t>a?null:this.getUnboundedValueAt(t)},t.BaseAxisInfo.prototype.getCoordAt=function(t){return null==t?null:t<this.MinValue||t>this.MaxValue?null:this.getUnboundedCoordAt(t)},t.BaseAxisInfo.prototype.getBoundedValueAt=function(t){if(null==t)return null;var i=Math.min(this.StartCoord,this.EndCoord),a=Math.max(this.StartCoord,this.EndCoord);return t<i?t=i:t>a&&(t=a),this.getUnboundedValueAt(t)},t.BaseAxisInfo.prototype.getBoundedCoordAt=function(t){return null==t?null:(t<this.MinValue?t=this.MinValue:t>=this.MaxValue&&(t=this.MaxValue),this.getUnboundedCoordAt(t))},t.BaseAxisInfo.prototype.getUnboundedValueAt=function(t){return null},t.BaseAxisInfo.prototype.getUnboundedCoordAt=function(t){return null},t.DataAxisInfoMixin=function(i,a,e){this.MAX_NUMBER_OF_GRIDS_AUTO=10,this.MINOR_TICK_COUNT=2,this.MAJOR_TICK_INCREMENT_BUFFER=1e-10,this.MixinInit=function(i,a,e){"top"==this.Position||"bottom"==this.Position?("off"!=a.tickLabel.rendered&&"off"!=a.rendered&&(this.StartOverflow=Math.max(t.BaseAxisInfo.MINIMUM_AXIS_BUFFER-a.leftBuffer,0),this.EndOverflow=Math.max(t.BaseAxisInfo.MINIMUM_AXIS_BUFFER-a.rightBuffer,0)),t.Agent.isRightToLeft(i)?(this.MinCoord=this.EndCoord-this.EndOverflow,this.MaxCoord=this.StartCoord+this.StartOverflow):(this.MinCoord=this.StartCoord+this.StartOverflow,this.MaxCoord=this.EndCoord-this.EndOverflow)):"tangential"==this.Position||"radial"==this.Position?(this.MinCoord=this.StartCoord,this.MaxCoord=this.EndCoord):(this.MinCoord=this.EndCoord,this.MaxCoord=this.StartCoord),this.DataMin=a.dataMin,this.DataMax=a.dataMax,this.IsLog="log"==a.scale&&this.DataMin>0&&this.DataMax>0,this.LinearGlobalMin=this.actualToLinear(a.min),this.LinearGlobalMax=this.actualToLinear(a.max),this.LinearMinValue=null==a.viewportMin?this.LinearGlobalMin:this.actualToLinear(a.viewportMin),this.LinearMaxValue=null==a.viewportMax?this.LinearGlobalMax:this.actualToLinear(a.viewportMax),this._dataMin=this.actualToLinear(this.DataMin),this._dataMax=this.actualToLinear(this.DataMax),this.MajorIncrement=this.actualToLinear(a.step),this.MinorIncrement=this.actualToLinear(a.minorStep),this._minMajorIncrement=this.actualToLinear(a.minStep),this.MajorTickCount=a._majorTickCount,this.MinorTickCount=a._minorTickCount,this.LogScaleUnit=a._logScaleUnit,this.ZeroBaseline=!this.IsLog&&"zero"==a.baselineScaling,this.Converter=null,null!=a.tickLabel&&(this.Converter=a.tickLabel.converter),this._calcAxisExtents(),this.GlobalMin=this.linearToActual(this.LinearGlobalMin),this.GlobalMax=this.linearToActual(this.LinearGlobalMax),this.MinValue=this.linearToActual(this.LinearMinValue),this.MaxValue=this.linearToActual(this.LinearMaxValue)},this.getBaselineCoord=function(){return this.IsLog?this.MinCoord:this.getBoundedCoordAt(0)},this.getUnboundedValueAt=function(t){if(null==t)return null;var i=(t-this.MinCoord)/(this.MaxCoord-this.MinCoord),a=this.LinearMinValue+i*(this.LinearMaxValue-this.LinearMinValue);return this.linearToActual(a)},this.getUnboundedCoordAt=function(t){return this.GetUnboundedCoordAt(this.actualToLinear(t))},this.GetUnboundedCoordAt=function(t){if(null==t)return null;var i=this.LinearMaxValue==this.LinearMinValue?0:(t-this.LinearMinValue)/(this.LinearMaxValue-this.LinearMinValue);return i=Math.max(Math.min(1e3,i),-1e3),this.MinCoord+i*(this.MaxCoord-this.MinCoord)},this.CalcMajorMinorIncr=function(t){this.MajorIncrement||(this.MajorTickCount?this.MajorIncrement=(this.LinearMaxValue-this.LinearMinValue)/this.MajorTickCount:this.MajorIncrement=Math.max(t,this._minMajorIncrement)),this.MajorTickCount||(this.MajorTickCount=(this.LinearMaxValue-this.LinearMinValue)/this.MajorIncrement,Math.ceil(this.MajorTickCount)-this.MajorTickCount<this.MAJOR_TICK_INCREMENT_BUFFER&&(this.MajorTickCount=Math.ceil(this.MajorTickCount))),this.MinorTickCount||(this.MinorIncrement?this.MinorTickCount=this.MajorIncrement/this.MinorIncrement:this.IsLog?this.MinorTickCount=this.MajorIncrement:this.MinorTickCount=this.MINOR_TICK_COUNT),this.MinorIncrement||(this.MinorIncrement=this.MajorIncrement/this.MinorTickCount)},this._calcAxisExtents=function(){var t="on"==this.Options._continuousExtent;this.ZeroBaseline&&(this._dataMin=Math.min(0,this._dataMin),this._dataMax=Math.max(0,this._dataMax));var i=null!=this.LinearGlobalMax?this.LinearGlobalMax:this._dataMax,a=null!=this.LinearGlobalMin?this.LinearGlobalMin:this._dataMin,e=Math.max(this._calcAxisScale(a,i),this._minMajorIncrement);this._dataMin==this._dataMax&&(0==this._dataMin?this._dataMax+=5*e:(this._dataMin-=2*e,this._dataMax+=2*e)),null==this.LinearGlobalMin&&(this.ZeroBaseline&&this._dataMin>=0?this.LinearGlobalMin=0:t?this.LinearGlobalMin=this._dataMin-.1*(this._dataMax-this._dataMin):this.ZeroBaseline||null==this.LinearGlobalMax?this.LinearGlobalMin=(Math.ceil(this._dataMin/e)-1)*e:(this.LinearGlobalMin=this.LinearGlobalMax,this.LinearGlobalMin-=e*(Math.floor((this.LinearGlobalMin-this._dataMin)/e)+1)),this._dataMin>=0&&(this.LinearGlobalMin=Math.max(this.LinearGlobalMin,0))),null==this.LinearGlobalMax&&(this.MajorTickCount?(this.LinearGlobalMax=this.LinearGlobalMin+this.MajorTickCount*e,this.LinearGlobalMax<this._dataMax&&(e=Math.max(this._calcAxisScale(a,i+e),this._minMajorIncrement),this.LinearGlobalMax=this.LinearGlobalMin+this.MajorTickCount*e)):this.ZeroBaseline&&this._dataMax<=0?this.LinearGlobalMax=0:t?this.LinearGlobalMax=this._dataMax+.1*(this._dataMax-this._dataMin):this.ZeroBaseline?this.LinearGlobalMax=(Math.floor(this._dataMax/e)+1)*e:(this.LinearGlobalMax=this.LinearGlobalMin,this.LinearGlobalMax+=e*(Math.floor((this._dataMax-this.LinearGlobalMax)/e)+1)),this._dataMax<=0&&(this.LinearGlobalMax=Math.min(this.LinearGlobalMax,0))),this.LinearGlobalMax==this.LinearGlobalMin&&(this.LinearGlobalMax=100,this.LinearGlobalMin=0,e=(this.LinearGlobalMax-this.LinearGlobalMin)/this.MAX_NUMBER_OF_GRIDS_AUTO),null==this.LinearMinValue&&(this.LinearMinValue=this.LinearGlobalMin),null==this.LinearMaxValue&&(this.LinearMaxValue=this.LinearGlobalMax),this.LinearMinValue==this.LinearGlobalMin&&this.LinearMaxValue==this.LinearGlobalMax||(e=this._calcAxisScale(this.LinearMinValue,this.LinearMaxValue)),this.LinearGlobalMin>this.LinearMinValue&&(this.LinearGlobalMin=this.LinearMinValue),this.LinearGlobalMax<this.LinearMaxValue&&(this.LinearGlobalMax=this.LinearMaxValue),this.CalcMajorMinorIncr(e)},this._calcAxisScale=function(i,a){if(this.MajorIncrement)return this.MajorIncrement;var e=a-i;if(this.IsLog){var n=Math.floor(e/8)+1;return(!this.LogScaleUnit||this.LogScaleUnit<n)&&(this.LogScaleUnit=n),this.LogScaleUnit}if(0==e)return 0==i?10:Math.pow(10,Math.floor(t.Math.log10(i))-1);if(this.MajorTickCount){var r=e/this.MajorTickCount,o=r/(l=Math.pow(10,Math.ceil(t.Math.log10(r)-1)));return(o=o>1&&o<=1.5?1.5:o>5?10:Math.ceil(o))*l}var s=t.Math.log10(e),l=Math.pow(10,Math.ceil(s)-2),h=Math.round(e/l);return(h>=10&&h<=14?2:h>=15&&h<=19?3:h>=20&&h<=24?4:h>=25&&h<=45?5:h>=46&&h<=80?10:20)*l},this.linearToActual=function(t){return null==t?null:this.IsLog?Math.pow(10,t):t},this.actualToLinear=function(i){return null==i?null:this.IsLog?i>0?t.Math.log10(i):null:i}},t.LinearScaleAxisValueFormatter=function(t,i,a,e,n,r,o){this.Init(t,i,a,e,n,r,o)},t.Obj.createSubclass(t.LinearScaleAxisValueFormatter,t.Obj),t.LinearScaleAxisValueFormatter.SCALE_NONE="none",t.LinearScaleAxisValueFormatter.SCALE_AUTO="auto",t.LinearScaleAxisValueFormatter.SCALE_THOUSAND="thousand",t.LinearScaleAxisValueFormatter.SCALE_MILLION="million",t.LinearScaleAxisValueFormatter.SCALE_BILLION="billion",t.LinearScaleAxisValueFormatter.SCALE_TRILLION="trillion",t.LinearScaleAxisValueFormatter.SCALE_QUADRILLION="quadrillion",t.LinearScaleAxisValueFormatter.SCALING_FACTOR_DIFFERENCE=3,t.LinearScaleAxisValueFormatter.prototype.Init=function(t,i,a,e,n,r,o){this._context=t,this._translations=o,this._scales={},this._scalesOrder=[],this._factorToScaleMapping={},this.InitScales(),this.InitFormatter(i,a,e,n,r)},t.LinearScaleAxisValueFormatter.prototype.InitScales=function(){var i=function(t,i,a){var e;a&&(e=this._translations[a]);var n={scaleFactor:i,localizedSuffix:e};this._scales[t]=n,this._scalesOrder.push(n),this._factorToScaleMapping[i]=n},a=t.LinearScaleAxisValueFormatter.SCALING_FACTOR_DIFFERENCE;i.call(this,t.LinearScaleAxisValueFormatter.SCALE_NONE,0*a),i.call(this,t.LinearScaleAxisValueFormatter.SCALE_THOUSAND,1*a,"labelScalingSuffixThousand"),i.call(this,t.LinearScaleAxisValueFormatter.SCALE_MILLION,2*a,"labelScalingSuffixMillion"),i.call(this,t.LinearScaleAxisValueFormatter.SCALE_BILLION,3*a,"labelScalingSuffixBillion"),i.call(this,t.LinearScaleAxisValueFormatter.SCALE_TRILLION,4*a,"labelScalingSuffixTrillion"),i.call(this,t.LinearScaleAxisValueFormatter.SCALE_QUADRILLION,5*a,"labelScalingSuffixQuadrillion"),this._scalesOrder.sort(function(t,i){return t.scaleFactor<i.scaleFactor?-1:t.scaleFactor>i.scaleFactor?1:0})},t.LinearScaleAxisValueFormatter.prototype.InitFormatter=function(t,i,a,e,n){var r,o,s=!1,l=!1;if("off"!==n&&(l=!0),"number"!=typeof(o=this._getScaleFactor(e))&&(s=!0),s){var h=Math.max(Math.abs(t),Math.abs(i)),u=this._getPowerOfTen(h);o=this._findNearestLEScaleFactor(u)}if(!0===l)if(0==a&&t==i){var M=o-this._getPowerOfTen(i);r=M<=0?Math.max(M+3,0):Math.max(M,4)}else{var c=this._getPowerOfTen(a);r=Math.max(o-c,0)}this._useAutoPrecision=l,this._scaleFactor=o,this._decimalPlaces=r},t.LinearScaleAxisValueFormatter.prototype._findNearestLEScaleFactor=function(t){var i=0;if(t<=this._scalesOrder[0].scaleFactor)i=this._scalesOrder[0].scaleFactor;else if(t>=this._scalesOrder[this._scalesOrder.length-1].scaleFactor)i=this._scalesOrder[this._scalesOrder.length-1].scaleFactor;else for(var a=this._scalesOrder.length-1;a>=0;a--)if(this._scalesOrder[a].scaleFactor<=t){i=this._scalesOrder[a].scaleFactor;break}return i},t.LinearScaleAxisValueFormatter.prototype._getScaleFactor=function(i){i||(i=t.LinearScaleAxisValueFormatter.SCALE_AUTO);var a,e=this._scales[i];return e&&(a=e.scaleFactor),a},t.LinearScaleAxisValueFormatter.prototype.format=function(t,i){var a=null!=t?parseFloat(t):t;if("number"==typeof a){var e=Math.pow(10,this._scaleFactor),n={style:"decimal",decimalFormat:"unit"===(i&&i.getOptions&&i.getOptions()&&i.getOptions().style)?"standard":"short",nu:"latn",useGrouping:!1},r=this._context.getNumberConverter(n),o=r.format(e,n),s=/(\d+)(.*$)/.exec(o),l=s[2],h=Number(s[1])/e*a;if(i&&i.format)h=i.format(h);else{var u={style:"decimal",minimumFractionDigits:this._decimalPlaces,maximumFractionDigits:this._decimalPlaces};h=(r=this._context.getNumberConverter(u)).format(h,u)}return"string"==typeof l&&0!=t&&(h+=l),h}return t},t.LinearScaleAxisValueFormatter.prototype._formatFraction=function(t){var i=t.toString();if(-1!=i.indexOf("e"))return i;if(this._decimalPlaces>0){-1==i.indexOf(".")&&(i+=".");for(var a=i.substring(i.indexOf(".")+1).length;a<this._decimalPlaces;)i+="0",a++}return i},t.LinearScaleAxisValueFormatter.prototype._getPowerOfTen=function(t){var i=0;if((t=t>=0?t:-t)<1e-15)return 0;if(t==1/0)return Number.MAX_VALUE;if(t>=10)for(;t>=10;)i+=1,t/=10;else if(t<1)for(;t<1;)i-=1,t*=10;return i}}(dvt);
  return dvt;
});
