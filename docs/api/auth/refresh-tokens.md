---
sidebar_position: 3
title: GET /auth/refresh-tokens
hide_title: true
---

## GET /auth/refresh-tokens
Gets a new set of tokens for the user

### Request Header Schema
| Parameter       | Type                  | Description                                         |
| ------------    | --------------------- | ------------------------------------------------    |
| `RefreshToken`  | String **(required)** | The `RefreshToken` of the current user logged in.   |

### Request Header Sample
```json
{
  "headers": {
    "RefreshToken": "{RefreshToken}"
  }
}
```

### Request Body Schema
`none`

### Response Body Sample
```
{
  "success": "true,",
  "message": "Successfully refreshed tokens",
  "data": {
    "authentication_result": {
      "AccessToken": "eyJraWQiOiJKanRo...",
      "ExpiresIn": 86400,
      "TokenType": "Bearer",
      "IdToken": "eyJraWQiOiIrc..."
    }
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful refresh of tokens.                             |
| 401   | Refresh token information is missing or invalid.          | 
| 5xx   | Unexpected error.                                         |
