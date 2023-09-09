# sandbox to test out pulumi
* [Doc](https://www.pulumi.com/docs/clouds/aws/get-started/begin/)

## Prerequisites

1. [Install Pulumi](https://www.pulumi.com/docs/get-started/install/)
2. [Configure AWS Credentials](https://www.pulumi.com/docs/intro/cloud-providers/aws/setup/)
3. [Install Node.js](https://www.pulumi.com/docs/intro/languages/javascript/)

## Deploy the App

### Set Up 


1. Install prerequisites:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```
2. To rn Pulumi locally 

    ```bash
    pulumi login -l 
    ```

2. Create a new Pulumi stack:

    ```bash
    pulumi stack init
    ```

3. Configure the AWS region to deploy into:

    ```bash
    pulumi config set aws:region us-east-2
    ```

4. Deploy the Pulumi stack:

    ```bash
    pulumi up
    ```

    or 

    ```bash 
    npm run deploy
    ```

### add .env file 

1. add .env file in root dir with the following variable 

```
PULUMI_CONFIG_PASSPHRASE=xxx
AWS_ACCESS_KEY_ID="xxx"
AWS_SECRET_ACCESS_KEY="xxx"
AWS_SESSION_TOKEN="xxx"
```

2. to deploy run command 

```
npm run deploy
```

2. preview deployment resources 

```
npm run preview
```

### Pulumi.yaml
* [Pulumi.yaml doc ](https://www.pulumi.com/blog/pulumi-yaml/)