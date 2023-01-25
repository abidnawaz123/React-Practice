import './App.css';
import './New.css';
// import NavBar from './Routes/NavBar';
// import About from './Routes/About';
// import Home from './Routes/Home';
// import Products from './Routes/Products';
// import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}
export default App;
