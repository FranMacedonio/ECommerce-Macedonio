import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//VIEWS
import Home from './views/Home';
import Nosotros from './views/Nosotros';
import Contactanos from './views/Contactanos';
import Carrito from './views/Carrito';

const App = () => {
  return (
    <BrowserRouter>
      <div id='pageContainer'>
        <div id='container'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contactanos' element={<Contactanos />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;