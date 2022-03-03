---
sidebar_position: 2
title: GET /feedbacks
hide_title: true
---

## GET /feedbacks
Retrieves all feedbacks

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
  "message": "Successfully retrieved feedbacks",
  "data": [...],
  "total": Number
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful retrieved careers.                             |
| 5xx   | Unexpected error.                                         |
