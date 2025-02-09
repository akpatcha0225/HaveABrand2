import React from 'react'
import './login.css'; 
import {useNavigate, Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
axios.defaults.withCredentials = true;


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pNum, setpNum] = useState('');
    const [location, setLocation] = useState('');
    const [cate, setCate] = useState('');

    const nav = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const Username = username;
      const Password = password;
      const Name = name;
      const Location = location;
      const Category = cate;
      const Email = email;
      const Phone_Number = pNum;
        axios.post("http://172.30.16.1:5000/", {Username,Password,Name,Location,Category, Email,Phone_Number}).then(response =>{

          nav("/home")
          console.log(response)
        }).catch(error => {
          alert('Error signing up. Please try again.');

          console.log(error)

        });
        
    }
    
  return (
    <div className="container">
        <h1 className="login-header">
        HaveABrand SignUp
      </h1>
        <form onSubmit={handleSubmit}>

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

          <input 
            className="username-js username" 
            type="text" 
            id="name" 
            placeholder="Business Name" 
            onChange={e=>setName(e.target.value)}
            required 
            />
        <input className="password-js password"  type = "email" 
        id = "new-email" placeholder = "Email"
        onChange={e=>setEmail(e.target.value)}

         required />
        <input className="password-js password" type = "text" id = "number" placeholder = "Phone Number" required
                    onChange={e=>setpNum(e.target.value)}

        />
        <input className="password-js password" type = "address" 
                    onChange={e=>setLocation(e.target.value)}

        id = "location" placeholder = "Location" required />
        <select className="password-js password" name="category"        onChange={e=>setCate(e.target.value)}
        >
          <option value="" defaultValue>Select Category</option>
          <option value="Retail">Retail</option>
          <option value="Food">Food</option>
          <option value="Health & Beauty">Health & Beauty</option>
          <option value="E-Commerce">E-Commerce</option>
          <option value="Technology">Technology</option>
        </select>
        <button type = "submit" className = "create-button-js createbutton">Create Account</button>

        </form>
        <Link to = "/login" style={{
          color:"#2B7553"
        }}>Already Have An Account? Sign In</Link>
    </div>
  )
}

export default SignUp