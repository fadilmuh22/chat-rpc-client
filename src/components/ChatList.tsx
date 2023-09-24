import ChatBubble from "./ChatBubble";
import { User, ChatMessage } from "../proto/chat";
import { useEffect, useRef } from "react";

type Props = {
  currentUser: User | undefined;
  messages: ChatMessage[];
  lastMessageCount: number | undefined;
};
export default function ChatList({
  currentUser,
  messages,
  lastMessageCount,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastMessageCount === messages.length) return;

    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, lastMessageCount]);

  return (
    <div className="bg-zinc-900 h-full w-full overflow-y-auto overflow-x-hidden px-4 py-6">
      {currentUser &&
        messages.map((message, index) => (
          <ChatBubble
            key={index}
            chatMessage={message}
            isSender={message.from === currentUser.id}
          />
        ))}
      <div ref={bottomRef} />
    </div>
  );
}
