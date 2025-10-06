import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="p-6">
        <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/join" element={<Join />} />
       <Route path="/contact" element={<Contact />} /> 
       </Routes>
      </div>
    </div>
  );
}

export default App;

