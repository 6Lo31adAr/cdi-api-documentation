---
sidebar_position: 3
title: GET /featured-works/{id}
hide_title: true
---

## GET /featured-works/{id}
Retrieves featured work based on id

### URL Parameter Schema
| Parameter   | Type                    | Description                   |
| ---------   | -------                 | -----------                   |
| `id`        | String **(required)**   | The id of the featured work.  |

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
  "message": "Successfully retrieved featured work.",
  "data": {
    "GSI1PK": "FEATURED-WORKS",
    "platforms": "IOS, Android",
    "created": "2022-03-03T04:21:17.090Z",
    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/featured_work_images/...",
    "GSI1SK": "2022-03-03T04:21:17.090Z#25rN...",
    "description": "Description sample",
    "id": "25rN...",
    "title": "Sample Featured Work Title"
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful retrieved featured work.                       |
| 404   | Featured work does not exists.                            | 
| 5xx   | Unexpected error.                                         |
