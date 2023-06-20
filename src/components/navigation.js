import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <body>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <div className="wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">Lets connect</a></li>
        </ul>
      </div>
      <div className="content">
        <div className="title">Navigation Bar</div>
        <p></p>
      </div>
    </body>
  );
}

export default NavigationBar;