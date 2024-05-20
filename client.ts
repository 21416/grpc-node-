import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";
import { randomHandlers } from "./proto/randomPackage/random";

const PORT = 5502;

const PROTO_FILE = "./proto/random.proto";

function responseTimeInterceptor(options: any, nextCall: any): grpc.InterceptingCall {
    const requester: grpc.Requester = {
      start(metadata, listener, next) {
        const start = process.hrtime();
        const newListener: grpc.Listener = {
          onReceiveMetadata(metadata, next) {
            next(metadata);
          },
          onReceiveMessage(message, next) {
            next(message);
          },
          onReceiveStatus(status, next) {
            const [seconds, nanoseconds] = process.hrtime(start);
            const responseTimeMs = seconds * 1000 + nanoseconds / 1e6;
            console.log(`Response time: ${responseTimeMs.toFixed(3)} ms`);
            next(status);
          }
        };
        next(metadata, newListener);
      }
    };
    return new grpc.InterceptingCall(nextCall(options), requester);
  }
  

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const client = new grpcObj.randomPackage.random(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure(), {
    interceptors: [responseTimeInterceptor]
  }
);

const date = new Date();
date.setSeconds(date.getSeconds()+1);
client.waitForReady(date, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});
function onClientReady() {
//   client.joinchat({ user: "ping", id: 1 }, (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(result);
//   });
  client.sendData({}, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    return result
  });
}
