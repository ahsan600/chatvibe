import { useContext, useState } from "react";
import "./detail.css";
import AuthContext from "../../../Context/AuthContext/AuthContext";
import MessageContext from "../../../Context/MessageContext/MessageContext";
function Detail() {
  const [sharedphoto, setSharedPhoto] = useState(false);
  const { logout } = useContext(AuthContext);
  const { receiverUserData, resetAllState } = useContext(MessageContext);
  const HandleLogoutChange = () => {
    logout();
    setTimeout(() => {
      resetAllState();
    }, 2000);
  };
  return (
    <div className="detail">
      <div className="userdetail">
        <img
          src={
            receiverUserData.userImage
              ? receiverUserData.userImage
              : "../public/avatar.png"
          }
          alt=""
        />
        <h3>{receiverUserData.username}</h3>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
      </div>
      <div className="setting">
        <div className="chatsetting">
          <p>Chat Setting</p>
          <img src="../public/arrowup.png" alt="" />
        </div>
        <div className="privacy">
          <p>Privacy & help</p>
          <img src="../public/arrowup.png" alt="" />
        </div>
        <div className="sharedphotos">
          <div className="shared">
            <p>Shared Photos</p>
            <img
              src={
                sharedphoto ? "./public/arrowdown.png" : "./public/arrowup.png"
              }
              alt=""
              onClick={() => setSharedPhoto((pv) => !pv)}
            />
          </div>
          {sharedphoto && (
            <>
              <div className="sharedphoto">
                <img className="photo" src="../public/avatar.png" alt="" />
                <img className="download" src="../public/download.png" alt="" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="button">
        <div className="block">
          <button>Block User</button>
        </div>
        <div className="logout">
          <button onClick={HandleLogoutChange}>Logout </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
