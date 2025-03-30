import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import EnrollmentList from "./components/EnrollmentList";
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
          <Route path="/courses" element={<EnrollmentList />} /> {/* This is now the courses page */}
          <Route path="/enrolled" element={<EnrolledCourse />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
