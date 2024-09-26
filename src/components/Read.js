
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../constants/API_URL'
import { Link, useNavigate } from 'react-router-dom'
import { ProgressBar} from  'react-loader-spinner'
import "./read.css"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Read = () => {

    const [loading, setLoading] = useState(true)

    const navigate=useNavigate()


    const [apiDatas, setApiDatas] = useState([])

    const deleteUser = async (id) =>{
       await axios.delete(API_URL + id)
       callGetApi()
    }

    const updateUser=({firstName,lastName,checked,id})=>{

        localStorage.setItem('Id',id)
        localStorage.setItem("First Name",firstName)
        localStorage.setItem("Last Name",lastName)
        localStorage.setItem("Checked",checked)
        navigate("/update")
    }

    const callGetApi= async()=>{
        
     const res = await axios.get(API_URL)
     setApiDatas(res.data)
     setLoading(false)

    }
useEffect(() => {
    callGetApi()
}, [])

  return (
<div className='read__component' >
<h1 className='users__message' >Users Detials</h1>
{

    apiDatas.length===0?(
        <div>
        <div className='ProgressBar'>
        <ProgressBar
        height="80"
        width="80"
        visible={loading}
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#F4442E'
        barColor = '#51E5FF'  />
        </div>{loading===false?<h1 className='no__user__found__message' >No user Found</h1>:<h1></h1>}</div>):(<div><table>
        <thead>
        <tr className='tabel__head__row'>
        <td>ID</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Checked</td>
        <td>Delete</td>
        <td>Update</td>
        </tr>
        </thead>
        <tbody>
        {    
            apiDatas.map((data)=>{
                return(
                    <tr>
                    <td>{data.id}</td>
               <td>{data.firstName}</td>
               <td>{data.lastName}</td>
                <td>{data.checked ===true?"checked" : "not checked"}</td>
               <td><button onClick={()=>{deleteUser(data.id)}} className="delete__button" ><DeleteIcon /></button></td>
               <td><button onClick={()=>{updateUser(data)}} className="update__button" ><EditIcon/></button></td>
               </tr>)
                     })

                     
        }
        </tbody>
        </table></div>)
}
<Link className='add__user_message' to= "/create" >Add User</Link>
</div>
  )
}

export default Read




    