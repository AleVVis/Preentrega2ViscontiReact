import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Box, Text, Button, Stack, VStack } from '@chakra-ui/react';
import SendOrder from './SendOrder'; // Asegúrate de importar el componente SendOrder correctamente

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // Estado para controlar si se ha realizado la orden

  const handleRemoveProduct = (productId) => {
    console.log('Removing product with ID:', productId);
    removeFromCart(productId);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.precio * product.cantidad, 0);
  };

  const handleBuy = () => {
    // Implementa lógica para procesar la compra aquí
    setIsOrderPlaced(true); // Establece el estado para mostrar el componente SendOrder
    clearCart();
  };

  return (
    <Box p="4" bg="gray.100">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Carrito de Compras
      </Text>
      {cart.length > 0 ? (
        <VStack spacing="4" align="stretch">
          {cart.map((product) => (
            <Box key={product.id} borderWidth="1px" p="4" bg="white">
              <Text fontSize="lg" fontWeight="bold">{product.nombre}</Text>
              <Text>ID: {product.id}</Text>
              <Text>Precio unitario: {product.precio}</Text>
              <Text>Cantidad: {product.cantidad}</Text>
              <Text>Total por producto: {product.precio * product.cantidad}</Text>
              <Button colorScheme="red" onClick={() => handleRemoveProduct(product.id)}>
                Cancelar Producto
              </Button>
            </Box>
          ))}
        </VStack>
      ) : (
        <VStack spacing="4" align="stretch">
          <Text>No hay productos en el carrito</Text>
          <Link to="/category/all">
            <Button colorScheme="teal">Ir al catálogo</Button>
          </Link>
        </VStack>
      )}
      {cart.length > 0 && !isOrderPlaced ? (
        <Stack mt="4" spacing="2" direction="row" align="center">
          <Button colorScheme="red" onClick={clearCart}>
            Borrar Carrito
          </Button>
          <Button colorScheme="teal" onClick={handleBuy}>
            Comprar
          </Button>
        </Stack>
      ) : null}
      {isOrderPlaced && <SendOrder orderId="ID_DE_LA_ORDEN_AQUÍ" />} {/* Pasa el ID de la orden */}
      <Box mt="4">
        <Text fontWeight="bold">Total: {calculateTotalPrice()}</Text>
      </Box>
    </Box>
  );
};

export default Cart;

