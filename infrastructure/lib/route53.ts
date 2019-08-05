import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { HostedZone, PublicHostedZone } from '@aws-cdk/aws-route53';

export class Route53 extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // TODO create DNS record for Cloudfront distribution

    // create hosted zone
    new PublicHostedZone(this, 'HostedZone', {
      zoneName: 'whatever.ninja'
    });

  }
}

