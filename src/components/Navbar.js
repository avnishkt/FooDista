import React from 'react';
import {Link,useNavigate} from 'react-router-dom'

import Badge from "react-bootstrap/Badge"


export default function Navbar() {
  const navicate =useNavigate();
  const  handlelog =()=>{
    localStorage.removeItem('authToken');
    navicate('/login');
  }
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/about">About</Link></li> */}
            {(localStorage.getItem("authToken")) ? 
            <li><Link to="/menu">MY ORDER</Link></li>:" "
          }
           {(!localStorage.getItem("authToken")) ? <>

            <li><Link to="/createuser">signup</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </>: <>
            <li><Link to="/createuser">  MyCart {' '}
      <Badge pill bg="danger">{2}</Badge></Link></li>
            <li><Link to="/login" onClick={handlelog}>logout</Link></li>
            </>
          }

          </ul>
          <h1 className="logo">Foo<span style={{"fontStyle":'italic'}}>Dista</span></h1>
        </div>
      </nav>

      <style>
        {`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          .html {
            font-size: 62.5%;
          }

          .navbar input[type="checkbox"],
          .navbar .hamburger-lines {
            display: none;
          }

          .container {
            max-width: 1200px;
            width: 90%;
            margin: auto;
          }

          .navbar {
            box-shadow: 0px 5px 10px 0px #aaa;
            position: fixed;
            width: 100%;
            
            color: #000;
    background: #00ffef;

            opacity: 0.85;
            
            z-index: 100;
          }

          .navbar-container {
            display: flex;
            justify-content: space-between;
            height: 64px;
            align-items: center;
          }

          .menu-items {
            order: 2;
            display: flex;
          }

          .logo {
            order: 1;
            font-size: 2.3rem;
          }

          .menu-items li {
            list-style: none;
            margin-left: 1.5rem;
            font-size: 1.3rem;
          }

          .navbar Link {
            color: #444;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease-in-out;
          }

          .navbar Link:hover {
            color: #117964;
          }

          @media (max-width: 768px) {
            .navbar {
              opacity: 0.95;
            }

            .navbar-container input[type="checkbox"],
            .navbar-container .hamburger-lines {
              display: block;
            }

            .navbar-container {
              display: block;
              position: relative;
              height: 64px;
            }

            .navbar-container input[type="checkbox"] {
              position: absolute;
              display: block;
              height: 32px;
              width: 30px;
              top: 20px;
              left: 20px;
              z-index: 5;
              opacity: 0;
              cursor: pointer;
            }

            .navbar-container .hamburger-lines {
              display: block;
              height: 28px;
              width: 35px;
              position: absolute;
              top: 20px;
              left: 20px;
              z-index: 2;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            .navbar-container .hamburger-lines .line {
              display: block;
              height: 4px;
              width: 100%;
              border-radius: 10px;
              background: #333;
            }

            .navbar-container .hamburger-lines .line1 {
              transform-origin: 0% 0%;
              transition: transform 0.3s ease-in-out;
            }

            .navbar-container .hamburger-lines .line2 {
              transition: transform 0.2s ease-in-out;
            }

            .navbar-container .hamburger-lines .line3 {
              transform-origin: 0% 100%;
              transition: transform 0.3s ease-in-out;
            }

            .navbar .menu-items {
              padding-top: 100px;
              background: #fff;
              height: 100vh;
              max-width: 300px;
              transform: translate(-150%);
              display: flex;
              flex-direction: column;
              margin-left: -40px;
              padding-left: 40px;
              transition: transform 0.5s ease-in-out;
              box-shadow: 5px 0px 10px 0px #aaa;
              overflow: scroll;
            }

            .navbar .menu-items li {
              margin-bottom: 1.8rem;
              font-size: 1.1rem;
              font-weight: 500;
            }

            .logo {
              position: absolute;
              top: 10px;
              right: 15px;
              font-size: 2.5rem;
            }

            .navbar-container input[type="checkbox"]:checked ~ .menu-items {
              transform: translateX(0);
            }

            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
              transform: rotate(45deg);
            }

            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
              transform: scaleY(0);
            }

            .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
              transform: rotate(-45deg);
            }
          }

          @media (max-width: 500px) {
            .navbar-container input[type="checkbox"]:checked ~ .logo {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
