---
sidebar_position: 1
title: POST /feedbacks
hide_title: true
---

## POST /feedbacks
Create new feedback record

### Request Header Schema
`none`

### Request Header Sample
`none`

### Request Body Schema
| Parameter   | Type                      | Description                                       |
| ---------   | -------                   | -----------                                       |
| `name`      | String **(required)**     | The name of the feedback.                         |
| `image`     | File **(required)**       | The image to be uploaded.                         |
| `position`  | String **(required)**     | The position of the feedback.                     |
| `company`   | String **(required)**     | The company of the feedback.                      |
| `body`      | String **(required)**     | The body of the feedback.                         |
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

axios.post('/feedbacks', formData);
```
Media-type: `multipart/form-data`

### Response Body Sample
```
{
  "success": true,
  "message": "Successfully created a feedback.",
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful created a feedback.                            |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 401   | Authorization information is missing or invalid.          | 
| 5xx   | Unexpected error.                                         |
