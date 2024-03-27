import {Routes, Route,BrowserRouter} from "react-router-dom" 
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Navbar from "./Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Blogs from "./Components/Blogs";

function App() {

  

  return (
    <BrowserRouter>
       <div className="app">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects  />} />
      <Route path="/resume" element={<Resume />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blogs />} />
      </Routes> 
      <Footer />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
