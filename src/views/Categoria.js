import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../firebase'
import { collection, query, where, getDocs } from 'firebase/firestore';
import CardComponent from '../Components/CardComponent';

const Categoria = () => {
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
        const getProductos = async () => {
            const q = query(
                collection(db, 'productos'),
                where('categoria', '==', categoria)
            );
            const array = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
                array.push({...doc.data(), id: doc.id});
            });
            setProductos(array);
        };
        getProductos();
    }, [categoria]);

    if (categoria === 'remeras'){
        return (
            <div className='paginas'>
                <h1>Remeras</h1>
                <h3>En N.A.V te ofrecemos remeras de alta calidad para que vayas contento por la vida</h3>
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
    if (categoria === 'pantalones'){
        return (
            <div className='paginas'>
                <h1>Pantalones</h1>
                <h3>N.A.V es tu tienda favorita a la hora de buscar pantalones con estilo</h3>
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
    if (categoria === 'zapatillas'){
        return (
            <div className='paginas'>
                <h1>Zapatillas</h1>
                <h3>Nos alegramos de que confies en N.A.V cuando se trata de comprar zapatillas</h3>
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

export default Categoria