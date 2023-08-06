import React from 'react';
import { Box, Flex, Text, Button, Image, } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ nombre, descripcion, foto, id, category }) => {
  console.log(nombre)
  return (
    <>
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="300px" h="400px" bg="white">
      {/* Imagen */}
      <Flex
        h="200px"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Image src={foto} alt={`foto de ${nombre}`} objectFit="cover" />
      </Flex>

      {/* Nombre de la piedra */}
      <Box p="4" textAlign="center">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {nombre}
        </Text>
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {category}
        </Text>
        <Text fontSize="xl" mb="2">
          {descripcion}
        </Text>

        {/* Botón Detalles */}
        <Button colorScheme="teal"><Link to={`/item/${id}`}>
        Detalles</Link>
        </Button>
      </Box>
    </Box>
    </>
  );
};

export default Item;
