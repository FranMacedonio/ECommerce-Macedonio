import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuProductos from './MenuProductos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div id='navbar'>
        <Link to={'/'}>
            <div id='logo'>
                <div className='kalatea'>N.A.V</div>
                <div className='clothes'>Es con vuelo</div>
            </div>
        </Link>
        <div id='links'>
            <MenuProductos item1={'Remeras'} item2={'Pantalones'} item3={'Zapatillas'} etiqueta={'Productos'} />
            <MenuProductos item1={'Nike'} item2={'Adidas'} item3={'Vans'} etiqueta={'Marcas'} />
            <Link to={'/nosotros'}><Button variant="text">Nosotros</Button></Link>
            <Link to={'/contactanos'}><Button variant="text">Contactanos</Button></Link>
        </div>
        <Link to={'/carrito'}>
            <div id='cart'>
                <ShoppingCartIcon />
                <div>Carrito</div>
                <div>0</div>
            </div>
        </Link>
    </div>
  )
}

export default Navbar