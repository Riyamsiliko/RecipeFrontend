import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

 function Homepage() {
  const openPDF = () => {
    window.open('/PDF/report.pdf', '_blank');
  };
  return (
    <div>
       <nav class="navbar">
   
    <div class="logo">ADMIN</div>

  
    <ul class="nav-links">

     
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

  
      <div class="menu">

      {/* <li onClick={openPDF}>Report</li> */}
        <Link to={"/UserRecipe"}><li>Recipes</li></Link>
        <Link to={"/AddRecipe"}><li>AddRecipe</li></Link>
      </div>
    </ul>
  </nav>
    </div>
  )
}
export default Homepage