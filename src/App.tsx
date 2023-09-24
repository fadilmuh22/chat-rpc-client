import { useEffect } from "react";
import useRPClient from "./hooks/useRPCClient";
import { useState } from "react";
import { ChatMessage, User } from "./proto/chat";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import ChatList from "./components/ChatList";

export default function App() {
  const client = useRPClient();

  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    joinHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="bg-black h-screen w-full min-h-screen max-w-sm mx-auto flex flex-col">
      <ChatHeader />
      <ChatList currentUser={currentUser} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
