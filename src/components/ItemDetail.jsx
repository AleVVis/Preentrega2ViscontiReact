import React from 'react';
import {useParams, Link} from 'react-router-dom';
import { Text, Image, Badge, Box } from '@chakra-ui/react';
import ItemCount from './ItemCount';


 {/* El ItemDetail recibe los productos y recibe los parámetros (el useParams) y hace un filtrado */}
const ItemDetail = ({productos}) => {
  const {id} = useParams();

  const productosFiltrados = productos.filter((producto)=> producto.id == id)  
  {/*el == es doble porque compara valor*/}

  
   {/* Agarra los productos filtrados y hace el map y muestra una tarjeta
  aunque es una sola tarjeta, podría haber varias con el mismo id. x eso el map */}
  return (
    <div>
      {productosFiltrados.map((p)=> {
        return (
          <div key={p.id}>


<Box borderWidth="1px" borderRadius="lg" overflow="hidden" maxW="md">
      {/* Imagen */}
      <Image src={p.foto} alt={p.nombre} h="200px" objectFit="cover" />

      {/* Nombre de la piedra */}
      <Box p="4">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {p.nombre}
        </Text>

        {/* Descripción */}
        <Text fontSize="md" mb="2">
          {p.descripcion}
        </Text>

        {/* Contador de stock */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Badge colorScheme="green">En stock:{p.stock} unidades</Badge>
        </Box>

         {/* ItemCount */}
         <Box display="flex" justifyContent="space-between" alignItems="center">
          <ItemCount />
        </Box>
      </Box>
    </Box>


        </div>    
        )
      })}
    </div>
  )
}

export default ItemDetail