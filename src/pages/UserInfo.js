import {Button} from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import {useParams } from 'react-router';
import { useNavigate } from 'react-router';
 
const Userinfo=()=>{
    const Navigate = useNavigate()
    const {users} = useSelector((state)=>state.data)
    const {id} = useParams()

const singleuser = users.find((item)=>item.id != Number(id))
    return (
        <div>
            <h2>User info</h2>
            <hr></hr>

            <p>ID</p>
            <p>{singleuser.id}</p>

            <p>Name</p>
            <p>{singleuser.name}</p>

            <p>Email</p>
            <p>{singleuser.email}</p>

            <p>Address</p>
            <p>{singleuser.address}</p>

            <p>Phone</p>
            <p>{singleuser.phone}</p>



            <div>
                <Button onClick={()=>Navigate("/")} variant="warning" color="black">Go Back</Button>
            </div>

        </div>
    )
}


export default Userinfo