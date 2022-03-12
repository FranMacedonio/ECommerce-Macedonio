import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const CardComponent = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={data.imagen}
          alt={data.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            En stock: {data.stock}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${data.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent;