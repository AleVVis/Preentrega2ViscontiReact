import React from 'react';
import { Box, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Contact = () => {
  return (
    <Box className='navbar' py={4} px={6} >
      <Box mx="auto" maxW="container.lg" textAlign="center">
        <Heading as="h2" size="lg" mb="2"color="white">
          Contacto
        </Heading>
        <Text mb="4" color="white">
          Si tienes alguna pregunta o consulta, no dudes en contactarnos.
        </Text>
        <ChakraLink
          as={RouterLink}
          to="/"
          color="white"
          bg="teal.700"
          borderRadius="md"
          padding="10px 20px"
          fontWeight="bold"
          _hover={{ bg: 'teal.800' }}
        >
          Ir al catálogo
        </ChakraLink>
      </Box>
    </Box>
  );
};

export default Contact;
