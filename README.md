Installation
===

```bash
npm install serverless -g
```

## Setup AWS credentials
1. Create or login to your Amazon Web Services Account and go to the Identity & Access Management (IAM) page.
2. Click on Users and then Add user. Enter a name in the first field to remind you this User is the Framework, like serverless-admin. Enable Programmatic access by clicking the checkbox. Click Next to go through to the Permissions page. Click on Attach existing policies directly. Search for and select AdministratorAccess then click Next: Review. Check everything looks good and click Create user. Later, you can create different IAM Users for different apps and different stages of those apps. That is, if you don't use separate AWS accounts for stages/apps, which is most common.
3. View and copy the API Key & Secret to a temporary place. You'll need it in the next step.

> **Note**: In a production environment, we recommend reducing the permissions to the IAM User which the Framework uses. Unfortunately, the Framework's functionality is growing so fast, we can't yet offer you a finite set of permissions it needs (we're working on this). Consider using a separate AWS account in the interim, if you cannot get permission to your organization's primary AWS accounts.

### Setup an AWS profile
Run the following command but replace the key and secret with the details from the previous step.

```bash
serverless config credentials --provider aws --key [your key] --secret [your secret]
```

## Deploying
run the following to deploy the code
```bash
sls deploy
```

## Endpoints
Once the app has deployed you should have access to 2 endpoints the default one will look something like 
```bash
https://574r2b729g.execute-api.eu-west-2.amazonaws.com/dev
```
this will just return a *Hello world* example

you should also be able to access the weather api by appending */weather/london* to the end of the url for example.
```bash
https://574r2b729g.execute-api.eu-west-2.amazonaws.com/dev/weather/london
https://574r2b729g.execute-api.eu-west-2.amazonaws.com/dev/weather/paris
```

