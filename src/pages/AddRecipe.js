import React from 'react'
import {useState} from 'react';
import  './AddRecipe.css'
import axios from 'axios';
import Homepage from '../components/Homepage';
import {useNavigate} from 'react-router-dom';

function AddRecipe() {
const[inputTitle, setTitle] = useState('');
const[inputIngredients, setIngredients] = useState('');
const[inputInstructions, setInstructions] = useState('');
const navigate =useNavigate();

const handleSubmit = (event) => {
  event.preventDefault();
  const requestdata = {
    title:inputTitle,
    ingredients:inputIngredients,
    instructions:inputInstructions,
  };
  axios.post('http://localhost:8080/api/v1/add',requestdata).then(response =>{
    console.log(response.data);
    navigate("/UserRecipe");
  }).catch(error => {
    console.error(error);
  })
}

  return (
    <div>
    <Homepage/> 
   <form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" value={inputTitle} onChange={event => setTitle(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="ingredients">Ingredients:</label>
      <textarea id="ingredients" name="ingredients" value={inputIngredients} onChange={event => setIngredients(event.target.value)} rows="6"></textarea>
    </div>
    <div class="form-group">
      <label for="instructions">Instructions:</label>
      <textarea id="instructions" name="instructions"  value={inputInstructions} onChange={event => setInstructions(event.target.value)}  rows="10"></textarea>
    </div>
    <button type="submit">Add Recipe</button>
  </form>      
    </div>
  )
}
export default AddRecipe;
