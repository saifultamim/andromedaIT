import { HiChevronRight } from "react-icons/hi2";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
const Section2 = () => {
    return (
        <div className=' md:flex lg:flex justify-center mt-24 mb-40'>
            <div className='grid md:grid-cols-1 '>
           
                <h2 className='text-4xl text-black font-bold  flex lg:justify-start md:justify-start   justify-center '>How We Work</h2>
                <p className='text-2xl text-black mt-6 ml-4 md:ml-0 lg:ml-0'>We use a practical strategy to deliver projects through agile-driven stages,<br/> <span className='mt-2'>regardless of the complexity of the project.</span></p>
              
               <div className='flex justify-center mt-32 md:mb-8'>
                <h2 className=' text-xl lg:text-3xl text-white bg-[#FB4570] w-24 md:w-48 lg:w-60 text-center grid items-center'>IMAGINE</h2>
                <HiChevronRight className='text-[DodgerBlue] text-6xl ml-2  mr-2 lg:ml-8  lg:mr-8  '/>
                <h2 className='text-xl lg:text-3xl text-white bg-[#FB4570] w-24 md:w-48 lg:w-60 text-center grid items-center'>BUILD</h2>
             <HiChevronRight className='text-[DodgerBlue] text-6xl ml-4 mr-4 lg:ml-8 lg:mr-8'/>
                <h2 className='text-xl lg:text-3xl text-white bg-[#FB4570] w-24 md:w-48 lg:w-60 text-center grid items-center'>SUCCEED</h2>
                </div>
                <h2 className='mt-8  text-center  text-2xl text-black font-bold mx md:inline lg:hidden '>Proccess...</h2>
                <div className='grid grid-cols-2 text-center lg:flex items-center mt-24'>
                  <p className='text-xl text-black 
                  font-bold lg:font-semibold'><span className='lg:hidden'>1.</span>Conceptualization</p>
                  <HiMiniChevronDoubleRight className='text-3xl text-[DodgerBlue] ml-4 mr-4 hidden  md:hidden lg:inline'/>
                 
                    <p className='text-xl text-black font-bold lg:font-semibold'><span className='lg:hidden'>2.</span>Specifications</p>
                    <HiMiniChevronDoubleRight className='text-3xl text-[DodgerBlue] ml-4 mr-4 hidden md:hidden lg:inline'/>
                    <p className='text-xl text-black font-bold lg:font-semibold'><span className='lg:hidden'>3.</span>Design</p>
                    <HiMiniChevronDoubleRight className='text-3xl text-[DodgerBlue] ml-4 mr-4 hidden md:hidden lg:inline'/>
                    <p className='text-xl text-black font-bold lg:font-semibold'><span className='lg:hidden'>4.</span>Development</p>
                    <HiMiniChevronDoubleRight className='text-3xl text-[DodgerBlue] ml-4 mr-4 hidden md:hidden lg:inline'/>
                    <p className='text-xl text-black font-bold lg:font-semibold'><span className='lg:hidden'>5.</span>QA</p>
                    <HiMiniChevronDoubleRight className='text-3xl text-[DodgerBlue] ml-4 mr-4 hidden md:hidden lg:inline'/>
                    <p className='text-xl text-black font-bold lg:font-semibold'><span className='lg:hidden'>6.</span>Project Launch</p>
                    <HiMiniChevronDoubleRight className='text-3xl text-[DodgerBlue] ml-4 mr-4 hidden md:hidden lg:inline'/>
                    <p className='text-xl text-black font-bold lg:font-semibold'><span className='lg:hidden'>7.</span>Maintenance</p>
                </div>
               

            </div>
        </div>
    );
};

export default Section2;