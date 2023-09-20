import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import { Construct } from 'constructs';

export class CloudwatchAlarmMediaconnectOutputTotalPacketsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const metric = new cloudwatch.Metric({
      namespace: 'AWS/MediaConnect',
      metricName: 'OutputTotalPackets',
      period: cdk.Duration.minutes(1),
      statistic: 'Average',
    });


    const alarm = new cloudwatch.Alarm(this, 'cloudwatch-alarm-mediaconnect-output-total-packets', {
      metric,
      threshold: 0,
      evaluationPeriods: 1,
      alarmDescription: 'Alarm when MediaConnect Flow Stops Outputting Packets ',
      alarmName: 'mediaconnect-output-total-packets',
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
    });
    
  }
}
