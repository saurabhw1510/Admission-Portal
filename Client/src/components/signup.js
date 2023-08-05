import React, { useEffect, useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/home");
  });

  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Hello from frontend",
        user: user,
      }),
    });
    console.log(res);
    localStorage.setItem("user", user);
    window.location.reload();
  };
  return (
    <div className="App">
      <div className="cover">
        <h1 className="crud">
          <span className="yellow-line"></span>CRUD OPERATIONS
        </h1>
        <h3 className="signin">SIGN IN</h3>
        <p className="para">Enter your credentials to acces your account</p>
        <label>Email</label>
        <input
          onChange={(e) => setUser({ ...user, email: e.currentTarget.value })}
          value={user.email}
          className="in"
          type="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          onChange={(e) =>
            setUser({ ...user, password: e.currentTarget.value })
          }
          value={user.password}
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={handleSignup}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Signup;
