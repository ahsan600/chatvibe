import Chat from "./chats/Chat";
import List from "./list/List";
import Detail from "./Detail/Detail";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";

import MessageContext from "../../Context/MessageContext/MessageContext";
function Message() {
  const { chat, info } = useContext(MessageContext);
  return (
    <>
      <ToastContainer />

      <List />
      {chat && <Chat />}
      {info && <Detail />}
    </>
  );
}

export default Message;
