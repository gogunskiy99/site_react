import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import About from "./pages/About"

function App() {
  return (
  <Router>
    <Header/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contacts/>}/>
        </Routes>
      </div>
  </Router>
  );
}

export default App;
