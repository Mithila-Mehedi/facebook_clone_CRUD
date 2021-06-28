import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { signUpUser } from "./utility";
import "./register.css";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username: username,
            email: email,
            password: password,
        };

        const response = await signUpUser(data);
        if (response.status === 200) {
            localStorage.setItem(
                "userInfo",
                JSON.stringify(response.data.user)
            );
            history.push("/");
        } else {
            alert("User creation failed");
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
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="loginBox">
                            <input
                                type="text"
                                placeholder="username"
                                className="loginInput"
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                value={username}
                                required
                            />
                            <input
                                type="email"
                                placeholder="email"
                                className="loginInput"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                value={email}
                                required
                            />
                            <input
                                type="password"
                                placeholder="password"
                                className="loginInput"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                value={password}
                                required
                            />
                            <input
                                type="password"
                                placeholder="password again"
                                className="loginInput"
                                required
                            />
                            <button type="submit" className="loginButton">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <Link to="/login">
                        <button className="loginRegisterButton">
                            Log into account
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
