import * as dotenv from "dotenv";
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

dotenv.config();


const main = new aws.ec2.Vpc("main", {
    cidrBlock: "10.0.0.0/16",
    instanceTenancy: "default",
    tags: {
        Name: "main",
    },
});