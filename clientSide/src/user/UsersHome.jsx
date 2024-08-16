import Section1 from '../user/Sections/Section1'
import Section2 from '../user/Sections/Section2'
import Section3 from '../user/Sections/Section3'
import Section4 from '../user/Sections/Section4'
import Section5 from './Sections/Section5';


const UsersHome = () => {
    return (
       <div>
         <div className=' bg-[#F7D6D0]'>
           <div className='w-4/5 mx-auto'>
           {/* <UsersNavbar></UsersNavbar> */}
           <Section1></Section1>
           </div>
        </div>

       <div className='w-4/5 mx-auto'>
            <Section2></Section2>
            <Section3></Section3>
       </div>
        <div className=' bg-[#F7D6D0]'>
       <div className='w-4/5 mx-auto pt-8 pb-8'>
       <Section4></Section4>
       </div>
        </div>
      <div className='grid justify-center'>
            <div className=''>
            <Section5></Section5>
            </div>
           
      </div>
        {/* <div className=' bg-[#F7D6D0]'>
       <div className='w-4/5 mx-auto'>
       <UserFooter></UserFooter>
       </div>
        </div> */}
       </div>
    );
};

export default UsersHome;