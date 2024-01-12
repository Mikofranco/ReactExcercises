import React, { useState } from "react";
import axios from "axios";
import "./style.css";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/register",
        { username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMsg(true);
      setErrorMsg("");
      setEmail("")
      setPassword("")
      setUsername("")
      console.log(response.data);
    } catch (error) {
      setSuccessMsg(false);
      setErrorMsg("Registration failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="sign-up">
      <div>
        {successMsg ? (
          <h1>Success</h1>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <input
              type="text"
              name="username"
              placeholder="enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUp;
