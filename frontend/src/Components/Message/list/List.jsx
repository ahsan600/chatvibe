import "./list.css";
import UserDetail from "./userDetail/UserDetail";
import ChatList from "./ChatList/ChatList";

function List() {
  return (
    <div className="list">
      <UserDetail />
      <ChatList />
    </div>
  );
}

export default List;
