import { useContext, useEffect, useState } from "react";
import "./userdetail.css";
import MessageContext from "../../../../Context/MessageContext/MessageContext";

function UserDetail() {
  const { getUserDetail, userDetail } = useContext(MessageContext);

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div className="userdetial">
      <div className="user">
        <img
          src={
            userDetail.userImage ? userDetail.userImage : "../public/avatar.png"
          }
          alt={userDetail.username}
        />
        <h2>{userDetail.username}</h2>
      </div>
      <div className="icons">
        <img src="../public/more.png" alt="" />
        <img src="../public/video.png" alt="" />
        <img src="../public/edit.png" alt="" />
      </div>
    </div>
  );
}

export default UserDetail;
