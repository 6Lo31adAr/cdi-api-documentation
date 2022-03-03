---
sidebar_position: 1
title: POST /contact-us
hide_title: true
---

## POST /contact-us
Submits a message to the system

### Request Header Schema
`none`

### Request Header Sample
`none`

### Request Body Schema
| Parameter           | Type                                        | Description                   |
| ---------           | -------                                     | -----------                   |
| `name`              | String **(required)**                       | The name of the sender.       |
| `email`             | String **(required, format = "email")**     | The email of the sender.      |
| `subject`           | String **(required)**                       | The subject of the message.   |
| `message`           | String **(required)**                       | The body of the message.      |

### Request Body Sample
```json
{
  "name": String,
  "email": String,
  "subject": String,
  "message": String
}
```
Media-type: `application/json`

### Response Body Sample
```
{
  success: true
  message: 'Successfully sent a message.',
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful sent a message.                                |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 5xx   | Unexpected error.                                         |
