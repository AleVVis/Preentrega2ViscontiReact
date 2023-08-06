import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'

{/* Hace un map con c/u de los elementos que trae productos.
por cada iteración que hace va a renderizar un componente nuevo */}
const ItemList = ({productos}) => {
  return (
    <>
    <Flex flexWrap="wrap" justifyContent="space-between" gap={20}>
    {productos.map ((p) => {
        return (
            <Item
            id={p.id}
            key={p.id}
            foto={p.foto}
            nombre={p.nombre}
            descripcion={p.descripcion}
            stock={p.stock} 
            />
        )
    })
    } 
    </Flex>
    </>
  )
}

export default ItemList