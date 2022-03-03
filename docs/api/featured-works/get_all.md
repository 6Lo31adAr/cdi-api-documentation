---
sidebar_position: 2
title: GET /featured-works
hide_title: true
---

## GET /featured-works
Retrieves all featured works

### Request Header Schema
`none`

### Request Header Sample
`none`

### Request Body Schema
`none`

### Request Body Sample
`none`

### Response Body Sample
```
{
  "success": true,
  "message": "Successfully retrieved featured works",
  "data": [...],
  "total": Number
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful retrieved featured works.                      |
| 5xx   | Unexpected error.                                         |
