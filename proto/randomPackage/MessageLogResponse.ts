// Original file: proto/random.proto

import type { Logs as _randomPackage_Logs, Logs__Output as _randomPackage_Logs__Output } from '../randomPackage/Logs';

export interface MessageLogResponse {
  'messageLogs'?: (_randomPackage_Logs)[];
  'time'?: (number | string);
}

export interface MessageLogResponse__Output {
  'messageLogs'?: (_randomPackage_Logs__Output)[];
  'time'?: (number);
}
