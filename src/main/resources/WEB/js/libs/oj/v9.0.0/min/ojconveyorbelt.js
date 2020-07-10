/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojthemeutils","ojs/ojcomponentcore","ojs/ojlogger","ojs/ojcontext","ojs/ojconfig","touchr"],function(t,e,o,n,i,s,r){"use strict";var l={properties:{arrowVisibility:{type:"string",writeback:!0,enumValues:["auto","hidden","visible"]},contentParent:{type:"string",writeback:!0},orientation:{type:"string",writeback:!0,enumValues:["horizontal","vertical"],value:"horizontal"},translations:{type:"object",value:{}}},methods:{refresh:{},scrollElementIntoView:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};function h(t,e,o,n,i,s,r,l){this._elem=t,this._orientation=e,this._contentParent=o,this._bRtl=n,this._arrowVisibility=i.arrowVisibility,this._prevButtonStyleClass=i.prevButtonStyleClass,this._nextButtonStyleClass=i.nextButtonStyleClass,this._prevButtonIcon=i.prevButtonIcon,this._nextButtonIcon=i.nextButtonIcon,this._scrollFunc=s.scrollFunc,this._addResizeListenerFunc=s.addResizeListener,this._removeResizeListenerFunc=s.removeResizeListener,this._addStyleClassNameFunc=s.addStyleClassName,this._removeStyleClassNameFunc=s.removeStyleClassName,this._hasStyleClassNameFunc=s.hasStyleClassName,this._filterContentElementsFunc=s.filterContentElements,this._subtreeDetachedFunc=s.subtreeDetached,this._subtreeAttachedFunc=s.subtreeAttached,this._addBusyStateFunc=s.addBusyState,this._overflowContainerStyleClass=r.overflowContainerStyleClass,this._contentContainerStyleClass=r.contentContainerStyleClass,this._itemStyleClass=r.itemStyleClass,this._hiddenStyleClass=r.hiddenStyleClass,this._bExternalScroll=!0,this._firstVisibleItemIndex=0,this._agentVersion=l.browserVersion;var h=navigator.userAgent.toLowerCase();-1!==h.indexOf("gecko/")?this._bAgentGecko=!0:l&&"safari"===l.browser?this._bAgentSafari=!0:l&&"edge"===l.browser?this._bAgentEdge=!0:-1===h.indexOf("applewebkit")&&-1===h.indexOf("safari")||(this._bAgentWebkit=!0)}h.prototype.setup=function(){var t=this,e=h;if(this._createInnerContainers(),"visible"===this._arrowVisibility){this._createPrevButton(this._prevButtonStyleClass,this._prevButtonIcon),this._createNextButton(this._nextButtonStyleClass,this._nextButtonIcon);var o=this._nextButton;this._buttonWidth=o.offsetWidth,this._buttonHeight=o.offsetHeight,this._hidePrevButton(),this._hideNextButton()}this._mouseWheelListener=function(e){t._handleMouseWheel(e)},e._addBubbleEventListener(this._elem,"mousewheel",this._mouseWheelListener,!1),e._addBubbleEventListener(this._elem,"wheel",this._mouseWheelListener,!1),this._touchStartListener=function(e){t._handleTouchStart(e)},e._addBubbleEventListener(this._overflowContainer,"touchstart",this._touchStartListener,!0),this._touchMoveListener=function(e){t._handleTouchMove(e)},e._addBubbleEventListener(this._overflowContainer,"touchmove",this._touchMoveListener,!1),this._touchEndListener=function(e){t._handleTouchEnd(e)},e._addBubbleEventListener(this._overflowContainer,"touchend",this._touchEndListener),e._addBubbleEventListener(this._overflowContainer,"touchcancel",this._touchEndListener),this._origScroll=0,this._clearCachedSizes(),this._adjustOverflowSize(!0),this._handleResize(!0),this._handleResizeFunc=function(e,o){t._handleResize(!1)},this._addResizeListenerFunc.call(null,this._elem,this._handleResizeFunc),this._addResizeListenerFunc.call(null,this._contentContainer,this._handleResizeFunc),this._subtreeAttachedFunc(this._contentContainer)},h.prototype.destroy=function(){this._resolveBusyState();var t=this._elem,e=h;e._removeBubbleEventListener(t,"mousewheel",this._mouseWheelListener,!1),e._removeBubbleEventListener(t,"wheel",this._mouseWheelListener,!1),e._removeBubbleEventListener(this._overflowContainer,"touchstart",this._touchStartListener,!0),e._removeBubbleEventListener(this._overflowContainer,"touchmove",this._touchMoveListener,!1),e._removeBubbleEventListener(this._overflowContainer,"touchend",this._touchEndListener),e._removeBubbleEventListener(this._overflowContainer,"touchcancel",this._touchEndListener),e._removeBubbleEventListener(this._overflowContainer,"scroll",this._scrollListener),this._mouseWheelListener=null,this._touchStartListener=null,this._touchMoveListener=null,this._touchEndListener=null,this._scrollListener=null,this._removeResizeListenerFunc.call(null,t,this._handleResizeFunc),this._removeResizeListenerFunc.call(null,this._contentContainer,this._handleResizeFunc),this._handleResizeFunc=null,this._reparentChildrenFromContentContainer(this._contentContainer,t),t.removeChild(this._overflowContainer),this._overflowContainer=null,null!=this._nextButton&&null!=this._prevButton&&(t.removeChild(this._nextButton),t.removeChild(this._prevButton),this._nextButton=null,this._prevButton=null),this._contentContainer=null,this._clearCachedSizes(),this._elem=null,this._scrollFunc=null,this._addResizeListenerFunc=null,this._removeResizeListenerFunc=null,this._addStyleClassNameFunc=null,this._removeStyleClassNameFunc=null,this._hasStyleClassNameFunc=null,this._filterContentElementsFunc=null,this._subtreeDetachedFunc=null,this._subtreeAttachedFunc=null,this._addBusyStateFunc=null,this._contentParent=null},h.prototype.handleResize=function(){this._handleResize(!1)},h.prototype.setScroll=function(t,e){this._setCurrScroll(t,e)},h.prototype.getScroll=function(){return this._getCurrScroll()},h.prototype._reparentChildrenToContentContainer=function(t,e){for(var o=t.childNodes;o.length>0;){var n=o[0];this._subtreeDetachedFunc(n),e.appendChild(n),1===n.nodeType&&this._itemStyleClass&&this._addStyleClassNameFunc(n,this._itemStyleClass)}},h.prototype._reparentChildrenFromContentContainer=function(t,e){for(var o=t.childNodes;o.length>0;){var n=o[0];e.appendChild(n),1===n.nodeType&&this._itemStyleClass&&this._removeStyleClassNameFunc(n,this._itemStyleClass)}},h._getComputedStyle=function(t){return t.ownerDocument.defaultView.getComputedStyle(t,null)},h._getElemInnerWidth=function(t){var e=h,o=e._getComputedStyle(t);return e._getCSSLengthAsInt(o.width)},h._getElemInnerHeight=function(t){var e=h,o=e._getComputedStyle(t);return e._getCSSLengthAsInt(o.height)},h._getCSSLengthAsInt=function(t){if(t.length>0&&"auto"!==t){var e=Math.round(parseFloat(t));return isNaN(e)&&(e=0),e}return 0},h._addBubbleEventListener=function(t,e,o,n){t.addEventListener(e,o,{passive:n,capture:!1})},h._removeBubbleEventListener=function(t,e,o,n){t.removeEventListener(e,o,{passive:n,capture:!1})},h._getWheelDelta=function(t){return null!=t.wheelDelta?t.wheelDelta:null!=t.deltaY?-t.deltaY:-t.detail},h.prototype._isHorizontal=function(){return"horizontal"===this._orientation},h.prototype._isEmpty=function(){return!this._getContentParent().hasChildNodes()},h.prototype._reinitializeInnerDom=function(){this._origScroll=this._getCurrScroll(),this._setOverflowScroll(0),"visible"===this._arrowVisibility&&(this._hidePrevButton(),this._hideNextButton())},h.prototype._clearCachedSizes=function(){this._totalSize=null,this._sizes=null},h.prototype._handleResize=function(t){t||this._reinitializeInnerDom(),this._clearCachedSizes(),this._totalSize=this._measureContents(),t||this._adjustOverflowSize(!1),"visible"===this._arrowVisibility&&this._alignButtons()},h.prototype._alignButtons=function(){var t=this._nextButton,e=this._prevButton,o=t.style,n=e.style,i=this._totalSize;this._isHorizontal()?(o.height=i.h+"px",n.height=i.h+"px"):(o.width=i.w+"px",n.width=i.w+"px")},h.prototype._adjustOverflowSize=function(t){var e=this._contentContainer,o=this._isHorizontal(),n=h,i=o?n._getElemInnerWidth(this._elem):n._getElemInnerHeight(this._elem);this._minScroll=0,this._maxScroll=o?e.offsetWidth-i+this._buttonWidth:e.offsetHeight-i+this._buttonHeight,this._maxScroll<0&&(this._maxScroll=0),"visible"===this._arrowVisibility&&(this._hidePrevButton(),this._hideNextButton()),this._setCurrScroll(t?this._minScroll:this._origScroll,!0),this._origScroll=0},h.prototype._createInnerContainers=function(){var t=this,e=this._elem,o=h,n=document.createElement("div");this._overflowContainer=n,this._addStyleClassNameFunc(n,this._overflowContainerStyleClass);var i=document.createElement("div");this._contentContainer=i,this._addStyleClassNameFunc(i,this._contentContainerStyleClass),this._reparentChildrenToContentContainer(e,i),e.appendChild(n),n.appendChild(i),this._scrollListener=function(e){t._handleScroll(e)},o._addBubbleEventListener(n,"scroll",this._scrollListener)},h.prototype._getContentElements=function(){var t,e=[],o=this._contentParent?this._contentParent:this._contentContainer,n=o.children,i=n.length;for(t=0;t<i;t++){var s=n[t];1===s.nodeType&&e.push(s)}if(e=(0,this._filterContentElementsFunc)(e),o===this._contentContainer&&this._itemStyleClass)for(t=0;t<e.length;t++){var r=e[t];this._hasStyleClassNameFunc(r,this._itemStyleClass)||this._addStyleClassNameFunc(r,this._itemStyleClass)}return e},h.prototype._createPrevButton=function(t,e){var o=this,n=document.createElement("div");this._prevButton=n,n.setAttribute("class",t),n.setAttribute("aria-hidden","true"),h._addBubbleEventListener(n,"click",function(){o._scrollPrev()}),n.appendChild(e),this._elem.insertBefore(n,this._overflowContainer)},h.prototype._createNextButton=function(t,e){var o=this,n=document.createElement("div");this._nextButton=n,n.setAttribute("class",t),n.setAttribute("aria-hidden","true"),h._addBubbleEventListener(n,"click",function(){o._scrollNext()}),n.appendChild(e),this._elem.appendChild(n)},h.prototype._getContentParent=function(){var t=this._contentParent;return t||(t=this._contentContainer),t},h.prototype._measureContents=function(){var t=this._getContentElements(),e={w:0,h:0},o=[];if(t.length>0){var n,i=t,s=this._isHorizontal();n=this._contentContainer.offsetWidth;for(var r=0,l=null,h=0;h<i.length;h++){var a=i[h];if(1===a.nodeType){var c=a.offsetWidth,u=a.offsetHeight,_={w:c,h:u,id:a.id};if(s){var d=a.offsetLeft;this._contentParent||0!==d||(d=a.parentNode.offsetLeft),this._bRtl?_.start=n-(d+c):_.start=d,0===h&&(r=_.start),_.start-=r,e.w=_.start+c,e.h=Math.max(e.h,u),_.end=e.w-1}else{var v=a.offsetTop;this._contentParent||0!==v||(v=a.parentNode.offsetTop),_.start=v,e.w=Math.max(e.w,c),e.h=_.start+u,_.end=e.h-1}if(l&&l.end>=_.start){var f=l.end-(_.start-1);l.end-=f,s?l.w-=f:l.h-=f}o.push(_),l=_}}}return this._sizes=o,e},h.prototype._getSizes=function(){return this._sizes},h.prototype._showNextButton=function(){this._removeStyleClassNameFunc(this._nextButton,this._hiddenStyleClass)},h.prototype._showPrevButton=function(){this._removeStyleClassNameFunc(this._prevButton,this._hiddenStyleClass)},h.prototype._hideNextButton=function(){this._addStyleClassNameFunc(this._nextButton,this._hiddenStyleClass)},h.prototype._hidePrevButton=function(){this._addStyleClassNameFunc(this._prevButton,this._hiddenStyleClass)},h.prototype._isNextButtonShown=function(){return!this._hasStyleClassNameFunc(this._nextButton,this._hiddenStyleClass)},h.prototype._isPrevButtonShown=function(){return!this._hasStyleClassNameFunc(this._prevButton,this._hiddenStyleClass)},h.prototype._getButtonSize=function(){return this._isHorizontal()?this._buttonWidth:this._buttonHeight},h.prototype._updateButtonVisibility=function(t){var e=this._getButtonSize(),o=this._getCurrScroll(),n=this._needsScroll();t<=this._minScroll?(this._isPrevButtonShown()&&(o-=e),this._hidePrevButton()):n&&(this._isPrevButtonShown()||(o+=e),this._showPrevButton()),t>=this._maxScroll?this._hideNextButton():n&&this._showNextButton(),this._setOverflowScroll(o)},h.prototype._setOverflowScroll=function(t){var e=this._overflowContainer;this._isHorizontal()?e.scrollLeft=this._convertScrollLogicalToBrowser(t):e.scrollTop=t},h.prototype._getCurrViewportSize=function(){var t=this._overflowContainer;return this._isHorizontal()?t.offsetWidth:t.offsetHeight},h.prototype._setCurrScroll=function(t,e){this._bScrolling||(this._bExternalScroll=!1,this._setCurrScrollHelper(t,e))},h.prototype._setCurrScrollHelper=function(t,e){if(!this._isEmpty()){this._bScrolling=!0,t=this._constrainScroll(t),this._updateButtonVisibility(t);var o=this._scrollFunc;if(e||!o||t===this._getCurrScroll())this._onScrollAnimEnd(this._bExternalScroll?this._getCurrScroll():t);else{this._busyStateResolveFunc=this._addBusyStateFunc("scrolling");var n=h,i=Math.abs(this._getCurrScroll()-t)/n._SCROLL_SPEED,s=this;o.call(null,this._overflowContainer,this._convertScrollLogicalToBrowser(t),i,function(){s._onScrollAnimEnd(t),s._resolveBusyState()})}}},h.prototype._resolveBusyState=function(){this._busyStateResolveFunc&&(this._busyStateResolveFunc(),this._busyStateResolveFunc=null)},h.prototype._getCurrScroll=function(){var t=this._overflowContainer;return this._isHorizontal()?this._convertScrollBrowserToLogical(t.scrollLeft):t.scrollTop},h.prototype._needsScroll=function(){var t=this._contentContainer,e=this._overflowContainer;return this._isHorizontal()?t.offsetWidth>e.offsetWidth:t.offsetHeight>e.offsetHeight},h.prototype._constrainScroll=function(t){return!this._needsScroll()||t<this._minScroll?this._minScroll:t>this._maxScroll?this._maxScroll:t},h.prototype._handleMouseWheel=function(t){var e=this._bScrolling;if(this._needsScroll()&&!this._bScrolling){var o=h._getWheelDelta(t);o<0&&this._isNextButtonShown()?(e=!0,this._scrollNext()):o>0&&this._isPrevButtonShown()&&(e=!0,this._scrollPrev())}e&&(t.preventDefault(),t.stopPropagation())},h.prototype._handleTouchStart=function(t){var e=t.touches;if(this._needsScroll()&&!this._bScrolling&&1===e.length){this._bTouch=!0;var o=e[0];this._touchStartCoord=this._isHorizontal()?o.pageX:o.pageY,this._touchStartScroll=this._getCurrScroll(),this._touchStartNextScroll=this._calcNextScroll(),this._touchStartPrevScroll=this._calcPrevScroll(),this._touchStartNextButtonShown=this._isNextButtonShown(),this._touchStartPrevButtonShown=this._isPrevButtonShown()}},h.prototype._handleTouchMove=function(t){var e=this._isHorizontal(),o=t.touches[0],n=(e?o.pageX:o.pageY)-this._touchStartCoord,i=e&&this._bRtl?n>0:n<0,s=i&&this._touchStartNextButtonShown||!i&&this._touchStartPrevButtonShown;if(this._bTouch&&s){var r=h,l=this._overflowContainer,a=r._SWIPE_THRESHOLD*(e?l.offsetWidth:l.offsetHeight);Math.abs(n)<a?(this._setCurrScroll(this._touchStartScroll-n,!0),(this._touchStartNextButtonShown&&!this._isNextButtonShown()||this._touchStartPrevButtonShown&&!this._isPrevButtonShown())&&(this._bTouch=!1)):(this._setCurrScroll(i?this._touchStartNextScroll:this._touchStartPrevScroll,!1),this._bTouch=!1),this._scrolledForThisTouch=!0}this._scrolledForThisTouch&&(t.preventDefault(),t.stopPropagation())},h.prototype._handleTouchEnd=function(t){this._bTouch&&this._setCurrScroll(this._touchStartScroll,!1),this._bTouch=!1,this._scrolledForThisTouch=!1},h.prototype._handleScroll=function(t){this._bExternalScroll&&!this._bScrolling&&this._setCurrScrollHelper(this._getCurrScroll(),!0)},h.prototype._onScrollAnimEnd=function(t){this._setOverflowScroll(t),this._bExternalScroll=!0,this._bScrolling=!1},h.prototype._scrollNext=function(){this._bScrolling||this._setCurrScroll(this._calcNextScroll(),!1)},h.prototype._scrollPrev=function(){this._bScrolling||this._setCurrScroll(this._calcPrevScroll(),!1)},h.prototype._calcNextScroll=function(){var t=this._calcNextVisibleItemIndex();return t===this._calcFirstVisibleItemIndex()?this._getCurrScroll()+this._getCurrViewportSize():this._calcStartScroll(t)},h.prototype._calcPrevScroll=function(){var t=this._calcPrevVisibleItemIndex(),e=0;return e=t===this._calcLastVisibleItemIndex()?this._getCurrScroll()-this._getCurrViewportSize():this._calcEndScroll(t),this._isNextButtonShown()||(e+=this._getButtonSize()),e<=this._getButtonSize()&&(e=this._minScroll),e},h.prototype._calcStartScroll=function(t){return this._getSizes()[t].start},h.prototype._calcEndScroll=function(t){return this._getSizes()[t].end-this._getCurrViewportSize()+1},h.prototype._calcFirstVisibleItemIndex=function(){var t=this._getCurrScroll(),e=this._calcItemIndex(t);return e<0?0:e},h.prototype._calcLastVisibleItemIndex=function(){var t=this._getCurrViewportSize(),e=this._getCurrScroll()+t-1,o=this._calcItemIndex(e),n=this._getSizes();return o<0?n.length-1:o},h.prototype._calcPrevVisibleItemIndex=function(){var t=this._getCurrScroll()-1,e=this._calcItemIndex(t);return e<0?0:e},h.prototype._calcNextVisibleItemIndex=function(){var t=this._getCurrViewportSize(),e=this._getCurrScroll()+t,o=this._calcItemIndex(e),n=this._getSizes();return o<0?n.length-1:o},h.prototype._calcItemIndex=function(t){for(var e=this._getSizes(),o=0;o<e.length;o++){if(t<=e[o].end)return o}return-1},h.prototype._convertScrollLogicalToBrowser=function(t){var e=t;if(this._bRtl&&this._isHorizontal())if(this._bAgentGecko||this._bAgentSafari&&this._agentVersion>=10)e=-t;else if(this._bAgentWebkit||this._bAgentSafari&&this._agentVersion<10){var o=this._contentContainer,n=this._overflowContainer;e=o.offsetWidth-n.offsetWidth-t}return e},h.prototype._convertScrollBrowserToLogical=function(t){return this._convertScrollLogicalToBrowser(t)},h._SCROLL_SPEED=1.1,h._SWIPE_THRESHOLD=.33,t.__registerWidget("oj.ojConveyorBelt",e.oj.baseComponent,{defaultElement:"<div>",widgetEventPrefix:"oj",options:{orientation:"horizontal",arrowVisibility:"auto",contentParent:null},_ComponentCreate:function(){this._super(),this.element.addClass("oj-conveyorbelt oj-component"),this.options.disabled&&i.warn("JET ConveyorBelt: 'disabled' property not supported"),this._setup()},refresh:function(){this._super();var t,e="rtl"===this._GetReadingDirection(),o=this._bRTL!==e;o||(t=this._cbCommon.getScroll()),this._destroyCBCommon(),this._setup(),o||this._cbCommon.setScroll(t,!0)},_NotifyShown:function(){this._super(),this._needsSetup?this._setup():this._cbCommon&&this._cbCommon.handleResize()},_NotifyAttached:function(){this._super(),this._needsSetup?this._setup():this._cbCommon&&this._cbCommon.handleResize()},_setup:function(){var o=this,i=this.element,s=this.options,l=s.orientation;if("vertical"===l?i.addClass("oj-conveyorbelt-vertical"):i.removeClass("oj-conveyorbelt-vertical"),this._canCalculateSizes()){if(this._needsSetup=null,this._bRTL="rtl"===this._GetReadingDirection(),!this._cbCommon){var a=null,c=null,u=null,_=null,d=null;"vertical"!==l?(a="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",c="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",u=this._createIcon("oj-conveyorbelt-overflow-icon oj-start"),_=this._createIcon("oj-conveyorbelt-overflow-icon oj-end"),d=this._animateScrollLeft):(a="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",c="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",u=this._createIcon("oj-conveyorbelt-overflow-icon oj-top"),_=this._createIcon("oj-conveyorbelt-overflow-icon oj-bottom"),d=this._animateScrollTop);var v={};"auto"===s.arrowVisibility?v.arrowVisibility="phone"===r.getDeviceRenderMode()?"hidden":"visible":v.arrowVisibility=s.arrowVisibility,v.prevButtonStyleClass=a,v.nextButtonStyleClass=c,v.prevButtonIcon=u,v.nextButtonIcon=_;var f={overflowContainerStyleClass:"oj-conveyorbelt-overflow-container",contentContainerStyleClass:"oj-conveyorbelt-content-container",itemStyleClass:"oj-conveyorbelt-item",hiddenStyleClass:"oj-helper-hidden"},S={addResizeListener:function(e,o){t.DomUtils.addResizeListener(e,o,25)}};S.removeResizeListener=t.DomUtils.removeResizeListener,S.addStyleClassName=this._addStyleClassName,S.removeStyleClassName=this._removeStyleClassName,S.hasStyleClassName=this._hasStyleClassName,S.filterContentElements=function(t){return o._filterContentElements(t)},S.subtreeDetached=n.subtreeDetached,S.subtreeAttached=n.subtreeAttached,S.addBusyState=function(t){return o._addBusyState(t)},"enabled"!==r.getAutomationMode()&&(S.scrollFunc=d);var p=null;s.contentParent&&(p=e(s.contentParent)[0]);var m=t.AgentUtils.getAgentInfo(navigator.userAgent);this._cbCommon=new h(i[0],l,p,this._bRTL,v,S,f,m)}this._cbCommon.setup();for(var y=i.find(".oj-conveyorbelt-overflow-indicator"),C=0;C<y.length;C++)this._setupButtonMouseStyles(e(y[C]))}else this._needsSetup=!0},_destroy:function(){this._destroyCBCommon(),this.element.removeClass("oj-conveyorbelt oj-component oj-conveyorbelt-vertical"),this._super()},_setOption:function(t,e,o){var n=!1,s=this.options;switch(t){case"containerParent":case"arrowVisibility":n=!0;break;case"orientation":n=s.orientation!==e;break;case"disabled":i.warn("JET ConveyorBelt: 'disabled' property not supported")}n&&this._destroyCBCommon(),this._super(t,e,o),n&&this._setup()},_destroyCBCommon:function(){var t=this._cbCommon;t&&(this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace),t.destroy()),this._cbCommon=null},_canCalculateSizes:function(){var t=document.createElement("div"),e=t.style;e.width="10px",e.height="10px",e["-webkit-flex"]="0 0 auto",e.flex="0 0 auto";var o=this.element[0];o.appendChild(t);var n=!1;try{n=t.offsetWidth>0&&t.offsetHeight>0}catch(t){}return o.removeChild(t),n},_setupButtonMouseStyles:function(t){this._AddHoverable({element:t,afterToggle:function(e){"mouseenter"===e?t.removeClass("oj-default"):"mouseleave"===e&&t.addClass("oj-default")}}),this._AddActiveable({element:t,afterToggle:function(e){"mousedown"===e||"touchstart"===e||"mouseenter"===e?t.removeClass("oj-default"):"mouseup"!==e&&"touchend"!==e&&"touchcancel"!==e&&"mouseleave"!==e||t.addClass("oj-default")}})},_createIcon:function(t){var e=document.createElement("span");e.setAttribute("class","oj-component-icon "+t);var o=document.createElement("div");return o.setAttribute("class","oj-conveyorbelt-overflow-button"),o.appendChild(e),o},_animateScrollLeft:function(t,o,n,i){var s={};s.scrollLeft=o,e(t).animate(s,n,"swing",i)},_animateScrollTop:function(t,o,n,i){var s={};s.scrollTop=o,e(t).animate(s,n,"swing",i)},_addStyleClassName:function(t,o){e(t).addClass(o)},_removeStyleClassName:function(t,o){e(t).removeClass(o)},_hasStyleClassName:function(t,o){return e(t).hasClass(o)},_filterContentElements:function(t){for(var e=[],o=0;o<t.length;o++){var n=t[o];this._hasStyleClassName(n,"oj-helper-detect-expansion")||this._hasStyleClassName(n,"oj-helper-detect-contraction")||e.push(n)}return e},_addBusyState:function(t){var e=this.element,o=s.getContext(e[0]).getBusyContext(),n="ConveyorBelt";n+=" (id='"+e.attr("id")+"')";var i={description:n+=": "+t};return o.addBusyState(i)},getNodeBySubId:function(t){if(null==t)return this.element[0];var e=t.subId;return"oj-conveyorbelt-start-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:"oj-conveyorbelt-end-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:"oj-conveyorbelt-bottom-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null},getSubIdByNode:function(t){for(var e=this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}),o=this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}),n=this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}),i=this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}),s=t,r=this.element[0];s&&s!==r;){if(s===e)return{subId:"oj-conveyorbelt-start-overflow-indicator"};if(s===o)return{subId:"oj-conveyorbelt-end-overflow-indicator"};if(s===n)return{subId:"oj-conveyorbelt-top-overflow-indicator"};if(s===i)return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};s=s.parentElement}return null},scrollElementIntoView:function(t){var e=this._cbCommon._getCurrViewportSize();if(this._cbCommon._isHorizontal()){var o=this.widget().find(".oj-conveyorbelt-overflow-container")[0].scrollLeft;t.offsetLeft+t.offsetWidth>=o+e?this.widget().find(".oj-conveyorbelt-overflow-container")[0].scrollLeft=t.offsetLeft+t.offsetWidth-e:t.offsetLeft<o&&(this.widget().find(".oj-conveyorbelt-overflow-container")[0].scrollLeft=t.offsetLeft)}else{var n=this.widget().find(".oj-conveyorbelt-overflow-container")[0].scrollTop;t.offsetTop+t.offsetHeight>=n+e?this.widget().find(".oj-conveyorbelt-overflow-container")[0].scrollTop=t.offsetTop+t.offsetHeight-e:t.offsetTop<n&&(this.widget().find(".oj-conveyorbelt-overflow-container")[0].scrollTop=t.offsetTop)}}}),n.setDefaultOptions({ojConveyorBelt:{arrowVisibility:n.createDynamicPropertyGetter(function(){return(o.parseJSONFromFontFamily("oj-conveyorbelt-option-defaults")||{}).arrowVisibility})}}),l.extension._WIDGET_NAME="ojConveyorBelt",t.CustomElementBridge.register("oj-conveyor-belt",{metadata:l})});