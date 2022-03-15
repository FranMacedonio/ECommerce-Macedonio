import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const MenuProductos = ({opcion}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (opcion === 'productos'){
    return (
      <>
        <Button
          id="basic-button"
          className='botonExit'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Productos
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link to={'/categoria/remeras'}><MenuItem onClick={handleClose}>Remeras</MenuItem></Link>
          <Link to={'/categoria/pantalones'}><MenuItem onClick={handleClose}>Pantalones</MenuItem></Link>
          <Link to={'/categoria/zapatillas'}><MenuItem onClick={handleClose}>Zapatillas</MenuItem></Link>
        </Menu>
      </>
    );
  }

  if (opcion === 'marcas'){
    return (
      <>
        <Button
          id="basic-button"
          className='botonExit'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Marcas
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <Link to={'/marca/nike'}><MenuItem onClick={handleClose}>Nike</MenuItem></Link>
          <Link to={'/marca/adidas'}><MenuItem onClick={handleClose}>Adidas</MenuItem></Link>
          <Link to={'/marca/vans'}><MenuItem onClick={handleClose}>Vans</MenuItem></Link>
        </Menu>
      </>
    );
  }
}

export default MenuProductos;