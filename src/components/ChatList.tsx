import { useState, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import useRPClient from "../hooks/useRPCClient";
import { User, ChatMessage, ReceiveMsgRequest } from "../proto/chat";

type Props = {
  currentUser: User | undefined;
};
export default function ChatList({ currentUser }: Props) {
  const client = useRPClient();
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (currentUser) {
      receiveMessageHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  async function receiveMessageHandler() {
    const strRq: ReceiveMsgRequest = { user: currentUser?.id || "" };
    const chatStream = client.receiveMsg(strRq, {});
    for await (const message of chatStream.responses) {
      setMessages((prev) => [...prev, message]);
    }
  }

  return (
    <div className="bg-zinc-900 h-full w-full px-4 py-6">
      {currentUser &&
        messages.map((message, index) => (
          <ChatBubble
            key={index}
            text={message.msg}
            sender={message.from === currentUser.id}
          />
        ))}
    </div>
  );
}
