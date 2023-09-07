import React, { useState } from 'react'

import { Link ,useNavigate} from 'react-router-dom'



export default function Signup() {
const navigate=useNavigate();
  
  const [credentials, setcredential] = useState({ name: '', password: '', email: "", geolocation: 'at food corner' })
  const handlesubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/createuser', {
          method: "POST",
          headers: {
              'content-type': "application/json"
          },
          body: JSON.stringify({
              name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation
          })
      });
      const json = await response.json()
  console.log(json);
  if (json.sucess) {
    //save the auth toke to local storage and redirect
    localStorage.setItem('token', json.authToken)
    navigate("/login")

  }

      else{
          alert("enter valid(Credentials")
      }

  }
  const onchg = (event) => {
      setcredential({ ...credentials, [event.target.name]: event.target.value })
  }
  
  return (
    <>
      <div className="containers">
      <div className="cards">
        <div className="card_titles">
          <h1>Create Account</h1>
          <span>Already have an account? <Link to="login">Sign In</Link></span>
        </div>
        <div className="forms">
        <form onSubmit={handlesubmit}>
          <input type="text" name="name" id="username" placeholder="UserName" value={credentials.name} onChange={onchg}  />
          <input type="email" name="email" placeholder="Email" id="email"  value={credentials.email} onChange={onchg} />
          <input type="password" name="password" placeholder="Password" id="password"  value={credentials.password} onChange={onchg}/>
          <input type="text" name="location" placeholder="location" id="password" value={credentials.geolocation} onChange={onchg} />
          <button type="submit">Sign Up</button>
          <Link to='/login' className=' btns btn-dangers'>Already a user</Link>

          </form>
        </div>
        <div className="card_termss">
            <input type="checkbox" name="" id="terms"/> <span>I have read and agree to the <Link to="">Terms of Service</Link></span>
        </div>
      </div>
    </div>

    <style>
      {
        `
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.containers {
  height: 100vh;
  width: 100%;
  color:black;
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 101, 133, 1) 0%,
    rgba(255, 211, 165, 1) 90%
  );
}

.cards {
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  padding: 10px 30px;
}

.card_titles {
  text-align: center;
  padding: 10px;
}

.card_title h1 {
  font-size: 26px;
  font-weight: bold;
}

.forms input {
  margin: 10px 0;
  width: 100%;
  background-color: #e2e2e2;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 4px;
}

.forms button {
  background-color: #4796ff;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 8px 15px;
  width: 100%;
}

.card_termss {
  display: flex;
  align-items: center;
  padding: 10px;
}

.card_termss input[type="checkbox"] {
  background-color: #e2e2e2;
}

.card_termss span {
  margin: 5px;
  font-size: 13px;
}

.card a {
  color: #4796ff;
  text-decoration: none;
}

.btns.btn-dangers {
  background-color: #4796ff;
  color: #ffffff;
  margin-top:2%;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 8px 15px;
  width: 100%;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}
        `
      }
    </style>
    </>
  )
}
