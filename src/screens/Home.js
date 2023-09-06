import React, { useEffect, useState } from "react";

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Intro from '../components/Intro'

export default function Home() {
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

    <div><Intro/></div>
     
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
