import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from './ItemCount';

const DetailCardComponent = ({data}) => {
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
        <button id='agregar'>Añadir al carrito</button>
      </CardContent>
    </Card>
  );
}

export default DetailCardComponent;