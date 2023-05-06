import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import AddMovies from '../Pages/AddMovies'
import Details from '../Pages/Details'
import Edit from '../Pages/Edit'

const Allroutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='AddMovie' element={<AddMovies/>}/>
        <Route path='/Details/:id' element={<Details/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
     </Routes>
  )
}

export default Allroutes