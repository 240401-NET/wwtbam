import React, { useState } from 'react'
import { SignUpData, SignUpFormProps } from '../../types';


const SignUpForm: React.FC<SignUpFormProps> = ({ formData, onSignUp }) => {
  const [signupFormData, setSignupFormData] = useState<SignUpData>(formData);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value
    });
  }

  const formInputClass = "w-full px-3 py-2 text-gray-700 border rounded-lg  focus:border-blue-500 active:border-indigo-900";
  const formLabelClass = "block text-yellow-700  text-sm font-bold mb-2";
  return (
 
      <form onSubmit={onSignUp} className="px-8">
        <div className="grid grid-cols-2 gap-x-4 mb-4">
          <div>
            <label htmlFor="first" className={formLabelClass}>First Name</label>
            <input type="text" id="first" value={formData.first} onChange={handleChanges} className={formInputClass}/>
          </div>
          <div>
            <label htmlFor="last" className={formLabelClass}>Last Name</label>
            <input type="text" id="last" value={formData.last} onChange={handleChanges} className={formInputClass}/>
          </div>
        </div>
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
          <label htmlFor="email" className={formLabelClass}>Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
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
        
        <p className='text-yellow-800 '>Already have an account?  <a href='/login' className='text-yellow-700 font-semibold'>Login</a></p>
        <div className='flex justify-center'>
        <button className='bg-indigo-800 text-lg uppercase text-white  font-bold w-48 my-4 rounded-xl p-2 font-sans hover:scale-110 hover:bg-indigo-700'
        type='submit'
        >Submit</button>
        </div>
      </form>
  )
}

export default SignUpForm