---
sidebar_position: 1
title: POST /auth/login
hide_title: true
---

## POST /auth/login
Logs in the user

### Request Header Schema
`none`

### Request Header Sample
`none`

### Request Body Schema
| Parameter   | Type                    | Description                 |
| ---------   | -------                 | -----------                 |
| `email`     | String **(required)**   | The email of the user.      |
| `password`  | String **(required)**   |  The password of the user.  |

### Request Body Sample
```json
{
  "email": required,
  "password": required
}
```
Media-type: `application/json`

### Response Body Sample
```
{
  "success": "true,",
  "message": "Successfully logged in",
  "data": {
    "email": "janequinto@codedisruptors.com",
    "authentication_result": {
      "AccessToken": "eyJraWQiOiJKanRo...",
      "ExpiresIn": 86400,
      "TokenType": "Bearer",
      "RefreshToken": "eyJjdHkiOiJKV1Q...",
      "IdToken": "eyJraWQiOiIrb..."
    }
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful login.                                         |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 401   | Authorization information is missing or invalid.          | 
| 5xx   | Unexpected error.                                         |
