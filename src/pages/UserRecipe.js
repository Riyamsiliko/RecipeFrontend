import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Homepage from '../components/Homepage';

const UserRecipe = () => {

  const deletehandleRecipe = (id) => {
    const PopMessage = window.confirm("are you sure to delete recipe");
    if (PopMessage){
      axios.delete(`http://localhost:8080/api/v1/delete/${id}`)
      .then((res)=>{
        window.location.reload();
      
      })
      .catch((error) =>
        console.log(error));
      
    }
  };
  
  const [recipes, setRecipes] = useState([]);
  // kuvuta dta na kuupdate
  useEffect(()=>{
    fetchRecipe();

  }, []);


  const fetchRecipe = async() => {
    try{
      const response = await axios.get("http://localhost:8080/api/v1/recipe");
      setRecipes(response.data);
    }
    catch(error){
      console.log(error);
    }
  };

  
  return (
    <div>
    <Homepage/> 
          <table class="table">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Title</th>
                <th scope="col">Ingredients</th>
                <th scope="col">instructions</th>
                
              </tr>
            </thead>
            <tbody>
          {
            recipes.length> 0 ? (
              recipes.map((data, index) =>(
                <tr   key = {data.id}>
                <td>{index + 1}</td>
                <td>{data.title}</td>
                <td>{ data.ingredients}</td>
                <td>{data.instructions }</td> 
                 
                <td>
                  <button onClick={() => deletehandleRecipe(data.id)}>DeleteRecipe</button>
                </td> 
                <td>
                <Link to={`/UpdateRecipe/${data.id}`}><button>editRecipe</button></Link>
                </td> 
                </tr>
              ))
            ):(
              <tr>
                <td>
                  nodata available
                </td>
              </tr>
            )
          }
            </tbody>
          </table>
    </div>
     )
}

export default UserRecipe;
