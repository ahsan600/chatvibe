import { useState } from "react";
import MessageContext from "./MessageContext";

function MessageState(props) {
  const [chat, setChat] = useState(false);
  const [info, setInfo] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const getUserDetail = async () => {
    setChat(false);
    setInfo(false);
    const respone = await fetch("http://localhost:3000/api/auth/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const parseData = await respone.json();
    setUserDetail(parseData);
  };
  const getMessages = () => {
    setChat(true);
  };
  const getDetail = () => {
    setInfo((pv) => !pv);
  };
  return (
    <MessageContext.Provider
      value={{ chat, info, getMessages, getDetail, getUserDetail, userDetail }}
    >
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageState;
