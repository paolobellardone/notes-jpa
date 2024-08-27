/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","jquery","hammerjs","ojs/ojcontext","ojs/ojthemeutils","ojs/ojcomponentcore","ojs/ojlogger","ojs/ojdomutils","ojs/ojfocusutils","ojs/ojjquery-hammer","ojs/ojpopupcore"],function(e,t,a,r,n,o,s,_,i,E,l,u){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,E=E&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E;const T={};t._registerLegacyNamespaceProp("OffcanvasUtils",T),T._DATA_EDGE_KEY="oj-offcanvasEdge",T._DATA_OFFCANVAS_KEY="oj-offcanvas",T._DATA_MEDIA_QUERY_KEY="oj-mediaQueryListener",T._DATA_HAMMER_KEY="oj-offcanvasHammer",T.SELECTOR_KEY="selector",T.CONTENT_KEY="content",T.EDGE_START="start",T.EDGE_END="end",T.EDGE_TOP="top",T.EDGE_BOTTOM="bottom",T.DISPLAY_MODE_KEY="displayMode",T.DISPLAY_MODE_PUSH="push",T.DISPLAY_MODE_OVERLAY="overlay",T.DISPLAY_MODE_REFLOW="reflow",T.MODALITY_KEY="modality",T.MODALITY_NONE="none",T.MODALITY_MODAL="modal",T.DISMISS_HANDLER_KEY="_dismissHandler",T.OPEN_PROMISE_KEY="_openPromise",T.CLOSE_PROMISE_KEY="_closePromise",T.GLASS_PANE_KEY="_glassPane",T.SURROGATE_KEY="_surrogate",T.ANIMATE_WRAPPER_KEY="_animateWrapper",T.ANIMATE_KEY="_animate",T.SURROGATE_ATTR="data-oj-offcanvas-surrogate-id",T.OUTER_WRAPPER_SELECTOR="oj-offcanvas-outer-wrapper",T.OPEN_SELECTOR="oj-offcanvas-open",T.TRANSITION_SELECTOR="oj-offcanvas-transition",T.REFLOW_WRAPPER_SELECTOR="oj-offcanvas-pin",T.REFLOW_TRANSITION_SELECTOR="oj-offcanvas-pin-transition",T.GLASSPANE_SELECTOR="oj-offcanvas-glasspane",T.GLASSPANE_DIM_SELECTOR="oj-offcanvas-glasspane-dim",T.VETO_BEFOREOPEN_MSG="ojbeforeopen veto",T.VETO_BEFORECLOSE_MSG="ojbeforeclose veto",T._shiftSelector={start:"oj-offcanvas-shift-start",end:"oj-offcanvas-shift-end",top:"oj-offcanvas-shift-down",bottom:"oj-offcanvas-shift-up"},T._drawerSelector={start:"oj-offcanvas-start",end:"oj-offcanvas-end",top:"oj-offcanvas-top",bottom:"oj-offcanvas-bottom"},T._getDisplayMode=function(e){var t=e[T.DISPLAY_MODE_KEY];return t!==T.DISPLAY_MODE_OVERLAY&&t!==T.DISPLAY_MODE_PUSH&&t!==T.DISPLAY_MODE_REFLOW&&(t=o.getCachedCSSVarValues(["--oj-private-off-canvas-global-display-mode-default"])[0]),t},T._getDrawer=function(e){return a(e[T.SELECTOR_KEY])},T._isModal=function(e){return e[T.MODALITY_KEY]===T.MODALITY_MODAL},T._isOpen=function(e){return e.hasClass(T.OPEN_SELECTOR)},T._getOuterWrapper=function(e){return e.closest("."+T.OUTER_WRAPPER_SELECTOR)},T._getAnimateWrapper=function(e){var t=T._getDrawer(e);return T._noInnerWrapper(e)||e[T.DISPLAY_MODE_KEY]===T.DISPLAY_MODE_OVERLAY?t:e[T.ANIMATE_WRAPPER_KEY]?t.closest("."+e[T.ANIMATE_WRAPPER_KEY]):t.parent()},T._getShiftSelector=function(e){var t=T._shiftSelector[e];if(!t)throw new Error("Invalid edge: "+e);return t},T._isRTL=function(){return"rtl"===i.getReadingDirection()},T._setTransform=function(e,t){e.css({"-webkit-transform":t,transform:t})},T._getTranslationX=function(e,t,a){var r=e===T.EDGE_END;return(T._isRTL()||a)&&(r=!r),"translate3d("+(r?"-":"")+t+", 0, 0)"},T._setTranslationX=function(e,t,a){T._setTransform(e,T._getTranslationX(t,a,!1))},T._getTranslationY=function(e,t){return"translate3d(0, "+(e===T.EDGE_BOTTOM?"-":"")+t+", 0)"},T._setTranslationY=function(e,t,a){T._setTransform(e,T._getTranslationY(t,a))},T._getTranslationY2=function(e,t){return"translate3d(0, "+(t?"-":"")+e+", 0)"},T._setAnimateClass=function(e,t,a,r,n){t.addClass(T.TRANSITION_SELECTOR),T._setTransform(t,r),a.addClass(T.TRANSITION_SELECTOR),T._setTransform(a,n)},T._saveEdge=function(e){var t=e.edge,r=T._getDrawer(e);return t&&t.length||(t=r.hasClass("oj-offcanvas-start")?T.EDGE_START:r.hasClass("oj-offcanvas-end")?T.EDGE_END:r.hasClass("oj-offcanvas-top")?T.EDGE_TOP:r.hasClass("oj-offcanvas-bottom")?T.EDGE_BOTTOM:T.EDGE_START),a.data(r[0],T._DATA_EDGE_KEY,t),t},T._getEdge=function(e){return a.data(e[0],T._DATA_EDGE_KEY)},T._toggleClass=function(e,t,a){var r=e[T.DISPLAY_MODE_KEY],n=T._getDrawer(e),o=T.OPEN_SELECTOR,s=r===T.DISPLAY_MODE_OVERLAY?T.TRANSITION_SELECTOR+" oj-offcanvas-overlay":T.TRANSITION_SELECTOR;if(a)n.addClass(o),void 0===e[T.ANIMATE_KEY]&&t.addClass(s);else{e.makeFocusable&&i.makeFocusable({element:n,remove:!0});var _=e.tabindex;void 0===_?n.removeAttr("tabindex"):n.attr("tabindex",_),n.removeClass(o),t.removeClass(s)}},T._setFocus=function(e){var t,a=e,r=T._getDrawer(a),n=r.find("[autofocus]");if(0===n.length&&(n=r.find(":tabbable")),0===n.length){var o=r.attr("tabindex");void 0!==o&&(a.tabindex=o),r.attr("tabindex","-1"),t=r,i.makeFocusable({element:r,applyHighlight:!0}),a.makeFocusable=!0}else t=n[0];E.focusElement(t)},T._isAutoDismiss=function(e){return"none"!==e.autoDismiss},T._calcTransitionTime=function(e){for(var t=e.css("transitionProperty").split(","),a=e.css("transitionDelay").split(","),r=e.css("transitionDuration").split(","),n=0,o=0;o<t.length;o++){var s=r[o%r.length],_=s.indexOf("ms")>-1?parseFloat(s):1e3*parseFloat(s);if(_>0){var i=a[o%a.length],E=i.indexOf("ms")>-1?parseFloat(i):1e3*parseFloat(i);n=Math.max(n,E+_)}}return n+100},T._onTransitionEnd=function(e,t){var a,r="transitionend.oc webkitTransitionEnd.oc",n=function(){a&&(clearTimeout(a),a=null),e.off(r,n),t(e)};e.on(r,n),a=setTimeout(n,T._calcTransitionTime(e))},T._closeWithCatch=function(e){T.close(e).catch(function(e){_.warn("Offcancas close failed: "+e)})},T._registerCloseHandler=function(e){var r=e;if(T._unregisterCloseHandler(r),T._isAutoDismiss(r)){var n=T._getDrawer(r),o=function(e){var o=e.target;i.isChromeEvent(e)||"focus"===e.type&&!a(o).is(":focusable")||(null!=a.data(n[0],T._DATA_OFFCANVAS_KEY)?t.ZOrderUtils.hasModalDialogOpen()||i.isLogicalAncestorOrSelf(n[0],o)||T._closeWithCatch(r):T._unregisterCloseHandler(r))};r[T.DISMISS_HANDLER_KEY]=o;var s=document.documentElement;i.isTouchSupported()&&s.addEventListener("touchstart",o,{passive:!0,capture:!0}),s.addEventListener("mousedown",o,!0),s.addEventListener("focus",o,!0)}T._registerSwipeHandler(r)},T._unregisterCloseHandler=function(e){var t=e,a=t[T.DISMISS_HANDLER_KEY];if(a){var r=document.documentElement;i.isTouchSupported()&&r.removeEventListener("touchstart",a,{passive:!0,capture:!0}),r.removeEventListener("mousedown",a,!0),r.removeEventListener("focus",a,!0),delete t[T.DISMISS_HANDLER_KEY],t[T.DISMISS_HANDLER_KEY]=null}T._unregisterSwipeHandler(t)},T._registerSwipeHandler=function(e){if(i.isTouchSupported()){var t,n,o,s=e,_=s[T.SELECTOR_KEY],E=a(_),l=T._getEdge(E);l===T.EDGE_START&&!T._isRTL()||l===T.EDGE_END&&T._isRTL()?(n={recognizers:[[r.Swipe,{direction:r.DIRECTION_LEFT}]]},t="swipeleft"):l===T.EDGE_START&&T._isRTL()||l===T.EDGE_END&&!T._isRTL()?(n={recognizers:[[r.Swipe,{direction:r.DIRECTION_RIGHT}]]},t="swiperight"):l===T.EDGE_TOP?(n={recognizers:[[r.Swipe,{direction:r.DIRECTION_UP}]]},t="swipeup"):l===T.EDGE_BOTTOM&&(n={recognizers:[[r.Swipe,{direction:r.DIRECTION_DOWN}]]},t="swipedown"),o=E.ojHammer(n).on(t,function(e){e.target===E[0]&&(e.preventDefault(),T._closeWithCatch(s))}),a.data(a(_)[0],T._DATA_HAMMER_KEY,{event:t,hammer:o})}},T._unregisterSwipeHandler=function(e){var t=T._getDrawer(e);if(t.length>0){var r=a.data(t[0],T._DATA_HAMMER_KEY);r&&r.hammer.off(r.event)}},T._isFixed=function(e){return T._getOuterWrapper(e).hasClass("oj-offcanvas-page")},T._isReflow=function(e){return e[T.DISPLAY_MODE_KEY]===T.DISPLAY_MODE_REFLOW},T._noInnerWrapper=function(e){return e[T.CONTENT_KEY]||T._isFixed(T._getDrawer(e))||T._isReflow(e)},T._toggleOuterWrapper=function(e,r,n){var o=T._getEdge(r),s=T._getShiftSelector(o),_=T._getOuterWrapper(r);t.Assert.assertPrototype(_,a);var i=_.hasClass(s);return n||_.toggleClass(s,!i),i},T._afterCloseHandler=function(e){var t=T._getAnimateWrapper(e);if(""===t.get(0).style.transform){T._unregisterCloseHandler(e);var r=T._getDrawer(e),n=T._isReflow(e),o=null;try{o=a.data(r[0],T._DATA_OFFCANVAS_KEY)}catch(e){}o===e&&(n?r.removeClass(T.OPEN_SELECTOR+" "+T.REFLOW_TRANSITION_SELECTOR):T._toggleClass(e,t,!1),T._removeModality(e),n&&T._getOuterWrapper(r).removeClass(T.REFLOW_WRAPPER_SELECTOR),r.trigger("ojclose",e),a.removeData(r[0],T._DATA_OFFCANVAS_KEY))}},T._setVisible=function(e,t,r){var n=a(e),o=!!t;o&&T._isOpen(n)&&T._close(e,!1),n.toggleClass(T._drawerSelector[r],!o)},T.setupResponsive=function(e){var t=e.query;if(null!==t){var r=e[T.SELECTOR_KEY],n=window.matchMedia(t),o=T._saveEdge(e),s=function(e){T._setVisible(r,e.matches,o)};n.addListener(s),T._setVisible(r,n.matches,o),a.data(a(r)[0],T._DATA_MEDIA_QUERY_KEY,{mqList:n,mqListener:s})}},T.tearDownResponsive=function(e){var t=T._getDrawer(e),r=a.data(t[0],T._DATA_MEDIA_QUERY_KEY);r&&(r.mqList.removeListener(r.mqListener),a.removeData(t[0],T._DATA_MEDIA_QUERY_KEY))},T._openPush=function(e,r,n,o){var s=T._getDrawer(e),_=a(e[T.CONTENT_KEY]);t.Assert.assertPrototype(_,a);var i,E=!0,l=e.size,u=function(t){t.removeClass(T.TRANSITION_SELECTOR),E?E=!1:(o!==T.EDGE_END&&o!==T.EDGE_BOTTOM||T._setFocus(e),s.trigger("ojopen",e),T._registerCloseHandler(e),r(!0))};s.addClass(T.OPEN_SELECTOR),window.setTimeout(function(){o===T.EDGE_START||o===T.EDGE_END?(void 0===l&&(l=s.outerWidth(!0)+"px"),i=T._getTranslationX(o,l,!1)):(void 0===l&&(l=s.outerHeight(!0)+"px"),T._setTransform(s,T._getTranslationY2(l,o===T.EDGE_TOP)),i=T._getTranslationY2(l,o!==T.EDGE_TOP)),window.setTimeout(function(){T._setAnimateClass(e,s,_,"translate3d(0, 0, 0)",i),T._toggleOuterWrapper(e,s,!1),T._onTransitionEnd(_,u),T._onTransitionEnd(s,u)},0)},0),T._applyModality(e,s),o!==T.EDGE_START&&o!==T.EDGE_TOP||T._setFocus(e)},T._openOverlay=function(e,t,a,r){var n=T._getDrawer(e);T._toggleClass(e,n,!0);var o=e.size;o&&(r===T.EDGE_START||r===T.EDGE_END?T._setTransform(n,T._getTranslationX(r,o,!0)):T._setTransform(n,T._getTranslationY(r,o))),window.setTimeout(function(){T._toggleOuterWrapper(e,n,!1)},20),T._applyModality(e,n),r!==T.EDGE_START&&r!==T.EDGE_TOP||T._setFocus(e),T._onTransitionEnd(n,function(){n.removeClass(T.TRANSITION_SELECTOR),r!==T.EDGE_END&&r!==T.EDGE_BOTTOM||T._setFocus(e),n.trigger("ojopen",e),T._registerCloseHandler(e),t(!0)})},T._closePush=function(e,t,r,n,o){var s=a(e[T.CONTENT_KEY]),_=!0,i=function(){_||(s.removeClass(T.TRANSITION_SELECTOR),T._setTransform(s,""),T._afterCloseHandler(e),t(!0)),_=!1};T._setTransform(n,""),T._setTransform(s,""),T._toggleOuterWrapper(e,n,!1),T._isModal(e)&&e[T.GLASS_PANE_KEY].removeClass(T.GLASSPANE_DIM_SELECTOR),o?(s.addClass(T.TRANSITION_SELECTOR),n.addClass(T.TRANSITION_SELECTOR),T._onTransitionEnd(n,i),T._onTransitionEnd(s,i)):(_=!1,i())},T._closeOverlay=function(e,t,a,r,n){var o=function(){T._afterCloseHandler(e),t(!0)};T._toggleOuterWrapper(e,r,!1),T._isModal(e)&&e[T.GLASS_PANE_KEY].removeClass(T.GLASSPANE_DIM_SELECTOR),n?(r.addClass(T.TRANSITION_SELECTOR),T._onTransitionEnd(r,o)):o()},T._openOldDrawer=function(e,r,n,o,s){var _,i=T._getDrawer(e),E=T._getAnimateWrapper(e);t.Assert.assertPrototype(E,a),T._toggleClass(e,E,!0),o===T.EDGE_START||o===T.EDGE_END?(_=i.outerWidth(!0)+"px",s===T.DISPLAY_MODE_PUSH&&T._setTranslationX(E,o,_)):(_=i.outerHeight(!0)+"px",s===T.DISPLAY_MODE_PUSH&&T._setTranslationY(E,o,_)),window.setTimeout(function(){T._toggleOuterWrapper(e,i,!1)},10),T._applyModality(e,i),o!==T.EDGE_START&&o!==T.EDGE_TOP||T._setFocus(e),T._onTransitionEnd(E,function(){E.removeClass(T.TRANSITION_SELECTOR),o!==T.EDGE_END&&o!==T.EDGE_BOTTOM||T._setFocus(e),i.trigger("ojopen",e),T._registerCloseHandler(e),r(!0)})},T._closeOldDrawer=function(e,t,a,r,n){var o=e[T.DISPLAY_MODE_KEY],s=T._getAnimateWrapper(e),_=function(){T._afterCloseHandler(e),t(!0)};o===T.DISPLAY_MODE_PUSH&&T._setTransform(s,""),T._toggleOuterWrapper(e,r,!1),T._isModal(e)&&e[T.GLASS_PANE_KEY].removeClass(T.GLASSPANE_DIM_SELECTOR),n?(s.addClass(T.TRANSITION_SELECTOR),T._onTransitionEnd(s,_)):_()},T.open=function(e){var r,o=T._getDrawer(e),_=a.data(o[0],T._DATA_OFFCANVAS_KEY);if(_){if(_[T.CLOSE_PROMISE_KEY])return _[T.CLOSE_PROMISE_KEY];if(_[T.OPEN_PROMISE_KEY])return _[T.OPEN_PROMISE_KEY]}var i=!1,E=new Promise(function(s,_){t.Assert.assertPrototype(o,a);var E=T._saveEdge(e),l=a.Event("ojbeforeopen");if(o.trigger(l,e),!1===l.result)return _(T.VETO_BEFOREOPEN_MSG),void(i=!0);var u=T._getDisplayMode(e),d=T._isReflow(e);!d||E!==T.EDGE_TOP&&E!==T.EDGE_BOTTOM||(u=T.DISPLAY_MODE_PUSH);var c=a.extend({},e);if(c[T.DISPLAY_MODE_KEY]=u,a.data(o[0],T._DATA_OFFCANVAS_KEY,c),e[T.CONTENT_KEY]){if(!T._noInnerWrapper(e))throw new Error("Error: Both main content selector and the inner wrapper <div class='oj-offcanvas-inner-wrapper'> are provided. Please remove the inner wrapper.");var f=n.getContext(o[0]).getBusyContext();r=f.addBusyState({description:"The offcanvas selector ='"+e[T.SELECTOR_KEY]+"' doing the open animation."}),d||(u===T.DISPLAY_MODE_PUSH?T._openPush(c,s,_,E):T._openOverlay(c,s,_,E))}else T._openOldDrawer(c,s,_,E,u)});if(E=E.then(function(e){return r&&r(),e},function(e){throw r&&r(),e}),!i){var l=a.data(o[0],T._DATA_OFFCANVAS_KEY);l&&(l[T.OPEN_PROMISE_KEY]=E,s.subtreeShown(o[0]))}return E},T.close=function(e){return T._close(e[T.SELECTOR_KEY],void 0===e[T.ANIMATE_KEY])},T._close=function(e,r){var o=a(e);t.Assert.assertPrototype(o,a);var _,i=a.data(o[0],T._DATA_OFFCANVAS_KEY);if(i&&i[T.CLOSE_PROMISE_KEY])return i[T.CLOSE_PROMISE_KEY];var E=!1,l=new Promise(function(t,s){if(T._isOpen(o)){null==i&&t(!0),e!==i[T.SELECTOR_KEY]&&t(!0),T._toggleOuterWrapper(i,o,!0)||t(!0);var l=a.Event("ojbeforeclose");if(o.trigger(l,i),!1===l.result)return s(T.VETO_BEFORECLOSE_MSG),void(E=!0);if(r){var u=n.getContext(o[0]).getBusyContext();_=u.addBusyState({description:"The offcanvas selector ='"+i[T.SELECTOR_KEY]+"' doing the close animation."})}var d=i[T.DISPLAY_MODE_KEY];i[T.CONTENT_KEY]?d===T.DISPLAY_MODE_PUSH?T._closePush(i,t,s,o,r):T._closeOverlay(i,t,s,o,r):T._closeOldDrawer(i,t,s,o,r)}else t(!0)});return l=l.then(function(e){return _&&_(),e},function(e){throw _&&_(),e}),E||(i=a.data(o[0],T._DATA_OFFCANVAS_KEY))&&(i[T.CLOSE_PROMISE_KEY]=l,s.subtreeHidden(o[0])),l},T.toggle=function(e){var r=T._getDrawer(e);return t.Assert.assertPrototype(r,a),T._isOpen(r)?T.close(e):T.open(e)},T._addGlassPane=function(e){var t=a("<div>");return t.addClass(T.GLASSPANE_SELECTOR),t.attr("role","presentation"),t.attr("aria-hidden","true"),t.appendTo(e.parent()),t.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus",function(e){e.stopPropagation(),e.preventDefault()}),t},T._createSurrogate=function(e){var t,r=a("<span></span>").css("display","none").attr("aria-hidden","true"),n=e.attr("id");return n?(t=[n,"surrogate"].join("_"),r.attr("id",t)):t=r.uniqueId(),r.insertBefore(e),e.attr(T.SURROGATE_ATTR,t),r},T._swapOrder=function(e,t){e[T.SURROGATE_KEY]=T._createSurrogate(t),t.appendTo(t.parent())},T._restoreOrder=function(e){var t=T._getDrawer(e),a=e[T.SURROGATE_KEY];t&&a&&t.attr(T.SURROGATE_ATTR)===a.attr("id")&&(t.insertAfter(a),t.removeAttr(T.SURROGATE_ATTR),a.remove())},T._applyModality=function(e,t){var r=e;T._isModal(r)&&(r[T.GLASS_PANE_KEY]=T._addGlassPane(t),T._swapOrder(r,t),a(r[T.CONTENT_KEY]).attr("aria-hidden","true"),window.setTimeout(function(){r[T.GLASS_PANE_KEY].addClass(T.GLASSPANE_DIM_SELECTOR)},0))},T._removeModality=function(e){T._isModal(e)&&(e[T.GLASS_PANE_KEY].remove(),T._restoreOrder(e),a(e[T.CONTENT_KEY]).removeAttr("aria-hidden"))},T.setupPanToReveal=function(e){var o,s,_,i,E,l,u,d,c,f,O,p,A,S,g=e;if(null==a(g).attr("oj-data-pansetup")){a(g).attr("oj-data-pansetup","true"),g.displayMode="push",o=T._getDrawer(g),_=T._getOuterWrapper(o),E={touchAction:"pinch-zoom",recognizers:[[r.Pan,{direction:r.DIRECTION_HORIZONTAL}]]};var D=t.AgentUtils.getAgentInfo();D.os!==t.AgentUtils.OS.IOS&&D.os!==t.AgentUtils.OS.ANDROID||(E.inputClass=r.TouchInput),l=!1,null==(O=g.edge)&&(O=o.hasClass("oj-offcanvas-start")?"start":"end"),S=T._isRTL(),a(_).ojHammer(E).on("panstart",function(e){switch(u=null,e.gesture.direction){case r.DIRECTION_LEFT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&(u=S?"end":"start");break;case r.DIRECTION_RIGHT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&(u=S?"start":"end")}null!==u&&(e.gesture.angle<0&&(e.gesture.deltaX<-100||e.gesture.deltaY<-100)||(d={direction:u,distance:Math.abs(e.gesture.deltaX)},c=a.Event("ojpanstart"),o.trigger(c,d),c.isDefaultPrevented()||(n.getContext(_.get(0)).getBusyContext().whenReady().then(function(){o.length>0&&!isNaN(parseInt(o[0].style.width,10))&&(o[0].style.width="auto"),s=o.outerWidth(),g.size=s,s>0?l=!0:T._toggleClass(g,i,!1)}),g._closePromise=null,(i=T._getAnimateWrapper(g)).off(".oc"),T._toggleClass(g,i,!0),e.gesture.srcEvent.stopPropagation(),e.gesture.srcEvent.preventDefault(),e.stopPropagation())))}).on("panmove",function(e){l&&(f=e.gesture.deltaX,"start"===u&&f>0&&!S||"start"===u&&f<0&&S||"end"===u&&f<0&&!S||"end"===u&&f>0&&S?T._setTranslationX(i,O,"0px"):(f=Math.abs(f),o.css("width",f),i.removeClass(T.TRANSITION_SELECTOR),T._setTranslationX(i,O,f+"px"),d={direction:u,distance:f},c=a.Event("ojpanmove"),o.trigger(c,d),e.gesture.srcEvent.stopPropagation(),e.stopPropagation()))}).on("panend",function(e){if(l){if(l=!1,f=Math.abs(e.gesture.deltaX),d={distance:f},c=a.Event("ojpanend"),o.trigger(c,d),e.stopPropagation(),!c.isDefaultPrevented())return T._animateWrapperAndDrawer(i,o,O,s,g),a.data(o[0],T._DATA_OFFCANVAS_KEY,g),a.data(o[0],T._DATA_EDGE_KEY,O),void T._registerCloseHandler(g);if("translate3d(0px, 0px, 0px)"===i[0].style.transform)return T._toggleClass(g,i,!1),i.removeClass(T.TRANSITION_SELECTOR),void o.trigger("ojclose",g);p="transitionend webkitTransitionEnd otransitionend oTransitionEnd",A=function(){T._toggleClass(g,i,!1),i.removeClass(T.TRANSITION_SELECTOR),i.off(p,A),o.trigger("ojclose",g)},i.on(p,A),i.addClass(T.TRANSITION_SELECTOR),T._setTranslationX(i,"start","0px")}})}},T._animateWrapperAndDrawer=function(e,a,r,n,o){var s,_,i,E,l,u,d,c,f,O,p,A;if(e.removeClass(T.TRANSITION_SELECTOR),s=Math.round(1e3/60),"none"!==(_=e.css("transform"))){i=_.split("(")[1].split(")")[0].split(",");var S=t.AgentUtils.getAgentInfo(),g="ie"===S.browser&&11===S.browserVersion?12:4;E=parseInt(i[g],10),l=E,u="end"===r?0-n:n,T._isRTL()&&(u=0-u),c=Math.max(1,Math.abs(u-E)/(400/s)),f=(new Date).getTime(),O=function(){l===E||""!==e.get(0).style.transform?(p=(new Date).getTime(),A=Math.max(c,c*Math.max((p-f)/s)),f=p,E<u?E=Math.min(u,E+A):E>u&&(E=Math.max(u,E-A)),T._setTranslationX(e,r,Math.abs(E)+"px"),a.css("width",Math.abs(E)+"px"),E===u?(window.cancelAnimationFrame(d),e.addClass(T.TRANSITION_SELECTOR),a.trigger("ojopen",o)):d=window.requestAnimationFrame(O)):window.cancelAnimationFrame(d)},d=window.requestAnimationFrame(O)}},T.tearDownPanToReveal=function(e){var t=T._getDrawer(e),r=T._getOuterWrapper(t);a(r).off("panstart panmove panend")};const d=T.close,c=T.open,f=T.setupResponsive,O=T.setupPanToReveal,p=T.tearDownResponsive,A=T.tearDownPanToReveal,S=T.toggle,g=T._getOuterWrapper;e._getOuterWrapper=g,e.close=d,e.open=c,e.setupPanToReveal=O,e.setupResponsive=f,e.tearDownPanToReveal=A,e.tearDownResponsive=p,e.toggle=S,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojoffcanvas.js.map