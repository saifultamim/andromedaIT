
import { Outlet } from "react-router-dom";
import UserFooter from "../user/UserFooter";
import UsersNavbar from "../user/UsersNavbar";



const MainOutlet = () => {
    return (
     <>
        <UsersNavbar></UsersNavbar>
        <Outlet></Outlet>
        <UserFooter></UserFooter>
       <div className='mt-4 pb-4'>
      <div className='w-4/5 mx-auto flex justify-between text-black'>
      <a href='/privacypolicy' className='hover:underline' >Privacy Policy</a>
      <p>© Copyright 2024 andromedaIT. All Rights Reserved.</p>
      </div>
       </div>
     </>
    );
};

export default MainOutlet;