import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Productos from './components/Productos'
import useProducto from './hooks/useProducto'

function App() {

  const {productos, favoritos, agregarAFavoritos, eliminarDeFavoritos} = useProducto()
 

  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Productos productos ={productos} eliminarDeFavoritos={eliminarDeFavoritos} agregarAFavoritos={agregarAFavoritos}/>} />
        <Route path='/favoritos' element={<Productos productos ={favoritos} eliminarDeFavoritos={eliminarDeFavoritos} agregarAFavoritos={agregarAFavoritos} />} />
      </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
