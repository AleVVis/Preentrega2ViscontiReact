import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, 'PIEDRAS');
    let q = productosCollection;

    if (category) {
      q = query(productosCollection, where('category', '==', category));
    }

    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [category]);

  console.log('Productos:', productos); // Muestra los productos en la consola

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
