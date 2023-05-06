import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../Redux/Action';
import MovieCard from '../Components/MovieCard/MovieCard';
import Navbar from '../Components/Navbar/Navbar';
import PosterCarousel from '../Components/PosterCarousel/PosterCarousel';
import './Home.css'
 


const Home = () => {
    const[state,setState]=useState([]);
    const[type,setType]=useState('')
    const dispatch=useDispatch()
    const data=useSelector((e)=>e.movies)
    const searchType=useSelector((e)=>e.search);
    const SearchInput=useSelector((e)=>e.searchInput)
    const filterData=useSelector((e)=>e.filter)
    console.log(searchType);
    console.log(SearchInput)
    
    let fetchData=async()=>{
        let res=await fetch("http://localhost:8000/movie");
        let data=await res.json();
        console.log(data)
         
        movieAction(data,dispatch)
    }
     
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{marginTop:'80px'}}>
         
        <div className="posterDiv"><PosterCarousel/></div>
        <div className='displayMovies'>
        {
            data.map((ele,index)=>{
                return <MovieCard key={index} {...ele}/>
            })
        }
        </div>
    </div>
  )
}

export default Home