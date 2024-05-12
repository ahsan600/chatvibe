import { useContext, useState } from "react";
import "./ChatList.css";
import MessageContext from "../../../../Context/MessageContext/MessageContext";
import chatListData from "../../../Demo/chatListData";
function ChatList() {
  const [addUser, setAddUser] = useState(false);
  const { getMessages } = useContext(MessageContext);

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
      {chatListData.map((result) => (
        <div key={result.id} className="item" onClick={getMessages}>
          <img src="../public/avatar.png" alt="" />
          <div className="text">
            <span>{result.user.name}</span>
            <div className="textMine">
              {result.isMine && <p>You:</p>}
              <p>{result.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
