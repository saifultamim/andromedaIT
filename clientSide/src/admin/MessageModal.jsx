/* eslint-disable react/prop-types */


import axios from "axios";
import { useState } from "react";

import Swal from "sweetalert2";


const MessageModal = ({message,seeMessage,setMessage}) => {
       //const [reloadMessage,setReloadMessage] = useState(message)
  const [modal,setModal]=useState(' ')
  const handleClick = (data) => {
 
     document.getElementById('my_modal_1').showModal()
     setModal(data.message)
      seeMessage(data)
  //setMessage(message)
    //  console.log('weeeeeeeeeeeeeeeee ,',data)
    //  axios.get('http://localhost:5000/userMessage')
    //  .then(data=>setReloadMessage(data.data))
   
  }
  const deleteClick=(data)=>{       
    axios.delete(`http://localhost:5000/userMessage/${data._id}`)
    .then(data=>{
      
      if(data.data.acknowledged){
                setMessage(message)
                
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  setMessage(message)              
}
else{
  Swal.fire({
    position: "top-end",
    icon: "error" ,
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });
}
     
      })
  }
    return (
        <div className=''>
         
         {
          message.slice().reverse().map((data)=><div key={data._id} className='flex justify-around items-center m-4 p-8 shadow-md shadow-slate-500 text-xl text-black'>
           
           <p>{`${data.firstName} ${data.lastName}`}</p>
                <p>{data.workEmail}</p>
                <p>{data.phone}</p>
                <p>{data.companyName}</p>
                <p>{data.time}</p>
             <div className='flex'>
             <button onClick={()=>handleClick(data)} className={`btn ml-8 ${data.chat ? 'btn-primary' : 'bg-slate-500'} border-none text-white`}>{data.chat ? 'seen' : 'unseen' }</button> 
            
             <button onClick={()=>deleteClick(data)} className='btn bg-slate-500 ml-2 border-none text-white hover:text-red-500'>Delete</button>
             </div>
           
          </div>)
         }
           

           <dialog id="my_modal_1" className=" w-[800px] mx-auto p-16 bg-[#F7D6D0] text-black rounded-s-box shadow-md shadow-slate-500">
  <div className="">
    <h3 className="font-bold text-lg">{modal}</h3>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn btn-primary hover:btn-secondary text-xl">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </div>
    );
};

export default MessageModal;