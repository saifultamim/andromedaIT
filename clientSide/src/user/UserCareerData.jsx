import { useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const UserCareerData = () => {
  const career = useLoaderData()
    return (
        <div className='min-h-screen bg-[#F7D6D0] text-black'>
            <div className='w-4/5 mx-auto pt-8 pb-8'>

            <div className='bg-white flex justify-between items-center  p-8'>
            <p className='text-2xl'>{career.position}</p>
           <div>
           <p className=' text-red-500 font-bold'>Send your cv this Email : andromedaIT01@gamil.com</p>
           <p className=' text-red-500 font-bold'>Email subject : {career.position}</p>
           </div>
            </div>
           
            <div className='bg-white p-8 mt-8'>
                <p className='text-2xl '>Role Overview</p>
                <p className=' '>{career?.roleOverviews}</p>
            </div>
            <div className='bg-white p-8 mt-8'>
                <p className='text-2xl '>General Information</p>
                <div className='flex'>
                <p>Location : </p>
                <p>{career.locations}</p>
                </div>
                <div className='flex'>
                <p>Deadline : </p>
                <p>{career.deadlines}</p>
                </div>
                <div className='flex'>
                <p>Position : </p>
                <p>{career.position}</p>
                </div>
                <div className='flex'>
                    <p>Salary Range : </p>
                    <p>{career.salaries}</p>
                </div>
            </div>
            <div className='bg-white p-8 mt-8'>
                <p className='text-2xl '>Responsibilities </p>
                {
                    career?.responsibilities.map((data,index)=><div key={index}>
                      <div className='flex items-center'>
                      <FaArrowRightLong  className='text-red-600' />
                      <p className='ml-2'>{data}</p>
                      </div>
                    </div>)
                }
            </div>
           <div className='bg-white p-8 mt-8'>
            <p className='text-2xl '>Requirements</p>
           {
                career?.requirements.map((data,index)=><div key={index}>
                 <div className='flex items-center '>
                 <FaArrowRightLong className='text-red-600' />
                 <p className='ml-2'>{data}</p>
                 </div>
            </div>)
            }
           </div>
              <div className='bg-white p-8 mt-8'>
                <p className='text-2xl '>Additional Requirements</p>
              {
                career?.additionalRequirements.map((data,index)=><div key={index}>
                  <div className='flex items-center'>
                  <FaArrowRightLong className='text-red-600' />
                  <p className='ml-2'>{data}</p>
                  </div>
            </div>)
            }
              </div>  
             <div className='bg-white p-8 mt-8'>
             <p className='text-2xl '>Compensation & Benefits</p>
               {
                career?.benefits.map((data,index)=><div key={index}>
                  <div className='flex items-center'>
                  <FaArrowRightLong className='text-red-600' />
                  <p className='ml-2'>{data}</p>
                  </div>
            </div>)
            }
             </div>
            </div>

        </div>
    );
};

export default UserCareerData;