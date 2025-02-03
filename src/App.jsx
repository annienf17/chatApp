import { useState, useEffect } from "react";
import ChatBox from "./components/ChatBox";
import UserList from "./components/UserList";
import { initializeSocket, receiveMessages } from "./services/socket";

function App() {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const socket = initializeSocket();

    receiveMessages((message) => {
      console.log("Received message in App:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("userList", (userList) => {
      console.log("Received user list:", userList);
      setUsers(userList);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <UserList users={users} />
      <ChatBox messages={messages} />
    </div>
  );
}

export default App;
