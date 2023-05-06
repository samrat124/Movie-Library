import React from 'react'
import ReactStars from 'react-stars';
import './MovieCard.css'
import {Link, useNavigate} from 'react-router-dom'
import { movieAction } from '../../Redux/Action';
import { useDispatch } from 'react-redux';

const MovieCard = (props) => {
    const dispatch=useDispatch();
    let navigate=useNavigate()
    
      
     let id=props.id
     console.log(id);

     let deleteMovie=async(e)=>{
      e.preventDefault();
      try {
        const response = await fetch(`http://localhost:8000/movie/${id}`, {
          method: 'DELETE',
        }) 

        const data=await response.json();
         movieAction(data,dispatch) 
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        
        console.log(data);  
      } catch (error) {
        console.error('Error:', error);
      }
     }


  return (
    <Link style={{textDecoration:'none'}} to={`Details/${id}`}>
    <div>
        <div style={{color:'black'}}>
            <img style={{width:'100%',height:'300px'}} src={props.image} />
            <h2>{props.title}</h2>
            <div >
                <label className='label-tag'>
                <p>Release Year : </p>
                <p>{props.releaseYear}</p>
                </label>
                <label className='label-tag'>
                <p>Director : </p>
                <p>{props.Director}</p>
                </label>
            <div className='btnDiv'> <button onClick={deleteMovie}>Delete</button> <button onClick={(e)=>{
                e.preventDefault();
              navigate(`/edit/${id}`);
            }}>Edit</button></div>
            </div>
            
              
                
        </div>
    </div>
    </Link>
  )
}

export default MovieCard