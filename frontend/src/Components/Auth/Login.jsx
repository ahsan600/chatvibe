import { useContext } from "react";
import "./login.css";
import AuthContext from "../../Context/AuthContext/AuthContext";
function Login({ changeAuth }) {
  const { login, loading } = useContext(AuthContext);
  const HandlelogSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password);
  };
  return (
    <div className="left-login">
      <form onSubmit={HandlelogSubmit}>
        <h2>LOG IN</h2>

        <div className="email">
          <label htmlFor="email">Email</label>
          <div className="email-icon">
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="pass-icon">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              minLength={8}
              required
            />
          </div>
        </div>
        <div className="login-btn">
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Log In"}
          </button>
        </div>
      </form>
      <div className="createaccout">
        <p onClick={() => changeAuth()}>
          Create Your Account <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>
    </div>
  );
}

export default Login;
