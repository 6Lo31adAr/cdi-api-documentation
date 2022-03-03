---
sidebar_position: 1
title: POST /featured-works
hide_title: true
---

## POST /featured-works
Create new featured work record

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
| Parameter       | Type                    | Description                           |
| ---------       |  -------                | -----------                           |
| `title`         | String **(required)**   | The title of the featured work.       |
| `description`   | String **(required)**   | The description of the featured work. |
| `image`         | File **(required)**     | The image of the featured work.       |
| `platforms`     | String **(required)**   | The platforms of the featured work.   |

### Request Body Sample (FormData)
```JavaScript
const formData = new FormData();
formData.set('title', form.title.value);
formData.set('description', form.description.value);
formData.set('image', form.image.files[0]);
formData.set('platforms', form.platforms.value);

axios.post('/featured-works', formData, {
  headers: {
    authorization: "Bearer {AccessToken}"
  }
});
```
Media-type: `multipart/form-data`

### Response Body Sample
```
{
  "success": true,
  "message": "Successfully created a featured work."
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful created a featured work.                       |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 401   | Authorization information is missing or invalid.          | 
| 5xx   | Unexpected error.                                         |
