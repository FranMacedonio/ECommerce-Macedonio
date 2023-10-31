import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MenuProductos from './MenuProductos';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../Context';

const Navbar = () => {
    const cart = useCart([]);

    return (
        <div id='navbar'>
            <Link className='botonExit' to={'/ECommerce-Macedonio/'}>
                <div id='logo'>
                    <div className='kalatea'>N.A.V</div>
                    <div className='clothes'>Es con vuelo</div>
                </div>
            </Link>
            <div id='links'>
                <MenuProductos opcion={'productos'} />
                <MenuProductos opcion={'marcas'} />
                <Link className='botonExit' to={'/ECommerce-Macedonio/resumen'}><Button variant="text">Resumen de Compra</Button></Link>
            </div>
            <Link to={'/ECommerce-Macedonio/carrito'}>
                <div id='cart'>
                    <ShoppingCartIcon />
                    <div>Carrito</div>
                    <div>{cart.length === 0 ? 0 : cart.length}</div>
                </div>
            </Link>
        </div>
    );
}

export default Navbar