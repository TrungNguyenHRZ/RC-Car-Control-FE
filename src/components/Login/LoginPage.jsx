import React from "react";
import Rccar from "../../assets/rccar.jpg";

const LoginPage = () => {
  return (
    <div className="relative">
      <img
        src={Rccar}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="flex relative z-10">
        <div className="flex-1"></div>
        <div className="bg-gray-100 bg-opacity-80  flex justify-center items-center h-screen flex-2">
          {/* Right: Login Form */}
          <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-30">
            <h1 className="flex justify-center text-2xl font-semibold mb-4">
              Welcome to RC Car Competition
            </h1>
            <form action="#" method="POST">
              {/* Username Input */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>
              {/* Password Input */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>
              {/* Remember Me Checkbox */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="text-blue-500"
                />
                <label htmlFor="remember" className="text-gray-600 ml-2">
                  Remember Me
                </label>
              </div>
              {/* Forgot Password Link */}
              <div className="mb-6 text-blue-500 flex justify-center">
                Forgot Password? Please contact the administrator.
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              >
                Login
              </button>
            </form>
            {/* Sign up Link */}
            <div className="mt-6 text-blue-500 text-center">
              <a href="#" className="hover:underline">
                Sign up Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
