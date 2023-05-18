import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Landing/ItemListContainer";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/home' element={<ItemListContainer />} />
        <Route exact path='/category/:id' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
