import { useContext, useState, useCallback, useEffect } from "react";
import { RPCContext } from "../RPCContext";
import ChatHeader from "../components/ChatHeader";
import ChatInput from "../components/ChatInput";
import ChatList from "../components/ChatList";
import { User, ChatMessage, ReceiveMsgRequest } from "../proto/chat";
import usePrevious from "../hooks/usePrevious";

export default function ChatPage() {
  const { client } = useContext(RPCContext);

  const [currentUser, setCurrentUser] = useState<User>();
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const lastMessageCount = usePrevious(messages.length);

  const joinHandler = useCallback(() => {
    const username = "New user " + Math.random() * 1000;

    const user: User = {
      id: Date.now().toString(),
      name: username,
    };

    client
      ?.join(user)
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
  }, [client]);

  useEffect(() => {
    joinHandler();
  }, [joinHandler]);

  const sendMessage = useCallback(
    (message: string) => {
      const chatMessage: ChatMessage = {
        from: currentUser?.id || "",
        msg: message,
        time: Date.now().toString(),
      };
      client?.sendMsg(chatMessage).then((res) => {
        console.log(res);
      });
    },
    [client, currentUser?.id]
  );

  const receiveMessageHandler = useCallback(async () => {
    const strRq: ReceiveMsgRequest = { user: currentUser?.id || "" };
    const chatStream = client?.receiveMsg(strRq, {
      timeout: new Date(Date.now() + 1000 * 60 * 60 * 3),
    });

    if (!chatStream) return;

    for await (const message of chatStream.responses) {
      setMessages((prev) => [...prev, message]);
    }
    const status = await chatStream.status;
    const trailers = await chatStream.trailers;

    console.log("streaming messages: ", status, trailers);
  }, [client, currentUser?.id]);

  useEffect(() => {
    if (currentUser) {
      receiveMessageHandler();
    }
  }, [currentUser, receiveMessageHandler]);

  return (
    <div className="bg-black h-screen w-full min-h-screen max-w-sm mx-auto flex flex-col">
      <ChatHeader />
      <ChatList
        currentUser={currentUser}
        messages={messages}
        lastMessageCount={lastMessageCount}
      />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
