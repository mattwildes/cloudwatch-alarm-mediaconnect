#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CloudwatchAlarmMediaconnectOutputDisconnectionsStack } from '../lib/cloudwatch-alarm-mediaconnect-output-disconnections-stack';


const app = new cdk.App();
new CloudwatchAlarmMediaconnectOutputDisconnectionsStack(app, 'CloudwatchAlarmMediaconnectOutputDisconnectionsStack');
