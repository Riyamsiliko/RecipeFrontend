import React from 'react'
import './Register.css'
import Registerpage from '../components/Registerpage';

export default function Register() {
  return (
    <div>
    <Registerpage/>   
    <form>
<div class="container">
<h1>Register Here</h1>
<p>Please fill in the details to create an account with us.</p>
<hr/>
<label for="email"><b>Enter Email</b></label>
<input type="text" placeholder="Enter Email" name="email"/>
<label for="pwd"><b>Password</b></label>
<input type="password" placeholder="Enter Password" name="pwd"/>
<hr/>
<p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
<button type="submit" class="registerbtn"><strong>Register</strong></button>
</div>
<div class="container signin">
<p>Already have an account? <a href="/Login">Sign in</a>.</p>
</div>
</form>
</div>
  )
}
