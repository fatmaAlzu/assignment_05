export const AuthMessage = ({ type, message }) => {
  return (
    <div className={`auth-message ${type === "success" ? "success" : "error"}`}>
      {message}
    </div>
  );
};
