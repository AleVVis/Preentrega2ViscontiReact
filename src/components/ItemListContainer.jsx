import React from 'react';
import ItemList from './ItemList';
import { Flex } from '@chakra-ui/react';
import piedraDiamanteImage from '../assets/diamante-150x150.jpg';
import piedraEsmeraldaImage from '../assets/esmeralda.jpg';
import piedraAmazonitaImage from '../assets/Amazonita-pura-200x133.jpg';
import piedraZafiroImage from '../assets/zafiro-azul-200x133.jpg';
import piedraAgataImage from '../assets/agata.jpg';
import piedraOpaloImage from '../assets/opalo.jpg';
import piedraCalcitaImage from '../assets/calcita.jpg';
import piedraMalaquitaImage from '../assets/malaquita-200x133.jpg';
import piedraCristaldeRocaImage from '../assets/CristaldeRoca.jpg';
import piedraTopacioImage from '../assets/topacio.jpg';
import { useParams} from 'react-router-dom';


const ItemListContainer = () => {
  const {category}= useParams()
  {/* Productos moqueados */}
  const productos = [
    {
      id: 1,
      nombre: 'Diamante',
      descripcion: 'Diamante pulido de alta calidad',
      stock: 10,
      foto: piedraDiamanteImage,
      category: "ppreciosas",
      precio: 1000
    },
    {
      id: 2,
      nombre: 'Esmeralda',
      descripcion: 'Famosa debido a su hermoso color verde',
      stock: 5,
      foto: piedraEsmeraldaImage,
      category: "ppreciosas",
      precio: 2000
    },
    {
      id: 3,
      nombre: 'Amazonita',
      descripcion: 'Amazonita pura, perfecto para decoración',
      stock: 15,
      foto: piedraAmazonitaImage,
      category: "ppreciosas",
      precio: 3000
    },
    {
      id: 4,
      nombre: 'Zafiro',
      descripcion: 'Resistencia, durabilidad y color',
      stock: 8,
      foto: piedraZafiroImage,
      category: "ppreciosas",
      precio: 4000
    },
    {
      id: 5,
      nombre: 'Agata',
      descripcion: 'Es una roca que aporta valor y confianza.',
      stock: 3,
      foto: piedraAgataImage,
      category: "psemipreciosas",
      precio: 500
    },
    {
      id: 6,
      nombre: 'Calcita',
      descripcion: 'Ideal para tallar esculturas y decoración',
      stock: 12,
      foto: piedraCalcitaImage,
      category: "psemipreciosas",
      precio: 600
    },
    {
      id: 7,
      nombre: 'Ópalo',
      descripcion: 'Ópalo con hermoso juego de colores',
      stock: 20,
      foto: piedraOpaloImage,
      category: "psemipreciosas",
      precio: 700
    },
    {
      id: 8,
      nombre: 'Malaquita',
      descripcion: 'Decoración, artesanía o joyería. ',
      stock: 6,
      foto: piedraMalaquitaImage,
      category: "psemipreciosas",
      precio: 800
    },
    {
      id: 9,
      nombre: 'Cristal de Roca',
      descripcion: 'Cristal de roca transparente, excelente claridad',
      stock: 9,
      foto: piedraCristaldeRocaImage,
      category: "psemipreciosas",
      precio: 900
    },
    {
      id: 10,
      nombre: 'Topacio',
      descripcion: 'Topacio genuino, variedad de colores disponibles',
      stock: 7,
      foto: piedraTopacioImage,
      category: "psemipreciosas",
      precio: 100
    },
  ];
  
  
{/* Me traigo los productos con una promesa */}
  const getProductos = new Promise ((resolve, reject)=> {
    if (productos.length >0) {
      setTimeout(() => {
        resolve(productos)
      }, 2000)
    }else{
      reject(new Error("No hay datos"))
    }
  })

  getProductos
  .then((res)=> {
    console.log (res)
  })
  .catch ((error)=> {
    console.log(error)
  })

  {/* Filtro los productos por categoría */}
  const productosFiltrados = productos.filter((producto)=> producto.category === category)

  return (
    <>
    

{/* le paso info a ItemList mediante props.  se llama productos y tiene los productosFiltrados */}
    <Flex className='item-list-container'>
      <ItemList 
      productos={productosFiltrados}
      />
    </Flex>
 
  </>
  )
}

export default ItemListContainer