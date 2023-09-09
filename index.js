import * as dotenv from "dotenv";
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Access the configuration and read the name of the bucket


// const config = new pulumi.Config();
// const bucketName = config.require("bucketName");
dotenv.config();

// Create a new resource
const exampleBucket = new aws.s3.BucketV2("bucket", {
    bucket: "sandbox-pulumi-test-bucket"
});

new aws.s3.BucketVersioningV2("bucket-versioning", {
    bucket: exampleBucket.bucket,
    versioningConfiguration: {
                status: "Enabled"
    }
});

// Export the ARN of the newly-created bucket
export const bucketArn = exampleBucket.arn;
