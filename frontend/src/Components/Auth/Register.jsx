import AuthContext from "../../Context/AuthContext/AuthContext";
import "./login.css";
import { useContext, useState } from "react";

function Register({ changeAuth }) {
  const { register, loading } = useContext(AuthContext);
  const [userImage, setUserImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setUserImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const HandleRegSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    register(username, email, password, userImage);
    // Continue with form submission and registration process
  };

  return (
    <div className="left-login">
      <form onSubmit={HandleRegSubmit}>
        <h2>Register</h2>
        <div className="username">
          <label htmlFor="username">Username</label>
          <div className="user-icon">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Username"
              minLength={5}
              required
            />
          </div>
        </div>
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
        <div className="image">
          <label htmlFor="image">Upload Image</label>
          <input
            style={{ display: "none" }}
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
          />
          {userImage ? (
            <img src={userImage} alt="Uploaded Image" />
          ) : (
            <img src="../public/avatar.png" alt="Uploaded Image" />
          )}
        </div>
        <div className="login-btn">
          <button disabled={loading} type="submit">
            {loading ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
      <div className="createaccout">
        <p
          onClick={() => {
            changeAuth();
          }}
        >
          Log In To Your Account <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>
    </div>
  );
}

export default Register;
