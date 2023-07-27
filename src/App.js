import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
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
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/panels" element={<Panels />} />
          <Route exact path="/inverter" element={<Inverter />} />
          <Route path="/residential" element={<Packages />} />
          <Route path="/commercial" element={<Packages />} />
          <Route exact path="/gallary" element={<Gallary />} />
          <Route exact path="/finance" element={<Finance />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/consumer" element={<Consumer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
