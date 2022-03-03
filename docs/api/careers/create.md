---
sidebar_position: 1
title: POST /careers
hide_title: true
---

## POST /careers
Create new career record

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
| Parameter   | Type                    | Description                 |
| ---------   | -------                 | -----------                 |
| `title`     | String **(required)**   | The title of the career.    |
| `image`     | File **(required)**     | The image to be uploaded.   |

### Request Body Sample (FormData)
```JavaScript
const formData = new FormData();
formData.set('title', form.title.value);
formData.set('image', form.image.files[0]);

axios.post('/careers', formData, {
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
  "message": "Successfully created career",
  "data": {
    "id": "25rE...",
    "created": "2022-03-03T03:03:05.196Z",
    "title": "Sample Career Title",
    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/career_images/...",
    "GSI1PK": "CAREERS",
    "GSI1SK": "2022-03-03T03:03:05.196Z#25rE..."
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful created career.                                |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 401   | Authorization information is missing or invalid.          | 
| 5xx   | Unexpected error.                                         |
