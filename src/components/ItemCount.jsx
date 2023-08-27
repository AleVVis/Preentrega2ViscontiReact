import React, { useState, useContext } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const ItemCount = ({ initial, stock, producto }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
    console.log("Increment count:", count);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (count > 0) { // Verifica si la cantidad es mayor que 0
      // Creo un nuevo elemento con los detalles del producto y la cantidad
      const newItem = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: count,
        
      };

      // Llamo a la función addToCart del contexto
      addToCart(newItem);
      setCount(1); // Resetear el contador a 1 despues de agregar al carrito
      console.log("Item added to cart:", newItem);
    }
  };

  return (
    <Flex alignItems="center">
      <Button variant="outline" onClick={handleDecrement}>
        -
      </Button>
      <Text mx="4">{count}</Text>
      <Button variant="outline" onClick={handleIncrement}>
        +
      </Button>
      <Button colorScheme="teal" onClick={handleAddToCart}>
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;


