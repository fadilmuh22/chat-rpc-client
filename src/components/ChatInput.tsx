import { useRef } from "react";
import SendIcon from "./SendIcon";

type Props = {
  sendMessage: (message: string) => void;
};

export default function ChatInput({ sendMessage }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  };

  const handleClick = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      sendMessage(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="bg-zinc-800 w-full flex flex-row items-center justify-start rounded-xl">
      <div className="w-full p-4">
        <div className="relative fill-zinc-600 hover:fill-zinc-400">
          <input
            ref={inputRef}
            type="search"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:fill- focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="type a message"
            onKeyDown={handleKeyDown}
            required
          />
          <button
            onClick={handleClick}
            type="submit"
            className="text-white absolute right-3.5 bottom-3.5 fill-inherit focus:fill-amber-300"
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
