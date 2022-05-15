//import styled from "styled-components";
import React from 'react';
import  '../App.css';
const Leftside1 = () => {
  return (
   
    <div className='container'>
      <div className='ArtCard'>
      <h1>Profile</h1>
      <img src=""/>
      </div>
      <div className='UserInfo'>
        <div>Name:</div>
        <div>Branch:</div>
        <div>Year:</div>
        <div>Course:</div>
      </div>
      <div>
      <nav className="nav flex-column">
      <a className="nav-link active" href="#">Home</a>
      <a className="nav-link" href="#">Resources</a>
      <a className="nav-link" href="#">Buy&Sell</a>
      <a className="nav-link" href="#">Support</a>
      <a className="nav-link" href="#">About Us</a>
    </nav>
      </div>
    </div>


  )
};

  
export default Leftside1;