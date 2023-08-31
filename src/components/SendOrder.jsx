import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const SendOrder = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false); // State to track if the order is submitted

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Agregar los datos al Firestore
      const ordersRef = collection(db, 'ordersCollection');
      const newOrderRef = await addDoc(ordersRef, {
        nombre,
        email,
      });

      // Obtener el ID de la orden recién creada
      const newOrderId = newOrderRef.id;

      // Actualizar el estado del ID de la orden
      setOrderId(newOrderId);

      // Actualizar el estado para mostrar el ID y marcar la orden como enviada
      setOrderSubmitted(true);
    } catch (error) {
      console.error('Error al enviar la orden:', error);
    }
  };

  return (
    <Box>
      <p>Rellena este Form para completar la Orden de Compra. El sistema te devolverá un ID</p>
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

        {/* Mostrar el ID de la orden si la orden se ha enviado */}
        {orderSubmitted && (
          <FormControl>
            <FormLabel>Order ID</FormLabel>
            <Input type="text" value={orderId} readOnly />
          </FormControl>
        )}

        <Button type="submit" colorScheme="teal" mt="4">
          Enviar Orden
        </Button>
      </form>
    </Box>
  );
};

export default SendOrder;

                                        