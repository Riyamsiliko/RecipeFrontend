
import  './Login.css'
import './googleLogin.css'
import { Link } from 'react-router-dom';
import Register from './Register';
import UserRecipe from './UserRecipe';

export default function Login() {
  return (
    <div class="login-form">
  <form>
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
        <input type="email" placeholder="Email" autocomplete="nope"/>
      </div>
      <div class="input-field">
        <input type="password" placeholder="Password" autocomplete="new-password"/>
      </div>
      <a href="#" class="link">Forgot Your Password?</a>
    </div>
    <div class="action">
     <Link to={"/Register"}><button>Register</button></Link>
     <Link to={"/UserRecipe"}><button>Login</button></Link>
    </div>
  </form>
</div>
  )
}
