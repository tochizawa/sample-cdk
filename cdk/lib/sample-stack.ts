import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class SampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // TODO quick sight実装

    // The code that defines your stack goes here

    // example resource
    new Bucket(this, "MyFirstBucket-sample", {
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
