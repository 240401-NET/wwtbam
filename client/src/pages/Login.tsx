import LoginForm from "../components/Form/LoginForm"
import formbg from '../assets/formbg.jpg'
import React from "react"
import { LoginData } from "../types"

const Login : React.FC<LoginData> = () => {
  const formData: LoginData = {
    username: '',
    password: ''
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log(formData);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black font-serif'>
    <div className="bg-cover bg-center bg-no-repeat h-full w-96 rounded-lg" style={{ backgroundImage: `url(${formbg})` }}>
      <h1 className="text-yellow-600 font-bold text-3xl py-6 text-center font-serif">Login</h1>
      <LoginForm 
      formData={formData}
      onLogin={handleLogin}
      />
      </div>
    </div>
  )
}

export default Login