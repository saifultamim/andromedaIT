
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const AdminPanelCheck = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value  
    const cpassword = e.target.confirmPassword.value
    const info = {email,password,cpassword}
   axios.post('http://localhost:5000/jwt',info,{withCredentials:true})
    .then(data=>{
      if(data){
      navigate('/adminshowuserData');
      }
    })
  }
  return (
    <div className='bg-[#F7D6D0] 
    min-h-screen
    border border-blue-500'>
    <div className="hero pt-28 ">

  <div className="card  w-fit h-96 shrink-0 shadow-2xl">
  {/* <h2 className='text-xl mx-auto mt-2 text-red-600'>{location?.state?.bol ? ' ': 'you are not admin  '}</h2> */}
    <form className="card-body grid items-center" onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" placeholder="email" className="input input-bordered w-96 bg-white" name='email' required />
      </div>
      <div className="form-control">
        <input type="password" placeholder="password" className="input input-bordered w-96 bg-white" name='password' required />
      </div>
      <div className="form-control">
        <input type="password" placeholder="confirm password" className="input input-bordered w-96 bg-white" name='confirmPassword' required />
      </div>
      <div className="form-control mt-6">
        <input type='submit' value='submit' className="btn btn-primary w-48 mx-auto text-xl hover:bg-slate-500" />
      </div>
    </form>
  </div>
 </div>
</div>
  );
};

export default AdminPanelCheck;