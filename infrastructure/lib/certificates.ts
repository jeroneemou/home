import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { Bucket, BlockPublicAccess } from '@aws-cdk/aws-s3';

export class Certificates extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        
        // TODO request certificate for Cloudfront in Virginia

    }
}