import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { Bucket, BlockPublicAccess } from '@aws-cdk/aws-s3';

export class App extends Stack {

    public bucket: Bucket;

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);
        
        // TODO only enable cloudfront accessing this bucket?
        this.bucket = new Bucket(this, 'AppBucket', {
            versioned: false,
            bucketName: 'home--app-bucket',
            websiteIndexDocument: 'index.html'
        })

    }
}