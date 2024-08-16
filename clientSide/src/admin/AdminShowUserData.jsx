import { useEffect, useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import MessageModal from "./MessageModal";


const AdminShowUserData = () => {
   
    const [message,setMessage]=useState([])
    const [data,setData]=useState()
 
     useEffect(()=>{
         axios.get('http://localhost:5000/jwt',{withCredentials:true})
        .then(data=>setData(data))
         
        axios.get('http://localhost:5000/userMessage')
        .then(data=>setMessage(data.data))
       
    },[message])
 
    
    
    const logout = async() => {
       
        const info = {error:'error'}
       await axios.post('http://localhost:5000/logout',info,{withCredentials:true})
       
           
       

    }

    const seeMessage = (data) => {
       
         axios.put(`http://localhost:5000/userMessage/${data._id}`)
          .then(data=>{
            
            if(data.data.acknowledged){
              
                      setMessage(message)
                      
}
           
            })
       }





    if(!data){
       return  <div className='bg-[#F7D6D0] h-screen'> 
      <div className='border border-blue-800 flex justify-center items-center h-full '>
      <span className="loading loading-spinner text-blue-600  w-48 "></span>
      </div>
       </div>
    }
    else{
  
        if(data.data.success){
            
            return <div className='  min-h-screen bg-slate-400  '>
                       <div className='flex justify-end  pr-12 pt-8'>
                       <a href='/adminjobpost'>
                       <button className='mr-2 btn btn-primary hover:btn-secondary'>job post</button>
                       </a>
                       <a href='/admincareer'>
                       <button className='mr-2 btn btn-primary hover:btn-secondary'>Career</button>
                       </a>
                       <button className='btn btn-primary hover:btn-secondary' onClick={logout}>Logout</button>
                       </div>
                      
                    
                 <div className='flex justify-around bg-slate-400 m-4 p-8 text-xl text-black font-bold'>
                  <p>Name</p>
                  <p>Email</p>
                  <p>Number</p>
                  <p>Company</p>
                  <p>Time</p>
                  <p>Message</p>
                 </div>
                      
                       <div className=' pt-2 pb-16'>
                       <MessageModal message={message} setMessage={setMessage} seeMessage={seeMessage} className='' ></MessageModal> 
                       </div>
 </div>
            
        }
       
        else{
           return <Navigate to='/andromedaitadminpanel' state={{ user: 'you are not admin',bol:true }} >AndromedaIT</Navigate>
        }
    }
   
    
};

export default AdminShowUserData;