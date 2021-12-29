import axios from "axios"

export const loaduserApi= async ()=>{
   return await axios.get(" http://localhost:3000/users")

}

export const createuserApi= async (user)=>{
   return await axios.post(" http://localhost:3000/users",user)

}

export const deleteuserApi= async (userId)=>{
   return await axios.delete(`http://localhost:3000/users/${userId}`)

}


export const updateuserApi= async (userId,userInfo)=>{
   return await axios.put(`http://localhost:3000/users/${userId}`,userInfo)

}



export const loadcarApi= async ()=>{
   return await axios.get(" http://localhost:3000/car")

}