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
      <Route exact path="/" element={<Home />}></Route>

      <Route path="*" element={<NotFound/>} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
