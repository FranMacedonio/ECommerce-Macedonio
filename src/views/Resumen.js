import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import ResumenItems from '../Components/ResumenItems';

const Resumen = () => {
    const [historial, setHistorial] = useState([]);
    const [codigo, setCodigo] = useState('');
    const [resumen, setResumen] = useState({});

    useEffect(() => {
        const getHistorial = async () => {
            const array = [];
            const q = query(collection(db, 'compra'));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach( doc => {
                array.push({...doc.data(), id: doc.id});
            });
            setHistorial(array);
        };
        getHistorial();
    }, []);

    const onChange = e => {
        setCodigo(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        if(historial.find( obj => obj.id === codigo)){
            setResumen(historial.find( obj => obj.id === codigo));
        }else{
            setResumen('no existe')
        }
    };

    const resumenDisplay = () => {
        if(resumen === {}){
            return null;
        }else if(resumen === 'no existe'){
            return <p>No existe resumen</p>
        }else if(resumen !== {} && resumen.productos){
            const precioTotal = resumen.productos.reduce((total, b) => total + b.precio * b.cantidad, 0);
            return(
                <table className='resumenTable'>
                    <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {resumen.productos.map( prod => {
                        return (
                        <ResumenItems key={prod.id} producto={prod}/>
                        );
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><strong>Pagaste:</strong></td>
                        <td><strong>${precioTotal}</strong></td>
                    </tr>
                    </tfoot>
                </table>
            );
        }
    };

    return (
        <div id='resumen'>
            <h2>Pega tu codigo de compra para ver el resumen</h2>
            <form className='Form' onSubmit={onSubmit}>
				<TextField
					placeholder='Buscar Resumen'
					variant='outlined'
					value={codigo}
					onChange={onChange}
				/>
				<button className='limpiar'>Buscar</button>
			</form>
            {resumenDisplay()}
        </div>
    );
};

export default Resumen;