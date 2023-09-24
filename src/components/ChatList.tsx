import ChatBubble from "./ChatBubble";
import { User, ChatMessage } from "../proto/chat";

type Props = {
  currentUser: User | undefined;
  messages: ChatMessage[];
};
export default function ChatList({ currentUser, messages }: Props) {
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
