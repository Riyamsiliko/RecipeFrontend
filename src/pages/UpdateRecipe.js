import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Homepage from '../components/Homepage';

function UpdateRecipe() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/v1/recipe/${id}`);
          setData(response.data);
        } catch (error) {
          console.log(error)
        }
      };
  
      fetchData();
    }, [id]);
  
    function handleSubmit(event) {
      event.preventDefault();
      axios.put(`http://localhost:8080/api/v1/recipe/${id}`, data);
      navigate("/UserRecipe");
    }

  return (
    <div>
    <Homepage/> 
   <form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" value={data.title} onChange={event => setData({...data,title:event.target.value})}/>
    </div>
    <div class="form-group">
      <label for="ingredients">Ingredients:</label>
      <textarea id="ingredients" name="ingredients"  value={data.ingredients} onChange={event => setData({...data,ingredientse:event.target.value})} rows="6"></textarea>
    </div>
    <div class="form-group">
      <label for="instructions">Instructions:</label>
      <textarea id="instructions" name="instructions"   value={data.instructions} onChange={event => setData({...data,instructions:event.target.value})}  rows="10"></textarea>
    </div>
    <button type="submit">Add Recipe</button>
  </form>      
    </div>
  )
}
export default UpdateRecipe;