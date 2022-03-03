---
sidebar_position: 1
title: POST /tell-us
hide_title: true
---

## POST /tell-us
Submits a message to the system containing projects

### Request Header Schema
`none`

### Request Header Sample
`none`

### Request Body Schema
| Parameter           | Type                                               | Description                            |
| ---------           | -------                                            | -----------                            |
| `name`              | String **(required)**                              | The name of the sender.                |
| `company`           | String **(required)**                              | The company of the sender.             |
| `email`             | String **(required, format = "email")**            | The email of the sender.               |
| `mobile_number`     | String **(required, pattern = "^9[0-9]{9}$")**     | The mobile number of the sender.       |
| `title`             | String **(required)**                              | The title of the project.              |
| `description`       | String **(required)**                              | The description of the project.        |

### Request Body Sample
```json
{
  "name": String,
  "company": String,
  "email": String,
  "mobile_number": String,
  "title": String,
  "description": String
}
```
Media-type: `application/json`

### Response Body Sample
```
{
  success: true
  message: 'Successfully sent a message',
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful sent a message.                                |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 5xx   | Unexpected error.                                         |
