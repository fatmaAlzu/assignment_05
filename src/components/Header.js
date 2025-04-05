import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo192.png" alt="LMS Logo" className="logo" />
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
