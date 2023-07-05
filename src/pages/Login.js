import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () =>{

  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validate()){
      //alert("Good Work");

      fetch("http://localhost:8080/login/id/"+username).then((res)=>{
        return res.json();
      }).then((resp)=>{
        console.log(resp);

        if(Object.keys(resp).length === 0){
          alert("Please enter valid username");
        }else{
          if(resp.password === password){
              //alert("success")
              //history.push('/dashboard');

              if(resp.user_role === 'customer'){
                //history.push('/user-dash');
                //alert("Customer");
                navigate('/Recipe');
              }
              if(resp.user_role === 'admin'){
                //alert("ADMIIN")
                 navigate('/userRecipe');
              }
              
          }else{
            alert("Please enter valid password");
          }
        }
      }).catch((err)=>{
        alert("Error"+err);
        //alert("SI SAHIHI")
        // toast.error("Incorrect cridentials ", {
        //   className: "toast-error",
        //   position: toast.POSITION.TOP_RIGHT,
        //   autoClose: 5000,
        // });
      });
    }
  }


  const validate = () =>{
    let result = true;

    if(username ==='' || username ===null){
      result = false;
      alert("Enter username");
    }

    if(password ==='' || password ===null){
      result = false;
      alert("Enter Password");
    }

    return result;
  }

    return(
        <div className="login-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
          type="text"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} id="password" />
          </div>
          <button type="submit">Login</button>
          <p>
          Does not have an account?<b><a href='/register'> Register here</a></b> 
        </p>
        
        </form>
      </div>

    );
}

export default Login;