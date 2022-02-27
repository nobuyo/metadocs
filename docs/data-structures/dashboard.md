---
position: 2
title: 'Dashboard'
slug: dashboard
---

# Dashboard

## Table Name

`report_dashboard`

## Attributes

Name|Type|Description
--|--|--
id | int | Primary key
collection_id | int | id number of collection
parameters | [Parameter](/metadocs/docs/parameters)[] | JSON stringified

## Source Code

- [Frontend Dashboard type definition](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-types/types/Dashboard.js)
- [Backend Dashboard model definition](https://github.com/metabase/metabase/blob/v0.38.3/src/metabase/models/dashboard.clj)
