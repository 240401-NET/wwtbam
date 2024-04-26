import { useState } from "react";
import { LoginData, LoginFormProps } from "../../types";

const LoginForm : React.FC<LoginFormProps> = ({ formData, onLogin}) => {
  const [loginFormData, setLoginFormData] = useState<LoginData>(formData);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
    });
  }
  const formInputClass = "w-full px-3 py-2 text-gray-700 border rounded-lg  focus:border-blue-500 active:border-indigo-900";
  const formLabelClass = "block text-yellow-700  text-sm font-bold mb-2";
  return (
 
      <form onSubmit={onLogin} className="px-8">
        
        <div className='mb-4'>
          <label htmlFor="username" className={formLabelClass}>Username</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChanges}
            className={formInputClass}
            />
        </div>
        
        
        <div className='mb-4'>
          <label htmlFor="password" className={formLabelClass}>Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChanges}
            className={formInputClass}
            />
        </div>
        
        <p className='text-yellow-800 '>Don't have an account?  <a href='/login' className='text-yellow-700 font-semibold'>Signup</a></p>
        <div className='flex justify-center'>
        <button className='bg-indigo-800 text-lg uppercase text-white  font-bold w-48 my-4 rounded-xl p-2 font-sans hover:scale-110 hover:bg-indigo-700'>Submit</button>
        </div>
      </form>
  )
}

export default LoginForm