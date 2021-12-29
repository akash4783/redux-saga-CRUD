import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteUserStart, loadUserStart } from '../redux/action';
import { Table,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MDBSpinner } from 'mdb-react-ui-kit';
 
const Home=()=>{
    const dispatch = useDispatch()
    const {users,loading,error} = useSelector((state)=> state.data)
    console.log("users data",users);
    
    useEffect(()=>{
        error && toast.error(error)

    },[error])

    useEffect(()=>{
        dispatch(loadUserStart())
    
    },[])
    if(loading){
        return (
        <MDBSpinner style={{marginLeft:"740px",
        marginTop:"200px"}} role="status">
            <span className="visually-hidden">Loading...</span>

        </MDBSpinner>
        )}

const handledelet=(id)=>{
    if(window.confirm("are you Sure to delete this user ?")){
        dispatch(deleteUserStart(id))
        toast.success("employee Deleted Successfully")
    }

}
    return (
        <div>
            <Table striped bordered hover size="sm" style={{marginTop:"20px"}}>
  <thead>
    <tr>
      <th> Sr.No</th>
      <th> Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map((item,id)=>{
              return (
                  <tr key={id}>
                       <td>{id + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td>{item.phone}</td>
                      <td>  <Button variant="danger" onClick={()=>handledelet(item.id)}>Delete</Button>
                     <Link to={`/editUser/${item.id}`}> <Button variant="primary">Edit</Button> </Link>
                     <Link to={`/userInfo/${item.id}`}> <Button variant="warning">View</Button> </Link>
                      </td>
                  </tr>
              )
          })

      }

  </tbody>
</Table>
        </div>
    )
}


export default Home

