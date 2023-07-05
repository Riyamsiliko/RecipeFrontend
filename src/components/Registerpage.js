import React from 'react'
import './Registerpage.css'
import { Link } from 'react-router-dom'

 function Registerpage() {
  return (
    <div>
       <nav class="navbar">
       <center>
    <div class="logo">LET'S CONNECT TO RECIPEHUB </div>
</center>
  
    <ul class="nav-links">

     
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

  
      {/* <div class="menu">

        <Link to={"Recipe"}><li>Recipes</li></Link>
        <Link to={"LoginOut"}><li>LogOut</li></Link>
      </div> */}
    </ul>
  </nav>
    </div>
  )
}
export default Registerpage