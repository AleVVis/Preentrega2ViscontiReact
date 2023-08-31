import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    console.log('ID from useParams:', id); 
    const db = getFirestore();
    const itemDocRef = doc(db, 'PIEDRAS', id); 

    getDoc(itemDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const productoData = docSnapshot.data();
          setProducto(productoData);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.error('Error fetching document:', error);
      });
  }, [id]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
