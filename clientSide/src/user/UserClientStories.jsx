
import userClientStories from '../../public/images/clientStories.jpg'
import lifeCare from '../../public/images/clientStories/Life Care Diagonstic  Center.png'
import hearty from '../../public/images/clientStories/HEARTY.jpeg'
import fruitBurst from '../../public/images/clientStories/fruitburst.png'
import safeWay from '../../public/images/clientStories/safeway.png'
import Scrollspy from "react-scrollspy";

const UserClientStories = () => {
    return (
        <div className='top-14 bg-[#F7D6D0] mb-16 '>
        
        <div className='lg:flex justify-around items-center grid grid-cols-1   pb-20 '>
            <div className=''>
             <h2 className='text-black text-5xl font-bold mb-4 mt-40'>
             Our Clients, </h2> 
             <h2 className='text-black text-5xl font-bold mb-4'> The Heart of </h2> 
             <h2 className='text-black text-5xl font-bold mb-4'>Our Work</h2>
             <p className='text-black text-xl mb-12 lg:mb-0'>Discover how founders, startups & enterprises <br/> from various industries use our software <br/> services to reach their business goals.</p>
             <Scrollspy items={ ['learnMore'] } currentClassName="is-current">
            <li>
            <a href='#learnMore'> <button className="hidden lg:inline mt-20 btn bg-[#FB4570] text-xl text-white border-none w-40">View Stories</button></a>
            </li>
               </Scrollspy>
            {/* <NavLink> <button className="hidden lg:inline mt-20 btn bg-[#FB4570] text-xl text-white border-none w-40">View Stories</button></NavLink> */}
            </div>
            <div>
                 <img src={userClientStories} alt="Section1" className='h-[395px] w-[604px] rounded-3xl lg:mt-40' /> 
                 <Scrollspy items={ ['learnMore'] } currentClassName="is-current">
            <li>
            <a href='#learnMore'> <button className=" lg:hidden mt-12 btn bg-[#FB4570] text-xl text-white border-none w-40">View Stories</button></a>
            </li>
               </Scrollspy>
                {/* <NavLink> <button className=" lg:hidden mt-12 btn bg-[#FB4570] text-xl text-white border-none w-40">View Stories</button></NavLink> */}
            </div>
        </div>


               <div className=' bg-[whitesmoke]  '>
                <h2 className='h-24 text-2xl'></h2>
                <h2 id='learnMore' className='text-3xl font-bold text-black mb-8 w-4/5 mx-auto'>Client Stories of AndromedaIT</h2>
             <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between w-5/5 mx-auto'>
             <div  className='bg-[#F7D6D0] lg:w-[650px] mx-auto rounded-3xl p-10 mb-12' >
                   <div  className=' lg:w-[550px] mx-auto   '>
                   <img src={lifeCare} alt="lifeCare" className=' w-[550px] ' /> 
                    <p className='text-2xl text-black font-bold mt-4'>Lifecare Diagnostic </p>
                    <p className='mt-4 font-bold text-black'>Lifecare Diagnostic is a cutting-edge website designed for a diagnostic lab. The platform enables users to easily book appointments, view lab results, and access a wide range of diagnostic services. Built using the latest web technologies like Next.js and Express.js, and backed by a secure and efficient PostgreSQL database, Lifecare Diagnostic exemplifies our expertise in creating healthcare platforms that prioritize user experience, data security, and operational efficiency.</p>
                    <a href='/contact' className='mt-4 text-xl btn bg-[#FB4570] text-white border-none '>GET A QUOTE</a>
                   </div>
                </div>
                <div className=''>
                <div className='bg-[#F7D6D0] lg:w-[650px] mx-auto rounded-3xl p-10 mb-12' >
                   <div  className=' lg:w-[550px] mx-auto   '>
                   <img src={hearty} alt="hearty" className=' w-[550px] ' /> 
                    <p className='text-2xl text-black font-bold mt-4'>Hearty</p>
                    <p className='mt-4 font-bold text-black'>Hearty is an online medical store dedicated to providing a wide range of medicines, supplements, and vitamins. The platform’s user-centric design, developed with React and Next.js, ensures an easy and secure shopping experience. Our team handled everything from the backend to the user interface, ensuring that Hearty meets the high standards required in the healthcare sector, including robust security and reliable database management with MongoDB.</p>
                    <a href='/contact' className='mt-4 text-xl btn bg-[#FB4570] text-white border-none '>GET A QUOTE</a>
                   </div>
                </div>
                </div>
                <div className=''>
                <div className='bg-[#F7D6D0] lg:w-[650px] mx-auto rounded-3xl p-10' >
                   <div  className=' lg:w-[550px] mx-auto   '>
                   <img src={fruitBurst} alt="fruitBurst" className=' w-[550px] ' /> 
                    <p className='text-2xl text-black font-bold mt-4'>Fruit Burst</p>
                    <p className='mt-4 font-bold text-black'>Fruit Burst is a vibrant e-commerce platform specializing in fresh fruits. The website features an intuitive user interface and seamless shopping experience, designed to make buying fresh produce online effortless. Built using HTML5, CSS3, and JavaScript, with React for a dynamic user experience and MongoDB for reliable data storage, Fruit Burst showcases our expertise in creating responsive, user-friendly e-commerce solutions.</p>
                    <a href='/contact' className='mt-4 text-xl btn bg-[#FB4570] text-white border-none '>GET A QUOTE</a>
                   </div>
                </div>
                </div>
                <div className='mt-14 lg:mt-0'>
                <div className='bg-[#F7D6D0] lg:w-[650px] mx-auto rounded-3xl p-10' >
                   <div  className=' lg:w-[550px] mx-auto   '>
                   <img src={safeWay} alt="safeWay" className=' w-[550px] ' /> 
                    <p className='text-2xl text-black font-bold mt-4'>safeWay</p>
                    <p className='mt-4 font-bold text-black'> Safeway is a comprehensive online store offering a wide range of products across various categories. The platform is powered by a robust backend built with Express.js and PostgreSQL, ensuring smooth operations and efficient data management. The frontend, developed with Next.js and enhanced with jQuery, delivers a fast and engaging shopping experience. Safeway is a testament to our ability to handle large-scale e-commerce projects, from UI/UX design to full-stack development.</p>
                    <a href='/contact' className='mt-4 text-xl btn bg-[#FB4570] text-white border-none '>GET A QUOTE</a>
                   </div>
                </div>
                </div>
             </div>
               </div>

               
        </div>
    );
};

export default UserClientStories;