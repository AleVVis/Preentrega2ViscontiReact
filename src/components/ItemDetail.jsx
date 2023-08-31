import React from 'react';
import { Text, Image, Badge, Box, Link } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { Link as RouterLink } from 'react-router-dom';
import { Center, VStack } from '@chakra-ui/react';

const ItemDetail = ({ producto }) => {
  return (
    <Center height="90vh">
      <VStack spacing="8">
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="md">
          <Image src={producto.foto} alt={producto.nombre} h="200px" objectFit="cover" />

          <Box p="4">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              {producto.nombre}
            </Text>

            <Text fontSize="md" mb="2">
              {producto.descripcion}
            </Text>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Badge colorScheme="green">En stock: {producto.stock} unidades</Badge>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">
                Precio: ${producto.precio}
              </Text>
            </Box>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <ItemCount initial={1} stock={producto.stock} producto={producto} />
            </Box>
          </Box>
        </Box>
        <Link
          as={RouterLink}
          to="/category/category"
          color="white"
          bg="yellow.500"
          borderRadius="md"
          padding="10px 20px"
          fontWeight="bold"
          _hover={{ bg: 'teal.600' }}
        >
          Regresar al catálogo
        </Link>
      </VStack>
    </Center>
  );
};

export default ItemDetail;
