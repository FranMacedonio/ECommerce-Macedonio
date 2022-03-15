import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase'
import { collection, query, where, getDocs } from 'firebase/firestore';
import CardComponent from '../Components/CardComponent';

const Marca = () => {
    const [productos, setProductos] = useState([]);
    const marca = useParams().marca;

    useEffect(() => {
        const getProductos = async () => {
            const q = query(
                collection(db, 'productos'),
                where('marca', '==', marca)
            );
            const array = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
                array.push({...doc.data(), id: doc.id});
            });
            setProductos(array);
        };
        getProductos();
    }, [marca]);


    if (marca === 'nike'){
        return (
            <div className='paginas'>
                <div id='nike'></div>
                <div className='productos'>
                    {productos.map( datos => {
                        return(
                            <div key={datos.id} className='producto'>
                            <Link to={`/detalles/${datos.id}`}><CardComponent data={datos} /></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    if (marca === 'adidas'){
        return (
            <div className='paginas'>
                <div id='adidas'></div>
                <div className='productos'>
                    {productos.map( datos => {
                        return(
                            <div key={datos.id} className='producto'>
                            <Link to={`/detalles/${datos.id}`}><CardComponent data={datos} /></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    if (marca === 'vans'){
        return (
            <div className='paginas'>
                <div id='vans'></div>
                <div className='productos'>
                    {productos.map( datos => {
                        return(
                            <div key={datos.id} className='producto'>
                            <Link to={`/detalles/${datos.id}`}><CardComponent data={datos} /></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Marca;