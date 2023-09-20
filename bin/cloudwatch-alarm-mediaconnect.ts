#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CloudwatchAlarmMediaconnectOutputDisconnectionsStack } from '../lib/cloudwatch-alarm-mediaconnect-output-disconnections-stack';
import { CloudwatchAlarmMediaconnectOutputTotalPacketsStack } from '../lib/cloudwatch-alarm-mediaconnect-output-total-packets-stack';


const app = new cdk.App();
new CloudwatchAlarmMediaconnectOutputDisconnectionsStack(app, 'CloudwatchAlarmMediaconnectOutputDisconnectionsStack');
//new CloudwatchAlarmMediaconnectOutputTotalPacketsStack(app, 'CloudwatchAlarmMediaconnectOutputTotalPacketsStack');
