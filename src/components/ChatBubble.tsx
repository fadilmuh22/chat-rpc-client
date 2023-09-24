import { ChatMessage } from "../proto/chat";

type Props = {
  chatMessage: ChatMessage;
  isSender: boolean;
};
function ChatBubble({ chatMessage, isSender }: Props) {
  return (
    <div
      className={
        "flex my-3 w-full " + (isSender ? "justify-end" : "justify-start")
      }
    >
      <div
        className={
          "bg-zinc-800 min-h-[2rem] rounded-lg px-4 py-2 flex items-center max-w-[80vw] text-justify " +
          (isSender ? "border-r-2 border-amber-300" : "")
        }
      >
        <div className="font-medium text-xs text-white">{chatMessage.msg}</div>
      </div>
    </div>
  );
}

export default ChatBubble;
