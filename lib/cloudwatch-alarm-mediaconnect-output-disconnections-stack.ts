import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as sns from "aws-cdk-lib/aws-sns";
import * as subscriptions from "aws-cdk-lib/aws-sns-subscriptions";
import * as cw_actions from "aws-cdk-lib/aws-cloudwatch-actions";
import { Construct } from 'constructs';

export class CloudwatchAlarmMediaconnectOutputDisconnectionsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const topic = new sns.Topic(this, 'SNS topic', {
      displayName: 'SNS topic',
      topicName: 'cloudwatch-alarm-mediaconnect-output-disconnections'
    });

    let emailAddresses = [
      'email@example.com',
    ];

    emailAddresses.forEach((address) => {
      topic.addSubscription(new subscriptions.EmailSubscription(address));
    });

    const metric = new cloudwatch.Metric({
      namespace: 'AWS/MediaConnect',
      metricName: 'OutputDisconnections',
      period: cdk.Duration.minutes(1),
      statistic: 'Sum',
    });

    const alarm = new cloudwatch.Alarm(this, 'CloudWatch Alarm', {
      metric,
      threshold: 0,
      evaluationPeriods: 1,
      alarmDescription: 'Alarm when MediaConnect Flow Output Disconnects',
      alarmName: 'mediaconnect-output-disconnections',
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
    });

    alarm.addAlarmAction(new cw_actions.SnsAction(topic));

  }
}
