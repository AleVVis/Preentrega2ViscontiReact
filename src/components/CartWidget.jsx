import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge, Box, IconButton } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const cartTotalQuantity = cart.reduce((total, item) => total + item.cantidad, 0);

  return (
    <Box>
      <IconButton
        icon={<FaShoppingCart />}
        variant="ghost"
        colorScheme="white"
        aria-label="Carrito de compras"
      />
      <Badge colorScheme="red" position="relative" top="-15px" right="-10px">
        {cartTotalQuantity}
      </Badge>
    </Box>
  );
};

export default CartWidget;
