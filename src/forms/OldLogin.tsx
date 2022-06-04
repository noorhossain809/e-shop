import { Link } from "react-router-dom";



const OldLogin = () => {
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
            <div className="rounded-md shadow-sm -space-y-px grid justify-items-stretch">
              <div className="justify-self-center">
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
               
                <div className="flex justify-between mt-6 mb-4">
                <div className="flex justify-items-center items-center gap-3">
                <input type="checkbox" className="appearance indeterminate:bg-gray-300 h-4 w-4" />
                <p className="">Remember Me</p>
                </div>
                <Link to="/password/reset">
                <a href="" className="text-gray-400">Forgot password?</a>
                </Link>
                </div>
                <button
                   className="group relative w-96 justify-self-center py-3 px-4 border hover:border-[#eb5525] text-sm font-medium rounded-md text-white  bg-[#eb5525] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Login 
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OldLogin;