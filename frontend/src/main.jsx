import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthState from "./Context/AuthContext/AuthState.jsx";
import MessageState from "./Context/MessageContext/MessageState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthState>
      <MessageState>
        <App />
      </MessageState>
    </AuthState>
  </React.StrictMode>
);
