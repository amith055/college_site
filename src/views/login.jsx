import React, { useState } from "react";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";


const Login = ({type}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(type);
      const response = await axios.post(`http://localhost:5000/login`, {
        username,
        password,
        type
      });
      if(response.data.message === "true"){
        if(type === "Principle")  {navigate("/principlehome");};
        if(type === "HoD") {navigate("/hodhome")};
        if(type === "Faculty") {navigate("/facultyhome")}
      }else if ( response.data.message === "false" ){
        setMessage("Invalid Credentials for selected Role");
      }
    } catch (error) {
      console.log(type);
      setMessage(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-box">
      <h2>{type} Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      </div>
      <p style={{color : "red"}}>{message}</p>
      </div>
      <Footer />
    </div>
  );
};



export default Login;
