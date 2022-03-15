import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart, useDispatchCart } from '../Context';
import CartItem from '../Components/CartItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const initialState = {
  nombre:'',
  apellido:'',
  celular:'',
  mail:'',
  mailVerificacion:''
};

const Carrito = () => {
  const cart = useCart();
  const dispatch = useDispatchCart();
  const precioTotal = cart.reduce((total, b) => total + b.precio * b.cantidad, 0);

  const remove = index => {
    dispatch({ type: 'REMOVE', index});
  };
  const clear = () => {
    dispatch({ type: 'CLEAR'});
  };

  const [values, setValues] = useState(initialState);
  const [idCompra, setIdCompra] = useState('');

  console.log(idCompra)

  const onChange = e => {
    const {value, name} = e.target;
    setValues({...values, [name]: value});
  };
  const onSubmit = async e => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "compra"), {
      comprador: values,
      productos: cart,
      total: precioTotal,
    });
    setIdCompra(docRef.id);
    setValues(initialState);
  };

  // useEffect(() => {
  //   const botonFormulario = document.querySelector('#formulario button');
  //   if((values.nombre && values.apellido && values.celular && values.mail && values.mailVerificacion) !== ''){
  //     botonFormulario.disabled = false;
  //   }else{
  //     botonFormulario.disabled = true;
  //     botonFormulario.addEventListener('click', () => {
  //       console.log('tocaste')
  //     })
  //   }
  // }, [values]);

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
        <h2>Resumen de compra</h2>
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
              <td><button className='limpiar' onClick={clear}>Limpiar Carrito</button></td>
              <td></td>
              <td></td>
              <td><strong>Total a pagar:</strong></td>
              <td><strong>${precioTotal}</strong></td>
            </tr>
          </tfoot>
        </table>
        <Box
        component="form"
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        id='formularioContainer'
        >
            <div id='formulario'>
                <TextField className='formularioInput' onChange={onChange} value={values.nombre} name='nombre' id="filled-basic" label="Nombre" variant="filled" />
                <TextField className='formularioInput' onChange={onChange} value={values.apellido} name='apellido' id="filled-basic" label="Apellido" variant="filled" />
                <TextField className='formularioInput' onChange={onChange} value={values.celular} name='celular' id="filled-basic" label="Celular" variant="filled" />
                <TextField className='formularioInput' onChange={onChange} value={values.mail} name='mail' id="filled-basic" label="Email" variant="filled" />
                <TextField className='formularioInput' onChange={onChange} value={values.mailVerificacion} name='mailVerificacion' id="filled-basic" label="Verificar Email" variant="filled" />
                <button className='limpiar'>Realizar Compra</button>
            </div>
        </Box>
      </div>
    );
  }
};

export default Carrito