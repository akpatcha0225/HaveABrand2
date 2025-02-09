import './login.css'; 
import {useNavigate, Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;


const Login = () => {
  const[username, setUsername] = useState('')
  const[password,setPassword] = useState('')

  const nav = useNavigate();
    const handleSubmit = (event) => {
      const Username = username;
      const Password = password;
      event.preventDefault();
        axios.post("http://172.30.16.1:5000/login", {Username,Password}).then(response =>{
          nav("/home")
          console.log(response)
        }).catch(error=> {
          console.log(error)

        });
        
    }
  return (
    <div className="container">
      <h1 className="login-header">
        HaveABrand Login
      </h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <input 
          className="username-js username" 
          type="text" 
          id="username" 
          placeholder="Username" 
          onChange={e=>setUsername(e.target.value)}
          required 
        />
        <input 
          className="password-js password" 
          type="password" 
          id="password" 
          placeholder="Password" 
          onChange={e=>setPassword(e.target.value)}

          required 
        />
        <button type="submit" className="create-button-js createbutton">Login</button>
      </form>
      <Link to = "/signup" style={{
          color:"#2B7553"
        }}>New User? Create An Account</Link>
    </div>
  );
};

export default Login;