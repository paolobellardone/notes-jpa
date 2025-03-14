/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojlogger","ojs/ojcustomelement-registry"],function(e,t,s){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;const o=function(e){this._description=e,this._addedWaitTs=o._getTs(),this._id=this._addedWaitTs.toString(36)+"_"+Math.random().toString(36)};e._registerLegacyNamespaceProp("BusyState",o),Object.defineProperties(o.prototype,{id:{get:function(){return this._id},enumerable:!0},description:{get:function(){if(this._description)return this._description instanceof Function?this._description():this._description.toString()},enumerable:!0}}),o.prototype.toString=function(){var e="Busy state: [description=",t=this.description;return null!==t&&(e+=t),e+=", elapsed="+(o._getTs()-this._addedWaitTs)+"]"},o._getTs=function(){return window.performance?window.performance.now():(new Date).getTime()};const n=function(e,t){this.Init(e,t)};let i;function r(){return i||(i=new Promise(function(e){window.setImmediate(function(){i=null,e(!0)})})),i}e.Object.createSubclass(n,e.Object,"oj.BusyContext"),e._registerLegacyNamespaceProp("BusyContext",n),n._defaultTimeout=Number.NaN,n.__preactPromisesMap=new Map,n.setDefaultTimeout=function(e){isNaN(e)||(n._defaultTimeout=e)},n.prototype.Init=function(e,t){n.superclass.Init.call(this),this._hostNode=e,this._context=t,this._statesMap=new Map,this._preactSet=new Set,this._mediator={getMasterWhenReadyPromise:function(){return this._masterWhenReadyPromise||(this._masterWhenReadyPromise=new Promise(this._captureWhenReadyPromiseResolver.bind(this))),this._masterWhenReadyPromise},resolveMasterWhenReadyPromise:function(){this._masterWhenReadyPromiseResolver&&this._masterWhenReadyPromiseResolver(!0),this._masterWhenReadyPromise=null,this._masterWhenReadyPromiseResolver=null,this._masterWhenReadyPromiseRejecter=null},rejectMasterWhenReadyPromise:function(e){this._masterWhenReadyPromiseRejecter&&this._masterWhenReadyPromiseRejecter(e),this._masterWhenReadyPromise=null,this._masterWhenReadyPromiseRejecter=null,this._masterWhenReadyPromiseResolver=null},getSlaveTimeoutPromise:function(e,t,s){var o,n=new Promise(function(e,n){o=window.setTimeout(function(){n(t())},s)});return this._slaveTimeoutPromiseTimers.push(o),Promise.race([e,n]).finally(this._clearAllSlaveTimeouts.bind(this))},_clearAllSlaveTimeouts:function(){var e=this._slaveTimeoutPromiseTimers;this._slaveTimeoutPromiseTimers=[];for(var t=0;t<e.length;t++)window.clearTimeout(e[t]);return!0},_captureWhenReadyPromiseResolver:function(e,t){this._masterWhenReadyPromiseResolver=e,this._masterWhenReadyPromiseRejecter=t},_slaveTimeoutPromiseTimers:[]}},n._log=function(e){if(t.option("level")===t.LEVEL_LOG){t.log(">> Busy states: %d",e.size);var s=n._values(e);s.length>0&&t.log(s.join("\n"))}},n._values=function(e){var t=[];return e.forEach(function(e){t.push(e)}),t},n.prototype.addBusyState=function(e){t.log("BusyContext.addBusyState: start scope='%s'",this._getDebugScope());var s=new o(e[n._DESCRIPTION]);return t.log(">> "+s),this._statesMap.set(s.id,s),this._addBusyStateToParent(),t.log("BusyContext.addBusyState: end scope='%s'",this._getDebugScope()),this._removeBusyState.bind(this,s)},n.prototype.dump=function(e){t.info("BusyContext.dump: start scope='%s' %s",this._getDebugScope(),e||"");var s=this._statesMap;t.info(">> Busy states: %d",s.size);var o=n._values(s);o.length>0&&t.info(o.join("\n")),t.info("BusyContext.dump: start scope='%s' %s",this._getDebugScope(),e||"")},n.prototype.getBusyStates=function(){return n._values(this._statesMap)},n.prototype.clear=function(){t.log("BusyContext.clear: start scope='%s'",this._getDebugScope());for(var e=n._values(this._statesMap),s=0;s<e.length;s++){var o=e[s];try{this._removeBusyState(o)}catch(e){t.log("BusyContext.clear: %o",e)}Object.defineProperty(o,n._OJ_RIP,{value:!0,enumerable:!1})}t.log("BusyContext.clear: end scope='%s'",this._getDebugScope())},n.prototype.whenReady=function(e){var s=this._getDebugScope();t.log("BusyContext.whenReady: start, scope='%s', timeout=%d",s,e);var o=this._statesMap,i=this._mediator,r=n._BOOTSTRAP_MEDIATOR.whenReady();const a=i.getMasterWhenReadyPromise();var u=r.then(function(){return t.log("BusyContext.whenReady: bootstrap mediator ready scope=%s",s),this._evalBusyness(),t.log("BusyContext.whenReady: busy states returning master scope=%s",s),a}.bind(this));if(isNaN(e)&&!isNaN(n._defaultTimeout)&&(e=n._defaultTimeout),!isNaN(e)){u=i.getSlaveTimeoutPromise(u,function(){var i,r="whenReady timeout of "+e+"ms expired ";n._log(o);var a=n._values(o);return(i=n._BOOTSTRAP_MEDIATOR.isReady()?new Error(r+"with the following busy states: "+a.join(", ")):new Error(r+'while the application is loading. Busy state enabled by setting the "window.oj_whenReady = true;" global variable. Application bootstrap busy state is released by calling "oj.Context.getPageContext().getBusyContext().applicationBootstrapComplete();".')).busyStates=a,t.log("BusyContext.whenReady: rejected scope='%s'\n%s",s,i.message),i},e)}return t.log("BusyContext.whenReady: end scope='%s'",this._getDebugScope()),u},n.prototype.isReady=function(){t.log("BusyContext.isReady: start scope='%s'",this._getDebugScope());var e=!1;return n._BOOTSTRAP_MEDIATOR.isReady()&&!this._doubleCheckPend&&(e=this._hasNoBusyStates(),n._log(this._statesMap)),t.log("BusyContext.isReady: end scope='%s'",this._getDebugScope()),e},n.prototype._removeBusyState=function(e){var s=this._getDebugScope();if(t.log("BusyContext._removeBusyState: start scope='%s'",s),e[n._OJ_RIP])t.log("Busy state has been forcefully resolved via clear:\n"+e);else{if(!this._statesMap.delete(e.id))throw new Error("Busy state has already been resolved:\n"+e);t.log("BusyContext._removeBusyState: resolving busy state:\n"+e),this._evalBusyness(),t.log("BusyContext._removeBusyState: end scope='%s'",s)}},n.prototype._evalBusyness=function(){var e=this._getDebugScope();t.log("BusyContext._evalBusyness: begin scope='%s'",e),this._hasNoBusyStates()&&!this._doubleCheckPend&&(t.log("BusyContext._evalBusyness: macrotask to double-check busyness, scope='%s'",e),this._doubleCheckPend=!0,r().then(this._doubleCheckBusyness.bind(this))),t.log("BusyContext._evalBusyness: end scope='%s'",e)},n.prototype._hasNoBusyStates=function(){return this._syncDebounceBusyness(),0===this._statesMap.size},n.prototype._syncDebounceBusyness=function(){n.__preactPromisesMap.forEach((e,t)=>{if(t&&!this._preactSet.has(t)){this._preactSet.add(t);const s=this.addBusyState({description:e});t.then(()=>{this._preactSet.delete(t),s()})}})},n.prototype._doubleCheckBusyness=function(){var e=this._getDebugScope();t.log("BusyContext._doubleCheckBusyness: begin scope='%s'",e);try{n._deliverThrottledUpdates()}catch(e){return t.error("Fatal exception delivering binding updates: %o",e),this._doubleCheckPend=!1,void this._rejectWhenReadyPromises(e)}this._doubleCheckPend=!1,this._hasNoBusyStates()?(t.log("BusyContext._doubleCheckBusyness: resolving whenReady promises"),this._mediator.resolveMasterWhenReadyPromise(),this._resolveBusyStateForParent()):n._log(this._statesMap),t.log("BusyContext._doubleCheckBusyness: end scope='%s'",e)},n.prototype.applicationBootstrapComplete=function(){var e=this._getDebugScope();t.log("BusyContext.applicationBootstrapComplete: begin scope='%s'",e),n._BOOTSTRAP_MEDIATOR.notifyComplete(),t.log("BusyContext.applicationBootstrapComplete: end scope='%s'",e)},n.prototype._getParentBusyContext=function(){var e=this._context.getParentContext();return e?e.getBusyContext():null},n.prototype._addBusyStateToParent=function(){if(!this._parentNotified){this._parentNotified=!0;var e=this._getParentBusyContext();if(e){var t={};t[n._DESCRIPTION]=this.toString.bind(this),this._parentResolveCallback=e.addBusyState(t)}}},n.prototype._resolveBusyStateForParent=function(){this._parentNotified=!1,this._parentResolveCallback&&(this._parentResolveCallback(),this._parentResolveCallback=null)},n.prototype._rejectWhenReadyPromises=function(e){this._mediator.rejectMasterWhenReadyPromise(e);const t=this._getParentBusyContext();t&&(t._rejectWhenReadyPromises(e),this._resolveBusyStateForParent())},n.prototype._getCompoundDescription=function(){return"["+n._values(this._statesMap).join(", ")+"]"},n.prototype._getDebugScope=function(){function e(e){var t="undefined";if(e)if(e.id&&e.id.length>0)t="#"+e.id;else{t=e.nodeName,e.hasAttribute("data-oj-context")&&(t+="[data-oj-context]");var s=e.getAttribute("class");s&&(t+="."+s.split(" ").join("."))}return t}return this._debugScope||(this._hostNode?this._debugScope=e(this._hostNode.parentElement)+" > "+e(this._hostNode):this._debugScope="page"),this._debugScope},n.prototype.toString=function(){var e="Busy Context: [scope=";return e+=this._getDebugScope(),e+=" states="+this._getCompoundDescription()+"]"},n._deliverThrottledUpdates=function(){e.ComponentBinding&&e.ComponentBinding.deliverChanges()},n._DESCRIPTION="description",n._OJ_RIP="__ojRip",n._BOOTSTRAP_MEDIATOR=new function(){var e,t,s;"undefined"!=typeof window&&(e=window.oj_whenReady),this.whenReady=function(){return t||(t=e?new Promise(function(e){s=e}):Promise.resolve(!0))},this.isReady=function(){return!e},this.notifyComplete=function(){s?r().then(function(){e=!1,"function"==typeof s&&s(!0),s=null}):e=!1}};const a=Symbol(),u=function(e){this.Init(e)};return e.Object.createSubclass(u,e.Object,"oj.Context"),u.prototype.Init=function(e){u.superclass.Init.call(this),this._node=e},u.prototype.getParentContext=function(){return this._node?u.getContext(u.getParentElement(this._node)):null},u.getContext=function(e){let t=e;for(;t;){let e=t[a];if(e)return e;if(t.hasAttribute(u._OJ_CONTEXT_ATTRIBUTE))return u._createContext(t);const s=u.getParentElement(t);if(u._hasImplicitSlotContext(s,t))return u._createContext(t);t=s}return u.getPageContext()},u.getPageContext=function(){return u._pageContext||(u._pageContext=new u),u._pageContext},u.prototype.getBusyContext=function(){return this._busyContext||(this._busyContext=new n(this._node,this)),this._busyContext},u.setBusyContextDefaultTimeout=function(e){n.setDefaultTimeout(e)},u._OJ_CONTEXT_ATTRIBUTE="data-oj-context",u._OJ_SURROGATE_ATTR="data-oj-surrogate-id",u.getParentElement=function(e){if(e&&e.hasAttribute(u._OJ_SURROGATE_ATTR)){var t=document.getElementById(e.getAttribute(u._OJ_SURROGATE_ATTR));if(t)return t.parentElement}return e._ojReportBusy||e.parentElement},u._hasImplicitSlotContext=function(e,t){if(t&&t.nodeType===Node.ELEMENT_NODE){const o=e&&!e.classList.contains("oj-complete")?s.getMetadata(e.localName):null;if(o){const e=t.getAttribute("slot")||"",s=o.slots,n=s?s[e]:null;return n&&n.implicitBusyContext}}return!1},u._createContext=function(e){const t=new u(e);return e[a]=t,t},u.__addPreactPromise=function(e,t){n.__preactPromisesMap.set(e,t)},u.__removePreactPromise=function(e){n.__preactPromisesMap.delete(e)},u});
//# sourceMappingURL=ojcontext.js.map