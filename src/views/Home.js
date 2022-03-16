import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const Home = () => {
  
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const array = [];
      const q = query(collection(db, 'productos'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach( doc => {
        array.push({...doc.data(), id: doc.id});
      });
      setProductos(array);
    };
    getProductos();  
  }, []);

  return (
    <div id='homeContainer'>
      <div id='homeImg'></div>
      <div className='homeProds'>
        <div className='imgContainer'>
          <img className='imgHomeProds' src='https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/MA_00658277_vwlk3l.jpg' alt='Niño patineta'/>
          <div className="overlay">
            <div className="text">
              <h2>Remeras</h2>
              <p>En N.A.V te ofrecemos las mejores remeras para tu dia a dia.</p>
            </div>
          </div>
        </div>
        { productos.length === 0 ? <div style={{width: '400px'}}></div> : <Link to={'/categoria/remeras'}><img className='imagenHome' alt='remera' src={productos.find( producto => producto.categoria === 'remeras').imagen} /></Link>}
      </div>
      <div className='homeProds'>
        { productos.length === 0 ? <div style={{width: '400px'}}></div> : <Link to={'/categoria/pantalones'}><img className='imagenHome' alt='pantalon' src={productos.find( producto => producto.categoria === 'pantalones').imagen} /></Link>}
        <div className='imgContainer'>
          <img className='imgHomeProds' src='https://c.stocksy.com/a/fG0800/z9/1907657.jpg' alt='Niño patineta'/>
          <div className="overlay">
            <div className="text">
              <h2>Pantalones</h2>
              <p>En N.A.V te aseguramos la mejor calidad para que vayas con estilo por la vida.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='homeProds'>
        <div className='imgContainer'>
          <img className='imgHomeProds' src='https://everythingbeaches.com/wp-content/uploads/2020/12/a-man-bodyboarding-on-the-sea.jpg' alt='Niño patineta'/>
          <div className="overlay">
            <div className="text">
              <h2>Zapatillas</h2>
              <p>N.A.V sabe lo que necesitas para caminar con comodidad.</p>
            </div>
          </div>
        </div>
        { productos.length === 0 ? <div style={{width: '400px'}}></div> : <Link to={'/categoria/zapatillas'}><img className='imagenHome' alt='zapatilla' src={productos.find( producto => producto.categoria === 'zapatillas').imagen} /></Link>}
      </div>
    </div>
  )
}

export default Home