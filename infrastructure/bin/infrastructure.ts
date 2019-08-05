#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { Application } from '../lib/application';
import { ApplicationHostedZone } from '../lib/hostedzone';
// import { ApplicationCertificates } from '../lib/certificates';

const app = new cdk.App();

const domainName = 'whatever.ninja';

// Create hosted zone for whole application
const zones = new ApplicationHostedZone(app, 'ApplicationHostedZone', {
    domainName: domainName
})

// TODO currently does not work ... 
// Create certificates required and validated via hosted zone
// const certificates = new ApplicationCertificates(app, 'ApplicationCertificates', {
//     domainName: domainName,
//     zone: zones.zone
// })

const certArn = ''; // TODO hardcode ARN

// Bootstrap application infrastructure
const application = new Application(app, 'Application', {
    domainName: domainName,
    certificate: certificates.certificate,
    zone: zones.zone
});

