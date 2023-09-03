import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductosPorId } from '../servicios/productoService'
import Producto from './Producto';

export default function Detalle() {

    const[producto, setProducto] = useState({})

const {id} = useParams()

useEffect(() => {
    obtenerProductosPorId(id).then(data => {
        setProducto(data)
    })
}, [id])

  return (
    <div className='detalle'>
      <img src={producto.image} alt=''/>
      <div>
        <h3>{producto.tittle}</h3>
        <blockquote>{producto.description}</blockquote>
        <mark>${producto.price}</mark>
      </div>
    </div>
  )
}
