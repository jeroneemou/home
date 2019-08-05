# Home infrastructure

## Prerequisities

You will need:
- Own AWS account - https://aws.amazon.com/
- Credentials for your .env file. Just run `cp .env.dist .env` and fill out all the variables within.

## Deployment

Please follow the order for deployment of depending parts of application

### Initialise CDK

Run `docker-compose run --rm infrastructure cdk bootstrap aws://unknown-account/unknown-region` for bootstrapping CDK in your account. This is required for handling stacks with assets. Replace `unknown-account` and `unknown-region` with your account information or simply run it and see avaiable options.

### Hosted zone

- Run `docker-compose run --rm infrastructure cdk deploy ApplicationHostedZone`
- Register outputted DNS records to your domain for forwarding of handling.
- **WARNING**: Make sure to wait long enough to propagate DNS changes in order to proceed with next step.

### Certificates - NOT WORKING NOW

- **There are issues currently** - you have to request your certificate manually
- Run `docker-compose run --rm infrastructure cdk deploy ApplicationCertificates`

### Application

- Run `docker-compose run --rm infrastructure cdk deploy Application`

## Useful infrastructure commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Links
CDK Documentation - https://docs.aws.amazon.com/cdk/api/latest/