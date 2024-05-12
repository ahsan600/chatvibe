import { useState } from "react";
import AuthContext from "./AuthContext";
import { toast } from "react-toastify";
import MessageContext from "../MessageContext/MessageContext";

function AuthState(props) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const Toast = (type, message, time) => {
    toast[type](message, {
      position: "top-right",
      autoClose: time,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const showToastSuccess = (message, token) => {
    setTimeout(() => {
      Toast("success", message, 2000);
    }, 2500);
    setTimeout(() => {
      setLoading(false);
      setAuth(true);
      localStorage.setItem("token", token);
    }, 4000);
  };
  const showToastError = (message) => {
    setLoading(true);
    setTimeout(() => {
      Toast("error", message, 2000);
    }, 2500);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      Toast("info", "Checking Credentials", 1500);
      if (response.status !== 400) {
        setLoading(true);
        const parseRespone = await response.json();
        showToastSuccess("Correct Credentials", parseRespone.token);
      } else {
        showToastError("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (username, email, password, userImage) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, userImage }),
      });
      Toast("info", "Creating Account", 1500);
      if (response.status !== 400) {
        const parseRespone = await response.json();
        showToastSuccess("Account Created", parseRespone.token);
      } else {
        showToastError("User Already Exist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    Toast("error", "Logged Out", 2000);
    setTimeout(() => {
      localStorage.removeItem("token");
      setAuth(false);
    }, 2000);
  };
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, loading, login, register, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
