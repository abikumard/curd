import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../constants/API_URL'
import "./create.css"

const Update = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
   const [checked, setChecked] = useState(false)
   const [id, setId] = useState("")

   const navigate=useNavigate();

  useEffect(() => {
    
    setId( localStorage.getItem('Id') );
    setFirstName( localStorage.getItem('First Name') );
    setLastName( localStorage.getItem('Last Name') );
    setChecked( localStorage.getItem('Checked') );
    

   
  }, [])

  const handelUpdate=async (event)=>{
    event.preventDefault()

    await axios.put(API_URL +id ,{
      firstName,
      lastName,
      checked
    })

    navigate("/read")


  }





  return (
    <div>
    <form className='container' >
    <div className='form__item' >
    <label>First Name :</label>
    <input type="text" placeholder='Type Here' value={firstName} onChange={(event)=>{setFirstName(event.target.value)}} />
    </div>
    <div className='form__item' >
    <label>Last Name :</label>
    <input type="text" placeholder='Type Here' value={lastName}  onChange={(event)=>{setLastName(event.target.value)}} />
    </div>
    <div className='form__item  '>
    <input className='checkbox__item'   type="checkbox" checked={checked} onChange={()=>{ setChecked(!checked) }} />
    <label> Agree the terms</label>
    </div>
   
    <button  onClick={handelUpdate}  > Update</button>
  
    

    </form>
    

      
    </div>
  )
}

export default Update
