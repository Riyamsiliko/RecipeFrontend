import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import Register from './pages/Register';
import UserRecipe from './pages/UserRecipe';
import AddRecipe from './pages/AddRecipe';
import UpdateRecipe from './pages/UpdateRecipe';
import Homepage from './components/Homepage';
import Userpage from './components/Userpage';


function App() {
  return (
    <div>
<BrowserRouter>

  <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/Homepage' element={<Homepage/>}/>
  <Route path='/userpage' element={<Userpage/>}/>
   <Route path='/Recipe' element={<Recipe/>}/>
   <Route path='/Register' element={<Register/>}/>
   <Route path='/userRecipe' element={<UserRecipe/>}/>
   <Route path='/AddRecipe' element={<AddRecipe/>}/>
   <Route path='/UpdateRecipe/:id' element={<UpdateRecipe/>}/>
  </Routes>
</BrowserRouter>

      
    </div>
  );
}

export default App;
