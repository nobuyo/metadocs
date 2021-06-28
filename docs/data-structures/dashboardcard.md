---
sidebar_position: 3
---

# DashboardCard

DashboardCard is junction table representing card registration to dashboard.

## Table Name

`report_dashboardcard`

## Attributes

Name|Type|Description
--|--|--
id | int | Primary key
card_id | int | ID number of card
dashboard_id | int | ID number of dashboard
sizeX | int | Card size of X axis
sizeY | int | Card size of Y axis
col | int | Horizontal position, zero origin, max block size is 18.
row | int | Vertical position, zero origin.
parameter_mappings | [ParameterMapping](/parameters)[] | JSON stringified
visualization_settings | `[key: string]: any` | See [Visualizations](/visualizations) for detail.

## Source Code

- [Frontend DashCard type definition](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-types/types/Dashboard.js)
- [Backend DashboardCard model definition](https://github.com/metabase/metabase/blob/v0.38.3/src/metabase/models/dashboard_card.clj)
