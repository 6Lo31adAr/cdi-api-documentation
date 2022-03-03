---
sidebar_position: 4
title: PUT /featured-works/{id}
hide_title: true
---

## PUT /featured-works/{id}
Update featured work based on id

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
| Parameter       | Type                    | Description                           |
| ---------       |  -------                | -----------                           |
| `title`         | String *(optional)*     | The title of the featured work.       |
| `description`   | String *(optional)*     | The description of the featured work. |
| `image`         | File *(optional)*       | The image of the featured work.       |
| `platforms`     | String *(optional)*     | The platforms of the featured work.   |

### Request Body Sample (FormData)
```JavaScript
const formData = new FormData();
formData.set('title', form.title.value);
formData.set('description', form.description.value);
formData.set('image', form.image.files[0]);
formData.set('platforms', form.platforms.value);

axios.put('/featured-works/{id}', formData, {
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
  "message": "Successfully updated featured work",
  "data": {
    "GSI1PK": "FEATURED-WORKS",
    "platforms": "IOS, Android",
    "created": "2022-03-03T04:21:17.090Z",
    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/featured_work_images/...",
    "GSI1SK": "2022-03-03T04:21:17.090Z#25rN...",
    "description": "Description sample",
    "id": "25rN...",
    "title": "Sample Featured Work Title Updated"
    }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful updated featured work.                         |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 401   | Authorization information is missing or invalid.          | 
| 404   | Featured work does not exists.                            | 
| 5xx   | Unexpected error.                                         |
