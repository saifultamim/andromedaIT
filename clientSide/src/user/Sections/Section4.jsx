import { useEffect, useState } from "react";


const Section4 = () => {
    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch('../../public/JsonData/Section4.json')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
   
    return (
       
            <div className='md:pl-20 lg:pl-20 '>
           
           <div className=' mt-16 mb-16'>
               <h2 className=' text-4xl text-black font-bold  flex lg:justify-start md:justify-start  justify-center'>         
                Industry Expertise</h2>
               <p className='text-2xl text-black mt-6 ml-4 md:ml-0 lg:ml-0'>Discover yours today! We have expertise creating  <br/> <span className='mt-2'>creative solutions for a range of industries.</span></p>  
           </div>
          
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
           {
            datas.map((data)=>
                <div key={data.id} className="card mx-auto opacity-80 w-48 md:w-60 lg:w-60 h-72 mb-14 bg-white shadow-xl ">
                <figure className="px-10 pt-10">
                  <img
                    src={data.image}
                    alt="Shoes"
                    className="rounded-xl w-40 h-40" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black font-extrabold">{data.title}</h2> 
                </div>
              </div>
            )
           }
            </div>
        </div>
    );
};

export default Section4;