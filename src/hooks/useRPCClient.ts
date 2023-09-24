import {
  GrpcWebFetchTransport,
  GrpcWebOptions,
} from "@protobuf-ts/grpcweb-transport";
import { ChatServiceClient } from "../proto/chat.client";

export default function useRPClient() {
  const host = "http://localhost:8080/api";
  const options: GrpcWebOptions = {
    baseUrl: host,
    format: "binary",
  };
  const transport = new GrpcWebFetchTransport(options);

  return new ChatServiceClient(transport);
}
