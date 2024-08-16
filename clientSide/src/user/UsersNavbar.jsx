import { NavLink } from 'react-router-dom';
import logo from '../../public/images/logo/logo.png'
const UsersNavbar = () => {
    const li = <div className=' md:flex lg:flex text-black'>
       <NavLink to='/' className='text-xl font-bold md:mr-2 lg:mr-8'><li>Home</li></NavLink>
       <NavLink to='/services' className='text-xl font-bold md:mr-2 lg:mr-8'><li>Services</li></NavLink>
        <NavLink to='/clientstories' className='text-xl font-bold md:mr-2 lg:mr-8'><li>Client Stories</li></NavLink>
        <NavLink to='/career' className='text-xl font-bold md:mr-2 lg:mr-8'><li>Career</li></NavLink>
       <NavLink to='/contact' className='text-xl font-bold  md:mr-2 lg:mr-8'><li>Contact</li></NavLink>
    </div>
    return (
     
          <div className="navbar bg-[#F7D6D0] pt-10 ">
  <div className="navbar-start md:mx-auto lg:mx-auto">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden text-black font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-[#F7D6D0] rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {li}
      </ul>
    </div>
    <div className='flex items-center'>
    
    <NavLink to='/'>
    
    <img src={logo} alt="Logo" className='h-10 w-10' />
    </NavLink>
    <NavLink to='/' className=" btn-ghost text-2xl md:text-3xl lg:text-4xl font-bold text-black  mb-1 ">AndromedaIT</NavLink>
  
    </div>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <ul className="menu menu-horizontal px-1">
     {li}
    </ul>
  </div>
</div>
      
    );
};

export default UsersNavbar;