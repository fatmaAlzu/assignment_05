import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import EnrollmentList from "./components/EnrollmentList"; // This is your Courses page
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/courses" element={<EnrollmentList />} /> {/* Updated route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
