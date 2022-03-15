import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const ItemCount = () => {
    const [counter, setCounter] = useState(0);
    const sumarItem = () => {
        const stock = parseInt(document.querySelector('#stock').textContent);
        if( counter < stock){
            setCounter(counter + 1);
        }
    };
    const restarItem = () => {
        if( counter > 0){
            setCounter(counter - 1);
        }
    };
    // const cero = () => {
    //     const agregar = document.querySelector('#agregar');

    // }

    return (
    <div id='contadorContainer'>
        <button className='rojo' onClick={restarItem}><RemoveIcon /></button>
        <span id='contador'>{counter}</span>
        <button className='azul' onClick={sumarItem}><AddIcon /></button>
    </div>
    );
};

export default ItemCount;