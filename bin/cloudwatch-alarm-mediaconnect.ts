#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CloudwatchAlarmMediaconnectStack } from '../lib/cloudwatch-alarm-mediaconnect-stack';

const app = new cdk.App();
new CloudwatchAlarmMediaconnectStack(app, 'CloudwatchAlarmMediaconnectStack');
