/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["require","ojs/ojcomponentcore","ojs/ojcore-base","ojs/ojdvt-base","jquery","ojs/ojthematicmap-toolkit","ojs/ojlogger","ojs/ojconfig"],function(e,t,a,r,o,n,s,i){"use strict";a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;var l={properties:{animationDuration:{type:"number"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},areaData:{type:"object",extension:{webelement:{exceptionStatus:[{type:"unsupported",since:"13.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},areas:{type:"Array<Object>|Promise"},as:{type:"string",value:""},focusRenderer:{type:"function"},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},highlightMatch:{type:"string",enumValues:["all","any"],value:"all"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},hoverRenderer:{type:"function"},initialZooming:{type:"string",enumValues:["auto","none"],value:"none"},isolatedItem:{type:"any"},labelDisplay:{type:"string",enumValues:["auto","off","on"],value:"off"},labelType:{type:"string",enumValues:["long","short"],value:"short"},linkData:{type:"object",extension:{webelement:{exceptionStatus:[{type:"unsupported",since:"13.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},links:{type:"Array<Object>|Promise"},mapProvider:{type:"object",properties:{geo:{type:"object",value:{}},propertiesKeys:{type:"object",properties:{id:{type:"string",value:""},longLabel:{type:"string",value:""},shortLabel:{type:"string",value:""}}}}},markerData:{type:"object",extension:{webelement:{exceptionStatus:[{type:"unsupported",since:"13.0.0",description:"Data sets from a DataProvider cannot be sent to WebDriverJS; use ViewModels or page variables instead."}]}}},markerZoomBehavior:{type:"string",enumValues:["fixed","zoom"],value:"fixed"},markers:{type:"Array<Object>|Promise"},maxZoom:{type:"number",value:6},panning:{type:"string",enumValues:["auto","none"],value:"none"},renderer:{type:"function"},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},selectionRenderer:{type:"function"},styleDefaults:{type:"object",properties:{areaSvgStyle:{type:"object",value:{}},dataAreaDefaults:{type:"object",value:{},properties:{borderColor:{type:"string"},hoverColor:{type:"string"},selectedInnerColor:{type:"string"},selectedOuterColor:{type:"string"}}},dataMarkerDefaults:{type:"object",properties:{borderColor:{type:"string"},borderStyle:{type:"string",enumValues:["none","solid"],value:"solid"},borderWidth:{type:"number",value:.5},color:{type:"string"},height:{type:"number",value:8},labelStyle:{type:"object",value:{}},opacity:{type:"number",value:1},shape:{type:"string",value:"circle"},width:{type:"number",value:8}}},hoverBehaviorDelay:{type:"number",value:200},labelStyle:{type:"object",value:{}},linkDefaults:{type:"object",properties:{color:{type:"string"},width:{type:"number",value:2}}}}},tooltip:{type:"object",properties:{renderer:{type:"function"}}},tooltipDisplay:{type:"string",enumValues:["auto","labelAndShortDesc","none","shortDesc"],value:"auto"},touchResponse:{type:"string",enumValues:["auto","touchStart"],value:"auto"},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{accessibleContainsControls:{type:"string"},areasRegion:{type:"string"},componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},linksRegion:{type:"string"},markersRegion:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"}}},zooming:{type:"string",enumValues:["auto","none"],value:"none"}},methods:{getArea:{},getContextByNode:{},getLink:{},getMarker:{},getProperty:{},refresh:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};l.extension._WIDGET_NAME="ojThematicMap",a.CustomElementBridge.register("oj-thematic-map",{metadata:l,parseFunction:r.shapeParseFunction({"style-defaults.data-marker-defaults.shape":!0})});var p={properties:{categories:{type:"Array<string>",value:[]},color:{type:"string"},label:{type:"string",value:""},labelStyle:{type:"object"},location:{type:"string",value:""},opacity:{type:"number",value:1},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shortDesc:{type:"string|function",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}},extension:{}};p.extension._CONSTRUCTOR=function(){},a.CustomElementBridge.register("oj-thematic-map-area",{metadata:p});var u={properties:{categories:{type:"Array<string>",value:[]},color:{type:"string",value:""},endLocation:{type:"object",value:{},properties:{id:{type:"any"},location:{type:"string"},x:{type:"number"},y:{type:"number"}}},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shortDesc:{type:"string|function",value:""},startLocation:{type:"object",value:{},properties:{id:{type:"any"},location:{type:"string"},x:{type:"number"},y:{type:"number"}}},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},width:{type:"number",value:2}},extension:{}};u.extension._CONSTRUCTOR=function(){},a.CustomElementBridge.register("oj-thematic-map-link",{metadata:u});var c={properties:{borderColor:{type:"string"},borderStyle:{type:"string",enumValues:["none","solid"]},borderWidth:{type:"number"},categories:{type:"Array<string>",value:[]},color:{type:"string"},height:{type:"number"},label:{type:"string",value:""},labelPosition:{type:"string",enumValues:["bottom","center","top"],value:"center"},labelStyle:{type:"object"},location:{type:"string",value:""},opacity:{type:"number"},rotation:{type:"number",value:0},selectable:{type:"string",enumValues:["auto","off"],value:"auto"},shape:{type:"string"},shortDesc:{type:"string|function",value:""},source:{type:"string",value:""},sourceHover:{type:"string",value:""},sourceHoverSelected:{type:"string",value:""},sourceSelected:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},value:{type:"number"},width:{type:"number"},x:{type:"number"},y:{type:"number"}},extension:{}};!function(){c.extension._CONSTRUCTOR=function(){};a.CustomElementBridge.register("oj-thematic-map-marker",{metadata:c,parseFunction:r.shapeParseFunction({shape:!0},{circle:!0,diamond:!0,ellipse:!0,human:!0,plus:!0,rectangle:!0,square:!0,star:!0,triangleDown:!0,triangleUp:!0})})}(),a.__registerWidget("oj.ojThematicMap",o.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationDuration:void 0,animationOnDisplay:"none",areaData:null,areas:null,as:"",focusRenderer:null,hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverRenderer:null,initialZooming:"none",isolatedItem:null,labelDisplay:"off",labelType:"short",linkData:null,links:null,mapProvider:{geo:{},propertiesKeys:{id:"",shortLabel:"",longLabel:""}},markerData:null,markers:null,markerZoomBehavior:"fixed",maxZoom:6,panning:"none",renderer:null,selection:[],selectionMode:"none",selectionRenderer:null,styleDefaults:{dataAreaDefaults:{borderColor:void 0,hoverColor:void 0,selectedInnerColor:void 0,selectedOuterColor:void 0},dataMarkerDefaults:{borderColor:void 0,borderWidth:.5,borderStyle:"solid",color:void 0,height:8,labelStyle:{},opacity:1,shape:"circle",width:8},hoverBehaviorDelay:200,labelStyle:{},linkDefaults:{color:void 0,width:2}},tooltip:{renderer:null},tooltipDisplay:"auto",touchResponse:"auto",zooming:"none"},_currentLocale:"",_loadedBasemaps:[],_basemapPath:"resources/internal-deps/dvt/thematicMap/basemaps/",_supportedLocales:{ar:"ar",cs:"cs",da:"da",de:"de",el:"el",es:"es",fi:"fi",fr:"fr","fr-ca":"fr_CA",he:"iw",hu:"hu",it:"it",ja:"ja",ko:"ko",nl:"nl",no:"no",pl:"pl",pt:"pt_BR","pt-pt":"pt",ro:"ro",ru:"ru",sk:"sk",sv:"sv",th:"th",tr:"tr","zh-hans":"zh_CN","zh-hant":"zh_TW"},_ComponentCreate:function(){this._super(),this._checkBasemaps=[],this._initiallyRendered=!1,this._dataLayersToUpdate=[]},_CreateDvtComponent:function(e,t,a){return new n.ThematicMap(e,t,a)},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-thematicmap-area"===t?t=this._getDataLayerId(e.dataLayer,e.index,"area")+":area["+e.index+"]":"oj-thematicmap-marker"===t?t=this._getDataLayerId(e.dataLayer,e.index,"marker")+":marker["+e.index+"]":"oj-thematicmap-link"===t?t=this._getDataLayerId(e.dataLayer,e.index,"link")+":link["+e.index+"]":"oj-thematicmap-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};return e.indexOf(":area")>=0?(t.subId="oj-thematicmap-area",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):e.indexOf(":marker")>=0?(t.subId="oj-thematicmap-marker",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):e.indexOf(":link")>=0?(t.subId="oj-thematicmap-link",this._IsCustomElement()||(t.dataLayer=e.substring(0,e.indexOf(":"))),t.index=this._GetFirstIndex(e)):"tooltip"===e&&(t.subId="oj-thematicmap-tooltip"),t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-thematicmap"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-dvtbase oj-thematicmap"]={path:"animationDuration",property:"ANIM_DUR"},e["oj-thematicmap-arealayer"]=[{path:"styleDefaults/areaSvgStyle",property:"BACKGROUND"},{path:"styleDefaults/labelStyle",property:"TEXT"}],e["oj-thematicmap-area"]={path:"styleDefaults/dataAreaDefaults/borderColor",property:"border-top-color"},e["oj-thematicmap-area oj-hover"]={path:"styleDefaults/dataAreaDefaults/hoverColor",property:"border-top-color"},e["oj-thematicmap-area oj-selected"]=[{path:"styleDefaults/dataAreaDefaults/selectedInnerColor",property:"border-top-color"},{path:"styleDefaults/dataAreaDefaults/selectedOuterColor",property:"border-bottom-color"}],e["oj-thematicmap-marker"]=[{path:"styleDefaults/dataMarkerDefaults/labelStyle",property:"TEXT"},{path:"styleDefaults/dataMarkerDefaults/color",property:"background-color"},{path:"styleDefaults/dataMarkerDefaults/opacity",property:"opacity"},{path:"styleDefaults/dataMarkerDefaults/borderColor",property:"border-top-color"}],e["oj-thematicmap-marker oj-hover"]=[{path:"styleDefaults/dataMarkerDefaults/_hoverColor",property:"border-color"}],e["oj-thematicmap-marker oj-selected"]={path:"styleDefaults/dataMarkerDefaults/_selectionColor",property:"border-color"},e["oj-thematicmap-link"]={path:"styleDefaults/linkDefaults/color",property:"color"},e["oj-thematicmap-link oj-hover"]={path:"styleDefaults/linkDefaults/_hoverColor",property:"color"},e["oj-thematicmap-link oj-selected"]={path:"styleDefaults/linkDefaults/_selectedColor",property:"border-color"},e},_GetEventTypes:function(){return["optionChange"]},_InitOptions:function(e,t){this._super(e,t);var a=this.options.styleDefaults;this.options.styleDefaults=a},_setOptions:function(e,t){var r,o=Object.keys(e).length,n=e.areaLayers,s=this.options.areaLayers,i=e.pointDataLayers;if(1===o&&n&&s&&s.length>0)for(r=0;r<n.length;r++){for(var l=n[r],p=s[r],u=!0,c=Object.keys(l),d=0;d<c.length;d++){var h=c[d];"areaDataLayer"!==h&&l[h]!==p[h]&&(u=!1)}u&&!a.Object.compareValues(p.areaDataLayer,l.areaDataLayer)&&this._dataLayersToUpdate.push({options:l.areaDataLayer,parentLayer:l.layer,isADL:!0})}else if(1===o&&i&&this.options.pointDataLayers&&this.options.pointDataLayers.length>0)for(r=0;r<i.length;r++)a.Object.compareValues(this.options.pointDataLayers[r],i[r])||this._dataLayersToUpdate.push({options:i[r],parentLayer:i[r].id,isADL:!1});this._super(e,t)},_GetComponentRendererOptions:function(){return[{path:"tooltip/renderer",slot:"tooltipTemplate"},{path:"_tooltip/renderer"},{path:"renderer",slot:"markerContentTemplate"},{path:"focusRenderer",slot:"markerContentTemplate"},{path:"hoverRenderer",slot:"markerContentTemplate"},{path:"selectionRenderer",slot:"markerContentTemplate"}]},_LoadResources:function(){null==this.options._resources&&(this.options._resources={})},_ProcessOptions:function(){this._super();var e=this.options.tooltip,t=e?e.renderer:null;if(t){var a=this;this.options._tooltip={renderer:function(e){var r=a._IsCustomElement()?{insert:e.tooltip}:e.tooltip;try{return t(e)||r}catch(e){return s.warn("Showing default tooltip. "+e),r}}}}var r,o,n=this.options.areaLayers;if(n)for(r=0;r<n.length;r++){var i=n[r].areaDataLayer;i&&(o=i._templateRenderer)&&(i.renderer=this._GetTemplateDataRenderer(o,"area"))}var l=this.options.pointDataLayers;if(l)for(r=0;r<l.length;r++){var p=l[r];p&&(o=p._templateRenderer)&&(p.renderer=this._GetTemplateDataRenderer(o,"point"))}this.options._contextHandler=this._getContextHandler()},_Render:function(){this._NotReady();var e,t=this.options.areaLayers;if(this._IsCustomElement()){if(!this.options.mapProvider.geo.type)return void this._MakeReady()}else{var a=this.options.basemap;if(!a||!t||t.length<1)return void this._MakeReady();for(this._loadBasemap(a,t),e=0;e<this._checkBasemaps.length;e++)if(!this._loadedBasemaps[this._checkBasemaps[e]])return;this._checkBasemaps=[]}if(this._initiallyRendered&&this._dataLayersToUpdate.length>0){if(this._context.isReadyToRender()){for(e=0;e<this._dataLayersToUpdate.length;e++){var r=this._dataLayersToUpdate[e],o=r.isADL;o?this._CleanTemplate("area"):this._CleanTemplate("point"),this._component.updateLayer(r.options,r.parentLayer,o)}this._dataLayersToUpdate=[]}this._MakeReady()}else this._super(),this._initiallyRendered=!0},_RenderComponent:function(e,t){this._IsCustomElement()&&this._mapCustomElementOptions(e),this._updateDataLayerSelection(e),this._super(e,t)},_getContextHandler:function(){var e=this;return function(a,r,o,n,s,i){var l={component:t.__GetWidgetConstructor(e.element),parentElement:a,rootElement:r,data:o,itemData:n,state:s,previousState:i,id:o.id,label:o.label,color:o.color,location:o.location,x:o.x,y:o.y};return e._IsCustomElement()&&(l.renderDefaultHover=e.renderDefaultHover.bind(e,l),l.renderDefaultSelection=e.renderDefaultSelection.bind(e,l),l.renderDefaultFocus=e.renderDefaultFocus.bind(e,l)),e._FixRendererContext(l)}},renderDefaultHover:function(e){e.previousState&&e.state.hovered===e.previousState.hovered||this._component.processDefaultHoverEffect(e.id,e.state.hovered)},renderDefaultSelection:function(e){e.previousState&&e.state.selected===e.previousState.selected||this._component.processDefaultSelectionEffect(e.id,e.state.selected)},renderDefaultFocus:function(e){e.previousState&&e.state.focused===e.previousState.focused||this._component.processDefaultFocusEffect(e.id,e.state.focused)},_loadBasemap:function(e,t){var a=i.getLocale();a!==this._currentLocale&&(this._currentLocale=a,this._loadedBasemaps=[]);for(var r=0;r<t.length;r++){var o=t[r].layer;o&&this._loadBasemapHelper(e,o,a)}var n=this.options.pointDataLayers;!this.options.mapProvider.geo.type&&n&&n.length>0&&this._loadBasemapHelper(e,"cities",a)},_loadResourceByUrl:function(t,a){if(!this._loadedBasemaps[t]){var r=this,o=function(){r._loadedBasemaps[t]=!0,r._Render()};new Promise(function(a,r){e(["../"+i.getResourceUrl(t)],function(e){a(function(e){if(e&&e.__esModule)return e;var t={};return e&&Object.keys(e).forEach(function(a){var r=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:function(){return e[a]}})}),t.default=e,t}(e))},r)}).then(o,a?o:null)}},_loadBasemapHelper:function(e,t,a){var r=!0;try{r=Object.keys(n.ThematicMap.DvtBaseMapManager.getLayerIds(e,t)).length>0}catch(e){r=!1}if(!r&&!this.options.mapProvider.geo.type){var o=this._basemapPath+"ojthematicmap-"+e+"-"+t+".js";-1===this._checkBasemaps.indexOf(o)&&(this._checkBasemaps.push(o),this._loadResourceByUrl(o,!1))}if(-1===a.indexOf("en")){var s=a.toLowerCase().split("-"),i=[s[0]];s.length>1&&i.unshift(s[0]+"-"+s[1]),s.length>2&&i.unshift(s[0]+"-"+s[2],s[0]+"-"+s[1]+"-"+s[2]),e=e.charAt(0).toUpperCase()+e.slice(1),t=t.charAt(0).toUpperCase()+t.slice(1);for(var l=this._basemapPath+"resourceBundles/"+e+t+"Bundle_",p=0;p<i.length;p++)if(this._supportedLocales[i[p]]){var u=l+this._supportedLocales[i[p]]+".js";-1===this._checkBasemaps.indexOf(u)&&(this._checkBasemaps.push(u),this._loadResourceByUrl(u,!0));break}}},_HandleEvent:function(e){if("selection"===e.type){var t,a=e.clientId,r=this.options.selection,o=e.selection;if(this._IsCustomElement())this._selectionDataLayerMap[a]=o,t=this._selectionDataLayerMap.adl1.concat(this._selectionDataLayerMap.pdl1);else if((t={})[a]=o,r)for(var n=Object.keys(r),s=0;s<n.length;s++){var i=n[s];a!==i&&(t[i]=r[i])}this._UserOptionChange("selection",t)}else this._super(e)},_updateDataLayerSelection:function(e){var t=e.selection,a=(this._IsCustomElement()?t.length:Object.keys(t).length)>0;if(t&&a){var r=e.pointDataLayers;if(r)if(this._IsCustomElement()&&r[0])r[0].selection=t;else for(var o=0;o<r.length;o++)t[r[o].id]&&(r[o].selection=t[r[o].id]);var n=e.areaLayers;if(n&&n[0]){var s=n[0].areaDataLayer;this._IsCustomElement()&&s?s.selection=t:s&&t[s.id]&&(s.selection=t[s.id])}}},getArea:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"area"),"area",e):this._component.getAutomation().getData(arguments[0],"area",arguments[1])},getMarker:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"marker"),"marker",e):this._component.getAutomation().getData(arguments[0],"marker",arguments[1])},getLink:function(e){return this._IsCustomElement()?this._component.getAutomation().getData(this._getDataLayerId(null,e,"link"),"link",e):this._component.getAutomation().getData(arguments[0],"link",arguments[1])},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&(this._IsCustomElement()&&delete t.dataLayer,"oj-thematicmap-tooltip"!==t.subId)?t:null},_GetComponentDeferredDataPaths:function(){return this._IsCustomElement()?{root:["areas","markers","links","areaData","markerData","linkData"]}:{areaLayers:["areaDataLayer/areas","areaDataLayer/markers","areaDataLayer/links"],pointDataLayers:["markers","links"]}},_GetComponentNoClonePaths:function(){if(this._IsCustomElement()){var e=this._super();return e.mapProvider=!0,e}return{mapProvider:!0,areaLayers:{areaDataLayer:{areas:!0,markers:!0,links:!0}},pointDataLayers:{markers:!0,links:!0}}},_GetDataContext:function(e){if(this._IsCustomElement())return this._super();var t=this.options.basemap,a=e.layer?e.layer:"cities";return{basemap:t,layer:a,ids:n.DvtBaseMapManager.getLayerIds(t,a)}},_mapCustomElementOptions:function(e){e.animationOnMapChange=e.animationOnDisplay;var t="adl1",a="pdl1",r=[{}];e.areaLayers=r;var o=r[0],n={id:t};o.areaDataLayer=n;var s=[{id:a}];e.pointDataLayers=s;var i=s[0],l=["labelDisplay","labelType"];this._mapOptionHelper(e,l,[o]),l=["animationOnDataChange","focusRenderer","hoverRenderer","renderer","selectionMode","selectionRenderer"],this._mapOptionHelper(e,l,[n,i]),l=["areas","isolatedItem"],this._mapOptionHelper(e,l,[n]),this._selectionDataLayerMap||(this._selectionDataLayerMap={adl1:[],pdl1:[]});var p,u=e.selection,c={};for(p=0;p<u.length;p++)c[u[p]]=!0;this._idToDataLayerMap={};var d=e.areas;if(d)for(p=0;p<d.length;p++){var h=d[p];this._idToDataLayerMap[h.id]=t;var y=h.id;c[y]&&this._selectionDataLayerMap[t].push(y)}var m,f=e.markers;if(f){this._markerToDataLayerMap=[];var g=[],v=[];for(p=0;p<f.length;p++){var _=f[p];_.location?(g.push(_),m=t):_.x&&_.y&&(v.push(_),m=a),m&&(this._markerToDataLayerMap[p]=m,this._idToDataLayerMap[_.id]=m,c[_.id]&&this._selectionDataLayerMap[m].push(_.id))}g.length>0&&(n.markers=g),v.length>0&&(i.markers=v)}var D=e.links;if(D){this._linkToDataLayerMap=[];var b=[],k=[];for(p=0;p<D.length;p++){var C=D[p],L=C.startLocation;L&&(L.location?(this._linkToDataLayerMap[p]=t,b.push(C)):L.x&&L.y?(k.push(C),this._linkToDataLayerMap[p]=a):L.id&&(m=this._idToDataLayerMap[L.id],this._linkToDataLayerMap[p]=m,m===t?b.push(C):k.push(C))),(m=this._idToDataLayerMap[C.id])&&c[C.id]&&this._selectionDataLayerMap[m].push(C.id)}b.length>0&&(n.links=b),k.length>0&&(i.links=k)}},_mapOptionHelper:function(e,t,a){for(var r=0;r<t.length;r++){var o=t[r],n=e[o];if(n)for(var s=0;s<a.length;s++)a[s][o]=n}},_getDataLayerId:function(e,t,a){if(!this._IsCustomElement())return e;switch(a){case"area":return"adl1";case"marker":return this._markerToDataLayerMap[t];case"link":return this._linkToDataLayerMap[t];default:return""}},_GetSimpleDataProviderConfigs:function(){return{areaData:{templateName:"areaTemplate",templateElementName:"oj-thematic-map-area",resultPath:"areas"},linkData:{templateName:"linkTemplate",templateElementName:"oj-thematic-map-link",resultPath:"links"},markerData:{templateName:"markerTemplate",templateElementName:"oj-thematic-map-marker",resultPath:"markers"}}},_WrapInlineTemplateRenderer:function(e,t,a){var r=function(t){return function(a){return a[t](),e(a)}};return"focusRenderer"===a&&this._TemplateHandler.getDataSetBoolean(t,"oj-default-focus")?r("renderDefaultFocus"):"hoverRenderer"===a&&this._TemplateHandler.getDataSetBoolean(t,"oj-default-hover")?r("renderDefaultHover"):"selectionRenderer"===a&&this._TemplateHandler.getDataSetBoolean(t,"oj-default-selection")?r("renderDefaultSelection"):e}}),t.setDefaultOptions({ojThematicMap:{styleDefaults:t.createDynamicPropertyGetter(function(e){return e.isCustomElement?{areaSvgStyle:{}}:{}})}})});
//# sourceMappingURL=ojthematicmap.js.map