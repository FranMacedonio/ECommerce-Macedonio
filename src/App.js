import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//VIEWS
import Home from './views/Home';
import Carrito from './views/Carrito';
import Categoria from './views/Categoria';
import Marca from './views/Marca';
import ItemDetail from './views/ItemDetail';
import Resumen from './views/Resumen';

const App = () => {
  return (
    <BrowserRouter>
      <div id='pageContainer'>
        <div id='container'>
          <Navbar />
          <Routes>
            <Route path='/ECommerce-Macedonio/' element={<Home />} />
            <Route path='/ECommerce-Macedonio/carrito' element={<Carrito />} />
            <Route path='/ECommerce-Macedonio/resumen' element={<Resumen />} />
            <Route path='/ECommerce-Macedonio/categoria/:categoria' element={<Categoria />} />
            <Route path='/ECommerce-Macedonio/marca/:marca' element={<Marca />} />
            <Route path='/ECommerce-Macedonio/detalles/:id' element={<ItemDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;