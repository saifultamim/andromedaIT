
import { NavLink } from 'react-router-dom';
import pictureSection1 from '../../../public/images/pictureSection1.jpg'
const Section1 = () => {
    return (
        <div className='lg:flex justify-around items-center grid grid-cols-1   pb-20'>
            <div className=''>
             <h2 className='text-black text-5xl font-bold mb-4 mt-28'>Full-Service </h2> 
             <h2 className='text-black text-5xl font-bold mb-4'> Web & Software </h2> 
             <h2 className='text-black text-5xl font-bold mb-4'>Development</h2>
             <p className='text-black font-bold text-xl mb-4'>Focused On Your Business Success</p>
             <p className='text-black text-xl mb-12 lg:mb-0'>Our expert developers can turn your <br/> innovative ideas into exceptional digital <br/> solutions.</p>
            <a href='/contact'> <button className="hidden lg:inline mt-20 btn bg-[#FB4570] text-xl text-white border-none w-40">Contact Us</button></a>
            </div>
            <div>
                <img src={pictureSection1} alt="Section1" className='h-[395px] w-[604px] rounded-3xl lg:mt-20' />
                <NavLink to='/contact'> <button className=" lg:hidden mt-12 btn bg-[#FB4570] text-xl text-white border-none w-40">Contact Us</button></NavLink>
            </div>
        </div>
        
    );
};

export default Section1;