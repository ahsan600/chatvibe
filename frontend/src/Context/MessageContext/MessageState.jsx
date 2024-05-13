import { useState } from "react";
import MessageContext from "./MessageContext";

function MessageState(props) {
  const [chat, setChat] = useState(false);
  const [info, setInfo] = useState(false);
  const [userDetail, setUserDetail] = useState({});
  const [chatList, setChatList] = useState([]);
  const [seacrhUserValue, setSeacrhUserValue] = useState(null);
  const [receiverUserData, setReceiverUserData] = useState({});
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
  const SearchUserDetail = async (username) => {
    const respone = await fetch(
      "http://localhost:3000/api/message/searchuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ username }),
      }
    );
    const parseData = await respone.json();
    setSeacrhUserValue(parseData);
  };
  const AddUserDetail = async (seacrhUserValue) => {
    const respone = await fetch("http://localhost:3000/api/message/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        adduserid: seacrhUserValue.id,
        username: seacrhUserValue.username,
        userImage: seacrhUserValue.userImage,
      }),
    });
    setSeacrhUserValue(null);
    getChatList();
  };
  const getChatList = async () => {
    const respone = await fetch("http://localhost:3000/api/message/chatlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const parseData = await respone.json();
    setChatList(parseData);
  };
  const getMessages = (result) => {
    setReceiverUserData(result);
    setChat(true);
  };
  const getDetail = () => {
    setInfo((pv) => !pv);
  };
  const resetAllState = () => {
    setChat(false);
    setInfo(false);
    setUserDetail({});
    setChatList([]);
    setSeacrhUserValue(null);
  };
  return (
    <MessageContext.Provider
      value={{
        chat,
        info,
        getMessages,
        getDetail,
        getUserDetail,
        userDetail,
        chatList,
        getChatList,
        SearchUserDetail,
        seacrhUserValue,
        AddUserDetail,
        resetAllState,
        receiverUserData,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageState;
