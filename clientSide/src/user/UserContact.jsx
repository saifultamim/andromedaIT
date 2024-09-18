import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa";
import Swal from "sweetalert2";
const UserContact = () => {
 const handleSubmit = (e) => {
   e.preventDefault()
   const firstName = e.target.firstName.value
   const lastName = e.target.lastName.value
   const workEmail = e.target.workEmail.value
   const companyName = e.target.companyName.value
   const phone = e.target.phone.value
   const message = e.target.message.value
   const userInfo = {firstName,lastName,workEmail,companyName,phone,message,}
   fetch('http://localhost:5000/userMessage',{
      method:'POST',
     headers:{
       'content-type':'application/json'
      },
      body:JSON.stringify(userInfo)
    })
    .then(res=>res.json())
   .then(data => {
    if(data){
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



    return (
       <div className='bg-[#F7D6D0] '>
  
       <div className=' w-4/5 mx-auto grid grid-cols-1 md:grid-cols-1 lg:flex pb-12'>
            {/* contact */}
         <div className='mt-28 mx-auto'>
            <p className='text-5xl text-black font-bold '>Contact Us</p>
            <div className='flex text-xl items-center text-black font-semibold mt-8'>
            <MdOutlineEmail className='text-2xl text-red-600' />
            <p className='text-xl md:text-xl lg:text-2xl ml-2'>Email : </p>
            <p className='text-xl md:text-xl lg:text-2xl ml-2'>andromedaIT01@gmail.com</p>
            </div>
           <div className='flex text-xl items-center text-black font-semibold mt-2'>
           <FaMobileScreenButton className='text-2xl text-blue-600'/>
           <p className='text-xl md:text-xl lg:text-2xl  ml-2'>Cell : </p>
           <p className='text-xl md:text-xl lg:text-2xl  ml-2'>+8801725125455</p>
           </div>
           <div className='flex text-xl items-center text-black font-semibold mt-2'>
           <BsWhatsapp className='text-2xl text-green-600'/>
           <p className='text-xl md:text-xl lg:text-2xl  ml-2'>whatsapp : </p>
           <p className='text-xl md:text-xl lg:text-2xl  ml-2'>+8801725125455</p>
           </div>
           
          
            <div className=''>
            <p className='text-2xl  text-black font-bold mt-16'>FOLLOW OUR SOCIALS! </p>
            <div className='flex mt-6'>
              <a href="https://www.facebook.com/profile.php?id=61564395159529" target='_blank'>
              <BsFacebook className='text-3xl text-blue-500' />
              </a>
            
            {/* https://www.linkedin.com/company/andromedait/ */}
            <a href="https://www.linkedin.com/company/andromedait/" target="_blank">
            <IoLogoLinkedin className='text-3xl ml-3 text-blue-500' />
            </a>
            </div>
            </div>
          </div>
          {/* message option */}
          <div className='mt-28'>
           <form onSubmit={handleSubmit}>
          
           <div className='grid grid-cols-1 md:grid-cols-1 lg:flex'>
           <div>
           <label className='flex'><p className='text-xl text-black font-bold mb-2'>First Name</p> <FaStarOfLife className='text-[10px]  text-red-500'/></label>
           <input type="text" className='bg-white w-full lg:w-72 h-16  p-3 mr-8 mb-8' placeholder='Your first name' name='firstName' required /></div> 
         
           
         <div>
         <label className='flex'><p className='text-xl text-black font-bold mb-2'>Last Name</p> <FaStarOfLife className='text-[10px]  text-red-500'/></label>
         <input type='text' className='bg-white w-full lg:w-72 h-16  p-3 mr-8 mb-8' placeholder='Your last name' name='lastName' required/> <br/>
         </div>
           </div>
          
           <label className='flex '><p className='text-xl text-black font-bold mb-2'>Work Email</p> <FaStarOfLife className='text-[10px]  text-red-500'/></label>
            <input type="text" className='bg-white w-full lg:w-[610px] h-16  p-3 mr-8 mb-8' placeholder='Your work email address' name='workEmail' required/> <br/>

            <label className='text-xl text-black font-bold mb-2'>Company Name</label><br/>
            <input type='text' className='bg-white w-full lg:w-[610px] h-16  p-3 mr-8 mb-8' placeholder='Your company name' name='companyName' /> <br/>
             
            <label className='flex'><p className='text-xl text-black font-bold mb-2'>Phone</p> <FaStarOfLife className='text-[10px]  text-red-500'/></label>
            <input type="text" className='bg-white w-full  lg:w-[610px] h-16  p-3 mr-8 mb-8' placeholder='Your phone number' name='phone' required/> <br/>

            <label className='text-xl text-black font-bold mb-2'>Message</label><br/>
            <textarea id="message" name="message" rows="8" cols=" 81" className='pl-4 pt-4 mt-2 bg-white w-full ' placeholder='Write your message here...'></textarea><br/>
          
         
           <input type="submit" className='bg-[#FF2E2E] text-white hover:bg-[#FF5C5C] mt-3 w-48 h-16 text-2xl rounded-lg ' />
      
           </form>
          </div>
       </div>
    
       </div>
      
    );
};

export default UserContact;