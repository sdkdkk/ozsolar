import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Panels from "./Pages/Panels";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Backtotop /> */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/panels" element={<Panels />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
