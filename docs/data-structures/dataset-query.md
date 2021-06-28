---
sidebar_position: 4
---

# DatasetQuery

*This page describes `native` queries.*  

DatasetQuery is attribute of [Card](/data-structures/card), and just an object not a separate model.


## Attributes

### NativeDatasetQuery

Since we will be using native queries in most cases, this can be considered almost identical to DatasetQuery.

Name|Type|Description
--|--|--
type | 'native' |
database | number | database id
native | [NativeQuery](#native-query) | 

### NativeQuery

Name|Type|Description|Default
--|--|--|--
query | string | Query body like SQL | ""
template-tags | `{ [key: string]: TemplateTag }` | [TemplateTag](#template-tag) | {}

### TemplateTag

Name|Type|Description
--|--|--
id | string | UUID v4 format random id
name | string | Used as a key for mapping with filters on the dashboard.
display-name | string | Display name
type | `text` \| `date` \| `number` \| `dimension` |
dimension | `['field-id', field-id]` | `field-id` is ID on `metabase_field` table.<br/>Required if `type === dimension`.
widget-type | string | `category`, `date/*`, etc. See [Parameters](/parameters) for types list.<br/>Required if `type === dimension`.

## Source Code

- [Frontend NativeQuery](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-lib/lib/queries/NativeQuery.js)
- [Frontend Query type definition](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-types/types/Query.js#L52)
- [Frontend Parameter type definition](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-types/types/Parameter.js)
