# Home infrastructure

## Deployment
Make sure to have docker-compose stack running and than simply run `docker-compose run --rm infrastructure cdk deploy '*'`. That should do the trick!

## Useful infrastructure commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
