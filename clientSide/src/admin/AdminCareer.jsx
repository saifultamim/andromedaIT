import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";


const AdminCareer = () => {
    const [inputResponsibilities, setInputResponsibilities] = useState([]);
    const [inputRequirements, setInputRequirements] = useState([]);
    const [inputAdditionalRequirements, setInputAdditionalRequirements] = useState([]);
    const [inputBenefits, setInputBenefits] = useState([]);
    const [inputPosition,setInputPosition]=useState('')
    const [roleOverview,setRoleOverview]=useState('')
    const [inputLocation,setInputLocation]=useState('')
    const [inputDeadline,setInputDealine]=useState('')
    const [inputSalaryRange,setInputSalaryRange]=useState('')
    const [data,setData]=useState()
    useEffect(()=>{
     axios.get('http://localhost:5000/jwt',{withCredentials:true})
        .then(data=>setData(data))
    },[])

    const  inputResponsibilitiesChange = (index, event) => {
        const newInputResponsibilities = [...inputResponsibilities];
        newInputResponsibilities[index] = event.target.value;
        setInputResponsibilities(newInputResponsibilities);
    };
    const  inputRequirementsChange = (index, event) => {
        const newInputRequirements = [...inputRequirements];
        newInputRequirements[index] = event.target.value;
        setInputRequirements(newInputRequirements);
    };
    const  inputAdditionalRequirementsChange = (index, event) => {
        const newInputAdditionalRequirements = [...inputAdditionalRequirements];
        newInputAdditionalRequirements[index] = event.target.value;
        setInputAdditionalRequirements(newInputAdditionalRequirements);
    };
    const  inputBenefitsChange = (index, event) => {
        const newInputBenefits = [...inputBenefits];
        newInputBenefits[index] = event.target.value;
        setInputBenefits(newInputBenefits);
    };
    const roleOverviewChange = (event) => {
        setRoleOverview(event.target.value)
    }
     const locationChange = (event) => {
        const location = event.target.value
        setInputLocation(location)
     }
     const deadlineChange = (event) => {
        const deadline = event.target.value
        setInputDealine(deadline)
     }
     const salaryChange = (event) => {
        const salary = event.target.value
        setInputSalaryRange(salary)
     }


    const inputResponsibilitiesHandle = () => {
        setInputResponsibilities([...inputResponsibilities, '']);
    };
    const inputRequirementsHandle = () => {
        setInputRequirements([...inputRequirements, '']);
    };
    const inputAdditionalRequirementsHandle = () => {
        setInputAdditionalRequirements([...inputAdditionalRequirements, '']);
    };
    const inputBenefitsHandle = () => {
        setInputBenefits([...inputBenefits, '']);
    };
    const positionHandle = (event) => {
        setInputPosition(event.target.value)
    }

        const handleSubmit = () => {
            const position = inputPosition
            const responsibilities = [...inputResponsibilities]
            const requirements = [...inputRequirements]
            const additionalRequirements = [...inputAdditionalRequirements]
            const benefits = [...inputBenefits]
            const roleOverviews = roleOverview
            const locations = inputLocation
            const deadlines = inputDeadline
            const salaries = inputSalaryRange 
            const adminCareer = { position,responsibilities,requirements,additionalRequirements,benefits,roleOverviews,locations,deadlines,salaries }
            console.log('handle submit ',adminCareer)
            axios.post(`http://localhost:5000/adminCareer`,adminCareer)
            .then(data=>{
                if(data.data.acknowledged){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    
}
else{
    Swal.fire({
        position: "top-end",
        icon: "error" ,
        title: "Your work has not saved",
        showConfirmButton: false,
        timer: 1500
      });
}
            })
        }




 if(!data){
    return  <div className='bg-[#F7D6D0] h-screen'> 
    <div className='border border-blue-800 flex justify-center items-center h-full '>
    <span className="loading loading-spinner text-blue-600  w-48 "></span>
    </div>
     </div>
 }
 else{
    if(data.data.success){
        return (
            <div className='min-h-screen bg-slate-400 '>
              <div className='flex w-4/5  justify-between mx-auto pt-8'>
           
             <div className=' w-2/4'>
             <div className='text-black'>
             <p className='p-4 text-2xl font-bold'>Position Name : </p>
             <input type="text" placeholder='position name' className='bg-white text-black text-xl p-2 w-2/4' onChange={(event)=>positionHandle(event)} />
             </div>
            
             
               <div>
                <p className='text-black text-2xl font-bold p-4 '>Genera Information : </p>
                <div className=''>
                    <p className='text-black text-xl font-bold '>location</p>
                    <input type="text" className='bg-white w-2/4 p-2 text-black text-xl ' placeholder='location' onChange={(event)=>locationChange(event)}  />
                </div>
                <div>
                    <p className='text-black text-xl font-bold '>deadline</p>
                    <input type="text" className='bg-white w-2/4 p-2 text-black text-xl ' placeholder='deadline' onChange={(event)=>deadlineChange(event)} />
                </div>
                <div>
                    <p className='text-black text-xl font-bold '>salary range</p>
                    <input type="text" className='bg-white w-2/4 p-2 text-black text-xl ' placeholder='salary range' onChange={(event)=>salaryChange(event)} />
                </div>
               
               </div>
           
    
          
              <div> 
              
    <div>
       <div className='flex items-center  p-4  mx-auto'>
       <p className='text-black text-2xl     font-bold'>Responsibilites : </p>
       <button onClick={inputResponsibilitiesHandle} className='btn btn-primary ml-4'>Add</button>
       </div>
    {inputResponsibilities.map((input, index) => (
      
      <React.Fragment key={index}>
        <textarea  onChange={(event) => inputResponsibilitiesChange(index, event)} rows="4" cols="70" className='bg-white text-black'></textarea>
     
      <span style={{ display: 'block', marginBottom: '10px' }}></span>
    </React.Fragment>
      ))}
    </div>
    </div>
    
    <div> 
              
              <div>
                  <div className='flex items-center'>
                  <p className='text-black text-2xl     font-bold p-4'>Requirements : </p>
                  <button onClick={inputRequirementsHandle} className='btn btn-primary ml-4'>Add</button>
                  </div>
              {inputRequirements.map((input, index) => (
                
                <React.Fragment key={index}>
                     <textarea  onChange={(event) => inputRequirementsChange(index, event)} rows="4" cols="70" className='bg-white text-black'></textarea>
    
                <span style={{ display: 'block', marginBottom: '10px' }}></span>
              </React.Fragment>
                ))}
              </div>
              </div>
    
             </div>
    
    
    
    
    <div className=' w-2/4'>
    
    <div> 
              
              <div>
                  <div className='flex items-center'>
                  <p className='text-black text-2xl p-4 font-bold '>Role Overview : </p>
                  
                  </div>
            
                
               
                     <textarea  onChange={(event) => roleOverviewChange(event)} rows="4" cols="70" placeholder='Role Overview' className='bg-white text-black'></textarea>
                
                <span style={{ display: 'block', marginBottom: '10px' }}></span>
            
             
              </div>
              </div>
    
    <div> 
              
              <div>
                  <div className='flex items-center'>
                  <p className='text-black text-2xl p-4 font-bold '>Additional Requirements : </p>
                  <button onClick={inputAdditionalRequirementsHandle} className='btn btn-primary ml-4'>Add</button>
                  </div>
              {inputAdditionalRequirements.map((input, index) => (
                
                <React.Fragment key={index}>
                     <textarea  onChange={(event) => inputAdditionalRequirementsChange(index, event)} rows="4" cols="70" className='bg-white text-black'></textarea>
       
                <span style={{ display: 'block', marginBottom: '10px' }}></span>
              </React.Fragment>
                ))}
              </div>
              </div>
    
    <div> 
              
              <div>
                  <div className='flex items-center'>
                  <p className='text-black text-2xl p-4 font-bold '>Compensation & Benefits : </p>
                  <button onClick={inputBenefitsHandle} className='btn btn-primary ml-4'>Add</button>
                  </div>
              {inputBenefits.map((input, index) => (
                
                <React.Fragment key={index}>
                        <textarea  onChange={(event) => inputBenefitsChange(index, event)} rows="4" cols="70" className='bg-white text-black'></textarea>
    
                <span style={{ display: 'block', marginBottom: '10px' }}></span>
              </React.Fragment>
                ))}
              </div>
              </div>
    
    <button className='btn btn-primary ' onClick={handleSubmit}>SUbmit</button>
    </div>
    
                  
                </div>  
                <div>
                   
                </div>
            </div>
        );
    }
    else{
        return <Navigate to='/andromedaitadminpanel' state={{ user: 'you are not admin',bol:true }} >AndromedaIT</Navigate>
    }
 }
};

export default AdminCareer;