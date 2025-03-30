import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthMessege } from "./AuthMessege";
import DisplayStatus from "./DisplayStatus";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const { authStatus, setAuthStatus } = useContext(AuthMessege);
  const navigate = useNavigate();

  // Fetch user data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setAuthStatus({ isLoggedIn: false, message: "Username and password cannot be empty!" });
      return;
    }

    if (password.length < 8) {
      setAuthStatus({ isLoggedIn: false, message: "Password must be at least 8 characters." });
      return;
    }

    const validUser = users.find((user) => user.username === username && user.email === password);

    if (validUser) {
      setAuthStatus({ isLoggedIn: true, message: "Login successful! Redirecting..." });
      setTimeout(() => navigate("/courses"), 2000);
    } else {
      setAuthStatus({ isLoggedIn: false, message: "Invalid username or password!" });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {authStatus.message && <DisplayStatus type={authStatus.isLoggedIn ? "success" : "error"} message={authStatus.message} />}
      
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password (Use email as password)" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>

      <p className="forgot-password">Forgot Password?</p>
    </div>
  );
};

export default LoginForm;
