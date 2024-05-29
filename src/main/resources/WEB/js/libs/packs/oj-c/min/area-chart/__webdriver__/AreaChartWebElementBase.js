"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaChartWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-area-chart WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, AreaChartWebElement.ts.
 */
class AreaChartWebElementBase extends elements_1.OjWebElement {
    /**
     * Gets the value of <code>data</code> property.
     * Specifies the DataProvider for the sections and items of the area-chart.
     * @return The value of <code>data</code> property.
     *
     */
    getData() {
        return this.getProperty('data');
    }
    /**
     * Gets the value of <code>seriesComparator</code> property.
     * A comparator function that determines the ordering of the chart series when using a DataProvider. If undefined, the series will follow the order in which they are found in the data.
     * @return The value of <code>seriesComparator</code> property.
     *
     */
    getSeriesComparator() {
        return this.getProperty('seriesComparator');
    }
    /**
     * Gets the value of <code>groupComparator</code> property.
     * A comparator function that determines the ordering of the chart groups when using a DataProvider. If undefined, the group will follow the order in which they are found in the data.
     * @return The value of <code>groupComparator</code> property.
     *
     */
    getGroupComparator() {
        return this.getProperty('groupComparator');
    }
    /**
     * Gets the value of <code>stack</code> property.
     * Defines whether the data items are stacked.
     * @return The value of <code>stack</code> property.
     *
     */
    getStack() {
        return this.getProperty('stack');
    }
    /**
     * Gets the value of <code>drilling</code> property.
     * Whether drilling is enabled.
     * @return The value of <code>drilling</code> property.
     *
     */
    getDrilling() {
        return this.getProperty('drilling');
    }
    /**
     * Gets the value of <code>orientation</code> property.
     * The orientation of the chart.
     * @return The value of <code>orientation</code> property.
     *
     */
    getOrientation() {
        return this.getProperty('orientation');
    }
    /**
     * Gets the value of <code>timeAxisType</code> property.
     * The time axis type of the chart x axis.
     * @return The value of <code>timeAxisType</code> property.
     *
     */
    getTimeAxisType() {
        return this.getProperty('timeAxisType');
    }
    /**
     * Gets the value of <code>yAxis</code> property.
     * An object defining y axis properties.
     * @return The value of <code>yAxis</code> property.
     *
     */
    getYAxis() {
        return this.getProperty('yAxis');
    }
    /**
     * Gets the value of <code>xAxis</code> property.
     * An object defining x axis properties.
     * @return The value of <code>xAxis</code> property.
     *
     */
    getXAxis() {
        return this.getProperty('xAxis');
    }
    /**
     * Gets the value of <code>plotArea</code> property.
     * An object defining the style of the plot area.
     * @return The value of <code>plotArea</code> property.
     *
     */
    getPlotArea() {
        return this.getProperty('plotArea');
    }
    /**
     * Gets the value of <code>zoomAndScroll</code> property.
     * Specifies the zoom and scroll behavior of the chart.
     * @return The value of <code>zoomAndScroll</code> property.
     *
     */
    getZoomAndScroll() {
        return this.getProperty('zoomAndScroll');
    }
    /**
     * Gets the value of <code>valueFormats</code> property.
     * An object specifying value formatting and tooltip behavior.
     * @return The value of <code>valueFormats</code> property.
     *
     */
    getValueFormats() {
        return this.getProperty('valueFormats');
    }
    /**
     * Gets the value of <code>selectionMode</code> property.
     * Specifies the selection mode.
     * @return The value of <code>selectionMode</code> property.
     *
     */
    getSelectionMode() {
        return this.getProperty('selectionMode');
    }
    /**
     * Sets the value of <code>selection</code> property.
     * An array containing the ids of the initially selected data items.
     * @param selection The value to set for <code>selection</code>
     *
     */
    changeSelection(selection) {
        return this.setProperty('selection', selection);
    }
    /**
     * Gets the value of <code>selection</code> property.
     * An array containing the ids of the initially selected data items.
     * @return The value of <code>selection</code> property.
     *
     */
    getSelection() {
        return this.getProperty('selection');
    }
    /**
     * Sets the value of <code>hiddenCategories</code> property.
     * An array of category string used for filtering.
     * @param hiddenCategories The value to set for <code>hiddenCategories</code>
     *
     */
    changeHiddenCategories(hiddenCategories) {
        return this.setProperty('hiddenCategories', hiddenCategories);
    }
    /**
     * Gets the value of <code>hiddenCategories</code> property.
     * An array of category string used for filtering.
     * @return The value of <code>hiddenCategories</code> property.
     *
     */
    getHiddenCategories() {
        return this.getProperty('hiddenCategories');
    }
    /**
     * Sets the value of <code>highlightedCategories</code> property.
     * An array of category string used for highlighting.
     * @param highlightedCategories The value to set for <code>highlightedCategories</code>
     *
     */
    changeHighlightedCategories(highlightedCategories) {
        return this.setProperty('highlightedCategories', highlightedCategories);
    }
    /**
     * Gets the value of <code>highlightedCategories</code> property.
     * An array of category string used for highlighting.
     * @return The value of <code>highlightedCategories</code> property.
     *
     */
    getHighlightedCategories() {
        return this.getProperty('highlightedCategories');
    }
    /**
     * Gets the value of <code>hideAndShowBehavior</code> property.
     * Defines the hide and show behavior that is performed when clicking on a leegnd item.
     * @return The value of <code>hideAndShowBehavior</code> property.
     *
     */
    getHideAndShowBehavior() {
        return this.getProperty('hideAndShowBehavior');
    }
    /**
     * Gets the value of <code>hoverBehavior</code> property.
     * Defines the behavior applied when hovering over data items.
     * @return The value of <code>hoverBehavior</code> property.
     *
     */
    getHoverBehavior() {
        return this.getProperty('hoverBehavior');
    }
    /**
     * Gets the value of <code>highlightMatch</code> property.
     * The matching condition for the highlighted property.
     * @return The value of <code>highlightMatch</code> property.
     *
     */
    getHighlightMatch() {
        return this.getProperty('highlightMatch');
    }
    /**
     * Gets the value of <code>legend</code> property.
     * An object defining the style, positioning, and behavior of the legend.
     * @return The value of <code>legend</code> property.
     *
     */
    getLegend() {
        return this.getProperty('legend');
    }
}
exports.AreaChartWebElementBase = AreaChartWebElementBase;
//# sourceMappingURL=AreaChartWebElementBase.js.map