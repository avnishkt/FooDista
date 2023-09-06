import React, { useEffect, useState,useRef } from 'react'
import { useDispatchCart,useCart } from './ContestReducer';

export default function Card(props) {
  let dispatch =useDispatchCart();
  let data =useCart();
  const  priceRef =useRef();
  let options =props.option;
  let priceOption =Object.keys(options);

  let foodItem = props.foodItem;
  
const [qty,setqty]= useState(1)
const [size,setsize]= useState('')

  const handeltoCart=async()=>{
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date()) 
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }
    await dispatch({type:'ADD',id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
console.log(data);
  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{
    setsize(priceRef.current.value)
    
  },[])
    return (
      <div className="card" style={{ width: "18rem" }}>
      <img src={props.foodItem.img} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} alt="Food Item" />
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>
        <p className="card-text">{props.foodItem.description}</p>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <select className="form-select" onChange={(e) => setqty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="form-select" ref={priceRef} onChange={(e) => setsize(e.target.value)}>
              {priceOption.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
          <div className="d-inline fs-5">
            ${finalPrice.toFixed(2)} /-
          </div>
        </div>
        <button className="btn btn-success mt-3" onClick={handeltoCart}>Add to Cart</button>
      </div>
    </div>
    
      );
    }

