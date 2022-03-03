---
sidebar_position: 1
title: POST /apply
hide_title: true
---

## POST /apply
Submits an application form to the system

### Request Header Schema
`none`

### Request Header Sample
`none`

### Request Body Schema
| Parameter           | Type                                               | Description                            |
| ---------           | -------                                            | -----------                            |
| `first_name`        | String **(required)**                              | The first name of the applicant.       |
| `last_name`         | String **(required)**                              | The last name of the applicant.        |
| `email`             | String **(required, format = "email")**            | The email of the applicant.            |
| `mobile_number`     | String **(required, pattern = "^9[0-9]{9}$")**     | The mobile number of the applicant.    |
| `resume`            | File **(required)**                                | The resume of the applicant.           |
| `short_pitch`       | String **(required)**                              | The short pitch of the applicant.      |

### Request Body Sample (FormData)
```JavaScript
const formData = new FormData();
formData.set('first_name', form.first_name.value);
formData.set('last_name', form.last_name.value);
formData.set('email', form.email.value);
formData.set('mobile_number', form.mobile_number.value);
formData.set('resume', form.resume.files[0]);
formData.set('short_pitch', form.short_pitch.value);

axios.post('/apply', formData);
```
Media-type: `multipart/form-data`

### Response Body Sample
```
{
  success: true
  message: 'Successfully created application',
}
```
Media-type: `application/json`

### Response Codes
| Code  | Description                                               |
| ----  | -----------                                               |
| 200   | Successful created an application.                        |
| 400   | Required parameter(s) are missing or has invalid format.  |
| 5xx   | Unexpected error.                                         |
