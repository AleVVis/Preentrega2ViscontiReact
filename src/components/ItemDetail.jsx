import React from 'react';
import { Text, Image, Badge, Box } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  return (
    <div>
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
            <ItemCount initial={1} stock={producto.stock} producto={producto}/>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;

