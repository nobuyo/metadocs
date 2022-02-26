---
position: 2
title: 'Time'
slug: time
---

# Time

One of keys should be stored as parameter widget type.

### Month and Year

Like January, 2016

- key: `date/month-year`

### Quarter and Year

Like Q1, 2016

- key: `date/quarter-year`

### Single Date

Like January 31, 2016

- key: `date/single`

### Date Range

Like December 25, 2015 - February 14, 2016

- key: `date/range`

### Relative Date

Like "the last 7 days" or "this month"

- key: `date/relative`

### Date Filter

Contains all of the above

- key: `date/all-options`

---

## Source Code

- [Meta Parameter definition](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase/meta/Parameter.js)
