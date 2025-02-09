import React from 'react';
import './styles.css'; 

import CodeIcon from "./Icon";
import { Link, useNavigate } from 'react-router-dom';


import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  const navigate = useNavigate();  

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    const handleSignUpClick = () => {
        navigate('/signup'); 
    };
  return (
    <AppBar position="fixed" sx={{backgroundColor: 'rgb(255, 255, 255)',}}>
       
      <Toolbar>
   
        <Typography variant="h6" style={{ flexGrow: 1,  display: 'flex',justifycontent: 'center',color: 'rgb(43, 117, 83)' }}>
        <CodeIcon/>
                <h1 className="text" style={{ color: 'rgb(43, 117, 83)' }}> 
                Have A Brand
                </h1>
          
        </Typography>
        

        <Button style={{ color: 'rgb(43, 117, 83)' }} onClick={handleLoginClick}>Login </Button>
        <Button style={{ color: 'rgb(43, 117, 83)' }} onClick={handleSignUpClick}>Sign Up</Button> 
             </Toolbar>
    </AppBar>
  );
};

export default Navbar;



