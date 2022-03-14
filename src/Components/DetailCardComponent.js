import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

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
        <Typography variant="body2" color="text.secondary">
          {data.descripcion}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${data.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cantidad en stock {data.stock}
        </Typography>
        <h1>ACA VA EL CONTADOR</h1>
      </CardContent>
    </Card>
  );
}

export default DetailCardComponent;