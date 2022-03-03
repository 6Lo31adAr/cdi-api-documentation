---
sidebar_position: 4
title: PUT /careers/{id}
hide_title: true
---

## PUT /careers/{id}
Update career based on id

### URL Parameter Schema
| Parameter   | Type                    | Description                 |
| ---------   | -------                 | -----------                 |
| `id`        | String **(required)**   | The id of the careeer.      |

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
| `title`     | String *(optional)*     | The title of the career.    |
| `image`     | File *(optional)*       | The image to be uploaded.   |

### Request Body Sample (FormData)
```JavaScript
const formData = new FormData();
formData.set('title', form.title.value);
formData.set('image', form.image.files[0]);

axios.put('/careers/{id}', formData, {
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
  "message": "Successfully updated career",
  "data": {
    "GSI1PK": "CAREERS",
    "created": "2022-03-03T03:03:05.196Z",
    "id": "25rE...",
    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/career_images/...",
    "GSI1SK": "2022-03-03T03:03:05.196Z#25rE...",
    "title": "Sample Career Title"
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful updated career.                                |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 401   | Authorization information is missing or invalid.          | 
| 404   | Career does not exists.                                   | 
| 5xx   | Unexpected error.                                         |
