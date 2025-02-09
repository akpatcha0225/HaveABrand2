import React from 'react'
import Header from "../components /Header"
import axios from 'axios'
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import User from "../components /User"
// import FloatingActionButtonExtendedSize from './components/FloatingActionButtonExtendedSize';
// import { Sidebar } from './sidebar'; 
// import Test from './test'; 


axios.defaults.withCredentials = true;


const HB = () => {

  const[ids, setIds] = useState([])

  useEffect (()=>{
    axios.get("http://172.30.16.1:5000/users/hb", {withCredentials:true}).then((response) =>{
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

export default HB