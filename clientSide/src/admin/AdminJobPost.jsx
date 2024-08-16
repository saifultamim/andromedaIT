import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";


const AdminJobPost = () => {
    const [jobPost,setJobPost]=useState([])
    const [data,setData]=useState()
    useEffect(()=>{
        axios.get('http://localhost:5000/jwt',{withCredentials:true})
        .then(data=>setData(data))
        axios.get('http://localhost:5000/adminJobPost')
        .then(data=> setJobPost(data.data))
    },[])
    const handleDelete = (id) => {
         axios.delete(`http://localhost:5000/adminJobPost/${id}`)
         .then(data=>{
            if(data.data.acknowledged){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  }); 
            }
            else{
                Swal.fire({
                    position: "top-end",
                    icon: "error" ,
                    title: "Your work has not saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
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

     else {
        if(data.data.success){
          if(jobPost){
            return (
                <div className="min-h-screen bg-slate-400">
                    <div className='grid grid-cols-3 w-4/5 mx-auto pt-8'>
                        {
                            jobPost && jobPost.map((data,index)=><div key={index} className=' p-4 flex items-center bg-[#F7D6D0] m-4'>
                                 <p className='text-black text-2xl font-bold'>{data.position}</p>
                                 <a href='/adminjobpost' className='text-black ml-2 btn btn-primary' onClick={()=>handleDelete(data._id)}>Delete</a>
                            </div>)
                        }
                    </div>
                </div>
            );
          }
         
        }
        else{
            return <Navigate to='/andromedaitadminpanel' state={{ user: 'you are not admin',bol:true }} >AndromedaIT</Navigate>
        }
     }
};

export default AdminJobPost;