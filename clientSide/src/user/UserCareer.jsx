
import Scrollspy from 'react-scrollspy'
import userCareer from '../../public/images/userCareer.jpg'
import { FaHandsHelping } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import web_team from '../../public/images/career/web_team.png'
import web_team2 from '../../public/images/career/web_team2.jpg'
import software_team from '../../public/images/career/software_team.jpg'
import software_team2 from '../../public/images/career/software_team2.jpg'
import {useLoaderData} from 'react-router-dom';
import { Buffer } from 'buffer';
const UserCareer = () => {
   const userCareers = useLoaderData()
    return (
        <div>
        <div className='top-14 bg-[#F7D6D0] mb-16'>
        
        <div className='lg:flex justify-around items-center grid grid-cols-1 w-4/5 mx-auto  pb-20'>
            <div className=''>
             <h2 className='text-black text-5xl font-bold mb-4 mt-40'>
            We Empower </h2> 
             <h2 className='text-black text-5xl font-bold mb-4'> People to </h2> 
             <h2 className='text-black text-5xl font-bold mb-4'>Innovate</h2>
             <p className='text-black text-xl mb-12 lg:mb-0'>We believe technology & human development <br/> go hand in hand. In our culture, we invest in <br/> You to help you reach your career goals.</p>

             <Scrollspy items={ ['learnMore'] } currentClassName="is-current">
            <li>
            <a href='#learnMore'> <button className="hidden lg:inline mt-20 btn bg-[#FB4570] text-xl text-white border-none w-40">Learn More</button></a>
            </li>
               </Scrollspy>

            </div>
            <div>
                 <img src={userCareer} alt="learnMore" className='h-[395px] w-[604px] rounded-3xl lg:mt-40' /> 
                <li><a href='#learnMore'> <button className=" lg:hidden mt-12 btn bg-[#FB4570] text-xl text-white border-none w-40">Learn More</button></a></li>
            </div>
        </div>
        </div>
             
               <div>
                <div className='w-4/5 mx-auto '> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                 <img src={web_team} alt="web_team" className='w-full rounded-2xl md:w-80 md:h-72 lg:w-[550px] h-80 mb-8 lg:mb-16  mx-auto' />
                 <img src={web_team2} alt="web_team2" className='w-full rounded-2xl  md:w-80 md:h-72 lg:w-[550px] h-80 mb-8  md:mb-0 lg:mb-0 mx-auto' />
                 <img src={software_team} alt="software_team" className='w-full rounded-2xl  md:w-80 md:h-72 lg:w-[550px] h-80 lg:mb-16 mb-8  mx-auto' />
                 <img src={software_team2} alt="software_team2" className='w-full rounded-2xl  md:w-80 md:h-72 lg:w-[550px] h-80  mx-auto' />
            </div>
            </div>

          <div id="learnMore" className=''>
          <p className='text-black text-5xl font-bold  w-4/5 mx-auto mt-12 mb-12 text-center lg:text-left md:text-left'>
          You bring the talent. we <br/>have the perks.</p>
         
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 mx-auto'>

       <div className=' mx-auto mb-8 md:mb-0 lg:mb-0 md:p-8'>
       <span className='text-5xl text-red-500 flex  '>   <BsGraphUpArrow /> </span>
       <h2 className='text-3xl font-extrabold text-black mt-3'>Inclusive Environment</h2>
       <p className='text-black font-semibold mt-2'>Our harmonious team consists of great people with <br/>broad interests from all around the world. We deeply <br/>respect everyone’s individuality & beliefs.</p>
       </div>

       <div className=' mx-auto mb-8 md:mb-0 lg:mb-0 md:p-8'>
       <span className='text-5xl text-red-500 flex  pb-3'> <FaHandsHelping /> </span>
       <h2 className='text-3xl font-extrabold text-black mt-3'>Flexible Work</h2>
        <p className='text-black font-semibold mt-2'>
        We understand that people have both personal and <br/>professional goals, that’s why we have built a hybrid<br/> work policy for permanent employees for better work/life <br/> balance. 
        </p>
       </div>
            
      <div className=' mx-auto lg:mt-8 mb-8 md:mb-0 lg:mb-0 md:p-8'>
      <span className='text-5xl flex  text-red-500 pb-3'><BsLightning /></span>
      <h2 className='text-3xl font-extrabold text-black mt-3'>People-First Development </h2>
      <p className='text-black font-semibold mt-2'>
      We offer an excellent learning environment for you to <br/>gain experience on the latest technologies from industry-<br/>leading mentors, skill development training & real-life <br/>client projects.
      </p>
      </div>
             

       <div className=' mx-auto lg:mt-8 md:p-8'>
       <span className='text-5xl text-red-500 flex  pb-3'> <FaRegLightbulb /></span>
       <h2 className='text-3xl font-extrabold text-black mt-3'>Fair Benefits</h2>
       <p className='text-black font-semibold mt-2'>
       Not only do we host a variety of events to celebrate our <br/>achievements; but we also offer competitive salaries,<br/> fully subsidized lunches & snacks, family medical <br/> insurance coverage & life insurance coverage for our <br/> permanent employees. 
       </p>
       </div>

          </div>
         
            <div className='w-4/5 mx-auto mt-16 mb-24 '>
                <p className='text-black text-5xl font-bold'>Current Openings</p>
               {
                userCareers ?
                    
                <div className=' mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    userCareers.map(career=>{
                        const encodedId = Buffer.from(career._id).toString('base64');
                        return <div key={career._id} className='text-black text-xl font-bold bg-[#F7D6D0] p-4 mt-4 h-32 m-4'>
                            <p>{career.position}</p>
                      <a href={`/userCareerData/${encodedId}`} target='_blank' className='underline hover:text-red-500'>Apply Now</a>
                    </div>
                    })
                }
                </div>
                    
                      :  <p className='text-red-400 text-2xl font-bold mt-4'>No Vacancy Available....</p>
               }
            </div>
          </div>
           </div> 
             
        </div>
    );
};

export default UserCareer;<p>User Career</p>