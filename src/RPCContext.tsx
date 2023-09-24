import { PropsWithChildren, createContext } from "react";
import { ChatServiceClient } from "./proto/chat.client";
import useRPClient from "./hooks/useRPCClient";

export type RPCContextType = {
  client: ChatServiceClient | undefined;
};

export const RPCContext = createContext<RPCContextType>({ client: undefined });

export const RPCProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const client = useRPClient();

  return (
    <RPCContext.Provider value={{ client }}>{children}</RPCContext.Provider>
  );
};
