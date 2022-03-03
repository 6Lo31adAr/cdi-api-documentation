---
slug: /
sidebar_position: 1
---

# Introduction

Let's learn how to setup cdi-website-site development up to deployment.

## Prerequisites

**Follow the official AWS User Guide and Developer Guide for installation of the following:**

- AWS CLI
  - [User Guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
  - [Repository](https://github.com/aws/aws-cli)
- AWS Serverless Application Model CLI (AWS SAM CLI)
  - [Developer Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
  - [Repository](https://github.com/aws/aws-sam-cli)

**Ensure that the user deploying the app has the following privileges:**

- Compute
  - Lambda
- Storage
  - S3
- Database
  - DynamoDB
- Networking and Content Delivery
  - API Gateway
- Management and Governance
  - Cloudwatch
  - CloudFormation
- Security, Identity, and Compliance
  - Cognito

## Getting started
1. Clone the repository
```sh
git clone https://github.com/cdi-development/cdi-website-api
cd cdi-website-api
```

2. Setup AWS Credentials:
```sh
nano ~/.aws/credentials
```

Input your AWS credentials in the file:
```toml
[default]
aws_access_key_id = AKIA...
aws_secret_access_key = Hcg...
```

3. Setup infrastracture (Cognito, S3, and DynamoDB):
```sh
cd infra
sam deploy --guided
```

Supply the required parameters:
- AppName
- SuperAdminEmail

After successful deployment, confirm the Cognito super admin user.
```sh
aws cognito-idp admin-set-user-password \
  --user-pool-id <USER_POOL_ID> \
  --username <ADMIN_USERNAME> \
  --password <ADMIN_PASSWORD> \
  --permanent
```

(Optional) Protect the created infra stack from deletion.
```sh
aws cloudformation update-termination-protection \
  --stack-name <STACK_NAME> \
  --enable-termination-protection
```

4. Install dependencies for API
```sh
cd src/layer/nodejs
npm install
```

5. Setup infrastracture for the API
```
cd src
sam deploy --guided
```

Supply the required parameters:
- AppName
- LambdaMemorySize

(Optional) Protect the created infra stack from deletion.
```sh
aws cloudformation update-termination-protection \
  --stack-name <STACK_NAME> \
  --enable-termination-protection
```

## Testing and Developing Locally
1. Create own `env.json` file with the following format:
```json
{
  "Parameters": {
    "KEY": "VALUE",
    ...
  }
}
```
This is to ensure that we have the same environment variables as we have in the deployed version.

2. Start local server with the following:
```sh
cd src
sam local start-api --env-vars env.json
```
*Note: Multipart/Form-data cannot be processed in locally, resulting to * `Error 502: Internal Server Error` * this seems to be a problem with S3 bucket when accessing locally.*

- Base URL: [https://ybs46id484.execute-api.ap-southeast-1.amazonaws.com](https://ybs46id484.execute-api.ap-southeast-1.amazonaws.com)
