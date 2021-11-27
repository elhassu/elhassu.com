import {
  Routes, 
  Route, 
  // Link, 
  // Redirect 
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />}/>

      {/* <Route path="/about"  element={<></>}/> */}

      <Route path="*" element={<NotFound/>} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
