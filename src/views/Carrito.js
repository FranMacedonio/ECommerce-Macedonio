import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, useDispatchCart } from '../Context';
import CartItem from '../Components/CartItem';

const Carrito = () => {
  const cart = useCart();
  const dispatch = useDispatchCart();

  console.log(cart)

  const remove = index => {
    dispatch({ type: 'REMOVE', index});
  };
  const clear = () => {
    dispatch({ type: 'CLEAR'});
  };








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
      <div id='carrito'>
        <h1>Tu carrito tiene items</h1>
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod, index) => {
              return (
                <CartItem key={index} producto={prod} remove={remove} index={index}/>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td><button onClick={clear}>Limpiar Carrito</button></td>
              <td></td>
              <td></td>
              <td>Total a pagar:</td>
              <td>$250</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default Carrito