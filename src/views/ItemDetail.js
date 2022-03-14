import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, documentId } from 'firebase/firestore';
import { db } from '../firebase';
import DetailCardComponent from '../Components/DetailCardComponent';

const ItemDetail = () => {
  const [productos, setProductos] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const getProductos = async () => {
      const q = query(
        collection(db, 'productos'),
        where(documentId(), '==', id)
      );
      const array = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach( doc => {
        array.push({...doc.data(), id: doc.id});
      });
      setProductos(array);
    };
    getProductos();
  }, [id]);

  return (
    <>
      {productos.map( datos => {
        return(
          <div className='detailProducto' key={datos.id}>
            <DetailCardComponent data={datos} />
          </div>
        );
      })}
    </>
  )
}

export default ItemDetail