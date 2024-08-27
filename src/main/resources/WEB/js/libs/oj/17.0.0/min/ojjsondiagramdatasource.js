/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","ojs/ojdatasource-common"],function(a){"use strict";a.JsonDiagramDataSource=function(t,o){this.childDataCallback=o?o.childData:null,this._nodesMapById={},a.JsonDiagramDataSource.superclass.constructor.call(this,t)},a.Object.createSubclass(a.JsonDiagramDataSource,a.DiagramDataSource,"oj.JsonDiagramDataSource"),a.JsonDiagramDataSource.prototype.getData=function(a){var t;return a?void 0===(t=a.nodes)&&this.childDataCallback?(t=this.childDataCallback(a),this._updateLocalData(this._nodesMapById[a.id],t),t):(this._updateNodesMap({nodes:t}),Promise.resolve({nodes:t})):this.data?(this._updateNodesMap(this.data),Promise.resolve(this.data)):this.childDataCallback?(t=this.childDataCallback(),this._updateLocalData(null,t),t):Promise.resolve(null)},a.JsonDiagramDataSource.prototype._updateNodesMap=function(a){if(this.childDataCallback&&a.nodes)for(var t=a.nodes,o=0;o<t.length;o++)this._nodesMapById[t[o].id]=t[o]},a.JsonDiagramDataSource.prototype._updateLocalData=function(a,t){if(t instanceof Promise){var o=this;t.then(function(t){a||o.data||(o.data={}),Array.isArray(t.nodes)&&(a?a.nodes=t.nodes:o.data.nodes=t.nodes,o._updateNodesMap(t)),Array.isArray(t.links)&&(o.data.links=Array.isArray(o.data.links)?o.data.links.concat(t.links):t.links),o.handleEvent("ADD",{data:t,parentId:a?a.id:null,index:0})},function(){})}},a.JsonDiagramDataSource.prototype.getChildCount=function(a){if(a){var t=a.nodes;return Array.isArray(t)?t.length:void 0===t&&this.childDataCallback?-1:0}return-1},a.JsonDiagramDataSource.prototype.getDescendantsConnectivity=function(a){return"unknown"}});
//# sourceMappingURL=ojjsondiagramdatasource.js.map