import { RPCProvider } from "./RPCContext";
import ChatPage from "./pages/ChatPage";

export default function App() {
  return (
    <RPCProvider>
      <ChatPage />
    </RPCProvider>
  );
}
