import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import{BrowserRouter as Router , Routes , Route}from "react-router-dom";

function App() {
  return ( 
    <>
    <Router>
   <Navbar/>
   <Routes>
   <Route path="/" element={<ProductCard/>}></Route>
   <Route path="/cart" element={<CartPage/>}></Route>
   
   </Routes>
   </Router>
    </>
   );
}

export default App;