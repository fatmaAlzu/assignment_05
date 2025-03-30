import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2 className="header-title">LMS</h2>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;