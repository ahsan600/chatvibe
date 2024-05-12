import "./login.css";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
function Auth() {
  const [openChat, setOpenChat] = useState(false);
  const changeAuth = () => {
    setOpenChat((pv) => !pv);
  };
  return (
    <>
      <div className="contain">
        <div className="right-login">
          <img src="./public/icon.svg" alt="" />
          <h1>ChatVibe</h1>
        </div>
        <div className="separate">
          <div className="sep"></div>
        </div>
        {/* Same as */}
        {openChat ? (
          <Login changeAuth={changeAuth} />
        ) : (
          <Register changeAuth={changeAuth} />
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default Auth;
