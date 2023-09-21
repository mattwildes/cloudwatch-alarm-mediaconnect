# CloudWatch Alarm for MediaConnect OutputDisconnections

This CDK app creates an Amazon CloudWatch Alarm that will trigger when the MediaConnect `OutputDisconnections` metrics is greater than 0. The CloudWatch Alarm is configured with an Action to send a message to an SNS Topic.  This CDK app creates the CloudWach Alarm and the SNS Topic.  

Be sure to add the desired subscribers to the `emailAddresses` list in `lib\cloudwatch-alarm-mediaconnect-output-disconnections-stack.ts`.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
