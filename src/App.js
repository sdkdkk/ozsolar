import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Panels from "./Pages/Panels";
import Inverter from "./Pages/Inverter";
import Packages from "./Pages/Packages";
import Gallary from "./Pages/Gallary";
import Finance from "./Pages/Finance";
import Contact from "./Pages/Contact";
import Consumer from "./Pages/Consumer";

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
          <Route path="/inverter" element={<Inverter />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consumer" element={<Consumer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
