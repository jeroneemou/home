#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { Route53 } from '../lib/route53';
import { App } from '../lib/app';
import { CDN } from '../lib/cdn';

const app = new cdk.App();

// Manage application
const application = new App(app, 'Application');

const cdn = new CDN(app, 'CDN', {
    bucket: application.bucket
})

// Manage domains
const route53 = new Route53(app, 'Route53');

