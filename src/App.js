import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css'
import Header from "./cmp/header/Header";
import Homepage from "./cmp/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
import ContactUs from "./cmp/Homepage/ContactUs/ContactUs";
import Course from "./cmp/Courses/Course";
import Footer from "./cmp/footer/Footer";
import Blog from "./cmp/Blog/Blog";

const App = () => {
  const design = (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/courses" element={<Course />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
  return design;
}
export default App;
