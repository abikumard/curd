import React,{useState}from 'react';
import { API_URL } from '../constants/API_URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./create.css"



const Create = () => {

    const navigate=useNavigate();

    const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
    const [checked, setChecked] = useState(false)


   const postDate= async (event)=>{
    event.preventDefault()
    if(firstName==="" && lastName===""){
      alert("please Enter Something..")
      return; 
  }

    await axios.post(API_URL,{firstName,lastName,checked})

    navigate("/read")
 
   }
  return (
    <div>
    <form  className='container'  >
    <div className='form__item' >
    <label>First Name :</label>
    <input type="text" placeholder='Type Here' value={firstName} onChange={(event)=>{setFirstName(event.target.value)}} />
    </div>
    <div className='form__item' >
    <label>Last Name : </label>
    <input type="text" placeholder='Type Here' value={lastName}  onChange={(event)=>{setLastName(event.target.value)}} />
    </div>
    <div className='form__item' >
    <input type="checkbox"  value={checked} onChange={()=>{setChecked(!checked)}}  />
    <label> Agree the terms</label>
    </div>
    <button onClick={postDate}  > Submit</button>
    </form>
    </div>
    
    
    
  )
}

export default Create
