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
                <div>Remeras</div>
                <div>Aca conseguis unas remeras tuki tuki</div>
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
                <div>Pantalones</div>
                <div>Aca conseguis unos pantalones tuki tuki</div>
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
                <div>Zapatillas</div>
                <div>Aca conseguis unas zapatillas tuki tuki</div>
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