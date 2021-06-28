import { useState } from "react";
import { loginUser } from "./utility";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    const response = await loginUser(data);

    if (response.status === 200) {
      console.log(response);
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      history.push("/");
    } else {
      alert(response);
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">SOCIAL MEDIA</div>
          <span className="loginDesc">
            Connect with friends and the world around you
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(event) => handleSubmit(event)}>
            <input
              type="email"
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
              className="loginInput"
            />
            <input
              type="password"
              placeholder="password"
              required
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
          </form>
          <Link to="/register">
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
