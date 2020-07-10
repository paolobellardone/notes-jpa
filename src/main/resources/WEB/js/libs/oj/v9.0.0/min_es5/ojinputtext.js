/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojvalidator-regexp","ojs/ojlogger","ojs/ojfilter-length","ojs/ojthemeutils","ojs/ojeditablevalue"],function(e,t,i,n,s,r){"use strict";var a,o={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{accessibleMaxLengthExceeded:{type:"string"},accessibleMaxLengthRemaining:{type:"string"},regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"string",writeback:!0}},methods:{refresh:{},validate:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}},l={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},clearIcon:{type:"string",enumValues:["always","conditional","never"],value:"never"},converter:{type:"object"},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},length:{type:"object",properties:{countBy:{type:"string",enumValues:["codePoint","codeUnit"],value:"codePoint"},max:{type:"number"}}},list:{type:"string",extension:{_COPY_TO_INNER_ELEM:!0}},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},translations:{type:"object",value:{},properties:{accessibleMaxLengthExceeded:{type:"string"},accessibleMaxLengthRemaining:{type:"string"},regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"any",writeback:!0},virtualKeyboard:{type:"string",enumValues:["auto","email","number","search","tel","text","url"],value:"auto"}},methods:{refresh:{},validate:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}},p={properties:{asyncValidators:{type:"Array<Object>",value:[]},autocomplete:{type:"string",value:"on",extension:{_COPY_TO_INNER_ELEM:!0}},autofocus:{type:"boolean",value:!1,extension:{_COPY_TO_INNER_ELEM:!0}},converter:{type:"object"},describedBy:{type:"string"},disabled:{type:"boolean",value:!1},displayOptions:{type:"object",properties:{converterHint:{type:"Array<string>|string",value:["placeholder","notewindow"]},helpInstruction:{type:"Array<string>|string",value:["notewindow"]},messages:{type:"Array<string>|string",value:["inline"]},validatorHint:{type:"Array<string>|string",value:["notewindow"]}}},help:{type:"object",properties:{instruction:{type:"string",value:""}}},helpHints:{type:"object",properties:{definition:{type:"string",value:""},source:{type:"string",value:""}}},labelEdge:{type:"string",enumValues:["inside","none","provided"]},labelHint:{type:"string",value:""},labelledBy:{type:"string"},length:{type:"object",properties:{countBy:{type:"string",enumValues:["codePoint","codeUnit"],value:"codePoint"},counter:{type:"string",enumValues:["none","remaining"],value:"none"},max:{type:"number"}}},maxRows:{type:"number",value:0},messagesCustom:{type:"Array<Object>",writeback:!0,value:[]},name:{type:"string",value:"",extension:{_COPY_TO_INNER_ELEM:!0}},placeholder:{type:"string"},rawValue:{type:"string",writeback:!0,readOnly:!0},readonly:{type:"boolean",value:!1},required:{type:"boolean",value:!1},resizeBehavior:{type:"string",enumValues:["both","horizontal","none","vertical"],value:"none"},rows:{type:"number",extension:{_COPY_TO_INNER_ELEM:!0}},translations:{type:"object",value:{},properties:{accessibleMaxLengthExceeded:{type:"string"},accessibleMaxLengthRemaining:{type:"string"},regexp:{type:"object",properties:{messageDetail:{type:"string"},messageSummary:{type:"string"}}},required:{type:"object",properties:{hint:{type:"string"},messageDetail:{type:"string"},messageSummary:{type:"string"}}}}},userAssistanceDensity:{type:"string",enumValues:["compact","efficient","reflow"],value:"reflow"},valid:{type:"string",writeback:!0,enumValues:["invalidHidden","invalidShown","pending","valid"],readOnly:!0},validators:{type:"Array<Object>",value:[]},value:{type:"any",writeback:!0}},methods:{refresh:{},validate:{},reset:{},showMessages:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojAnimateStart:{},ojAnimateEnd:{}},extension:{}};e.__registerWidget("oj.inputBase",t.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS_FOR_WIDGET:[{attribute:"disabled",validateOption:!0},{attribute:"pattern"},{attribute:"placeholder"},{attribute:"value"},{attribute:"readonly",option:"readOnly",validateOption:!0},{attribute:"required",coerceDomValue:!0,validateOption:!0},{attribute:"title"},{attribute:"spellcheck"}],_INPUT_HELPER_KEY:"",_BLUR_HANDLER_KEY:"blur",_KEYDOWN_HANDLER_KEY:"keydown",_KEYUP_HANDLER_KEY:"keyup",_COMPOSITIONSTART_HANDLER_KEY:"compositionstart",_COMPOSITIONEND_HANDLER_KEY:"compositionend",_INPUT_HANDLER_KEY:"input",_DROP_HANDLER_KEY:"drop",_CLICK_HANDLER_KEY:"click",_TEXT_FIELD_COUNTER_CLASS:"oj-text-field-counter",_TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS:"oj-text-field-hidden-aria-live",_TEXT_FIELD_MAX_LENGTH_REMAINING_KEY:"accessibleMaxLengthRemaining",_TEXT_FIELD_MAX_LENGTH_EXCEEDED_KEY:"accessibleMaxLengthExceeded",_counterSpanEl:null,options:{asyncValidators:[],autocomplete:void 0,autofocus:!1,labelledBy:null,name:"",placeholder:"",rawValue:void 0,readOnly:!1,required:!1,validators:[]},_SaveAttributes:function(e){var t=this._superApply(arguments);return this._processAttrCheck(),t},_InitOptions:function(t,i){this._super(t,i),this._IsCustomElement()||e.EditableValueUtils.initializeOptionsFromDom(this._GET_INIT_OPTIONS_PROPS_FOR_WIDGET,i,this)},_ComponentCreate:function(){var e=this._superApply(arguments),i=this.options.readOnly;if(this._rtl="rtl"===this._GetReadingDirection(),"boolean"==typeof i&&this.element.prop("readonly",i),this._DoWrapElement()){var n,r;if(this.OuterWrapper?(n=this.OuterWrapper).className?n.className=n.className+" "+this._WIDGET_CLASS_NAMES:n.className=this._WIDGET_CLASS_NAMES:((n=document.createElement("div")).className=this._WIDGET_CLASS_NAMES,this.element[0].parentNode&&this.element[0].parentNode.insertBefore(n,this.element[0])),r=n,this._wrapper=t(n),this._DoWrapElementAndTriggers()){var a=this._CreateContainerWrapper();n.appendChild(a),r=a;var o=this._CreateMiddleWrapper();o&&(a.appendChild(o),r=o)}r.appendChild(this.element[0]),this._focusable({element:this._wrapper,applyHighlight:!0})}else this._focusable({element:this.element,applyHighlight:!0});if(this._CLASS_NAMES&&(this.element.addClass(this._CLASS_NAMES),this.element.addClass("oj-text-field-input")),this._defaultRegExpValidator={},this._eventHandlers=null,this._hasMaxLength()){this.lengthFilter=new s(this.options.length);var l=this.options.value;this._filterTextAndSetValues(l,l,!0,!0)}return e},_AfterCreate:function(){var e=this._superApply(arguments),i=this;if(this._refreshRequired(this.options.required),this._attachDetachEventHandlers(),this._AppendInputHelper(),this._AppendAriaLiveHelper(),t.each(["disabled","readOnly"],function(e,t){i.options[t]&&i._processOptions(t,i.options[t])}),this._IsCustomElement()){var n=this.options.labelledBy;this._initInputIdLabelForConnection(this._GetContentElement()[0],this.widget()[0].id,n)}return this._hasMaxLength()&&this._processLengthCounterAttr(this.options.length.counter),e},_IsRequired:function(){return this.options.required},_AfterSetOptionRequired:e.EditableValueUtils._AfterSetOptionRequired,_AfterSetOptionValidators:e.EditableValueUtils._AfterSetOptionValidators,_AfterSetOptionAsyncValidators:e.EditableValueUtils._AfterSetOptionAsyncValidators,_AfterSetOptionConverter:e.EditableValueUtils._AfterSetOptionConverter,_ResetConverter:e.EditableValueUtils._ResetConverter,_GetConverter:e.EditableValueUtils._GetConverter,_GetNormalizedValidatorsFromOption:e.EditableValueUtils._GetNormalizedValidatorsFromOption,_GetNormalizedAsyncValidatorsFromOption:e.EditableValueUtils._GetNormalizedAsyncValidatorsFromOption,_SetDisplayValue:function(e){if(this._superApply(arguments),this.options.readOnly){var t=this._getReadonlyDiv();t&&(t.textContent=e)}},_createOrUpdateReadonlyDiv:e.EditableValueUtils._createOrUpdateReadonlyDiv,_processOptions:function(e,t){"disabled"===e&&this.element.prop("disabled",t),"readOnly"===e&&(this.element.prop("readonly",t),t&&this._createOrUpdateReadonlyDiv(this.element[0],this._DoWrapElement()&&this.OuterWrapper),this._refreshStateTheming("readOnly",t)),"disabled"!==e&&"readOnly"!==e||this._attachDetachEventHandlers()},_setOption:function(e,t,i){var n=this._superApply(arguments);if("disabled"===e||"readOnly"===e)this._processOptions(e,t);else if("pattern"===e)this._defaultRegExpValidator.regexp=this._getImplicitRegExpValidator(),this._AfterSetOptionValidators();else if("labelledBy"===e){var s=this.options.labelledBy;if(s){var r=this._GetContentElement()[0].id;this._labelledByUpdatedForInputComp(s,r)}}return n},_AfterSetOption:function(t,i,n){switch(this._superApply(arguments),t){case"readOnly":this._AfterSetOptionDisabledReadOnly(t,e.EditableValueUtils.readOnlyOptionOptions);break;case"required":this._AfterSetOptionRequired(t);break;case"validators":this._AfterSetOptionValidators(t);break;case"asyncValidators":this._AfterSetOptionAsyncValidators(t);break;case"converter":this._AfterSetOptionConverter(t);break;case"length":this._AfterSetOptionLength(this.options.length)}},_hasMaxLength:function(){return this.options.length&&this.options.length.max&&!isNaN(this.options.length.max)},_filterTextOnValueChange:function(){if(this.options.length.max){var e=this.options.rawValue,t=this.options.value;this._filterTextAndSetValues(e,t,!0,!1)}},_destroy:function(){var t=this._superApply(arguments);return this.element.off("blur drop keydown keyup compositionstart compositionend input"),this._inputHelper&&this._inputHelper.remove(),this._DoWrapElement()&&!this._IsCustomElement()&&(this._DoWrapElementAndTriggers()?e.DomUtils.unwrap(this.element,this._wrapper):e.DomUtils.unwrap(this.element)),t},_SetLoading:function(){this._super(),this.element.prop("readonly",!0)},_ClearLoading:function(){this._super(),this.element.prop("readonly",this.options.readOnly)},_attachDetachEventHandlers:function(){if(this.options.readOnly||this.options.disabled){if(this._eventHandlers)for(var e=[this._BLUR_HANDLER_KEY,this._KEYDOWN_HANDLER_KEY,this._KEYUP_HANDLER_KEY,this._COMPOSITIONSTART_HANDLER_KEY,this._COMPOSITIONEND_HANDLER_KEY,this._INPUT_HANDLER_KEY,this._DROP_HANDLER_KEY],i=0,n=e.length;i<n;i++)this._eventHandlers[e[i]]&&(this.element.off(e[i],this._eventHandlers[e[i]]),delete this._eventHandlers[e[i]])}else{this._eventHandlers={};var s=t.proxy(this._onBlurHandler,this),r=t.proxy(this._onKeyDownHandler,this),a=t.proxy(this._onKeyUpHandler,this),o=t.proxy(this._onCompositionStartHandler,this),l=t.proxy(this._onCompositionEndHandler,this),p=t.proxy(this._onInputHandler,this),_=function(){this.focus()};this.element.on(this._BLUR_HANDLER_KEY,s),this.element.on(this._KEYDOWN_HANDLER_KEY,r),this.element.on(this._KEYUP_HANDLER_KEY,a),this.element.on(this._COMPOSITIONSTART_HANDLER_KEY,o),this.element.on(this._COMPOSITIONEND_HANDLER_KEY,l),this.element.on(this._INPUT_HANDLER_KEY,p),this.element.on(this._DROP_HANDLER_KEY,_),this._eventHandlers[this._BLUR_HANDLER_KEY]=s,this._eventHandlers[this._KEYDOWN_HANDLER_KEY]=r,this._eventHandlers[this._KEYUP_HANDLER_KEY]=a,this._eventHandlers[this._COMPOSITIONSTART_HANDLER_KEY]=o,this._eventHandlers[this._COMPOSITIONEND_HANDLER_KEY]=l,this._eventHandlers[this._INPUT_HANDLER_KEY]=p,this._eventHandlers[this._DROP_HANDLER_KEY]=_}},_OPTION_TO_CSS_MAPPING:{readOnly:"oj-read-only"},_processAttrCheck:function(){for(var e=this._ATTR_CHECK,t=0,i=e.length;t<i;t++){var n=e[t].attr;"setMandatory"in e[t]&&this.element.attr(n,e[t].setMandatory)}},_onBlurHandler:function(e){this._SetValue(this._GetDisplayValue(),e)},_onKeyDownHandler:function(e){},_onKeyUpHandler:function(e){e.keyCode===t.ui.keyCode.ENTER&&this._SetValue(this._GetDisplayValue(),e)},_onCompositionStartHandler:function(){this._isComposing=!0},_onCompositionEndHandler:function(e){this._isComposing=!1,this._SetRawValue(this._GetContentElement().val(),e),this._hasMaxLength()&&this._onInputHandler(e)},_onInputHandler:function(e){this._isComposing||(this._hasMaxLength()?this._filterTextAndSetValues(this.lastFilteredText,this._GetContentElement().val(),!1,!0):this._SetRawValue(this._GetContentElement().val(),e))},_DoWrapElement:function(){return this._WIDGET_CLASS_NAMES},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},_CreateContainerWrapper:function(){var e=document.createElement("div");return e.setAttribute("role","presentation"),e.className=this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES,e},_AppendInputHelper:function(){if(this._INPUT_HELPER_KEY&&this._DoWrapElement()){var e=this.element.attr("aria-describedby")||"",i=this._GetSubId(this._INPUT_HELPER_KEY);e+=" "+i,this.element.attr("aria-describedby",e),this._inputHelper=t("<div class='oj-helper-hidden-accessible' aria-hidden='true' id='"+i+"'>"+this._EscapeXSS(this.getTranslatedString(this._INPUT_HELPER_KEY))+"</div>"),this._AppendInputHelperParent().append(this._inputHelper)}},_AppendAriaLiveHelper:function(){var e=this._AppendInputHelperParent();if(this.options.length&&this.options.length.max){var t=document.createElement("div");t.classList.add("oj-helper-hidden-accessible"),t.classList.add(this._TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS);var i=document.createElement("div");i.setAttribute("aria-live","polite");var n=document.createElement("div");n.setAttribute("aria-live","assertive"),t.appendChild(i),t.appendChild(n),e[0].appendChild(t)}},_EscapeXSS:function(e){return t("<span>"+e+"</span>").text()},_AppendInputHelperParent:function(){return this.widget()},_GetImplicitValidators:function(){var e=this._superApply(arguments);if(this.options.pattern){var t=this._getImplicitRegExpValidator();this._defaultRegExpValidator.regexp=t}return Object.assign(this._defaultRegExpValidator,e)},_CanSetValue:function(){return!!this._super()&&!(this.options.readOnly||!1)},_refreshStateTheming:function(e,t){-1!==Object.keys(this._OPTION_TO_CSS_MAPPING).indexOf(e)&&this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[e],!!t)},_getImplicitRegExpValidator:function(){if(!this.options.pattern)return null;var e={pattern:this.options.pattern,label:this._getLabelText()};return t.extend(e,this.options.translations.regexp||{}),new i(e)},_GetAriaLabelElement:function(){return this.element[0]},_GetSubId:function(e){return this.uuid+"_"+e},_IsRTL:function(){return this._rtl},_IsTextFieldComponent:function(){return!0},_GetContentWrapper:function(){var e=this._GetContentElement()[0];if(!e.parentElement.classList.contains("oj-text-field-middle")){var t=document.createElement("DIV");t.classList.add("oj-text-field-middle"),e.parentElement.insertBefore(t,e),t.appendChild(e)}return e.parentElement},_resetLengthFilter:function(e){this.lengthFilter=new s(e)},_AfterSetOptionLength:function(e){var t;e.max&&(this._resetLengthFilter(e),t=this._GetContentWrapper().parentElement.parentNode.classList.contains("oj-complete")?this.element[0].value:this.options.value,this._filterTextAndSetValues(t,t,!0,!1));this._processLengthCounterAttr(e.counter)},_setFocusOnTextAreaBind:function(){this._setFocusOnTextArea=function(){this.element[0].focus()}.bind(this)},_processLengthCounterAttr:function(e){var t=this._GetContentWrapper().parentElement,i=t.querySelector("."+this._TEXT_FIELD_COUNTER_CLASS),n=t.parentNode.querySelector("."+this._TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS),s=this.lengthFilter?this.lengthFilter.calcLength(this.options.rawValue):-1,r="",a="";if("none"===e||null==e||0===this.options.length.max||this.options.disabled||this.options.readOnly)i&&(i.removeEventListener(this._CLICK_HANDLER_KEY,this._setFocusOnTextArea),t.removeChild(i)),this._counterSpanEl=null,-1===s||0===this.options.length.max||this.options.disabled||this.options.readOnly?a="":(r=this.options.length.max-s,a=this.getTranslatedString(this._TEXT_FIELD_MAX_LENGTH_REMAINING_KEY,{chars:r}));else{if(null===i){var o=document.createElement("div");o.className=this._TEXT_FIELD_COUNTER_CLASS,this._TEXTAREA_COUNTER_CONTAINER&&(o.className+=" "+this._TEXTAREA_COUNTER_CONTAINER),i=document.createElement("span"),this._INPUTTEXT_COUNTER_EL&&(i.className+=" "+this._INPUTTEXT_COUNTER_EL),this._TEXTAREA_COUNTER_EL&&(i.className+=" "+this._TEXTAREA_COUNTER_EL,this._setFocusOnTextAreaBind(),o.addEventListener(this._CLICK_HANDLER_KEY,this._setFocusOnTextArea)),o.appendChild(i),t.appendChild(o),this._counterSpanEl=i,this._counterSpanEl.textContent=""}-1!==s&&(r=this.options.length.max-s,a=this.getTranslatedString(this._TEXT_FIELD_MAX_LENGTH_REMAINING_KEY,{chars:r}))}(this._counterSpanEl&&(this._counterSpanEl.textContent=r),n)&&(n.children[0].textContent=a)},_filterTextAndSetValues:function(e,t,i,n){var s=this.lengthFilter.filter(e,t);this._SetRawValue(s,null),this._SetDisplayValue(s,null);var r=this._GetContentWrapper().parentElement.parentNode.querySelector("."+this._TEXT_FIELD_HIDDEN_ARIA_LIVE_CLASS);if(r){var a=r.children[1];s.length<t.length?(a.textContent="",a.textContent=this.getTranslatedString(this._TEXT_FIELD_MAX_LENGTH_EXCEEDED_KEY,{len:this.options.length.max})):this.lastFilteredText!==t&&(a.textContent="")}this.lastFilteredText=s,i&&this._SetValue(this.lastFilteredText),n&&this._processLengthCounterAttr(this.options.length.counter)},refresh:function(){var e=this._superApply(arguments);return this._rtl="rtl"===this._GetReadingDirection(),this._refreshRequired(this.options.required),e},_refreshRequired:e.EditableValueUtils._refreshRequired,_labelledByUpdatedForInputComp:e.EditableValueUtils._labelledByUpdatedForInputComp,_initInputIdLabelForConnection:e.EditableValueUtils._initInputIdLabelForConnection,_linkLabelForInputComp:e.EditableValueUtils._linkLabelForInputComp,_ValidateReturnBoolean:e.EditableValueUtils._ValidateReturnBoolean,_ValidateReturnPromise:e.EditableValueUtils._ValidateReturnPromise,getNodeBySubId:function(e){return this._super(e)},validate:e.EditableValueUtils.validate,_AriaRequiredUnsupported:function(){return!1},widget:function(){return this._DoWrapElement()?this._wrapper:this.element}},!0),e.__registerWidget("oj.ojInputPassword",t.oj.inputBase,{version:"1.0.0",defaultElement:"<input>",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",_INPUT_CONTAINER_CLASS:"oj-text-field-container",options:{converter:null,pattern:"",value:void 0},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-inputpassword-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}}),e.__registerWidget("oj.ojInputText",t.oj.inputBase,{version:"1.0.0",defaultElement:"<input>",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",_ALLOWED_TYPES:["email","number","search","tel","text","url"],_CLICK_HANDLER_KEY:"click",_INPUT_CONTAINER_CLASS:"oj-text-field-container",_INPUTTEXT_COUNTER_EL:"oj-inputtext-counter-el",options:{clearIcon:"never",converter:null,list:"",pattern:"",virtualKeyboard:"auto",length:{max:null,countBy:"codePoint"}},_ComponentCreate:function(){var e=this._super(),t=this.options.clearIcon;return this._processClearIconAttr(t),this._processSlottedChildren(),this._AddHoverable(this._wrapper),this._SetInputType(this._ALLOWED_TYPES),e},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},_processClearIconAttr:function(t){var i=this._GetContentWrapper().parentElement,n=i.querySelector("a.oj-inputtext-clear-icon-btn");if("never"===t||this.options.disabled||this.options.readOnly)n&&i.removeChild(n),i.classList.remove("oj-inputtext-clearicon-visible"),i.classList.remove("oj-inputtext-clearicon-conditional");else{if(null===n){var s,r=e.AgentUtils.getAgentInfo();(n=document.createElement("a")).className="oj-inputtext-clear-icon-btn oj-component-icon oj-clickable-icon-nocontext",n.setAttribute("tabindex","-1"),r.os===e.AgentUtils.OS.ANDROID||r.os===e.AgentUtils.OS.IOS||r.os===e.AgentUtils.OS.WINDOWSPHONE?n.setAttribute("aria-label","Clear input"):n.setAttribute("aria-hidden","true"),n.setAttribute("target","_blank"),(s=document.createElement("span")).className="oj-inputtext-clear-icon",n.appendChild(s),i.appendChild(n),n.addEventListener(this._CLICK_HANDLER_KEY,this._onClearIconClickHandler.bind(this))}var a;if("always"===t)i.classList.add("oj-inputtext-clearicon-visible");else i.classList.remove("oj-inputtext-clearicon-visible"),i.classList.add("oj-inputtext-clearicon-conditional"),(a=i.classList.contains("oj-complete")?this.element[0].value:this.options.value)&&""!==a?i.classList.remove("oj-form-control-empty-clearicon"):i.classList.add("oj-form-control-empty-clearicon")}},_processSlottedChildren:function(){var t=e.BaseCustomElementBridge.getSlotMap(this._getRootElement());!function(e){for(var t={contextMenu:!0,start:!0,end:!0,"":!0},i=Object.keys(e),n=i.length-1;n>-1;n--){var s=i[n];if(!t[s])for(var r=e[s],a=0;a<r.length;a++){var o=r[a];o.parentElement.removeChild(o)}}}(t);var i=this._GetContentWrapper(),n="start";t[n]&&function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.classList.add("oj-inputtext-start"),e.parentElement.insertBefore(n,e)}}(i,t[n]),t[n="end"]&&function(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.classList.add("oj-inputtext-end"),e.parentElement.appendChild(n)}}(i,t[n])},_AfterSetOption:function(e,t){switch(this._super(e,t),e){case"clearIcon":case"disabled":case"readOnly":this._processClearIconAttr(this.options.clearIcon);break;case"virtualKeyboard":this._SetInputType(this._ALLOWED_TYPES);break;case"value":this._processClearIconAttr(this.options.clearIcon),this._filterTextOnValueChange(),this._AfterSetOptionLength(this.options.length)}},_onInputHandler:function(e){this._super(e);var t=e.target,i=this._GetContentWrapper().parentElement;"conditional"===this.options.clearIcon&&(""!==t.value?i.classList.remove("oj-form-control-empty-clearicon"):i.classList.add("oj-form-control-empty-clearicon"))},_onClearIconClickHandler:function(e){var t=this.element[0];t.value="",this._SetRawValue(t.value,e),t.focus(),this._GetContentWrapper().parentElement.classList.add("oj-form-control-empty-clearicon"),this._processLengthCounterAttr(this.options.length.counter)},_onBlurHandler:function(t){var i=this._wrapper[0],n=t.relatedTarget;n&&n.classList.contains("oj-inputtext-clear-icon-btn")&&n.parentElement&&e.DomUtils.isAncestorOrSelf(i,n.parentElement)?i.classList.add("oj-focus"):this._super(t)},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-inputtext-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},_GetTranslationsSectionName:function(){return"oj-inputBase"},_SetInputType:e.EditableValueUtils._SetInputType}),e.__registerWidget("oj.ojTextArea",t.oj.inputBase,{version:"1.0.0",defaultElement:"<textarea>",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",_INPUT_CONTAINER_CLASS:"oj-text-field-container",_TEXTAREA_COUNTER_CONTAINER:"oj-textarea-counter-container",_TEXTAREA_COUNTER_EL:"oj-textarea-counter-el",_INPUT_HANDLER_KEY:"input",options:{converter:null,maxRows:0,pattern:"",resizeBehavior:"none",rows:void 0,length:{max:null,countBy:"codePoint",counter:"none"}},_AfterSetOption:function(e,t){switch(this._super(e,t),e){case"value":this._filterTextOnValueChange(),this._AfterSetOptionLength(this.options.length)}},_AfterCreate:function(){var e=this._superApply(arguments);return this._GetContentElement()[0].style.resize=this.options.resizeBehavior,this._setupResizeTextareaBind(),-1===this.options.maxRows&&this.widget()[0].classList.add("oj-maxrows-neg1"),e},_AfterCreateConverterCached:function(){var e=this._super(),t=this._GetContentElement()[0],i=this.options.maxRows;return!this._textAreaElementNotDisplayed()&&(-1===i||i>t.rows)&&(this._calculateLineHeight(t),this._resizeTextArea()),e},_setOption:function(e,t,i){var n=this._superApply(arguments);if("resizeBehavior"===e)this._GetContentElement()[0].style.resize=t;else if("value"===e){var s=this._textAreaElementNotDisplayed(),r=this.options.maxRows;!s&&(-1===r||r>this._GetContentElement()[0].rows)&&this._resizeTextArea()}return n},_NotifyAttached:function(){this._super();var e=this.options.maxRows;(-1===e||e>this._GetContentElement()[0].rows)&&this._resizeTextArea()},_onInputHandler:function(e){this._super(e);var t=this._GetContentElement()[0],i=this.options.maxRows;(-1===i||i>t.rows)&&this._resizeTextArea()},_resizeTextArea:function(){if(!this._textAreaElementNotDisplayed()&&void 0!==this._lineHeight){var e,t=this.options.maxRows,i=this._GetContentElement()[0],n=i.rows;if(i.style.height=0,-1===t)e=i.scrollHeight+this._getStylingHeight(i,"border");else if(t>n){var s=this._lineHeight*t+this._getStylingHeight(i,"padding"),r=this._lineHeight*n+this._getStylingHeight(i,"padding"),a=i.scrollHeight;e=a>s?s+this._getStylingHeight(i,"border"):a<r?r+this._getStylingHeight(i,"border"):a+this._getStylingHeight(i,"border")}else e=this._lineHeight*n+this._getStylingHeight(i,"paddingAndBorder");i.style.height=e+"px"}},_setupResizeTextareaBind:function(){this._textAreaElementNotDisplayed()||(this._resizeTextareaBind=function(){var e=this._GetContentElement()[0],t=this.options.maxRows;(-1===t||t>e.rows)&&this._resizeTextArea()}.bind(this),window.addEventListener("resize",this._resizeTextareaBind,!1))},_getStylingHeight:function(e,t){var i=window.getComputedStyle(e),n=0;"padding"!==t&&"paddindAndBorder"!==t||(n+=parseInt(i.paddingTop,10)+parseInt(i.paddingBottom,10));"border"!==t&&"paddingAndBorder"!==t||(n+=parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10));return n},_calculateLineHeight:function(e){if(!this._textAreaElementNotDisplayed()){var t=window.getComputedStyle(e);if("none"!==t.display){var i=t.lineHeight;switch(i){case"normal":var n=parseInt(t.fontSize,10);this._lineHeight=1.2*n;break;default:this._lineHeight=parseInt(i,10)}}}},_cleanUpListeners:function(){this._resizeTextareaBind&&window.removeEventListener("resize",this._resizeTextareaBind)},_ReleaseResources:function(){this._super(),this._cleanUpListeners()},getNodeBySubId:function(e){var t=this._superApply(arguments);return t||"oj-textarea-input"===e.subId&&(t=this.element?this.element[0]:null),t||null},_DoWrapElementAndTriggers:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES=this._INPUT_CONTAINER_CLASS,!0},_UseReadonlyDiv:function(){var e=this._super();return e?-1===this.options.maxRows:e},_GetDefaultStyleClass:function(){return"oj-textarea"},_GetTranslationsSectionName:function(){return"oj-inputBase"},_isConverAsync:function(){return this._GetConverter()instanceof Promise},_onKeyUpHandler:function(e){},_textAreaElementNotDisplayed:function(){return this._UseReadonlyDiv()&&this.options.readOnly&&-1===this.options.maxRows}}),a={properties:{readonly:{binding:{consume:{name:"readonly"}}},userAssistanceDensity:{binding:{consume:{name:"userAssistanceDensity"}}}}},o.extension._WIDGET_NAME="ojInputPassword",o.extension._INNER_ELEM="input",o.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],o.extension._ALIASED_PROPS={readonly:"readOnly"},e.CustomElementBridge.register("oj-input-password",{metadata:e.CollectionUtils.mergeDeep(o,a)}),l.extension._WIDGET_NAME="ojInputText",l.extension._INNER_ELEM="input",l.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],l.extension._ALIASED_PROPS={readonly:"readOnly"},e.CustomElementBridge.register("oj-input-text",{metadata:e.CollectionUtils.mergeDeep(l,a)}),p.extension._WIDGET_NAME="ojTextArea",p.extension._INNER_ELEM="textarea",p.extension._GLOBAL_TRANSFER_ATTRS=["accesskey","aria-label","tabindex"],p.extension._ALIASED_PROPS={readonly:"readOnly"},e.CustomElementBridge.register("oj-text-area",{metadata:e.CollectionUtils.mergeDeep(p,a)})});