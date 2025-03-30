import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthMessage from "./AuthMessage";

const LoginForm = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth.isAuthenticated) {
      setTimeout(() => navigate("/courses"), 2000);
    }
  }, [auth, navigate]);

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    if (!credentials.username || !credentials.password) {
      setErrorMessage("Username and password cannot be empty.");
      return false;
    }
    if (credentials.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!validateInputs()) return;

    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      const user = users.find(
        (u) => u.username === credentials.username && u.email === credentials.password
      );

      if (user) {
        setAuth({ isAuthenticated: true, user });
      } else {
        setErrorMessage("Invalid username or password.");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="login-container" style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
      {auth.isAuthenticated ? <AuthMessage /> : null}
      {errorMessage && <AuthMessage />}
      
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      
      <p>
        <a href="#">Forgot Password?</a>
      </p>
    </div>
  );
};

export default LoginForm;
