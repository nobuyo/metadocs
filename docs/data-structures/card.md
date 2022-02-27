---
position: 1
title: 'Card'
slug: card
---

# Card

Card is representing a question.

## Table Name

`report_card`

## Attributes

Name|Type|Description
--|--|--
id | int | Primary key
database_id | int | id number of database on your metabase environment
collection_id | int | id number of collection
query_type | string | `native` or `query`
name | string | Display name of the card
description | string | Description name of the card
dataset_query | [DatasetQuery](/metadocs/docs/data-structures/dataset-query) | JSON stringified

## Source Code

- [Backend model definition](https://github.com/metabase/metabase/blob/v0.38.3/src/metabase/models/card.clj)
- [Frontend type definition](https://github.com/metabase/metabase/blob/v0.38.3/frontend/src/metabase-types/types/Card.js)
