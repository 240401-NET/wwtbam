import { useState } from "react";
import { LoginFormProps } from "../../types";
import { signIn } from "../../api/userService";

const LoginForm : React.FC<LoginFormProps> = () => {
  const [loginFormData, setLoginFormData] = useState<LoginFormProps>({
    Username: "",
    Password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = e.target;
      setLoginFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await signIn(loginFormData.Username, loginFormData.Password);
    }
  const formInputClass = "w-full px-3 py-2 text-gray-700 border rounded-lg  focus:border-blue-500 active:border-indigo-900";
  const formLabelClass = "block text-yellow-700  text-sm font-bold mb-2";
  return (
 
      <form onSubmit={handleLogin} className="px-8">
        
        <div className='mb-4'>
          <label htmlFor="username" className={formLabelClass}>Username</label>
          <input
            type="text"
            id="username"
            name='Username'
            value={loginFormData.Username}
            onChange={handleChange}
            className={formInputClass}
            />
        </div>
        
        
        <div className='mb-4'>
          <label htmlFor="password" className={formLabelClass}>Password</label>
          <input
            type="password"
            id="password"
            name='Password'
            value={loginFormData.Password}
            onChange={handleChange}
            className={formInputClass}
            />
        </div>
        
        <p className='text-yellow-800 '>Don't have an account?  <a href='/login' className='text-yellow-700 font-semibold'>Signup</a></p>
        <div className='flex justify-center'>
        <button className='bg-sky-800 text-lg uppercase text-white  font-bold w-48 my-4 rounded-xl p-2 font-sans hover:scale-110 hover:bg-sky-600'>Submit</button>
        </div>
      </form>
  )
}

export default LoginForm