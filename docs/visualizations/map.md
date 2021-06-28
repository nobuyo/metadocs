---
sidebar_position: 8
slug: /visualizations/map
---

# Map

- [Source Code](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/visualizations/visualizations/Map.jsx)


## Identifier

`map`

## Available Settings

Key | Type | Description
--|--|--
map.type | `region, pin, grid` | Map type
map.pin_type | `tiles, markers, grid` | Map pin type
map.latitude_column | string | Field name for latitude, only numeric
map.longitude_column | string | Field name for longitude, only numeric
map.metric_column | string | Field name for metric
map.region | `{ id: string, name: string, url: string, region_key: string, region_name: string }` | Custom geojson
