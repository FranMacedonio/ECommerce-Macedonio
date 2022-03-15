import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useDispatchCart, useCart } from '../Context';
import Swal from 'sweetalert2'

const DetailCardComponent = ({data}) => {

  const cart = useCart();
  const dispatch = useDispatchCart();

  console.log(cart)
  console.log(dispatch)

  const addToCart = () => {
    const cantidad = parseInt(document.querySelector('#contador').textContent);
    const repetido = cart.find(name => name.titulo === data.titulo);

    if(cantidad === 0){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Tenes que poner mas de 0 productos',
        showConfirmButton: false,
        timer: 2000
      });
    }else if(repetido){
      const idxRepetido = cart.indexOf(repetido);
      cart[idxRepetido].cantidad = cart[idxRepetido].cantidad + cantidad;
      dispatch({ type: 'REFRESH', cart});
    }else{
      const prod = {
        titulo: data.titulo,
        precio: data.precio,
        cantidad: cantidad,
        imagen: data.imagen,
        id: data.id
      };
      dispatch({ type: 'ADD', prod });
    };
  };

  return (
    <Card id='cardDetail'>
      <CardMedia
        component="img"
        image={data.imagen}
        alt={data.titulo}
      />
      <CardContent id='cardContentDetail'>
        <Typography gutterBottom variant="h5" component="div">
          {data.titulo}
        </Typography>
        <Typography sx={{margin: '20px'}} variant="body2" color="text.secondary">
          {data.descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad en stock <span id='stock'>{data.stock}</span>
        </Typography>
        <ItemCount />
        <Typography gutterBottom variant="h5" component="div">
          ${data.precio}
        </Typography>
        <button onClick={addToCart} className='boton' id='agregar'>Añadir al carrito</button>
        <Link to={'/carrito'}><button className='boton'>Comprar</button></Link>
      </CardContent>
    </Card>
  );
}

export default DetailCardComponent;