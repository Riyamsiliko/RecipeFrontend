import React from 'react'
import './userpage.css'
import { Link } from 'react-router-dom'

 function Userpage() {
  return (
    <div>
       <nav class="navbar">
   
    <div class="logo"> RecipeHubMember </div>

  
    <ul class="nav-links">

     
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

  
      <div class="menu">

      <Link to={"/UserRecipe"}><li>Recipes</li></Link>
        {/* <Link to={"LoginOut"}><li>LogOut</li></Link> */}
      </div>
    </ul>
  </nav>
    </div>
  )
}
export default Userpage;