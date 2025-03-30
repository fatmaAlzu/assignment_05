import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <h2>LMS</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
