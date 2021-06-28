---
sidebar_position: 6
slug: /visualizations/gauge
---

# Gauge

- [Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/visualizations/Gauge.jsx)


## Identifier

`gauge`

## Available Settings

Key | Type | Description
--|--|--
gauge.range | [number, number] | Currently not exposed in settings, just computed from gauge.segments
gauge.segments | `{ min: number, max: number, color: string, label: string }` | Gauge ranges
