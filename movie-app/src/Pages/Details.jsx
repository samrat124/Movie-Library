import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'

const Details = () => {
    const[state,setState]=useState({});
    let id=useParams()
    console.log(id);
    let fetchData=async()=>{
        let res=await fetch(`http://localhost:8000/movie/${id.id}`);
        let data=await res.json();
        console.log(data)
        setState(data)
         
    }
     
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{marginTop:'80px',width:'100%'}}>
    <div className='detail-main' >
        <img style={{width:'50%',height:'60vh'}} src={state.image} alt="" />
       <div> <label>Title: <p>{state.title}</p></label>
        <label>Director: <p>{state.Director}</p></label>
        <label>Release Year: <p>{state.releaseYear}</p></label> </div>

    </div>
    </div>
  )
}

export default Details