import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import Button from '@mui/material/Button';


// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import NativeSelect from '@mui/material/NativeSelect'

export default function ViewUser(){
    const {id} = useParams()

    const navigate = useNavigate()

   const[user,setUser]=useState({})

   useEffect(()=>{
    fetch(`https://63650a617b209ece0f558d28.mockapi.io/userdata/${id}`,{method: "GET",})
    .then(data=>data.json())
    .then((use)=>setUser(use))
  },[id])

    return(
        <div >
      
 
      <ul >
        <li >Name : {user.name}</li><br></br>
        <li >status: {user.status}</li>
{/* 
        <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Age
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={user.status}>Ten</option>
    <option value={user.status}>Twenty</option>
    <option value={user.status}>Thirty</option>
  </NativeSelect>
</FormControl>
 */}



        
      </ul>
      <Button variant="contained" onClick={()=> navigate(-1)}><ArrowBackIosRoundedIcon />Back</Button>
     
    </div>
  
    )
}


