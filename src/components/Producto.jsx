import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavImg from '../img/me-gusta.png'
import NoFavImg from '../img/corazon.png'

export default function Producto({producto, agregarAFavoritos, eliminasDeFavoritos}) {

const [favorito, setFavorito] = useState(false)

function handleClick(){
  
    if(favorito){
        eliminasDeFavoritos(producto)
        setFavorito(false)
    }else {
        agregarAFavoritos(producto)
        setFavorito(true)

    }
    

}

  return (
    <div className='producto'>
      <Link to={`/producto/${producto.id} `}> <img src={producto.image} alt="" /></Link>
      <div className='info'>
        <p>{producto.title} </p>
        <mark>${producto.price} </mark>
      </div>
      {/* <img className='fav-icon' src={FavImg} alt="" /> */}
      {favorito ?
      <img className='fav-icon' src={NoFavImg} onClick={handleClick} />
        :
      <img className='fav-icon' src={FavImg} onClick={handleClick} />
      }
    </div>
  )
}
