import React, { useState } from 'react'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { SearchInput, filterData, movieAction, typeOfSearch } from '../../Redux/Action';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const[type,setType]=useState("");
  const[query,setQuery]=useState("");
  const dispatch=useDispatch();
  const data=useSelector((e)=>e.movies)
  return (
    <div className='Navbar-main'>
      <Link style={{textDecoration:'none'}} to='/'><h2 className='navHead'>Movie Library</h2></Link>
      <div className='searchDiv'>
         <input className='searchBox' type="text" placeholder='Search...' onChange={(e)=>{
          SearchInput(e.target.value,dispatch);
          setQuery(e.target.value);
         }} />
         <button  onClick={(e)=>{
          e.preventDefault()
           
           typeOfSearch(e.target.value,dispatch);
           movieAction(data.filter((e)=>{
            
             if(e.Director.toLowerCase().includes(query.toLowerCase())){
                return true;
            }
            else if(e.releaseYear.toLowerCase().includes(query.toLowerCase())){
              return true;
          }
          else if(e.title.toLowerCase().includes(query.toLowerCase())){
            return true;
        }
          
            return false
           }),dispatch)
           
         }}>
           Search
         </button>
          
         </div>
         <div>
          <Link style={{color:'white',textDecoration:'none'}} to='/AddMovie'>ADD NEW MOVIE</Link>
         </div>
          
    </div>
  )
}

export default Navbar