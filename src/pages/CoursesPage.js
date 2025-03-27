import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCatalog from "../components/CourseCatalog";

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <CourseCatalog />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
