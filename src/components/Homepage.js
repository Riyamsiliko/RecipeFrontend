import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

 function Homepage() {
  return (
    <div>
       <nav class="navbar">
   
    <div class="logo">RecipeHub</div>

  
    <ul class="nav-links">

     
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

  
      <div class="menu">

      <Link to={"Home"}><li>Home</li></Link>
        <Link to={"recipe"}><li>Recipes</li></Link>
        <Link to={"Login"}><li>Let's Connect</li></Link>
      </div>
    </ul>
  </nav>
    </div>
  )
}
export default Homepage