import React from 'react'
// import Header from "./Header"
import Navbar from './navbar'
import './ui/company.css'
import {useNavigate} from "react-router-dom"

function Landing (){
  const nav = useNavigate();
  const signUp = () =>{
    nav("/signup")
  }

  const handleCopy = () => {
    const email = "HaveABrand@gmail.com";
    if(navigator.clipboard){
      navigator.clipboard.writeText(email)
      .then(() => {
        alert("Copied to clipboard: " + email);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });

    } else {
      console.error("Error")
    }
    
  }
  return (
    <div>
        {/* <Header/> */}
        <Navbar/>
        <header className="header">
          <div className="left-section">HaveABrand</div>
          <div className="middle-section"></div>
          <div className="right-section">
          <button className="home-button">Home</button>
          </div>
        </header>

        <main className="companies-grid">
        <div className="company">
      <div className="about-us-grid">
        <h1>About Us</h1>
        <div className="company-info">
          <p className="about-us">We built this platform in order to help small companies grow. Our app gives them the opportunity to connect with other smaller companies in order to grow.</p>
        </div>
      </div>
    </div>

    <div className="company">
      <div className="company-info-grid">

        <div className="company-info">
        
          <h1 style={{
            "color":"#2B7553"
          }}>JOIN US NOW!</h1>
          <p className="company-description">
          </p>
          <p className="company-location"></p>
          <p className="company-category"></p>
          <button className="button" onClick={signUp}>SIGN UP</button>
        </div>
      </div>
    </div>

    <div className="company">
      <div className="company-info-grid">
        <div className="company-info">
          <h1 className="us-info">Any Questions?</h1>
          <p className="company-description"></p>
          <p className="company-location">MadeABrand@gmail.com</p>
          <p className="company-category"></p>
        </div>
      </div>
    </div>
    </main>

  </div>

  )
}

export default Landing