import { Stack, Construct, StackProps, CfnOutput } from '@aws-cdk/core';
import { IHostedZone } from '@aws-cdk/aws-route53';
import { DnsValidatedCertificate, ICertificate } from '@aws-cdk/aws-certificatemanager';

interface ApplicationCertificatesProps extends StackProps {
    domainName: string;
    zone: IHostedZone;
}

export class ApplicationCertificates extends Stack {

    public certificate: ICertificate;

    constructor(scope: Construct, id: string, props?: ApplicationCertificatesProps) {
        super(scope, id, props);

        const NVirginiaRegion = 'us-east-1';

        this.certificate =  new DnsValidatedCertificate(this, 'HomeCertificate', {
            domainName: props.domainName,
            hostedZone: props.zone,
            region: NVirginiaRegion // TODO viriginia
        });

        // Output
        new CfnOutput(this, 'CertificateArn', { value: this.certificate.certificateArn });
    }
}