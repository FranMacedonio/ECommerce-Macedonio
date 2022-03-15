import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartItem = ({producto, index, remove}) => {
  return (
    <tr>
        <td><img src={producto.imagen} alt={producto.titulo}/></td>
        <td>{producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>{producto.cantidad}</td>
        <td>${producto.precio * producto.cantidad}</td>
        <td onClick={() => remove(index)}><DeleteOutlineOutlinedIcon id='borrar' /></td>
    </tr>
  );
};

export default CartItem;