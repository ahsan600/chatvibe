import { useContext, useEffect } from "react";
import Auth from "./Components/Auth/Auth";
import Message from "./Components/Message/Message";
import AuthContext from "./Context/AuthContext/AuthContext";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const { auth, setAuth } = useContext(AuthContext);

  // const [auth, setAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    }
  });
  return (
    <div className="container">
      <>{auth ? <Message /> : <Auth />}</>
    </div>
  );
};

export default App;
