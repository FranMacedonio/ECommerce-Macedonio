import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, useDispatchCart } from '../Context';

const Carrito = () => {
  const cart = useCart();
  const dispatch = useDispatchCart();

  if(cart.length === 0){
    return (
      <div id='carritoVacio'>
        <h1>Parece que tu carrito esta vacio</h1>
        <div className='link'>
          <Link className='remeras' to={'/categoria/remeras'}>Remeras</Link>
          <Link className='pantalones' to={'/categoria/pantalones'}>Pantalones</Link>
          <Link className='zapatillas' to={'/categoria/zapatillas'}>Zapatillas</Link>
        </div>
        <h1>No esperes mas y anda a elegir algo que te guste</h1>
        <img alt='Parineta' src='https://www.todoskate.com/wp-content/uploads/2019/10/partes_tabla_skate-1-1024x300.jpg' />
      </div>
    );
  }else{
    return (
      <h1>Tu carrito tiene items</h1>
    );
  }
};

export default Carrito