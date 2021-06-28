---
sidebar_position: 1
slug: /parameters
---

# About Parameters

This page describes the filters and mappings on the dashboard.

## Data types

### Parameter

Name|Type|Description
--|--|--
id | string | random 8 digit alphanumeric
name | string | parameter name
slug | string | parameter slug
type | string | One of [Widget types](#widget-types).

### ParameterMapping

Name|Type|Description
--|--|--
parameter_id | string | parameter id
card_id | string | The id of the card to apply the filter to.
target | `['variable', ['template-tag', slug]]` | Some other styles are omitted. Full definition is [here](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-types/types/Parameter.js#L34-L36).


## Widget types

- ID
  - type: `id`
- Category
  - type: `category`
- [Time](/parameters/time)
- [Location](/parameters/location)

## Source Code

- [Frontend Parameter type definition](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-types/types/Parameter.js)
