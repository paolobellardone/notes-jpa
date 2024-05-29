/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","jquery","ojs/ojeventtarget"],function(t,e,i){"use strict";var s;t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,function(t){t.EXACT="exact",t.APPROXIMATE="approximate"}(s||(s={}));class r{constructor(t,e){var i;this.dataProvider=t,this.options=e,this._KEY="key",this._KEYS="keys",this._STARTINDEX="startIndex",this._PAGESIZE="pageSize",this._OFFSET="offset",this._SIZE="size",this._PAGE="page",this._PAGECOUNT="pageCount",this._TOTALSIZE="totalsize",this._PREVIOUSPAGE="previousPage",this._BEFOREPAGE="beforePage",this._DONE="done",this._VALUE="value",this._DATA="data",this._REFRESH="refresh",this._MUTATE="mutate",this._SORTCRITERIA="sortCriteria",this._FILTERCRITERION="filterCriterion",this._METADATA="metadata",this._RESULTS="results",this._FETCHPARAMETERS="fetchParameters",this._CONTAINSPARAMETERS="containsParameters",this._CONTAINSKEYS="containsKeys",this._FETCHBYKEYS="fetchByKeys",this._FETCHBYOFFSET="fetchByOffset",this._AFTERKEYS="afterKeys",this._ADDBEFOREKEYS="addBeforeKeys",this._ADD="add",this._REMOVE="remove",this._UPDATE="update",this._INDEXES="indexes",this.AsyncIterable=(i=class{constructor(t,e){this._parent=t,this._asyncIterator=e,this[Symbol.asyncIterator]=function(){return this._asyncIterator}}},Symbol.asyncIterator,i),this.AsyncIterator=class{constructor(t,e,i,s){this._parent=t,this._nextFunc=e,this._params=i,this._clientId=s}next(){const t=this._nextFunc(this._params,this._clientId);return Promise.resolve(t)}},this.AsyncIteratorYieldResult=class{constructor(t,e){this._parent=t,this.value=e,this[t._VALUE]=e,this[t._DONE]=!1}},this.AsyncIteratorReturnResult=class{constructor(t,e){this._parent=t,this.value=e,this[t._VALUE]=e,this[t._DONE]=!0}},this.FetchListParameters=class{constructor(t,e,i,s){this._parent=t,this.size=e,this.sortCriteria=i,this.filterCriterion=s,this[t._SIZE]=e,this[t._SORTCRITERIA]=i,this[t._FILTERCRITERION]=s}},this.FetchListResult=class{constructor(t,e,i,s){this._parent=t,this.fetchParameters=e,this.data=i,this.metadata=s,this[t._FETCHPARAMETERS]=e,this[t._DATA]=i,this[t._METADATA]=s}},this.FetchByOffsetParameters=class{constructor(t,e,i,s,r){this._parent=t,this.offset=e,this.size=i,this.sortCriteria=s,this.filterCriterion=r,this[t._SIZE]=i,this[t._SORTCRITERIA]=s,this[t._OFFSET]=e,this[t._FILTERCRITERION]=r}},this.FetchByOffsetResults=class{constructor(t,e,i,s){this._parent=t,this.fetchParameters=e,this.results=i,this.done=s,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i,this[t._DONE]=s}},this.FetchByKeysResults=class{constructor(t,e,i){this._parent=t,this.fetchParameters=e,this.results=i,this[t._FETCHPARAMETERS]=e,this[t._RESULTS]=i}},this.ContainsKeysResults=class{constructor(t,e,i){this._parent=t,this.containsParameters=e,this.results=i,this[t._CONTAINSPARAMETERS]=e,this[t._RESULTS]=i}},this.ItemMetadata=class{constructor(t,e){this._parent=t,this.key=e,this[t._KEY]=e}},this.DataProviderMutationEventDetail=class{constructor(t,e,i,s){this._parent=t,this.add=e,this.remove=i,this.update=s,this[t._ADD]=e,this[t._REMOVE]=i,this[t._UPDATE]=s}},this.DataProviderOperationEventDetail=class{constructor(t,e,i,s,r){this._parent=t,this.keys=e,this.metadata=i,this.data=s,this.indexes=r,this[t._KEYS]=e,this[t._METADATA]=i,this[t._DATA]=s,this[t._INDEXES]=r}},this.DataProviderAddOperationEventDetail=class{constructor(t,e,i,s,r,a,h){this._parent=t,this.keys=e,this.afterKeys=i,this.addBeforeKeys=s,this.metadata=r,this.data=a,this.indexes=h,this[t._KEYS]=e,this[t._AFTERKEYS]=i,this[t._ADDBEFOREKEYS]=s,this[t._METADATA]=r,this[t._DATA]=a,this[t._INDEXES]=h}},this._addEventListeners(t),this._currentPage=-1,this._pageSize=-1,this._pageCount=-1,this._offset=0,this._totalSize=-1,this._skipCriteriaCheck=!1,this._isInitialized=new Promise(t=>{this._resolveFunc=t}),this._isInitialDataLoaded=new Promise(t=>{this._dataResolveFunc=t}),this._hasMutated=!1,this._selfRefresh=!1,this._mustRefetch=!1,this._isFetchingForMutation=!1,this._mutationEventQueue=[],this._isMutating=null,this._mutationFunc=null,this._doRefreshEvent=!1,this._mutatingTotalSize=null,this._fetchMore=!1,this._isUnknownRowCount=!1,this._iteratorCacheMap=new Map}containsKeys(t){return this._checkIfDataInitialized(()=>this.dataProvider[this._CONTAINSKEYS](t).then(e=>{const i=e.results;if(this._isGlobal(t))return new this.ContainsKeysResults(this,t,i);{const e=new Set,s=this._getCurrentPageKeys();return i.forEach(t=>{-1!==s.indexOf(t)&&e.add(t)}),new this.ContainsKeysResults(this,t,e)}}).catch(t=>Promise.reject(t)))}fetchByKeys(t){return this._checkIfDataInitialized(()=>{const e=t.keys;if(this._isGlobal(t)){if(this.dataProvider[this._FETCHBYKEYS])return this.dataProvider[this._FETCHBYKEYS](t);throw new Error("Global scope not supported for this dataprovider")}return this._fetchByOffset(new this.FetchByOffsetParameters(this,this._offset,this._pageSize,this._currentSortCriteria,this._currentFilterCriteria)).then(i=>{const s=i.results,r=new Map;return s.map(t=>{if(e.has(t[this._METADATA][this._KEY]))return t}).forEach(t=>{t&&r.set(t[this._METADATA][this._KEY],t)}),new this.FetchByKeysResults(this,t,r)}).catch(t=>Promise.reject(t))})}fetchByOffset(t){return this._checkIfDataInitialized(()=>{const e=null!=t&&t[this._OFFSET]>0?t[this._OFFSET]:0;return t=new this.FetchByOffsetParameters(this,this._offset,this._pageSize,this._currentSortCriteria,this._currentFilterCriteria),this._fetchByOffset(t).then(i=>{const s=i.results.filter((t,i)=>i>=e);return new this.FetchByOffsetResults(this,this._getLocalParams(t),s,i.done)})})}fetchFirst(t){const e=null!=t?t[this._SORTCRITERIA]:null,i=null!=t?t[this._FILTERCRITERION]:null;let s={};this._skipCriteriaCheck?this._skipCriteriaCheck=!1:this._isSameCriteria(e,i)||(this._currentSortCriteria=e,this._currentFilterCriteria=i,this._offset=0,0!==this._currentPage&&(s[this._PREVIOUSPAGE]=this._currentPage,this._currentPage=0,s[this._PAGE]=this._currentPage));const r=this._offset,a=this._pageSize,h=t&&t.clientId||Symbol();return this._iteratorCacheMap.set(h,{offset:r,size:a,mutationOffset:0,fetchFirstDone:!1,currentParams:this._currentParams}),new this.AsyncIterable(this,new this.AsyncIterator(this,((t,e)=>(t,e)=>{const i=this._iteratorCacheMap.get(e);let r=i.offset,a=i.size,h=i.mutationOffset,n=i.fetchFirstDone;const _=i.currentParams;let o=new this.FetchByOffsetParameters(this,r,a,this._currentSortCriteria,this._currentFilterCriteria);0!==h&&_&&(o=_);let u=!1;return null!=this._isInitialDataLoaded&&(u=!0),this._checkIfDataInitialized(()=>(u&&(a=this._pageSize,r=this._offset,o=new this.FetchByOffsetParameters(this,r,a,this._currentSortCriteria,this._currentFilterCriteria)),this._fetchByOffset(o).then(t=>{let i=t.results;n&&0===h&&(i=[]),0!==h&&(i=i.slice(i.length-h));const o=i.map(t=>t[this._DATA]),u=i.map(t=>t[this._METADATA]);r=r+u.length-h,null!=s[this._PAGE]&&(this._endItemIndex=this._offset+o.length-1,this.dispatchEvent(new CustomEvent(this._PAGE,{detail:s})),s={}),this._skipCriteriaCheck=!1;const c=new this.FetchByOffsetParameters(this,t.fetchParameters.offset-h,this._pageSize,t.fetchParameters.sortCriteria,t.fetchParameters.filterCriterion);return h=0,n=t[this._DONE],this._iteratorCacheMap.set(e,{offset:r,size:a,mutationOffset:h,fetchFirstDone:n,currentParams:_}),t[this._DONE]&&0===o.length?Promise.resolve(new this.AsyncIteratorReturnResult(this,new this.FetchListResult(this,c,o,u))):Promise.resolve(new this.AsyncIteratorYieldResult(this,new this.FetchListResult(this,c,o,u)))})))})(),t,h))}getCapability(t){return this.dataProvider.getCapability(t)}getTotalSize(){return this._checkIfInitialized(()=>Promise.resolve(this._pageSize))}isEmpty(){return this.dataProvider.isEmpty()}getPage(){return this._currentPage}setPage(e,i){return this._mutationBusyContext(()=>{e=parseInt(e,10);const s={};s[this._PAGE]=e,s[this._PREVIOUSPAGE]=this._currentPage,this.dispatchEvent(new CustomEvent(this._BEFOREPAGE,{detail:s})),null!=i[this._PAGESIZE]&&(this._pageSize=i[this._PAGESIZE]),this._offset=parseInt(e,10)*this._pageSize,this._currentPage=e,null!=this._isInitialized&&(this._resolveFunc(!0),this._updateTotalSize());const r=new this.FetchByOffsetParameters(this,this._offset,this._pageSize,this._currentSortCriteria,this._currentFilterCriteria);return this._fetchByOffset(r).then(i=>{const r=i.results;if(0!==r.length){this._endItemIndex=this._offset+r.length-1,this._skipCriteriaCheck=!0,this.dispatchEvent(new CustomEvent(this._PAGE,{detail:s})),this._updateTotalSize();const t=i.fetchParameters;r.length<t.size&&(this._currentParams=new this.FetchByOffsetParameters(this,t.offset,r.length,t.sortCriteria,t.filterCriterion)),this._updatePageData(r)}else 0!==this._currentPage?(this._currentPage=s[this._PREVIOUSPAGE],this._offset=this._currentPage*this._pageSize,this.dispatchEvent(new CustomEvent(this._PAGECOUNT,{detail:{previousValue:e,value:this._currentPage}})),this._doRefreshEvent=!1):(this._offset=0,this._endItemIndex=0);this._doRefreshEvent?(this._hasMutated=!0,this._selfRefresh=!0,this.dispatchEvent(new t.DataProviderRefreshEvent)):(this._dataResolveFunc(!0),this._doRefreshEvent=!0),this._isInitialDataLoaded&&this._dataResolveFunc(!0)})})}getStartItemIndex(){return this._offset}getEndItemIndex(){return this._endItemIndex}getPageCount(){return"atLeast"===this._totalSizeConfidence?this._pageCount+1:this._pageCount}totalSize(){return this._totalSize}totalSizeConfidence(){return this._totalSizeConfidence?this._totalSizeConfidence:-1===this._totalSize?"unknown":"actual"}getGlobalIndex(t){return this._offset+t}getLocalIndex(t){return t-this._offset}_getLocalParams(t){return new this.FetchByOffsetParameters(this,this.getLocalIndex(t.offset),t.size,t.sortCriteria,t.filterCriterion)}_updatePageData(t){this._currentPageData=t}_updateTotalSize(){const t=this._totalSize,e=this._pageCount;return this._checkIfInitialized(()=>this.dataProvider.getTotalSize().then(i=>{if(this._totalSize=i,this._pageCount=-1,-1!==this._totalSize){if(this._isUnknownRowCount&&(this._isUnknownRowCount=!1,this._isExactMode()||(this._totalSizeConfidence="atLeast")),this._pageCount=Math.ceil(this._totalSize/this._pageSize),this._offset>=this._totalSize){this._offset=this._totalSize-this._totalSize%this._pageSize,this._endItemIndex=this._totalSize-1;const t=Math.floor(this._totalSize/this._pageSize);if(this._currentPage!==t){const e={};e[this._PAGE]=t,e[this._PREVIOUSPAGE]=this._currentPage,this.dispatchEvent(new CustomEvent(this._PAGE,{detail:e})),this._currentPage=t}}e!==this._pageCount?this.dispatchEvent(new CustomEvent(this._PAGECOUNT,{detail:{previousValue:e,value:this._pageCount}})):t!==this._totalSize&&this.dispatchEvent(new CustomEvent(this._TOTALSIZE,{detail:{previousValue:t,value:this._totalSize}}))}return this._pageSize}))}_mutationBusyContext(t){return this._isMutating?this._isMutating.then(()=>(this._isMutating=null,t())):t()}_setupMutationBusyContext(){this._isMutating=new Promise(t=>{this._mutationFunc=t})}_checkIfInitialized(t){return this._isInitialized?this._isInitialized.then(e=>{if(e&&-1!==this._currentPage)return this._isInitialized=null,t();throw this._isInitialized=null,new Error("Paging DataProvider View incorrectly initialized")}):t()}_checkIfDataInitialized(t){return this._isInitialDataLoaded?this._isInitialDataLoaded.then(e=>{if(e&&-1!==this._currentPage)return this._isInitialDataLoaded=null,t();throw this._isInitialDataLoaded=null,new Error("Paging DataProvider View incorrectly initialized")}):t()}_getCurrentPageKeys(){return this._currentResults.map(t=>t[this._METADATA][this._KEY])}_isSameParams(t){return!!this._currentParams&&(this._currentParams[this._SIZE]===t[this._SIZE]&&this._currentParams[this._OFFSET]===t[this._OFFSET]&&this._currentParams[this._SORTCRITERIA]===t[this._SORTCRITERIA]&&this._currentParams[this._FILTERCRITERION]===t[this._FILTERCRITERION])}_isSameCriteria(t,e){if(t){if(!this._currentSortCriteria||t[0].attribute!==this._currentSortCriteria[0].attribute||t[0].direction!==this._currentSortCriteria[0].direction)return!1}else if(this._currentSortCriteria)return!1;if(e){if(!this._currentFilterCriteria)return!1;for(const t in this._currentFilterCriteria)if(!this._filterCompare(this._currentFilterCriteria,e,t))return!1;for(const t in e)if(!this._filterCompare(this._currentFilterCriteria,e,t))return!1}else if(this._currentFilterCriteria)return!1;return!0}_filterCompare(t,e,i){return!(!t[i]||!e[i]||t[i]!==e[i])}_isGlobal(t){return void 0!==t.scope&&"global"===t.scope}_isExactMode(){return!(!this.options||!this.options.rowCountConfidence||this.options.rowCountConfidence!==s.EXACT)}_getCurrentPageData(){return this._currentParams&&this._currentParams.offset===this._offset&&this._currentParams.size===this._pageSize?this._currentPageData&&!this._hasMutated?Promise.resolve(new this.FetchByOffsetResults(this,this._getLocalParams(this._currentParams),this._currentPageData,this._currentIsDone)):this._fetchByOffset(this._currentParams).then(t=>t):this._fetchByOffset(new this.FetchByOffsetParameters(this,this._offset,this._pageSize,this._currentSortCriteria,this._currentFilterCriteria)).then(t=>t)}_fetchByOffset(t){return this._checkIfInitialized(()=>(t=this._cleanFetchParams(t),this._currentParams&&this._isSameParams(t)&&(!this._hasMutated||this._selfRefresh)?(this._selfRefresh=!1,this._hasMutated=!1,Promise.resolve(new this.FetchByOffsetResults(this,this._returnFetchParams,this._currentResults,this._currentIsDone))):0===t.size?(this._currentIsDone=!0,this._currentParams=t,Promise.resolve(new this.FetchByOffsetResults(this,this._getLocalParams(t),[],this._currentIsDone))):this._fetchByOffsetHelper(t)))}_fetchByOffsetHelper(t){return this.dataProvider[this._FETCHBYOFFSET](t).then(e=>{this._currentIsDone=e.done,this._currentParams||(this._currentParams=t),this._fetchMore?this._currentResults=this._currentResults.concat(e.results):(this._currentResults=e.results,this._currentParams=t);const i=e.fetchParameters.sortCriteria,s=e.fetchParameters.filterCriterion;this._returnFetchParams=new this.FetchByOffsetParameters(this,this.getLocalIndex(this._currentParams.offset),this._currentParams.size,i,s),this._fetchMore=!1;const r=this._currentResults.length,a=this._offset+r,h=null===this._mutatingTotalSize?this._totalSize:this._mutatingTotalSize;if(e.done)this._pageCount=Math.ceil(a/this._pageSize),this._totalSizeConfidence&&(this._totalSizeConfidence=null);else if(!e.done&&a>=h&&h>-1&&t.size===this._pageSize)this._isExactMode()||(this._totalSizeConfidence="atLeast");else{if(!e.done&&r<this._pageSize){this._fetchMore=!0;const t=new this.FetchByOffsetParameters(this,a,this._pageSize-r,this._currentSortCriteria,this._currentFilterCriteria);return this._fetchByOffsetHelper(t)}e.done||-1!==h||(this._isUnknownRowCount=!0)}return(this._pageSize===this._currentResults.length||a>=h&&h>-1)&&(this._currentIsDone=!0),r>this._pageSize&&this._currentResults.splice(this._pageSize),this._hasMutated=!1,new this.FetchByOffsetResults(this,this._returnFetchParams,this._currentResults,this._currentIsDone)}).catch(t=>(this._hasMutated=!1,this._fetchMore=!1,this._currentIsDone=null,this._currentResults=null,this._currentParams=null,this._dataResolveFunc(!1),Promise.reject(t)))}_cleanFetchParams(t){const e=t.offset;if(e>=this._offset+this._pageSize||e<this._offset)return new this.FetchByOffsetParameters(this,e,0,t.sortCriteria,t.filterCriterion);let i=t.size;i<=0&&(i=this._pageSize),e+i>this._offset+this._pageSize&&(i=this._offset+this._pageSize-e);const s=null===this._mutatingTotalSize?this._totalSize:this._mutatingTotalSize;return s>0&&"atLeast"!==this._totalSizeConfidence&&e+i>s&&(i=s-e),new this.FetchByOffsetParameters(this,e,i,t.sortCriteria,t.filterCriterion)}_mutationEventDataFetcher(t){this.dataProvider.getTotalSize().then(e=>{e>0&&(this._mutatingTotalSize=e,this._offset>=e&&(this._offset=e-(e-1)%this._pageSize-1,this._endItemIndex=e-1)),this._getCurrentPageData().then(e=>{this._mustRefetch?(this._mustRefetch=!1,this._hasMutated=!0,this._mutationEventDataFetcher(t)):t(e)}).catch(e=>{if(!this._mustRefetch)return Promise.reject(e);this._mustRefetch=!1,this._hasMutated=!0,this._mutationEventDataFetcher(t)})})}_processMutationEventsByKey(e){const i=[],s=[],r=[],a=new Set,h=[],n=[],_=[],o=new Set,u=[],c=[],l=[],f=new Set,d=this._currentResultsForMutation.map((t,e)=>({item:t,index:e})),E=e.results.map((t,e)=>({item:t,index:e})),m=d.map(t=>t.item.metadata.key),P=E.map(t=>t.item.metadata.key),S=d.filter(t=>P.indexOf(t.item.metadata.key)<0),p=E.filter(t=>m.indexOf(t.item.metadata.key)<0);let g=this._mutationEventQueue.filter(t=>!t.detail.add&&!t.detail.remove&&t.detail.update).map(t=>t.detail.update.indexes.map(t=>t-this._pageSize*this._currentPage));g=g.reduce((t,e)=>t.concat(e),[]),g=g.filter((t,e)=>g.indexOf(t)===e);const C=d.filter(t=>{const e=P.indexOf(t.item.metadata.key);return g.indexOf(e)>-1});this._mutationEventQueue=[],p.length>0&&(p.forEach(t=>{h.push(E[t.index].item.metadata),n.push(E[t.index].item.data),_.push(t.index)}),h.forEach(t=>{o.add(t.key)})),S.length>0&&(S.forEach(t=>{i.push(d[t.index].item.metadata),s.push(d[t.index].item.data),r.push(t.index)}),i.forEach(t=>{a.add(t.key)})),C.length>0&&(C.forEach(t=>{u.push(E[t.index].item.metadata),c.push(E[t.index].item.data),l.push(t.index)}),u.forEach(t=>{f.add(t.key)}));const I=d.length-r.length,R=_.filter(t=>t>=I);this._iteratorCacheMap.forEach((t,e)=>{t.mutationOffset=R.length,t.offset>=this._totalSize&&(t.offset=this._totalSize-this._totalSize%this._pageSize,t.currentParams=this._currentParams),this._iteratorCacheMap.set(e,t)});let F=null,T=null,z=null;if(_.length>0&&(F=new this.DataProviderAddOperationEventDetail(this,o,null,null,h,n,_)),r.length>0&&(T=new this.DataProviderOperationEventDetail(this,a,i,s,r)),l.length>0&&(z=new this.DataProviderOperationEventDetail(this,f,u,c,l)),null!=F||null!=T||null!=z){const i=new this.DataProviderMutationEventDetail(this,F,T,z);this._updatePageData(e.results),this.dispatchEvent(new t.DataProviderMutationEvent(i))}}_addEventListeners(e){e.addEventListener(this._REFRESH,e=>{this._hasMutated||(this._hasMutated=!0,this._isInitialDataLoaded=new Promise(t=>{this._dataResolveFunc=t}),this._updateTotalSize().then(()=>{this.setPage(0,{pageSize:this._pageSize}).then(()=>{0===this._endItemIndex&&this.dispatchEvent(new t.DataProviderRefreshEvent)})}))}),e.addEventListener(this._MUTATE,t=>{this._mutationEventQueue.push(t),this._setupMutationBusyContext(),this._isFetchingForMutation?this._mustRefetch=!0:(this._isFetchingForMutation=!0,this._currentResultsForMutation=null!=this._currentPageData?this._currentPageData:[],this._hasMutated=!0,this._mutationEventDataFetcher(t=>{this._isFetchingForMutation=!1;const e=t.results.length;this._endItemIndex=Math.max(0,this._offset+e-1),this._updateTotalSize().then(()=>{this._mutatingTotalSize=null,0===e?(this._mutationFunc(!0),this.setPage(this._currentPage,{pageSize:this._pageSize})):(this._processMutationEventsByKey(t),this._mutationFunc(!0))})}))})}}return t._registerLegacyNamespaceProp("PagingDataProviderView",r),t.EventTargetMixin.applyMixin(r),r});
//# sourceMappingURL=ojpagingdataproviderview.js.map