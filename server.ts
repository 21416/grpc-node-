import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/random";
import { randomHandlers } from "./proto/randomPackage/random";
import axios from "axios";

const PORT = 5502;

const PROTO_FILE = "./proto/random.proto";

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;
const randomPackage = grpcObj.randomPackage;

function responseTimeInterceptor(call: grpc.ServerUnaryCall<any, any>, methodDefinition: grpc.MethodDefinition<any, any>, next: grpc.sendUnaryData<any>): void {
  const start = process.hrtime();
  const callback: grpc.sendUnaryData<any> = (err, response) => {
    const [seconds, nanoseconds] = process.hrtime(start);
    const responseTimeMs = seconds * 1000 + nanoseconds / 1e6;
    console.log(`Response time: ${responseTimeMs.toFixed(3)} ms`);
    next(err, response);
  };
  next(call, callback);
}


function main() {
  const server = getServer();

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Your server as started on port ${port}`);
      server.start();
    }
  );
}



const allUser = [];
async function getData() {
  console.time('Start')
  const { data } = await axios("http://localhost:1337/messageLogs");
  console.timeEnd('Start')
  return data;
}
function getServer() {
  const server = new grpc.Server();
  server.addService(randomPackage.random.service, {
    // service1: (req, res) => {
    //   console.log(req.request)
    //   res(null, {message: "hello sanjeev"})
    // }
    joinchat: (call, callback) => {
      const user = call.request;

      console.log(user);
      callback(null, { status: "1" });
    },
    sendData: (call, callback) => {
      (async () => {
        // callback(null,{messageLogs:[]});
        const val = await getData();
        const time = new Date().getTime();
        callback(null, { messageLogs: val, time });
      })();
    },
  } as randomHandlers);
  return server;
}

main();
