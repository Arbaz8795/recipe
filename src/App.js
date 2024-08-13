import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Single from "./pages/Single";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <div style={{marginBottom:"0px"}}>
     <Navbar/>
     </div>
    <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/Single" element={<Single/>}/>
     <Route  path="/Wishlist" element={<Wishlist/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
