import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import About from "./pages/About";
import AddEditUser from "./pages/AddEditUser";
import Home from "./pages/Home";
import Userinfo from "./pages/UserInfo";
import {ToastContainer} from "react-toastify";


import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addUser" element={<AddEditUser title={"Add User Details"} button={"Submit"}/>}/>
        <Route path ="/editUser/:id" element={<AddEditUser title={"Update User Details"} button={"Update"}/>}/>
        <Route path="/userInfo/:id" element={<Userinfo/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
 


    </div>
    </BrowserRouter>
  );
}

export default App;
