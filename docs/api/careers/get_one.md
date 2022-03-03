---
sidebar_position: 3
title: GET /careers/{id}
hide_title: true
---

## GET /careers/{id}
Retrieves career based on id

### URL Parameter Schema
| Parameter   | Type                    | Description                 |
| ---------   | -------                 | -----------                 |
| `id`        | String **(required)**   | The id of the careeer.      |

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
  "message": "Successfully retrieved career",
  "data": {
    "GSI1PK": "CAREERS",
    "created": "2022-03-03T03:03:05.196Z",
    "id": "25rE...",
    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/career_images/...",
    "GSI1SK": "2022-03-03T03:03:05.196Z#25rE...",
    "title": "Sample Career Title"
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful retrieved career.                              |
| 404   | Career does not exists.                                   | 
| 5xx   | Unexpected error.                                         |
