import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Box, Text, Button, Stack, VStack } from '@chakra-ui/react';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeProduct = (productId) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.precio * product.cantidad, 0);
  };

  const handleBuy = () => {
    // Implement logic for handling the purchase
    alert('Compra realizada');
    setCart([]);
  };

  return (
    <Box p="4" bg="gray.100">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Carrito de Compras
      </Text>
      <VStack spacing="4" align="stretch">
        {cart.map((product) => (
          <Box key={product.id} borderWidth="1px" p="4" bg="white">
            <Text fontSize="lg" fontWeight="bold">{product.nombre}</Text>
            <Text>Precio unitario: {product.precio}</Text>
            <Text>Cantidad: {product.cantidad}</Text>
            <Text>Total por producto: {product.precio * product.cantidad}</Text>
            <Button colorScheme="red" onClick={() => removeProduct(product.id)}>
              Cancelar Producto
            </Button>
          </Box>
        ))}
      </VStack>
      <Box mt="4">
        <Text fontWeight="bold">Total: {calculateTotalPrice()}</Text>
      </Box>
      <Stack mt="4" spacing="2" direction="row" align="center">
        <Button colorScheme="red" onClick={clearCart}>
          Borrar Carrito
        </Button>
        <Button colorScheme="teal" onClick={handleBuy}>
          Comprar
        </Button>
      </Stack>
    </Box>
  );
};

export default Cart;



