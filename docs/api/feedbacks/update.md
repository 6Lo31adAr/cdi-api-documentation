---
sidebar_position: 4
title: PUT /feedbacks/{id}
hide_title: true
---

## PUT /feedbacks/{id}
Update feedback based on id

### URL Parameter Schema
| Parameter   | Type                    | Description                 |
| ---------   | -------                 | -----------                 |
| `id`        | String **(required)**   | The id of the feedback.     |

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
| Parameter   | Type                      | Description                                       |
| ---------   | -------                   | -----------                                       |
| `name`      | String *(optional)*       | The name of the feedback.                         |
| `image`     | File *(optional)*         | The image to be uploaded.                         |
| `position`  | String *(optional)*       | The position of the feedback.                     |
| `company`   | String *(optional)*       | The company of the feedback.                      |
| `body`      | String *(optional)*       | The body of the feedback.                         |
| `verified`  | Boolean *(optional)*      | The flag wether the feedback is verified or not.  |

### Request Body Sample (FormData)
```JavaScript
const formData = new FormData();
formData.set('name', form.title.value);
formData.set('image', form.image.files[0]);
formData.set('position', form.position.value);
formData.set('company', form.company.value);
formData.set('body', form.body.value);
formData.set('verified', form.querySelector('[name="verified"]').checked);

axios.put('/feedbacks/{id}', formData, {
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
  "message": "Successfully updated feedback.",
  "data": {
    "GSI1PK": "FEEDBACKS",
    "company": "Code Disruptors Inc.",
    "created": "2022-03-03T03:57:09.678Z",
    "image_url": "https://cdi-website-api-s3-bucket.s3.ap-southeast-1.amazonaws.com/feedbacks_images/...",
    "GSI1SK": "2022-03-03T03:57:09.678Z#25rK...",
    "id": "25rK...",
    "name": "Joshua Ming",
    "verified": true,
    "position": "Junior Fullstack Developer",
    "body": "Sample feedback body"
  }
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful updated feedback.                              |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 401   | Authorization information is missing or invalid.          | 
| 404   | Feedback does not exists.                                 | 
| 5xx   | Unexpected error.                                         |
