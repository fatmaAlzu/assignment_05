import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DisplayStatus from "./DisplayStatus";

const AuthMessage = () => {
  const { auth } = useContext(AuthContext);

  return auth.isAuthenticated ? (
    <DisplayStatus type="success" message={`Welcome, ${auth.user.username}! Redirecting...`} />
  ) : (
    <DisplayStatus type="error" message="Invalid username or password." />
  );
};

export default AuthMessage;