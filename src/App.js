import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import Courses from "./components/CourseCatalog"; 
import EnrolledCourse from "./components/EnrolledCourse";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enrolled" element={<EnrolledCourse />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
