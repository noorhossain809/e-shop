import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPass = () => {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 pb-12 bg-white border shadow-sm border-slate-200 rounded-md">

                    <form className="mt-10 space-y-8" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md  -space-y-px grid justify-items-stretch">

                            <div className="grid justify-self-center">
                                <h2 className=" text-xl font-medium text-gray-900 tracking-wide">Forgot Password?</h2>
                                <p className="text-sm text-slate-400 font-thin tracking-wide leading-8 mb-4">Enter your email address to recover your password.</p>
                                <label className="block">

                                    <input type="email" name="email" className="peer mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#eb5525] focus:ring-[#eb5525] block w-96 rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                                    <p className="mt-1 invisible peer-invalid:visible text-pink-600 text-sm">
                                        Please provide a valid email address.
                                    </p>
                                </label>
                                <button
                                    className="group relative w-96 mt-1 justify-self-center py-3 px-4 border hover:border-[#eb5525] text-sm font-medium rounded-md text-white  bg-[#eb5525] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send Password Reset Link
                                </button>
                                <Link to="/users/login" className="mt-4">
                                    <a href="" className="text-gray-400 ">Back to Login</a>
                                </Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPass;