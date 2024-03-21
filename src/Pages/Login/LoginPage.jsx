import React, { useEffect, useState } from "react";
import Rccar from "../../assets/rccar.jpg";
import LogoF from "../../assets/logoF.png";
import { useNavigate } from "react-router-dom";
import apiUserInstance from "../../service/api-user";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    var username = getCookie("username");
    if (username !== "") {
      navigate("/statistics");
    } else {
      navigate("/login");
    }
  }, []);

  const handleInputChange = (e, inputType) => {
    const value = e.target.value;

    if (inputType === "username") {
      setUsername(value);
    } else if (inputType === "password") {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    apiUserInstance
      .get("/login?email=" + username + "&password=" + password)
      .then((response) => {
        if (response.data.data != null) {
          setCookie("username", response.data.data.name, 1);
          navigate("/statistics");
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative">
      <img
        src={Rccar}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="flex relative z-10">
        <div className="flex-1"></div>
        <div className="bg-gray-100 bg-opacity-80  flex-row justify-between items-center h-screen flex-2">
          {/* Right: Login Form */}
          <div className="flex-1  flex items-center justify-center pt-[25px]">
            <img className="w-[180px]" src={LogoF} alt="" />
          </div>
          <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-30">
            <h1 className="flex justify-center text-2xl font-semibold mb-4">
              Welcome to RC Car Competition
            </h1>
            {/* <form action="#" method="POST"> */}

            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                autoComplete="off"
                value={username}
                onChange={(e) => handleInputChange(e, "username")}
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
                value={password}
                onChange={(e) => handleInputChange(e, "password")}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleLogin();
                  }
                }}
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
              onClick={handleLogin}
            >
              Login
            </button>

            {/* Sign up Link */}
            <div className="mt-6 text-blue-500 text-center">
              <a href="#" className="hover:underline">
                Sign up Here
              </a>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-end h-[100px]">
            <p>Copyright&copy; 2024 RC Car Competition </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
