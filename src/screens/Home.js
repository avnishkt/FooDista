import React, { useEffect, useState } from "react";

import Navbar from '../components/Navbar'
import Typed from 'typed.js';

import Card from '../components/Card'
// import Intro from '../components/Intro'

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ["FRESH", "TASTY", "AT_low_price","Foods","OrderNow"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);
  const [search, setsearch] = useState('')
  
  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'post',
      headers: { 'content-type': 'application/json' }
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);

  }
  useEffect(() => {
    loadData();

  }, [])
  
  return (
    <>
   <diV> <Navbar/></diV>

    <div> <div className="home" >
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, WELCOME</div>
                <div className="text-2">FOODISTA</div>
              <div className="text-3">we provide:- <span className="typing"></span></div>
              <div class="Card">
  <div class="CardInner">
  <label>Search for your favourite food</label>
  <div class="container">
    <div class="Icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </div>
    <div class="InputContainer">
      <input placeholder="It just can't be pizza..."   value={search}
  onChange={(e) => {
    setsearch(e.target.value);
  }}/>
    </div>
  </div>
 </div>
</div>
            </div>
        </div>
    </div>
    <style>
      {`
      @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');
      @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');
      
      * {
        -webkit-font-smoothing: antialiased;
      }
      
      :root {
        --border-radius: 10px;
      }
      
      
      
      .Card {
        padding: 1px;
        border-radius: var(--border-radius);
        background: linear-gradient(-67deg, rgba(#c8d8e7, .7), rgba(255,255,255,.8));
        overflow: hidden;
        box-shadow: 
          -2px -2px 6px rgba(#fff, .6),
          2px 2px 12px #c8d8e7;
        width: 380px;
      }
      
      .CardInner {
        padding: 16px 16px;
        background-color: #ff0030;
        border-radius: var(--border-radius);
      }
      
      .card .container {
        display: flex;
      }
      
      .Card.CardInner.container.Icon {
        min-width: 46px;
        min-height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--border-radius);
        margin-right: 12px;
        box-shadow: 
          -2px -2px 6px rgba(#fff, .6),
          2px 2px 12px #c8d8e7;
          
        svg {
          transform: translate(-1px, -1px);    
        }
      }
      
      label {
        font-family: "Hind", sans-serif;
        display: block;
        color: #3c4b66;
        margin-bottom: 12px;
        background: linear-gradient(45deg, rgba(#6b7b8f, 1), #3c4b66);
        -webkit-background-clip: text;
        -webkit-text-fill-color: black;
      }
      
      .InputContainer {
        width: 100%;
      }
      
      input {
        background-color: #e3edf7;
        padding: 16px 32px;
        border: none;
        display: block;
        font-family: 'Orbitron', sans-serif;
        font-weight: 600;
        color: #a9b8c9;
        -webkit-appearance: none;
        transition: all 240ms ease-out;
        width: 100%;
        
        &::placeholder {
          color: #6d7f8f;
        }
        
        &:focus {
          outline: none;
          color: #6d7f8f;
          background-color: lighten(#e3edf7, 3%);
        }
      };
        
      .InputContainer {
        --top-shadow: inset 1px 1px 3px #c5d4e3, inset 2px 2px 6px #c5d4e3;
        --bottom-shadow: inset -2px -2px 4px rgba(255,255,255, .7);
        
        position: relative;
        border-radius: var(--border-radius);
        overflow: hidden;
        
        &:before,
        &:after {
          left: 0;
          top: 0;
          display: block;
          content: "";
          pointer-events: none;
          width: 100%;
          height: 100%;
          position: absolute;
        }
        
        &:before {
          box-shadow: var(--bottom-shadow);
        }
        
        &:after {
          box-shadow: var(--top-shadow);
        }
      }
      .home{
    display: flex;
    background: url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center;
    height: 100vh;
    color: #fff;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu', sans-serif;
}
// .home{
//   justify-content:center;
// }
.home .max-width{
  width: 100%;
  display: flex;
  margin-top: 15rem;
  justify-content:center;
  color:black;
}
.home .max-width .row{
  margin-right: 0;
}
.home .home-content .text-1{
    font-size: 27px;
}
.home .home-content .text-2{
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
}
.home .home-content .text-3{
    font-size: 40px;
    margin: 5px 0;
}
.home .home-content .text-3 span{
    color: crimson;
    font-weight: 500;
}
.home .home-content a{
    display: inline-block;
    background: crimson;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    border: 2px solid crimson;
    transition: all 0.3s ease;
}
.home .home-content a:hover{
    color: crimson;
    background: none;
}
.home .home-content .text-2{
        font-size: 70px;
    }
    .home .home-content .text-3{
        font-size: 35px;
    }
    .home .home-content a{
        font-size: 23px;
        padding: 10px 30px;
    }
    @media (max-width: 690px) {
    .max-width{
        padding: 0 23px;
    }
    .home .home-content .text-2{
        font-size: 60px;
    }
    .home .home-content .text-3{
        font-size: 32px;
    }
    .home .home-content a{
        font-size: 20px;
    }
    @media (max-width: 500px) {
    .home .home-content .text-2{
        font-size: 50px;
    }
    .home .home-content .text-3{
        font-size: 27px;
    }
    

      `}
    </style></div>
     
      <div>
   
      </div>
      <div className="container">
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}</div>
                <hr />
                {foodItem !== [] ?
                  foodItem.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map(filterItems => {
                    return (
                      <div className="col-12 col-md-6 col-lg-3 m-3" key={filterItems._id}>
                        <Card foodItem={filterItems}
                        option={filterItems.options[0]}

                       />

                      </div>

                    )
                  }) : <div>nosuch data found</div>
                }
        </div>


              )
            }) : <div>nosuch data found</div>



        }

      </div>
   
    </>
  )
}
