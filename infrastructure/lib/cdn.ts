import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { CloudFrontWebDistribution } from '@aws-cdk/aws-cloudfront';
import { IBucket, Bucket } from '@aws-cdk/aws-s3';

interface CDNProps extends StackProps {
    bucket: IBucket;
}

export class CDN extends Stack {
    constructor(scope: Construct, id: string, props?: CDNProps) {
        super(scope, id, props);
        
        // TODO add CNAME for domain - whatever.ninja
        // TODO add https only
        // TODO disable logging whatsoever
        const distribution = new CloudFrontWebDistribution(this, 'Distribution', {
            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: props.bucket
                    },
                    behaviors : [ {isDefaultBehavior: true}]
                }
            ]
         });

    }
}