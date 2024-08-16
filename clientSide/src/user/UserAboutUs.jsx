import Scrollspy from "react-scrollspy";
import aboutus from '../../public/images/aboutus.jpg'
import { FaHandsHelping } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
const UserAboutUs = () => {
    return (
        <div>
           <div className='lg:flex justify-around items-center grid grid-cols-1   pb-20 bg-[#F7D6D0]'>
            <div className=''>
             <h2 className='text-black text-5xl font-bold mb-4 mt-40'>
             Imagine</h2> 
             <h2 className='text-black text-5xl font-bold mb-4'>Build</h2> 
             <h2 className='text-black text-5xl font-bold mb-4'>Succeed</h2>
             <p className='text-black text-xl mb-12 lg:mb-0'>Founded in 2015, WellDev is an innovative <br/> web & software development company that builds <br/> market-leading digital solutions.</p>
             <Scrollspy items={ ['aboutus'] } currentClassName="is-current">
            <li>
            <a href='#aboutus'> <button className="hidden lg:inline mt-20 btn bg-[#FB4570] text-xl text-white border-none w-40">Learn More</button></a>
            </li>
               </Scrollspy>
            {/* <NavLink> <button className="hidden lg:inline mt-20 btn bg-[#FB4570] text-xl text-white border-none w-40">View Stories</button></NavLink> */}
            </div>
            <div>
                 <img src={aboutus} alt="aboutus" className='h-[395px] w-[604px] rounded-3xl lg:mt-40' /> 
                 <Scrollspy items={ ['learnMore'] } currentClassName="is-current">
            <li>
            <a href='#aboutus'> <button className=" lg:hidden mt-12 btn bg-[#FB4570] text-xl text-white border-none w-40">Learn More</button></a>
            </li>
               </Scrollspy>
                {/* <NavLink> <button className=" lg:hidden mt-12 btn bg-[#FB4570] text-xl text-white border-none w-40">View Stories</button></NavLink> */}
            </div>
        </div>
        {/* ============================= */}
          <div id='aboutus' className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-4/5 mx-auto'>
          <div className=' mx-auto mb-8 md:mb-0 lg:mb-0 md:p-8'>
       <span className='text-5xl text-red-500 flex  pb-3'> <FaHandsHelping /> </span>
       <h2 className='text-3xl font-extrabold text-black mt-3'>
       Transparent Partnership </h2>
        <p className='text-black font-semibold mt-2'>
        Every project, whether it is for a large corporation or a brand-new startup, is treated as if it were our own, signifying a mutually beneficial outcome.
        By putting teamwork at the core of what we do, we want to go from being a service provider to a software development partner. Our global client relationships are built on a strong foundation of extreme transparency and trust.
        </p>
       </div>

       <div className=' mx-auto lg:mt-8 mb-8 md:mb-0 lg:mb-0 md:p-8'>
      <span className='text-5xl flex  text-red-500 pb-3'><BsLightning /></span>
      <h2 className='text-3xl font-extrabold text-black mt-3'>Proactive Mindset </h2>
      <p className='text-black font-semibold mt-2'>
      Technical teams frequently experience stress as a result of problems that crop up in regular operations.
Our software governance and methodology adopt a proactive stance by seeing possible issues early on and suggesting practical solutions before they become more serious.
Our global talent pool of highly qualified engineers is enthusiastic about chances to develop with future-proof unique solutions and solve challenging problems.
      </p>
      </div>


      <div className=' mx-auto lg:mt-8 md:p-8 mb-12'>
       <span className='text-5xl text-red-500 flex  pb-3'> <FaRegLightbulb /></span>
       <h2 className='text-3xl font-extrabold text-black mt-3'>Bespoke Innovation </h2>
       <p className='text-black font-semibold mt-2'>
       We have become experts in a wide range of on-demand tech stacks thanks to our years of experience working with a wide range of clients.We continuously seek out new ways to improve our abilities in this technologically advanced era so that we can employ cutting-edge ideas and the newest technologies to accelerate the digital transformation of your company.We connect your company goals to our strategic insights, on-demand technical skills, and customer-centric solutions, effectively giving your project an unmatched competitive edge in the market.
       </p>
       </div>


       <div className=' mx-auto lg:mt-8 md:p-8'>
       <span className='text-5xl text-red-500 flex  pb-3'> <BsGraphUpArrow  /></span>
       <h2 className='text-3xl font-extrabold text-black mt-3'>Pragmatic Process</h2>
       <p className='text-black font-semibold mt-2'>
       A lot of teams try to finish a project in only one iteration. Under the constant pressure of a market that is always changing, they build too quickly and incur technical debt which leads to further issues.
At andromedaIT, we take a practical stance and construct in phases to guarantee timely and debt-free delivery.Through the application of agile methods in dependable project management, we guarantee the accomplishment of important benchmarks on schedule and within budget.
       </p>
       </div>
        
          </div>
        {/* ================================= */}


        </div>
    );
};

export default UserAboutUs;