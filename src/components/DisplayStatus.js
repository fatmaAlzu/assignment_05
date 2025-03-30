const DisplayStatus = ({ type, message }) => {
    return (
      <div className={`status-message ${type === "success" ? "success" : "error"}`}>
        {message}
      </div>
    );
  };
  
  export default DisplayStatus;
  