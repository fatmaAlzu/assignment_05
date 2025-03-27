import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CoursesPage from "./pages/CoursesPage"; // Import CoursesPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
