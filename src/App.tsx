import { useEffect } from "react";
import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import useRPClient from "./useRPCClient";
import { useState } from "react";
import { ChatMessage, ReceiveMsgRequest, User } from "./proto/chat";

function App() {
  const client = useRPClient();

  const [currentUser, setCurrentUser] = useState<User>();
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    joinHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentUser) {
      receiveMessageHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  function joinHandler() {
    const username = "New user " + Math.random() * 1000;

    const user: User = {
      id: Date.now().toString(),
      name: username,
    };

    client
      .join(user)
      .then(async (res) => {
        if (res.status.code === "OK") {
          setCurrentUser(user);
          return;
        }
        window.localStorage.setItem("username", username.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function receiveMessageHandler() {
    const strRq: ReceiveMsgRequest = { user: currentUser?.id || "" };
    const chatStream = client.receiveMsg(strRq, {});
    for await (const message of chatStream.responses) {
      setMessages((prev) => [...prev, message]);
    }
  }

  function sendMessage(message: string) {
    const chatMessage: ChatMessage = {
      from: currentUser?.id || "",
      msg: message,
      time: Date.now().toString(),
    };
    client.sendMsg(chatMessage).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="bg-black h-full w-full min-h-screen">
      <div className="bg-zinc-800 w-full flex flex-row items-center justify-start rounded-xl p-4 gap-3">
        <div className="bg-white h-10 w-10 rounded-full"></div>
        <div className="font-bold text-white">Server</div>
      </div>
      {currentUser && (
        <div className="bg-zinc-900 h-full w-full min-h-[80vh] px-4 py-6">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              text={message.msg}
              sender={message.from === currentUser.id}
            />
          ))}
        </div>
      )}
      <div className="bg-zinc-800 w-full flex flex-row items-center justify-start rounded-xl">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;
