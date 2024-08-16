
import logo from '../../public/images/logo/logo.png'

const UserFooter = () => {

    return (
       <div className='bg-[#F7D6D0] '>
         <div className=' pt-20 pb-20 md:grid grid-cols-2 lg:flex justify-between text-black w-4/5 mx-auto '>
         
         <a href='/' className='text-5xl font-extrabold text-black flex items-center justify-center'>
              
               <img src={logo}  alt="logo" className='h-20 w-20' />
               <h2>AndromedaIT</h2>
              
           </a>
           
    
       <div className='mt-8 md:mt-0 lg:mt-0 md:ml-24 grid justify-center'>
           <h2 className='font-bold text-xl'>Explore andromedaIT</h2>
           <a href='/aboutus' className='hover:underline'><p className='font-semibold'>About Us</p></a>
           <a href='/services' className='hover:underline'><p className='font-semibold'>Services</p></a>
          <a href='/clientstories' className='hover:underline'> <p className='font-semibold'>Client Stories</p></a>
         </div>
           
          <div className='mt-8 md:mt-0 lg:mt-0 grid justify-center'>
           <h3 className='font-bold text-xl'>Get In Touch</h3>
           <a href='/career' className='hover:underline'><p className='font-semibold'>Careers</p></a>
          <a href='/contact' className='hover:underline'> <p className='font-semibold'>Contact Us</p></a>
          </div>

          <div className='mt-8 md:mt-0 lg:mt-0 grid justify-center'>
           <h3 className='font-bold text-xl'>Location</h3>
           <p className='font-semibold md:mr-4'>kuril,Dhaka</p>
          </div>
       </div>
       </div>
    );
};

export default UserFooter;