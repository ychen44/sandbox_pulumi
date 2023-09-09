# sandbox to test out pulumi
* [Doc](https://www.pulumi.com/docs/clouds/aws/get-started/begin/)

## Prerequisites

1. [Install Pulumi](https://www.pulumi.com/docs/get-started/install/)
2. [Configure AWS Credentials](https://www.pulumi.com/docs/intro/cloud-providers/aws/setup/)
3. [Install Node.js](https://www.pulumi.com/docs/intro/languages/javascript/)

## Deploy the App

### Step 1: Create a directory and cd into it

For Pulumi examples, we typically start by creating a directory and changing into it. Then, we create a new Pulumi project from a template. For example, `azure-javascript`.

1. Install prerequisites:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```
2. run pulumi local mose 
    ```bash
    pulumi login -l 
    ```

2. Create a new Pulumi stack:

    ```bash
    pulumi stack init
    ```
    set env variables 
    ```bash
    set -a # automatically export all variables
    source .env
    set +a
    ```

3. Configure the AWS region to deploy into:

    ```bash
    pulumi config set aws:region us-east-2
    ```

4. Deploy the Pulumi stack:

    ```bash
    pulumi up
    ```

