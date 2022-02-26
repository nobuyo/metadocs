---
position: 1
title: 'About Visualizations'
slug: index
---

# About Visualizations

Each pages are describing identifier and available settings.

## Visualization Settings

Available visualization settings are composed of a number of configuration groups.

### COMMON_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/visualization.js)


Key | Type | Description
--|--|--
card.title | string | The card title
card.description | string | The card description

### GRAPH_COLORS_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/graph.js)

DEPRECATED: replaced with "color" series setting

Key | Type | Description
--|--|--
graph.colors | |

### Series Setting

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/series.js)

Key | Type | Description
--|--|--
line.interpolate | `linear, cardinal, step-after` | Line interpolation style. Default value is `linear`.
line.marker_enabled | boolean | `null` represents auto mode.
line.missing | `zero, none, interpolate` | Replace missing values with.
axis | `left, right` | Axis position, `null` represents auto mode.
show_series_values | boolean | Show values for this series.

### DATE_COLUMN_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/column.js)

Key | Type | Description
--|--|--
date_style | string | Date format, like `"M/D/YYYY"`.
date_separator | string | Separator character. Default value is `/`.
date_abbreviate | boolean | Abbreviate names of days and months.
time_enabled | boolean | Show the time
time_style | boolean | Time format, like `"h:mm A"`.


### NUMBER_COLUMN_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/column.js)

Key | Type | Description
--|--|--
number_style | `decimal, percent, scientific, currency` | Number format, default is `decimal`.
currency | string | 3 digit code defined in [currency](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/lib/currency.js)
currency_style | `symbol, code, name` | Default value is `symbol`.
currency_in_header | boolean | Show in the column heading when `true`, show in every table cell on `false`.
number_separators | `".,", ", ", ",.", ".", ".'"` | The first character is decimal point.
decimals | number | Minimum number of decimal places.
scale | number | Multiply by a number.
prefix | string | Prefix for result.
suffix | string | Suffix for result.

### GRAPH_DATA_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/graph.js)

[seriesSetting](#series-setting) is included.

Key | Type | Description
--|--|--
graph.dimensions | string[] | Column names for X-axis.
graph.metrics | string[] | Column names for Y-axis.


### GRAPH_DATA_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/graph.js)

Key | Type | Description
--|--|--
scatter.bubble | field | Which field for determine bubble size.

### STACKABLE_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/graph.js)

Key | Type | Description
--|--|--
stackable.stack_type | `stacked, normalized` | Stacking type, don't stack when `null`.
stackable.stack_display | `area, bar` | Stacked chart type


### GRAPH_GOAL_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/graph.js)

Key | Type | Description
--|--|--
graph.show_goal | boolean | Show goal line
graph.goal_value | number | Goal value
graph.goal_label | string | Goal label
graph.show_trendline | boolean | Show trend line

### GRAPH_DISPLAY_VALUES_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/graph.js)

Key | Type | Description
--|--|--
graph.show_values | boolean | Show values on data points
graph.label_value_frequency | `fit, all` | Frequency of showing label value
graph.label_value_formatting | `auto, compact, full` | Value formatting

### GRAPH_AXIS_SETTINGS

[Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/lib/settings/graph.js)

Key | Type | Description
--|--|--
graph.x_axis.scale | `histogram, timeseries, linear, ordinal, pow, log` | X-axis scale. The options change depending on the series.
graph.y_axis.scale | `linear, pow, log` | Y-axis scale.
graph.x_axis.axis_enabled | `true, false, "compact", "rotate-45", "rotete-90" | Show x-axis line and marks
graph.y_axis.axis_enabled | boolean | Show y-axis line and marks
graph.y_axis.auto_range | boolean | Auto y-axis range
graph.y_axis.min | number | Min number for y-axis
graph.y_axis.max | number | Max number for y-axis
graph.y_axis.auto_split | boolean | Use a split y-axis when necessary
graph.x_axis.labels_enabled | boolean | Show label on x-axis
graph.x_axis.title_text | string | X-axis label
graph.y_axis.labels_enabled | boolean | Show label on y-axis
graph.y_axis.title_text | string | Y-axis label


## Visualization types

- [Area Chart](/docs/visualizations/area)
- [Bar Chart](/docs/visualizations/bar)
- [Combo Chart](/docs/visualizations/combo)
- [Funnel](/docs/visualizations/funnel)
- [Gauge](/docs/visualizations/gauge)
- [Line](/docs/visualizations/line)
- [Map](/docs/visualizations/map)
- [Object Detail](/docs/visualizations/object)
- [Pie Chart](/docs/visualizations/pie)
- [Pivot Table](/docs/visualizations/pivot)
- [Progress](/docs/visualizations/progress)
- [Row Chart](/docs/visualizations/row)
- [Scalar](/docs/visualizations/scalar)
- [Scatter Plot](/docs/visualizations/scatter)
- [Smart Scalar](/docs/visualizations/smart-scalar)
- [Table](/docs/visualizations/table)
- [Text](/docs/visualizations/text)
- [Waterfall Chart](/docs/visualizations/waterfall)
