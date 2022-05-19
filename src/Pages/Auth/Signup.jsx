import React, { useState } from "react";
import logo from "../../Assets/logoImg.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "./authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signUpCredentials, setSignUpCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } =
    signUpCredentials;

  const signUpClickHandler = () => {
    if (firstName && lastName && email && password && confirmPassword !== "") {
      if (password === confirmPassword) {
        dispatch(signUpUser(signUpCredentials))
          .unwrap()
          .then(() => {
            navigate("/login");
            alert("Login Successful")
          })
          .catch((err) => {
            console.log(err);
          });
      }else{
        alert("Password and Confirm Password Doesnt Match")
      }
    }else{
      alert("Please Fill Out All the required Fields")
    }
  };
  return (
    <div className="container w-full h-screen flex flex-col justify-center items-center">
      <div className="w-1/3 shadow-xl px-10 pb-4">
        <div className="flex justify-center items-center">
          <img className="h-12" src={logo} alt="logo" />
        </div>
        <div className="">
          <h3 className="mt-1 mb-4 font-medium text-xl">Sign Up</h3>
        </div>
        <div className="flex flex-col ">
          <div className="pt-2">
            <label className="block">
              First Name :
              <input
                className="border w-full h-5 px-3 py-5 mt-2 mb-2 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500"
                type="text"
                required
                placeholder="vikrant"
                onChange={(e) => setSignUpCredentials({...signUpCredentials, firstName:e.target.value})}
                value={firstName}
              />
            </label>
          </div>
          <div className="pt-2">
            <label className="block">
              Last Name :
              <input
                className="border w-full h-5 px-3 py-5 mt-2 mb-2 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500"
                type="text"
                required
                placeholder="Kumar"
                onChange={(e) =>  setSignUpCredentials({...signUpCredentials, lastName:e.target.value})}
                value={lastName}
              />
            </label>
          </div>
          <div className="pt-2">
            <label className="block">
              Email Address :
              <input
                className="border w-full h-5 px-3 py-5 mt-2 mb-2 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500"
                type="email"
                required
                placeholder="vikrant2812@gmail.com"
                onChange={(e) =>  setSignUpCredentials({...signUpCredentials, email:e.target.value})}
                value={email}
              />
            </label>
          </div>
          <div className="pt-2">
            <label className="block">
              Password :
              <input
                className="border w-full h-5 px-3 py-5 mt-2 mb-2 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500"
                type="password"
                required
                placeholder="**********"
                onChange={(e) =>  setSignUpCredentials({...signUpCredentials, password:e.target.value})}
                value={password}
              />
            </label>
          </div>
          <div className="pt-2">
            <label className="block">
              Confirm Password :
              <input
                className="border w-full h-5 px-3 py-5 mt-2 mb-2 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500"
                type="password"
                required
                placeholder="**********"
                onChange={(e) =>  setSignUpCredentials({...signUpCredentials, confirmPassword:e.target.value})}
                value={confirmPassword}
              />
            </label>
          </div>
        </div>
        <div>
          <button
            className=" w-[120px] p-2 rounded-md text-black-700 bg-blue-400 hover:bg-blue-500 font-medium mt-3 mb-3"
            type="submit"
            onClick={signUpClickHandler}
          >
            Signup
          </button>
          <p>
            <Link to="/login">Already have an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Signup };
