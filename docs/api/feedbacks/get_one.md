---
sidebar_position: 3
title: GET /feedbacks/{id}
hide_title: true
---

## GET /feedbacks/{id}
Retrieves feedback based on id

### URL Parameter Schema
| Parameter   | Type                    | Description                 |
| ---------   | -------                 | -----------                 |
| `id`        | String **(required)**   | The id of the feedback.     |

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
  "message": "Successfully retrieved feedback.",
  "data": {
    "GSI1PK": "FEEDBACKS",
    "company": "Code Disruptors Inc.",
    "created": "2022-03-03T03:57:09.678Z",
    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/feedbacks_images/...",
    "GSI1SK": "2022-03-03T03:57:09.678Z#25rK...",
    "id": "25rK...",
    "name": "Joshua Ming",
    "verified": false,
    "position": "Junior Fullstack Developer",
    "body": "Sample feedback body"
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful retrieved careers.                             |
| 404   | Feedback does not exists.                                 | 
| 5xx   | Unexpected error.                                         |

