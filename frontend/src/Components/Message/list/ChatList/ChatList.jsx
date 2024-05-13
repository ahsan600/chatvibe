import { useContext, useEffect, useState } from "react";
import "./ChatList.css";
import MessageContext from "../../../../Context/MessageContext/MessageContext";
function ChatList() {
  const [addUser, setAddUser] = useState(false);
  const {
    getMessages,
    SearchUserDetail,
    chatList,
    getChatList,
    seacrhUserValue,
    AddUserDetail,
  } = useContext(MessageContext);
  useEffect(() => {
    getChatList();
  }, []);
  const HandleAddChange = async (e) => {
    e.preventDefault();
    SearchUserDetail(e.target.username.value);
    e.target.username.value = "";
  };

  const addUserList = () => {
    setAddUser((pv) => !pv);
    AddUserDetail(seacrhUserValue);
  };

  return (
    <div className="chatslist">
      <div className="searchUser">
        <img src="../public/search.png" alt="" />
        <input type="" placeholder="Search" />
        <div className="adduser">
          <img
            src={addUser ? "../public/minus.png" : "../public/plus.png"}
            alt=""
            onClick={() => setAddUser((pv) => !pv)}
          />
        </div>
      </div>
      {addUser && (
        <div className="addChatUser">
          <form onSubmit={HandleAddChange}>
            <div className="searchUser">
              <input
                name="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
              />
              <button type="submit">Search</button>
            </div>
          </form>

          {seacrhUserValue && (
            <div className="findUser">
              {seacrhUserValue.message ? (
                <p className="notFoundMessgae">{seacrhUserValue.message}</p>
              ) : (
                <>
                  <img
                    src={
                      seacrhUserValue.userImage
                        ? seacrhUserValue.userImage
                        : "../public/avatar.png"
                    }
                    alt=""
                    onClick={() => setAddUser((pv) => !pv)}
                  />
                  <p>{seacrhUserValue.username}</p>
                  <button onClick={addUserList}>Add User</button>
                </>
              )}
            </div>
          )}
        </div>
      )}

      {chatList.map((result) => (
        <div
          key={result.adduserid}
          className="item"
          onClick={() => getMessages(result)}
        >
          <img
            src={result.userImage ? result.userImage : "../public/avatar.png"}
            alt=""
          />

          <div className="text">
            <span>{result.username}</span>
            {/* <div className="textMine">
              {result.isMine && <p>You:</p>}
              <p>{result.message}</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
