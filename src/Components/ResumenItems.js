import React from 'react';

const ResumenItems = ({producto}) => {
  return (
    <tr>
        <td><img src={producto.imagen} alt={producto.titulo}/></td>
        <td>{producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>{producto.cantidad}</td>
        <td>${producto.precio * producto.cantidad}</td>
    </tr>
  );
};

export default ResumenItems;