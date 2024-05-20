import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { randomClient as _randomPackage_randomClient, randomDefinition as _randomPackage_randomDefinition } from './randomPackage/random';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  randomPackage: {
    Logs: MessageTypeDefinition
    MessageLogResponse: MessageTypeDefinition
    chatMessage: MessageTypeDefinition
    empty: MessageTypeDefinition
    joinReq: MessageTypeDefinition
    joinStatus: MessageTypeDefinition
    random: SubtypeConstructor<typeof grpc.Client, _randomPackage_randomClient> & { service: _randomPackage_randomDefinition }
  }
}

