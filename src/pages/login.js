import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const Loginhand = async () => {
    try {
      setError(false);
      setLoading(true);
      console.log({
        email: email,
        password: password,
      });
      const result = await axios({
        url: "https://learning-task4.herokuapp.com/auth/login",
        method: "POST",
        data: {
          email: email,
          password: password,
        },
      });
      console.log(result);
      localStorage.setItem("name", result.data.token);
      window.location.href = "/";
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div>
      <input
        placeholder="Email"
        type={"email"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={Loginhand}> Login</Button>
      {loading && <h1>loading....</h1>}
      {error && <h3>something went wrong.....</h3>}
      {data && <h3>Done....</h3>}
    </div>
  );
}
