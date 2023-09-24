type Props = {
  text: string;
  sender: boolean;
};
function ChatBubble({ text, sender }: Props) {
  return (
    <div
      className={
        "flex my-3 w-full " + (sender ? "justify-end" : "justify-start")
      }
    >
      <div
        className={
          "bg-zinc-800 min-h-[2rem] rounded-lg px-4 flex items-center " +
          (sender ? "border-r-2 border-amber-300" : "")
        }
      >
        <div className="font-medium text-xs text-white">{text}</div>
      </div>
    </div>
  );
}

export default ChatBubble;
