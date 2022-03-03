---
sidebar_position: 5
title: DELETE /featured-works/{id}
hide_title: true
---

## DELETE /featured-works/{id}
Delete featured work record based on id

### URL Parameter Schema
| Parameter   | Type                    | Description                   |
| ---------   | -------                 | -----------                   |
| `id`        | String **(required)**   | The id of the featured work.  |

### Request Header Schema
| Parameter     | Type                  | Description                                       |
| ------------  | --------------------- | ------------------------------------------------  |
| `AccessToken` | String **(required)** | The `AccessToken` of the current user logged in.  |

### Request Header Sample
```json
{
  "headers": {
    "authorization": "Bearer {AccessToken}"
  }
}
```

### Request Body Schema
`none`

### Request Body Sample
`none`

### Response Body Sample
```
{
  "success": true,
  "message": "Successfully deleted featured work"
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful deleted featured work.                         |
| 401   | Authorization information is missing or invalid.          | 
| 404   | Featured work does not exists.                            | 
| 5xx   | Unexpected error.                                         |
