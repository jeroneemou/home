import { Stack, Construct, StackProps, CfnOutput } from '@aws-cdk/core';
import { Bucket, BlockPublicAccess } from '@aws-cdk/aws-s3';
import { PublicHostedZone, ARecord, AddressRecordTarget, IHostedZone } from '@aws-cdk/aws-route53';
import { DnsValidatedCertificate, ICertificate } from '@aws-cdk/aws-certificatemanager';
import { CloudFrontWebDistribution, SSLMethod, SecurityPolicyProtocol } from '@aws-cdk/aws-cloudfront';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets';

interface ApplicationProps extends StackProps {
    domainName: string;
    zone: IHostedZone;
    // certificate: ICertificate;
    certificateArn: string;
}

export class Application extends Stack {

    constructor(scope: Construct, id: string, props?: ApplicationProps) {
        super(scope, id, props);

        // TODO only enable cloudfront accessing this bucket?? Is it necessary?
        const bucket = new Bucket(this, 'AppBucket', {
            versioned: false,
            bucketName: props.domainName + '--bucket',
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'index.html',
            publicReadAccess: true
        })

        const distribution = new CloudFrontWebDistribution(this, 'Distribution', {

            aliasConfiguration: {
                // acmCertRef: props.certificate.certificateArn,
                acmCertRef: props.certificateArn,
                names: [ props.domainName ],
                sslMethod: SSLMethod.SNI,
                securityPolicy: SecurityPolicyProtocol.TLS_V1_1_2016,
            },

            originConfigs: [
                {
                    s3OriginSource: {
                        s3BucketSource: bucket
                    },
                    behaviors : [ {isDefaultBehavior: true}]
                }
            ]
         });


        const distributionRecord = new ARecord(this, 'DistributionRecord', {
            zone: props.zone,
            target: AddressRecordTarget.fromAlias(new CloudFrontTarget(distribution))
        })

        // Output
        new CfnOutput(this, 'Bucket', { value: bucket.bucketName });
    }
}