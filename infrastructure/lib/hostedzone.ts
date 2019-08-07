import { Stack, Construct, StackProps, CfnOutput } from '@aws-cdk/core';
import { PublicHostedZone, IHostedZone } from '@aws-cdk/aws-route53';

interface ApplicationHostedZoneProps extends StackProps {
    domainName: string;
}

export class ApplicationHostedZone extends Stack {

    public zone: IHostedZone;

    constructor(scope: Construct, id: string, props?: ApplicationHostedZoneProps) {
        super(scope, id, props);

        this.zone = new PublicHostedZone(this, 'HostedZone', {
            zoneName: props.domainName
        });

        // Output
        new CfnOutput(this, 'Hosted zone name servers', { value: this.zone.hostedZoneNameServers.join(',') });
    }
}