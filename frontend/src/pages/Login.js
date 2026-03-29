import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const login = async () => {
    try {
      console.log("Sending:", data);

      const res = await axios.post("/api/auth/login", data);

      console.log("Response:", res.data);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");

      window.location = "/dashboard";

    } catch (err) {
      console.error(err);
      alert("Login Failed ❌");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={data.email}
        onChange={(e) =>
          setData({ ...data, email: e.target.value })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={data.password}
        onChange={(e) =>
          setData({ ...data, password: e.target.value })
        }
      />

      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}
