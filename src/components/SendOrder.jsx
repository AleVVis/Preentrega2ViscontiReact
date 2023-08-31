import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const SendOrder = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ordersRef = collection(db, 'ordersCollection');
      const newOrderRef = await addDoc(ordersRef, {
        nombre,
        email,
      });

      const newOrderId = newOrderRef.id;
      setOrderId(newOrderId);
      setOrderSubmitted(true);
    } catch (error) {
      console.error('Error al enviar la orden:', error);
    }
  };

  return (
    <Box p="4">
      <Heading as="h1" textAlign="center" mb="4">
        Rellena este formulario para completar la Orden de Compra. El sistema te devolverá el número de tu Orden de Compra
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb="4">
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </FormControl>

        <FormControl mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        {orderSubmitted && (
          <FormControl>
            <FormLabel>Número de Orden de Compra</FormLabel>
            <Input type="text" value={orderId} readOnly />
          </FormControl>
        )}

        {!orderSubmitted && (
          <Button type="submit" colorScheme="teal" mt="4">
            Enviar Orden
          </Button>
        )}
      </form>
    </Box>
  );
};

export default SendOrder;
