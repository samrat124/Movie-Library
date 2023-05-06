import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const[inputs,setInputs]=useState({});
    const navigate=useNavigate();

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
  
    
    console.log(inputs);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
         
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
         
        fetch(`http://localhost:8000/movie/${id.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
          })
          .then(response => response.json())
          .then(data => {console.log(data);
            navigate('/')
        })
          .catch(error => console.error(error));
      }
  return (
    <div style={{marginTop:'80px',color:'white'}}>
        <form className='movieForm' onSubmit={handleSubmit}>
      <label>Enter Title:
      <input 
        type="text" 
        name="title" 
        defaultValue={state.title} 
        placeholder='Enter Title'
        onChange={handleChange}
      />
      </label>
       <br/>
      <label>Release Year:
        <input 
          type="number" 
          name="releaseYear" 
          defaultValue={state.releaseYear || ""} 
          placeholder='Enter Release Year'
          onChange={handleChange}
        />
        </label>
        <br/>
        <label>Director Name:
        <input 
          type="text" 
          name="Director" 
          defaultValue={state.Director || ""} 
          placeholder='Enter Director Name'
          onChange={handleChange}
        />
        </label>
        <br/>
        <label>Enter Genre:
        <input 
          type="text" 
          name="genre" 
          defaultValue={  ""} 
          onChange={handleChange}
          placeholder='Enter Genre'
        />
        </label>
        <br/>
        <label>Enter Poster:
        <input 
          type="text" 
          name="image" 
          defaultValue={state.image || ""} 
           placeholder='Enter Poster Url'
          onChange={handleChange}
        />
        </label>
        <br/>
        <input type="submit" />
    </form>
    </div>
  )
}

export default Edit