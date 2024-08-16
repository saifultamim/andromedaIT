import serviceImage from '../../public/images/service-hero.webp'
import serviceProcess from '../../public/images/serviceProcess.png'
import { RiComputerLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { PiPulseBold } from "react-icons/pi";
import { FiDatabase } from "react-icons/fi";
import { FaComputer } from "react-icons/fa6";

const UserServices = () => {
   
    return (
        <div className='mb-24'>
         
            <div className=''>
            <img src={serviceImage} alt="" className=' w-full ' />
           <div className='absolute -mt-32 ml-48 md:-mt-60 md:ml-72 lg:-mt-96 lg:ml-[550px]'>
           <p className='text-2xl md:text-4xl lg:text-4xl font-extrabold text-[#0d6efd] '>WE TREAT <span className='text-[#0d6efd]'>CLIENTS</span></p>
           <p className='text-2xl md:text-4xl lg:text-4xl font-extrabold  text-[#0d6edf]'>LIKE OUR <span className='text-[#0d6efd]'>PARTNERS</span></p>
           </div>
            </div>
            <div className=' grid grid-cols-1 md:flex lg:flex items-center w-4/5  mx-auto justify-around mt-12'>
               <div>
                <p className='text-2xl text-blue-500 font-semibold'>We are what we repeatedly do.<br/> Excellence, then, is not an act, but<br/> habit. </p>
                
               </div>
               <img src={serviceProcess} alt="" className='w-96 mt-8 md:mt-0 lg:mt-0' />
            </div>

            <div className=''>
                <h2 className='w-4/5  mt-12 mx-auto font-bold text-blue-500 text-center  text-2xl'>Our team is active and able to quickly adapt to contemporary technologies. Our group facilitates <br/> innovative convergences of social trends, mobility, cloud, and information by fusing technology with <br/> business objectives.</h2>
            </div>
            <div>
                <p className='text-4xl text-center text-black font-bold mt-24'>Our Major Services</p>
                <div className=' mt-12'>
                    <div className='bg-[#F7D6D0] p-8 border border-blue-500 grid grid-cols-1 md:grid lg:flex  w-4/5 mx-auto justify-between items-center mt-10'>
                    <div>
                    <RiComputerLine className='text-5xl text-blue-500' />
                    <p className='text-2xl text-black font-bold mt-4'>WEB & <br/> SOFTWARE DEVELOPMENT</p>
                    <a href="/contact">
                    <button  className='text-xl btn bg-[#FB4570] text-white border-none mt-4'>GET A QUOTE</button>
                    </a>
                    </div>
                    <div className='flex  items-center'>
                        <p className='text-xl p-8 text-black'>We combine our expertise in various <br/>domains with a solid development methodology <br/> and architecture to deliver rich, engaging, <br/>cross-platform and performant <br/>web and software applications.</p>
                        <img src="../../public/images/ourMajorServices/web_and_software_development.png" alt="" className='w-96 h-80 hidden md:inline lg:inline' />
                    </div>
                    </div>
                    <div className='bg-blue-200 p-8 border border-blue-500 grid grid-cols-1 md:grid lg:flex  w-4/5 mx-auto justify-between items-center  mt-10 '>
                   
                    <div className='flex  items-center'>
                    <img src="../../public/images/ourMajorServices/images.jfif" alt="" className='w-96 h-80 hidden md:inline lg:inline' />
                        <p className='text-xl p-12 text-black'>The values and culture <br/>of your business  are reflected in your brand. <br/>For this reason, we have <br/> a strong desire to create brands that make companies <br/>stand out from the competition <br/>and attract attention <br/>from their sector.</p>
                        
                    </div>
                    <div>
                    <FiBox className='text-5xl text-blue-500' />
                    <p className='text-2xl text-black font-bold mt-4'>PRODUCT BA, 
                    ROADMAP<br/> & MVP</p>
                    <a href="/contact">
                    <button  className='text-xl btn bg-[#FB4570] text-white border-none mt-4'>GET A QUOTE</button>
                    </a>
                    </div>
                    </div>
                    <div className='bg-[#F7D6D0] p-8 border border-blue-500 grid grid-cols-1 md:grid lg:flex  w-4/5 mx-auto justify-between items-center mt-10'>
                    <div>
                    <FaLink className='text-5xl text-blue-500' />
                    <p className='text-2xl text-black font-bold mt-4'>API <br/>
                    INTEGRATION</p>
                    <a href="/contact">
                    <button  className='text-xl btn bg-[#FB4570] text-white border-none mt-4'>GET A QUOTE</button>
                    </a>
                    </div>
                    <div className='flex  items-center'>
                        <p className='text-xl p-8 text-black'>We have experience in building multi-tenant <br/>SaaS applications. We have implemented and <br/>managed back-end APIs for large-scale companies<br/> like Airbnb, WifiSLAM, HomeAway, etc.</p>
                        <img src="../../public/images/ourMajorServices/api_integration.jpg" alt="" className='w-96 h-80 hidden md:inline lg:inline' />
                    </div>
                    </div>

                    <div className='bg-blue-200  mt-10 p-8 border border-blue-500 grid grid-cols-1 md:grid lg:flex  w-4/5 mx-auto justify-between items-center'>
                   
                   <div className='flex  items-center'>
                   <img src="../../public/images/ourMajorServices/offshore_outsourcing.png" alt="" className='w-96  h-80 hidden md:inline lg:inline' />
                       <p className='text-xl p-8 text-black'>We are able to deliver our services <br/>on time and within budget. We have <br/>a proven track record of delivering <br/>quality solutions that meet the needs <br/>of our clients with the added value <br/>of best people management.</p>
                   </div>
                   <div>
                   <PiPulseBold className='text-5xl text-blue-500' />
                   <p className='text-2xl text-black font-bold mt-4'>OFFSHORE<br/>
                   OUTSOURCING</p>
                   <a href="/contact">
                    <button  className='text-xl btn bg-[#FB4570] text-white border-none mt-4'>GET A QUOTE</button>
                    </a>
                   </div>
                   </div>

                    <div className='bg-[#F7D6D0] p-8 border border-blue-500 grid grid-cols-1 md:grid lg:flex  w-4/5 mx-auto justify-between items-center mt-10 '>
                    <div>
                    <FiDatabase className='text-5xl text-blue-500' />
                    <p className='text-2xl text-black font-bold mt-4'>TRAVEL DATA <br/>
                    INTEGRATION</p>
                    <a href="/contact">
                    <button  className='text-xl btn bg-[#FB4570] text-white border-none mt-4'>GET A QUOTE</button>
                    </a>
                    </div>
                    <div className='flex  items-center'>
                        <p className='text-xl p-8 text-black'>Easily integrate data from popular <br/>travel websites such as Booking.com,<br/> VRBO, Expedia, and Trip.com into your <br/>own systems.</p>
                        <img src="../../public/images/ourMajorServices/travel_data_integration.png" alt="" className='w-96 h-80 hidden md:inline lg:inline' />
                     </div>
                    </div>
                 
                    <div className=' mt-10 bg-blue-200 p-8 grid grid-cols-1 md:grid lg:flex  w-4/5 mx-auto justify-between items-center'>
                   
                   <div className='flex  items-center'>
                   <img src="../../public/images/ourMajorServices/ui_ux.jpg" alt="" className='w-96 h-80 hidden md:inline lg:inline' />
                       <p className='text-xl p-8 text-black'>UI/UX design is important for one <br/>simple reason, when users find a product<br/> or service easy and enjoyable to use, <br/>they are more likely to keepusing it. This can lead to increased sales, brand loyalty, and customer satisfaction.</p>
                   </div>
                   <div className=' w-96'>
                   <FaComputer className='text-5xl text-blue-500' />
                   <p className='text-2xl text-black font-bold mt-4'>UI/UX DESIGN</p>
                   <a href="/contact">
                    <button  className='text-xl btn bg-[#FB4570] text-white border-none mt-4'>GET A QUOTE</button>
                    </a>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default UserServices;