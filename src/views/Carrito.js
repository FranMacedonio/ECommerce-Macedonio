import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart, useDispatchCart } from '../Context';
import CartItem from '../Components/CartItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const initialState = {
  nombre:'',
  apellido:'',
  dni:'',
  celular:'',
  mail:'',
  mailVerificacion:''
};
const fecha = new Date().toDateString();

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

  const onChange = e => {
    const {value, name} = e.target;
    setValues({...values, [name]: value});
  };
  const onSubmit = async e => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "compra"), {
      comprador: values,
      fecha: fecha,
      productos: cart,
      total: precioTotal,
    });
    setIdCompra(docRef.id);
    setValues(initialState);
  };

  const formularioVacio = () => {
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Tenes que rellenar todo lo que pide.',
      showConfirmButton: false,
      timer: 2000
    });
  }
  const mailDistinto = () => {
    return Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Los Emails no coinciden.',
      showConfirmButton: false,
      timer: 2000
    });
  }

  const botonFormulario = () => {
    if(((values.nombre && values.apellido && values.dni && values.celular && values.mail && values.mailVerificacion) !== '') && (values.mail === values.mailVerificacion)){
      return <button className='limpiar'>Realizar Compra</button>
    }else if((values.nombre && values.apellido && values.dni && values.celular && values.mail && values.mailVerificacion) === ''){
      return <p onClick={formularioVacio} className='limpiarDisabled'>Realizar Compra</p>
    }else if(values.mail !== values.mailVerificacion){
      return <p onClick={mailDistinto} className='limpiarDisabled'>Realizar Compra</p>
    }
  };

  if(cart.length === 0 && idCompra === ''){
    return (
      <div id='carritoVacio'>
        <h1>Parece que tu carrito esta vacio</h1>
        <div className='link'>
          <Link className='remeras' to={'/ECommerce-Macedonio/categoria/remeras'}>Remeras</Link>
          <Link className='pantalones' to={'/ECommerce-Macedonio/categoria/pantalones'}>Pantalones</Link>
          <Link className='zapatillas' to={'/ECommerce-Macedonio/categoria/zapatillas'}>Zapatillas</Link>
        </div>
        <h1>No esperes mas y anda a elegir algo que te guste</h1>
        <img alt='Parineta' src='https://www.todoskate.com/wp-content/uploads/2019/10/partes_tabla_skate-1-1024x300.jpg' />
      </div>
    );
  }else if (cart.length > 0 && idCompra === ''){
    return (
      <>
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
                  <TextField className='formularioInput' onChange={onChange} value={values.dni} name='dni' id="filled-basic" label="DNI" variant="filled" />
                  <TextField className='formularioInput' onChange={onChange} value={values.celular} name='celular' id="filled-basic" label="Celular" variant="filled" />
                  <TextField className='formularioInput' onChange={onChange} value={values.mail} name='mail' id="filled-basic" label="Email" variant="filled" />
                  <TextField className='formularioInput' onChange={onChange} value={values.mailVerificacion} name='mailVerificacion' id="filled-basic" label="Verificar Email" variant="filled" />
                  {botonFormulario()}
              </div>
          </Box>
        </div>
      </>
    );
  }else if(idCompra !== ''){
    setTimeout(() => {
      dispatch({ type: 'CLEAR'});
    }, 1000);
    return (
      <div id='carritoPost'>
        {idCompra && (
          <Stack sx={{ width: '80%' }} spacing={2}>
            <Alert severity='success'>
                ¡Gracias por su compra! Guarda el siguiente codigo para ver el resumen del pedido cuando quieras: {`${idCompra}`}
            </Alert>
          </Stack>
        )}
      </div>
    );
  }
};

export default Carrito