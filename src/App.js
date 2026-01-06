import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import Blog from "./pages/Blog"

function App() {
  return (
  <Router>
    <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contacts/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </div>
  </Router>
    
  );
}

export default App;
