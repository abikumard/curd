import React from 'react'
import {  useNavigate } from 'react-router-dom'
import "./home.css"
const Home = () => {

    const navigate=useNavigate()
  return (
    <div className='home' >
    <h1>Welcome To React CURD Operation</h1>
    <button  onClick={()=>{navigate("/create")}} > let's Start</button>  
    </div>
  )
}

export default Home
