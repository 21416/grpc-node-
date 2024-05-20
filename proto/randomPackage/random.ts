// Original file: proto/random.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { MessageLogResponse as _randomPackage_MessageLogResponse, MessageLogResponse__Output as _randomPackage_MessageLogResponse__Output } from '../randomPackage/MessageLogResponse';
import type { chatMessage as _randomPackage_chatMessage, chatMessage__Output as _randomPackage_chatMessage__Output } from '../randomPackage/chatMessage';
import type { empty as _randomPackage_empty, empty__Output as _randomPackage_empty__Output } from '../randomPackage/empty';
import type { joinReq as _randomPackage_joinReq, joinReq__Output as _randomPackage_joinReq__Output } from '../randomPackage/joinReq';
import type { joinStatus as _randomPackage_joinStatus, joinStatus__Output as _randomPackage_joinStatus__Output } from '../randomPackage/joinStatus';

export interface randomClient extends grpc.Client {
  joinchat(argument: _randomPackage_joinReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_joinStatus__Output>): grpc.ClientUnaryCall;
  joinchat(argument: _randomPackage_joinReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_joinStatus__Output>): grpc.ClientUnaryCall;
  joinchat(argument: _randomPackage_joinReq, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_joinStatus__Output>): grpc.ClientUnaryCall;
  joinchat(argument: _randomPackage_joinReq, callback: grpc.requestCallback<_randomPackage_joinStatus__Output>): grpc.ClientUnaryCall;
  
  recieveMsg(argument: _randomPackage_empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_chatMessage__Output>;
  recieveMsg(argument: _randomPackage_empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_randomPackage_chatMessage__Output>;
  
  sendData(argument: _randomPackage_empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_MessageLogResponse__Output>): grpc.ClientUnaryCall;
  sendData(argument: _randomPackage_empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_MessageLogResponse__Output>): grpc.ClientUnaryCall;
  sendData(argument: _randomPackage_empty, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_MessageLogResponse__Output>): grpc.ClientUnaryCall;
  sendData(argument: _randomPackage_empty, callback: grpc.requestCallback<_randomPackage_MessageLogResponse__Output>): grpc.ClientUnaryCall;
  
  sendMsg(argument: _randomPackage_chatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _randomPackage_chatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_randomPackage_empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _randomPackage_chatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_randomPackage_empty__Output>): grpc.ClientUnaryCall;
  sendMsg(argument: _randomPackage_chatMessage, callback: grpc.requestCallback<_randomPackage_empty__Output>): grpc.ClientUnaryCall;
  
}

export interface randomHandlers extends grpc.UntypedServiceImplementation {
  joinchat: grpc.handleUnaryCall<_randomPackage_joinReq__Output, _randomPackage_joinStatus>;
  
  recieveMsg: grpc.handleServerStreamingCall<_randomPackage_empty__Output, _randomPackage_chatMessage>;
  
  sendData: grpc.handleUnaryCall<_randomPackage_empty__Output, _randomPackage_MessageLogResponse>;
  
  sendMsg: grpc.handleUnaryCall<_randomPackage_chatMessage__Output, _randomPackage_empty>;
  
}

export interface randomDefinition extends grpc.ServiceDefinition {
  joinchat: MethodDefinition<_randomPackage_joinReq, _randomPackage_joinStatus, _randomPackage_joinReq__Output, _randomPackage_joinStatus__Output>
  recieveMsg: MethodDefinition<_randomPackage_empty, _randomPackage_chatMessage, _randomPackage_empty__Output, _randomPackage_chatMessage__Output>
  sendData: MethodDefinition<_randomPackage_empty, _randomPackage_MessageLogResponse, _randomPackage_empty__Output, _randomPackage_MessageLogResponse__Output>
  sendMsg: MethodDefinition<_randomPackage_chatMessage, _randomPackage_empty, _randomPackage_chatMessage__Output, _randomPackage_empty__Output>
}
