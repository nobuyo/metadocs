---
sidebar_position: 10
slug: /visualizations/pie
---

# Pie Chart

- [Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/visualizations/PieChart.jsx)


## Identifier

`pie`

## Available Settings

Key | Type | Description
--|--|--
pie.dimension | string | Dimension field
pie.metric | string | Measure field
pie.show_legend | boolean | Show legend
pie.show_legend_perecen | boolean | Show percentages in legend
pie.slice_threshold | number | Minimum slice percentage
pie.colors | { [key in pie.dimension]: string } | Dimension and color assignment map
