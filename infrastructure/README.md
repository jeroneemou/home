# Home infrastructure

## Prerequisities

You will need:
- Own AWS account - https://aws.amazon.com/
- Credentials for your .env file. Just run `cp .env.dist .env` and fill out all the variables within.

## Deployment

Please follow the order for deployment of depending parts of application

### Hosted zone

- Run `docker-compose run --rm infrastructure cdk deploy ApplicationHostedZone`
- Register outputted DNS records to your domain for forwarding of handling.
- **WARNING**: Make sure to wait long enough to propagate DNS changes in order to proceed with next step.

### Certificates

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