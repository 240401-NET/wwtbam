import React from "react";
import SignUpForm from "../components/Form/SignUpForm"
import formbg from '../assets/formbg.jpg'
import { SignUpData } from "../types";


const SignUp : React.FC<SignUpData> = () => {
  const formData: SignUpData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first: '',
    last: ''
  }

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black font-serif'>
    <div className="bg-cover bg-center bg-no-repeat h-full w-96 rounded-lg" style={{ backgroundImage: `url(${formbg})` }}>
      <h1 className="text-yellow-600 font-bold text-3xl py-6 text-center font-serif">Signup</h1>
      <SignUpForm 
      formData={formData}
      onSignUp={handleSignup}
      />
      </div>
    </div>
  )
}

export default SignUp