import {
  GrpcWebFetchTransport,
  GrpcWebOptions,
} from "@protobuf-ts/grpcweb-transport";
import { ChatServiceClient } from "../proto/chat.client";

export const RPC_URL = import.meta.env.VITE_RPC_URL as string;

export default function useRPClient() {
  const options: GrpcWebOptions = {
    baseUrl: RPC_URL,
    format: "binary",
    timeout: 2 * 1000,
  };
  const transport = new GrpcWebFetchTransport(options);

  return new ChatServiceClient(transport);
}
