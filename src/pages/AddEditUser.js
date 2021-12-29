import React, { useEffect, useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import { createUserStart, updateUserStart } from '../redux/action';
import { toast } from 'react-toastify';
const AddEditUser=({title,button})=>{
    const{id}= useParams()
    console.log("id>>>>",typeof(id))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {users} = useSelector((state)=>state.data)
    const[data,setdata]=useState({
        name:"",
        email:"",
        address:"",
        phone:""

    })
    const[editMode,setEditmode] =useState(false)
const{name,email,address,phone}=data

useEffect(()=>{
   
    if(id){
        setEditmode(true)
        const singleuser = users.find((item)=>item.id === id)
        setdata({...singleuser})
    }
},[id])

const handlesubmit=(e)=>{
    e.preventDefault()
    if(name && email && address && phone){
        if(!editMode){
            dispatch(createUserStart(data))
            toast.success("User Added Successfully")
            setTimeout(()=>{
                navigate("/")
                
            },500)

        }else{
            dispatch(updateUserStart({id,data}))
            setEditmode(false)
            toast.success("User Updated Successfully")
            setTimeout(()=>{
                navigate("/")
                
            },500)
        }
       
   
    }

}

const handlechange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
}
    return (
        <div>
            <div>
              <h2> {title} </h2>

            </div>
     <Form onSubmit={handlesubmit}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" onChange={handlechange} name="name" value={name || ""}  placeholder="Enter Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email"  onChange={handlechange}  name="email" value={email || ""} placeholder="email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text"  onChange={handlechange}  name="address" value={address || ""} placeholder="Address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text"  onChange={handlechange}  name="phone" value={phone || ""} placeholder="Phone" />
  </Form.Group>

  <Button variant="primary" type="submit">
   {button}
  </Button>

  <Button style={{marginLeft:"10px"}} onClick={()=>navigate("/")} variant="warning">
    Go Back
  </Button>
</Form>
        </div>
    )
}


export default AddEditUser
