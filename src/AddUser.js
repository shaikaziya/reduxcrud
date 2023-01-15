import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const userValidationSchema=yup.object({
  name: yup
    .string()  
    .required("Why not fill the name?"),  
  status: yup
  .string()
  .min(3,"Need a longer username😆")
  .required("why not fill the username?"),
 
})


export default function AddUser(){

  const formik=useFormik({
    initialValues: {name: "",status: ""},
    validationSchema: userValidationSchema,
    onSubmit: (newUser)=>{
    //  console.log("onSubmit",values);
     createUser(newUser)
    }
   })

   const createUser = (newUser)=>{

    console.log("createUser", newUser)
    fetch("https://63650a617b209ece0f558d28.mockapi.io/userdata",{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((data) => data.json())
    .then(() => navigate("/"));

   }

   const navigate=useNavigate()

  return(
    <div>
    <div >
      <div>
        <h2 >Add A User</h2>
       <form onSubmit={formik.handleSubmit}>
       <TextField fullWidth label="Enter your name" id="name"
       name="name"
       type="text" 
       value={formik.values.name}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter your name" />

{formik.touched.name && formik.errors.name? formik.errors.name : ''}
            <br></br>

<TextField fullWidth label="Enter your status"  
            id="status"
            name="status"
       type="status" 
       value={formik.values.status}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       placeholder="Enter your status"  />
         {formik.touched.status && formik.errors.status? formik.errors.status : ''}
          <br></br>
         <div >
      
  <Button  variant="contained" onClick={createUser}  type="submit">Add</Button>
  </div>
         </form>
    </div>
    </div>
    </div>
  )
}