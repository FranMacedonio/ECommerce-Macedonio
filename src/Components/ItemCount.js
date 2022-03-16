import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const agregar = document.querySelector('#agregar');
        agregar.addEventListener('click', () => {
            agregar.disabled = true;
            setTimeout(() => {
                setCounter(0);
                agregar.disabled = false;
            }, 200)
        });
    }, []);

    return (
    <div id='contadorContainer'>
        <button className='rojo' onClick={restarItem}><RemoveIcon /></button>
        <span id='contador'>{counter}</span>
        <button className='azul' onClick={sumarItem}><AddIcon /></button>
    </div>
    );
};

export default ItemCount;