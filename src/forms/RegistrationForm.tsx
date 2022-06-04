import React from 'react';
import {TiSocialGooglePlus} from 'react-icons/ti'
import {GrFacebookOption} from 'react-icons/gr'
import { Link } from 'react-router-dom';
const RegistrationForm = () => {
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
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Create an account.</h2>

          <div className="grid justify-items-stretch space-y-8">
            <div className=" justify-self-center space-y-2">

              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Name
                </span>
                <input type="name" name="name" className="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#eb5525] focus:ring-[#eb5525] block w-96 rounded-md sm:text-sm focus:ring-1" placeholder="Full Name" />

              </label>
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input type="email" name="email" className="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#eb5525] focus:ring-[#eb5525] block w-96 rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Password
                </span>
                <input type="password" name="password" className="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#eb5525] focus:ring-[#eb5525] block w-96 rounded-md sm:text-sm focus:ring-1" placeholder="Type your password" />

              </label>
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Confirm Password
                </span>
                <input type="password" name="password" className="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#eb5525] focus:ring-[#eb5525] block w-96 rounded-md sm:text-sm focus:ring-1" placeholder="Confirm your password" />

              </label>
            </div>
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
              <div className="flex justify-items-center items-center gap-3">
                <input type="checkbox" className="appearance indeterminate:bg-gray-300 h-4 w-4" />
                <p className="text-sm text-slate-400 font-thin tracking-wide leading-8 ">By signing up you agree to our terms and conditions.</p>
              </div>
              <button
                className="group relative w-96 justify-self-center py-3 px-4 border hover:border-[#eb5525] text-sm font-medium rounded-md text-white hover:text-black bg-[#eb5525] hover:bg-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create Account
              </button>

              <p className="mt-6 text-center text-sm text-slate-500 font-thin tracking-wide leading-8 ">Or join with</p>
                <ul>
                <div className="flex justify-center gap-3">
                <li className="hover:-mt-2">
                <div className="bg-indigo-700 p-2 rounded-full cursor-pointer">
                <a href="">
                <GrFacebookOption className="h-6 w-6  text-white  " />
                </a>
                </div>
                </li>
                   <li className="hover:-mt-2">
                   <div className="bg-[#dc3545] p-2 rounded-full cursor-pointer ">
                   <a href="">
                   <TiSocialGooglePlus className="h-6 w-6  text-white  " />
                   </a>
                   </div>
                   </li>
                   
                 </div>
                </ul>
               <div>
               <p className="mt-8 text-center text-sm text-slate-500 font-thin tracking-wide leading-8 ">Already have an account?</p>
                <Link to="/users/login" className="flex justify-center text-center text-sm  font-normal tracking-wide leading-2">
                <a href="" className="text-[#dc3545] -mb-4">Log In</a>
                </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;