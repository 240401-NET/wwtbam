import {FaRegCircleUser} from 'react-icons/fa6'
import { useEffect, useState } from 'react';
//if authenticated -> view profile icon + logout
//if not authenticated -> login + signup
useEffect(() => {
  const user = localStorage.getItem("user")
  if (user)
})
const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  console.log(setLoggedIn)
  return (
    <div className='sticky top-0 fixed mt-6'>
      <div className="navbar bg-transparent text-white font-serif">
        <div className="flex justify-end w-full">
          <ul className="menu menu-horizontal px-1">
          {loggedIn ? (
            <>
            <div className="flex justify-center items-center">
              <button className="">
              </button>
            </div>
            
              <li className="text-xl hover:scale-110">
              <a>Logout</a>
            </li>
            <div className='flex justify-center items-center pr-12 pl-6 hover:scale-110'>
              <FaRegCircleUser className="text-4xl text-white" />
            </div>
            </>
            ) : (
              <li className="text-xl hover:scale-110">
              <a>Login</a>
              </li>
            )}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
