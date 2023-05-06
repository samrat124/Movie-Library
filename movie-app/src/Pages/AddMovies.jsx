import React,{useState} from 'react'
import './AddMovies.css'

const AddMovies = () => {
    const[inputs,setInputs]=useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
         
      }
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs)
         
        fetch("http://localhost:8000/movie", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }
  return (
    <div style={{marginTop:'80px',color:'white'}}>
        <form className='movieForm' onSubmit={handleSubmit}>
      <label>Enter Title:
      <input 
        type="text" 
        name="title" 
        value={inputs.title || ""} 
        placeholder='Enter Title'
        onChange={handleChange}
      />
      </label>
       <br/>
      <label>Release Year:
        <input 
          type="number" 
          name="releaseYear" 
          value={inputs.releaseYear || ""} 
          placeholder='Enter Release Year'
          onChange={handleChange}
        />
        </label>
        <br/>
        <label>Director Name:
        <input 
          type="text" 
          name="Director" 
          value={inputs.Director || ""} 
          placeholder='Enter Director Name'
          onChange={handleChange}
        />
        </label>
        <br/>
        <label>Enter Genre:
        <input 
          type="text" 
          name="genre" 
          value={inputs.genre || ""} 
          onChange={handleChange}
          placeholder='Enter Genre'
        />
        </label>
        <br/>
        <label>Enter Poster:
        <input 
          type="text" 
          name="image" 
          value={inputs.image || ""} 
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

export default AddMovies