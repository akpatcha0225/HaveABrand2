import React from 'react'
import axios from 'axios'
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import User from "../components /User"
import Header from "../components /Header"



axios.defaults.withCredentials = true;


const Ecom = () => {

  const[ids, setIds] = useState([])

  useEffect (()=>{
    axios.get("http://172.30.16.1:5000/users/ecom", {withCredentials:true}).then((response) =>{
      setIds(response.data.message);
    }).catch((error) => {
      console.log(error)
    })

    

  },[]);
  const navigate = useNavigate();
  

  
  return (
    <div>
        <Header />
         

         
         <ul className="list">

          {ids && ids.map(id => (
              <li key={id}>
                <User
                id={id}
                />
              </li>

          ))}
          </ul>


    </div>
 
  )
}

export default Ecom