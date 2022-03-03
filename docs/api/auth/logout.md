---
sidebar_position: 2
title: POST /auth/logout
hide_title: true
---

## POST /auth/logout
Logs out the user

### Request Header Schema
| Parameter     | Type                  | Description                                       |
| ------------  | --------------------- | ------------------------------------------------  |
| `AccessToken` | String **(required)** | The `AccessToken` of the current user logged in.  |

### Request Header Sample
```json
{
  "headers": {
    "AccessToken": "{AccessToken}"
  }
}
```

### Response Body Sample
```
{
  "success": true,
  "message": "Successfully logged out"
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful logout.                                        |
| 401   | Authorization information is missing or invalid.          | 
| 5xx   | Unexpected error.                                         |
