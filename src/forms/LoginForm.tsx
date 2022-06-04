import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-md w-full space-y-8 pb-8 bg-white border shadow-sm border-slate-200 rounded-md">
           <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Login</h2>
             
             <div className="grid justify-items-stretch space-y-8">
            <div className="flex justify-center gap-3 group relative w-96 justify-self-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <BsFacebook className="h-6 w-6" />
            <button
                   
                >
                 
                  Continue with Facebook
                </button>
            </div>
          
            <div className="flex justify-center gap-3 w-96 justify-self-center py-3 px-4 border  text-sm font-medium rounded-md  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FcGoogle className="h-6 w-6"/>
          <button >
                   
                 Login with Google
                </button>
            </div>
            
            <Link to="/user/old_login" className="justify-self-center">
            <button
                   className="group relative w-96  py-3 px-4 border hover:border-[#eb5525] text-sm font-medium rounded-md text-white hover:text-black bg-[#eb5525] hover:bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                 
                  Login with User ID
                </button>
            </Link>
               </div>
             <div className="grid justify-items-stretch ">
             <div className=" justify-self-center space-y-3 mb-4">
             
      <div className="mt-1 relative w-96 rounded-md shadow-sm">
      <div className="absolute inset-y-0  flex items-center">
        <select
            id="number"
            name="number"
            
            className="focus:outline-none  h-12 py-0 pl-2 border-r  bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>+88</option>
          </select>
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
        
        </div>
        <input
          type="text"
          name="number"
          id="number"
          className="focus:ring-indigo-500 focus:outline-none focus:border-[#eb5525] w-full pl-20 pr-12 sm:text-sm border py-3 rounded-md"
          placeholder="01xxxxxxxxx"
        />
       
      </div>
      <button
                   className="group relative w-96 justify-self-center py-3 px-4 border hover:border-[#eb5525] text-sm font-medium rounded-md text-white hover:text-black bg-[#eb5525] hover:bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login with OTP
                </button>
    
                    </div>
             </div>
          </div>
        </div>
      </>
    );
};

export default LoginForm;