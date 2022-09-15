import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./views/Home";


function App() {
 
  return (
    <div className="App">

    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
          
      </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;