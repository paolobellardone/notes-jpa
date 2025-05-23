define(["require", "exports", "preact/jsx-runtime", '@oracle/oraclejet-preact/translationBundle', "preact/hooks", "@oracle/oraclejet-preact/UNSAFE_VisProgressiveLoader", "@oracle/oraclejet-preact/UNSAFE_LineAreaChart", "@oracle/oraclejet-preact/UNSAFE_VisStatusMessage", "@oracle/oraclejet-preact/UNSAFE_Legend", "@oracle/oraclejet-preact/UNSAFE_ChartWithLegend", "@oracle/oraclejet-preact/hooks/UNSAFE_useVisBusyStateContext", "../hooks/UNSAFE_useVisBusyState/useVisBusyState", "@oracle/oraclejet-preact/hooks/UNSAFE_useLegendPreferredSize", "@oracle/oraclejet-preact/UNSAFE_TrackResizeContainer", "@oracle/oraclejet-preact/hooks/UNSAFE_useUser", "ojs/ojvcomponent", "../hooks/UNSAFE_useChartData/useChartData", "../utils/PRIVATE_chartUtils/events", "../utils/PRIVATE_chartUtils/legendUtils", "../hooks/UNSAFE_useVizCategories/useVizCategories", "../utils/PRIVATE_chartUtils/lineAreaUtils", "../utils/PRIVATE_chartUtils/plotAreaUtils", "../utils/PRIVATE_chartUtils/axisUtils", "oj-c/hooks/PRIVATE_useVisContextMenu/useVisContextMenu", "css!oj-c/area-chart/area-chart-styles.css"], function (require, exports, jsx_runtime_1, translationBundle_1, hooks_1, UNSAFE_VisProgressiveLoader_1, UNSAFE_LineAreaChart_1, UNSAFE_VisStatusMessage_1, UNSAFE_Legend_1, UNSAFE_ChartWithLegend_1, UNSAFE_useVisBusyStateContext_1, useVisBusyState_1, UNSAFE_useLegendPreferredSize_1, UNSAFE_TrackResizeContainer_1, UNSAFE_useUser_1, ojvcomponent_1, useChartData_1, events_1, legendUtils_1, useVizCategories_1, lineAreaUtils_1, plotAreaUtils_1, axisUtils_1, useVisContextMenu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AreaChart = void 0;
    const HIGHLIGHTED_DEFAULT = [];
    const SELECTION_DEFAULT = [];
    const HIDDEN_DEFAULT = [];
    const LEGEND_DEFAULT = { rendered: 'on', position: 'auto' };
    function AreaChartComp({ data, hideAndShowBehavior = 'none', orientation = 'vertical', xAxis, yAxis, hoverBehavior = 'none', valueFormats, plotArea, zoomAndScroll, itemTemplate, seriesTemplate, groupTemplate, seriesComparator, groupComparator, drilling = 'off', hiddenCategories = HIDDEN_DEFAULT, highlightedCategories = HIGHLIGHTED_DEFAULT, highlightMatch = 'any', selection = SELECTION_DEFAULT, selectionMode = 'none', timeAxisType, stack = 'off', legend = LEGEND_DEFAULT, contextMenuConfig, onOjContextMenuAction, onOjContextMenuSelection, onSelectionChanged, ...props }) {
        const rootRef = (0, hooks_1.useRef)(null);
        const { direction } = (0, UNSAFE_useUser_1.useUser)();
        const isRtl = direction === 'rtl';
        const busyStateContext = (0, useVisBusyState_1.useVisBusyState)(rootRef, 'oj-c-area-chart: ');
        const { series, groups, getDataItem, isLoading, idToDPItemMap } = (0, useChartData_1.useChartData)(data, busyStateContext.addBusyState, itemTemplate, seriesTemplate, groupTemplate, 'oj-c-area-chart-item', 'oj-c-area-chart-series', 'oj-c-area-chart-group', seriesComparator, groupComparator);
        const { majorTick: xMajorTick, ...xAxisRest } = xAxis ?? {};
        const { majorTick: yMajorTick, minorTick: yMinorTick, ...yAxisRest } = yAxis ?? {};
        const { itemDrillHandler, groupDrillHandler, seriesDrillHandler } = (0, events_1.getChartEventsHandler)(series, groups, drilling, props.onOjItemDrill, props.onOjGroupDrill, props.onOjSeriesDrill);
        const selectionChangeHandler = (0, hooks_1.useCallback)((detail) => {
            onSelectionChanged?.(detail.ids);
        }, [onSelectionChanged]);
        const categoriesItems = (0, legendUtils_1.getBLACCategoriesItems)(series, groups, getDataItem, hoverBehavior, hideAndShowBehavior);
        const { hiddenIds, updateHidden, highlightedIds, updateHighlighted } = (0, useVizCategories_1.useVizCategories)(categoriesItems, (item) => item.categories, hiddenCategories, highlightedCategories, 'any', highlightMatch, props.onHiddenCategoriesChanged, props.onHighlightedCategoriesChanged);
        const onItemInput = (0, hooks_1.useCallback)((detail) => {
            if (hoverBehavior === 'none')
                return;
            const id = (0, events_1.getIdFromDetail)(detail, series, getDataItem);
            updateHighlighted(id);
        }, [hoverBehavior, updateHighlighted, series, getDataItem]);
        const legendData = (0, legendUtils_1.getLegendData)(series);
        const isLegendInteractive = hideAndShowBehavior != 'none' || hoverBehavior != 'none' || drilling === 'on';
        const legendItemActionHandler = (0, hooks_1.useCallback)((detail) => {
            if (hideAndShowBehavior != 'none') {
                updateHidden(detail.itemId);
                return;
            }
            seriesDrillHandler(detail);
        }, [hideAndShowBehavior, updateHidden, seriesDrillHandler]);
        const legendItemInputHandler = (0, hooks_1.useCallback)((detail) => {
            if (hoverBehavior != 'none') {
                updateHighlighted(detail.itemId);
            }
        }, [hoverBehavior, updateHighlighted]);
        const { preactContextMenuConfig } = (0, useVisContextMenu_1.useVisContextMenu)(idToDPItemMap, contextMenuConfig, onOjContextMenuAction, onOjContextMenuSelection);
        const isLegendRendered = (legend.rendered || legendUtils_1.LegendDefaults.rendered) != 'off';
        const legendSizeRef = (0, hooks_1.useRef)(null);
        const [isLegendReady, setIsLegendReady] = (0, hooks_1.useState)(false);
        return ((0, jsx_runtime_1.jsx)(ojvcomponent_1.Root, { ref: rootRef, children: (0, jsx_runtime_1.jsx)(UNSAFE_TrackResizeContainer_1.TrackResizeContainer, { width: "100%", height: "100%", children: (_width, _height) => {
                    const legendPreferredSize = isLegendReady
                        ? legendSizeRef.current._getPreferredSize(_width, _height)
                        : undefined;
                    const legendMaxSize = _width > _height
                        ? Math.floor(((legendPreferredSize?.width || 0) * 100) / _width)
                        : Math.floor(((legendPreferredSize?.height || 0) * 100) / _height);
                    const legendPosition = legend.position != 'auto' ? legend.position : (0, legendUtils_1.getLegendPosition)(_width, _height);
                    const chart = series.length > 0 && groups.length > 0 && legendPreferredSize ? ((0, jsx_runtime_1.jsx)(UNSAFE_LineAreaChart_1.LineAreaChart, { type: "area", width: legendPreferredSize
                            ? legendPosition === 'start' || legendPosition === 'end'
                                ? `${_width - legendPreferredSize.width}px`
                                : `${_width}px`
                            : undefined, height: legendPreferredSize
                            ? legendPosition === 'top' || legendPosition === 'bottom'
                                ? `${_height - legendPreferredSize.height}px`
                                : `${_height}px`
                            : undefined, series: series, groups: groups, getDataItem: getDataItem, onItemHover: onItemInput, onItemFocus: onItemInput, drilling: drilling, dragMode: props.dragMode, onItemDrill: itemDrillHandler, onGroupDrill: groupDrillHandler, onSelectionChange: selectionChangeHandler, selectionMode: selectionMode, selectedIds: selectionMode === 'none' ? undefined : selection, orientation: orientation, xAxis: (0, axisUtils_1.getPreactAxisProps)({ ...xAxisRest, timeAxisType }), yAxis: (0, axisUtils_1.getPreactAxisProps)(yAxisRest), highlightedIds: highlightedIds.length === 0 ? undefined : highlightedIds, hiddenIds: hiddenIds, plotArea: (0, plotAreaUtils_1.getPlotArea)(plotArea, yMajorTick, yMinorTick, xMajorTick), hideAndShowBehavior: hideAndShowBehavior, hoverBehavior: hoverBehavior, isStacked: stack === 'on', valueFormats: (0, lineAreaUtils_1.transformValueFormats)(valueFormats), "aria-label": props['aria-label'], "aria-describedBy": props['aria-describedby'], "aria-labelledBy": props['aria-labelledby'], contextMenuConfig: contextMenuConfig ? preactContextMenuConfig : undefined })) : (!isLoading && ((0, jsx_runtime_1.jsx)(UNSAFE_VisStatusMessage_1.VisNoData, { "aria-label": props['aria-label'], "aria-describedby": props['aria-describedby'], "aria-labelledby": props['aria-labelledby'] })));
                    const legendMaxWidth = legendPosition === 'start' || legendPosition === 'end'
                        ? (legendPreferredSize?.width || _width * 0.3) + 4
                        : _width;
                    const legendMaxHeight = legendPosition === 'top' || legendPosition === 'bottom'
                        ? (legendPreferredSize?.height || _height * 0.3) + 4
                        : _height;
                    const chartLegend = isLegendRendered && legendData.length > 0 ? ((0, jsx_runtime_1.jsx)(UNSAFE_useLegendPreferredSize_1.LegendRenderedContext.Provider, { value: {
                            isLegendReady: !isLegendReady ? setIsLegendReady : undefined,
                            width: legendMaxWidth,
                            height: legendMaxHeight
                        }, children: (0, jsx_runtime_1.jsx)(UNSAFE_Legend_1.Legend, { items: legendData, ref: legendSizeRef, orientation: legendPosition === 'start' || legendPosition === 'end'
                                ? 'vertical'
                                : 'horizontal', halign: "center", valign: "center", hideAndShowBehavior: hideAndShowBehavior === 'none' ? 'off' : 'on', hoverBehavior: hoverBehavior, isReadOnly: !isLegendInteractive, highlightedIds: highlightedIds.length === 0 ? undefined : highlightedIds, hiddenIds: hiddenIds.length === 0 ? undefined : hiddenIds, symbolHeight: legend.symbolHeight, symbolWidth: legend.symbolWidth, onItemAction: legendItemActionHandler, onItemHover: legendItemInputHandler, onItemFocus: legendItemInputHandler }) })) : undefined;
                    return ((0, jsx_runtime_1.jsx)(UNSAFE_useVisBusyStateContext_1.VisBusyStateContext.Provider, { value: busyStateContext, children: (0, jsx_runtime_1.jsx)(UNSAFE_VisProgressiveLoader_1.VisProgressiveLoader, { isLoading: isLoading, type: "area", "aria-label": props['aria-label'], "aria-describedBy": props['aria-describedby'], "aria-labelledBy": props['aria-labelledby'], children: (0, jsx_runtime_1.jsx)(UNSAFE_ChartWithLegend_1.ChartWithLegend, { chart: legendMaxSize != undefined ? chart : undefined, position: legendPosition, isRtl: isRtl, legend: chartLegend }) }) }));
                } }) }));
    }
    exports.AreaChart = (0, ojvcomponent_1.registerCustomElement)('oj-c-area-chart', AreaChartComp, "AreaChart", { "properties": { "data": { "type": "DataProvider|null" }, "seriesComparator": { "type": "function" }, "groupComparator": { "type": "function" }, "stack": { "type": "string", "enumValues": ["off", "on"] }, "drilling": { "type": "string", "enumValues": ["off", "on"] }, "orientation": { "type": "string", "enumValues": ["horizontal", "vertical"] }, "timeAxisType": { "type": "string", "enumValues": ["enabled", "mixedFrequency", "skipGaps"] }, "yAxis": { "type": "object", "properties": { "dataMax": { "type": "number" }, "dataMin": { "type": "number" }, "max": { "type": "number" }, "min": { "type": "number" }, "majorTick": { "type": "object", "properties": { "lineColor": { "type": "string" }, "lineStyle": { "type": "string", "enumValues": ["dashed", "solid", "dotted"] }, "lineWidth": { "type": "number" }, "rendered": { "type": "string", "enumValues": ["auto", "off", "on"] } } }, "minorTick": { "type": "object", "properties": { "lineColor": { "type": "string" }, "lineStyle": { "type": "string", "enumValues": ["dashed", "solid", "dotted"] }, "lineWidth": { "type": "number" }, "rendered": { "type": "string", "enumValues": ["auto", "off", "on"] } } }, "tickLabel": { "type": "object", "properties": { "converter": { "type": "object" }, "rendered": { "type": "string", "enumValues": ["off", "on"] }, "style": { "type": "object" } } }, "viewportMin": { "type": "number" }, "viewportMax": { "type": "number" }, "step": { "type": "number" }, "size": { "type": "number" }, "scale": { "type": "string", "enumValues": ["linear", "log"] }, "title": { "type": "string" }, "titleStyle": { "type": "object" } } }, "xAxis": { "type": "object", "properties": { "majorTick": { "type": "object", "properties": { "lineColor": { "type": "string" }, "lineStyle": { "type": "string", "enumValues": ["dashed", "solid", "dotted"] }, "lineWidth": { "type": "number" }, "rendered": { "type": "string", "enumValues": ["auto", "off", "on"] } } }, "minorTick": { "type": "object", "properties": { "lineColor": { "type": "string" }, "lineStyle": { "type": "string", "enumValues": ["dashed", "solid", "dotted"] }, "lineWidth": { "type": "number" }, "rendered": { "type": "string", "enumValues": ["auto", "off", "on"] } } }, "tickLabel": { "type": "object", "properties": { "converter": { "type": "object|Array<object>" }, "rendered": { "type": "string", "enumValues": ["off", "on"] }, "rotation": { "type": "string", "enumValues": ["auto", "none"] }, "style": { "type": "object" } } }, "viewportMin": { "type": "number" }, "viewportMax": { "type": "number" }, "step": { "type": "number" }, "size": { "type": "number" }, "scale": { "type": "string", "enumValues": ["linear", "log"] }, "title": { "type": "string" }, "titleStyle": { "type": "object" } } }, "plotArea": { "type": "object", "properties": { "backgroundColor": { "type": "string" } } }, "zoomAndScroll": { "type": "string", "enumValues": ["off", "live"] }, "valueFormats": { "type": "object", "properties": { "group": { "type": "object", "properties": { "tooltipLabel": { "type": "string" }, "tooltipDisplay": { "type": "string", "enumValues": ["auto", "off"] } } }, "series": { "type": "object", "properties": { "tooltipLabel": { "type": "string" }, "tooltipDisplay": { "type": "string", "enumValues": ["auto", "off"] } } }, "value": { "type": "object", "properties": { "converter": { "type": "object" }, "tooltipLabel": { "type": "string" }, "tooltipDisplay": { "type": "string", "enumValues": ["auto", "off"] } } } } }, "selectionMode": { "type": "string", "enumValues": ["none", "multiple", "single"] }, "selection": { "type": "Array<any>", "writeback": true }, "hiddenCategories": { "type": "Array<string>", "writeback": true }, "dragMode": { "type": "string", "enumValues": ["pan", "zoom", "select", "off", "user"] }, "highlightedCategories": { "type": "Array<string>", "writeback": true }, "hideAndShowBehavior": { "type": "string", "enumValues": ["none", "withoutRescale", "withRescale"] }, "hoverBehavior": { "type": "string", "enumValues": ["none", "dim"] }, "highlightMatch": { "type": "string", "enumValues": ["all", "any"] }, "legend": { "type": "object", "properties": { "position": { "type": "string", "enumValues": ["auto", "end", "start", "top", "bottom"] }, "rendered": { "type": "string", "enumValues": ["auto", "off", "on"] }, "maxSize": { "type": "number|string" }, "size": { "type": "number|string" }, "symbolHeight": { "type": "number" }, "symbolWidth": { "type": "number" } } }, "contextMenuConfig": { "type": "object", "properties": { "accessibleLabel": { "type": "string" }, "items": { "type": "function" } } } }, "slots": { "itemTemplate": { "data": {} }, "seriesTemplate": { "data": {} }, "groupTemplate": { "data": {} } }, "events": { "ojViewportChange": {}, "ojItemDrill": {}, "ojGroupDrill": {}, "ojSeriesDrill": {}, "ojContextMenuAction": { "bubbles": true }, "ojContextMenuSelection": { "bubbles": true } }, "extension": { "_WRITEBACK_PROPS": ["selection", "hiddenCategories", "highlightedCategories"], "_READ_ONLY_PROPS": [], "_OBSERVED_GLOBAL_PROPS": ["aria-label", "aria-describedby", "aria-labelledby"] } }, { "hideAndShowBehavior": "none", "orientation": "vertical", "hoverBehavior": "none", "drilling": "off", "hiddenCategories": [], "highlightedCategories": [], "highlightMatch": "any", "selection": [], "selectionMode": "none", "stack": "off", "legend": { "rendered": "on", "position": "auto" } }, {
        '@oracle/oraclejet-preact': translationBundle_1.default
    });
});
