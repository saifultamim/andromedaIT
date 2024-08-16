import { useEffect, useState } from "react";


const Section3 = () => {

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('../../../public/JsonData/Section3.json')
        .then(res=>res.json())
        .then(datas=>setData(datas))
    },[])
    
    return (
        
        <div className='md:pl-16 lg:pl-16'>
           
            <div className=' mt-16 mb-16'>
                <h2 className='text-4xl text-black font-bold  flex lg:justify-start md:justify-start  justify-center'>
                Technologies We Use</h2>
                <p className='text-2xl text-black mt-6 ml-4 md:ml-0 lg:ml-0'>To provide your company with top-notch software solutions, we <br/> <span className='mt-2'>bring together cutting-edge technologies and knowledgeable resources.</span></p>  
            </div>
            
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-32 mb-16'>
              {
                data.map((param)=><div key={param.id}>
                    <img src={param.image} alt="Logo" className='w-28 h-16 md:w-32 lg:w-40 lg:h-16 mb-4' />
                </div>)
                          
              }
            </div>

        </div>
    );
};

export default Section3;