import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/About';
import Curriculum from './component/Curriculum';
import Kids from './component/Kids';
import Adult from './component/Adult';
import Testimonials from './component/Testimonial';
import Student from './component/Student';
import Teacher from './component/Teacher';
import Intern from './component/Intern';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import HomePage from './component/Home';




function App() {
  return (
    
  <>
    <Router>
     
      <Navbar/>

      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/curriculum" element={<Curriculum/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/adult" element={<Adult/>} />
        <Route path="/testimonial" element={<Testimonials/>} />
        <Route path="/join/student" element={<Student/>} />
        <Route path="/join/teacher" element={<Teacher/>} />
        <Route path="/join/intern" element={<Intern/>} />
        <Route path="/gallery" element={<Gallery/>} />


      </Routes>

         <Footer/>
       
    </Router>
  </>
  );
}

export default App;
