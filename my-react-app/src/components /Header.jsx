



import { useState } from "react";
import './navstyles.css';  
import { Link, useNavigate } from 'react-router-dom'; 
import axios from "axios"
axios.defaults.withCredentials = true;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.get("http://172.30.16.1:5000/logout",{withCredentials: true}).then((response) => {
      navigate('/')
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  

  return (
    <nav className="navbar">
      <ul>
      <li>
          <Link to="/home">Home </Link>
        </li>
        <li>
          {/* Use React Router's Link for navigation */}

          <Link to="/ecom">Ecommerce</Link>
        </li>
        
        <li>
          <Link to="/retail">Retail</Link>
        </li>
        <li>
          <Link to="/hb">Health & Beauty</Link>
        </li>
        <li>
          <Link to="/Tech">Tech</Link>
        </li>

        <li>
        <button onClick={handleLogout}>Logout</button>

        </li>
      </ul>
      
    </nav>
  );
};

export default Header;
