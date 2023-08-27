import React from 'react';
import { useParams } from 'react-router-dom';
import { Text, Image, Badge, Box } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const productosFiltrados = productos.filter((producto) => producto.id == id);

  return (
    <div>
      {productosFiltrados.map((p) => {
        return (
          <div key={p.id}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="md">
              <Image src={p.foto} alt={p.nombre} h="200px" objectFit="cover" />

              <Box p="4">
                <Text fontSize="xl" fontWeight="bold" mb="2">
                  {p.nombre}
                </Text>

                <Text fontSize="md" mb="2">
                  {p.descripcion}
                </Text>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Badge colorScheme="green">En stock: {p.stock} unidades</Badge>
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg" fontWeight="bold">
                    Precio: ${p.precio}
                  </Text>
                </Box>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <ItemCount initial={1} stock={p.stock} producto={p}/>
                </Box>
              </Box>
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
