import { Box, Flex, Text, IconButton, Badge, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import '../index.css';

const CartWidget = () => {
  return (
    <Box>
          <IconButton
            icon={<FaShoppingCart />}
            variant="ghost"
            colorScheme="white"
            aria-label="Carrito de compras"
          />
          <Badge colorScheme="red" position="relative" top="-15px" right="-10px">
            3
          </Badge>
        </Box>
  )
}

export default CartWidget