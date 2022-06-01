import React, { useEffect, useState } from "react";
import logo from "../../Assets/logoImg.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "./authSlice";
import { Loader } from "../../Components/Loader";



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);
  const {token, loading} = state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userCredentials = {
    username: email,
    password: password,
  };

  useEffect(() => {
    console.log("useeff", token);
  }, [token]);

  const loginClickHandler = (e) => {
    e.preventDefault();
    dispatch(logInUser(userCredentials))
      .unwrap()
      .then(() => {
        // toast.success("Login Successfull.")
       // showToast("Login Successfull.", "success");
        navigate("/home")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const loginDummyClickHandler= async(e)=>{
  //   e.preventDefault();
  //   try{
  //     const resp = dispatch(logInUser({ username: "vikrant2812@gmail.com", password: "vikrant12345" }))
  //     console.log(resp)
  //     if(resp?.error){
  //       throw new Error("Invalid Credentials")
  //     }
  //     if(resp?.payload.encodedToken){
  //       navigate(location.state?.from ?? "/home", {replace: true})
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  const loginDummyClickHandler = (e) => {
    e.preventDefault();
    dispatch(
      logInUser({ username: "vikrant2812@gmail.com", password: "vikrant12345" })
    )
      .unwrap()
      .then(() => {
        // toast.success('🦄 Wow so easy!', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   });
        navigate("/home")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    
    <div className="container w-full h-screen flex flex-col justify-center items-center">
      <div className="w-1/3 shadow-xl px-10 py-10">
        <div className="flex justify-center items-center">
          <img className="h-12" src={logo} alt="logo" />
        </div>
        <div className="">
          <h3 className="mt-4 mb-4 font-medium text-xl">
          <p className="text-center"> Login</p>
          </h3>
        </div>
        <div className="flex flex-col ">
          <div className="pt-2 justify-start">
            <label className="block">
              Email Address :
              <input
                className="border w-full h-5 px-3 py-5 mt-2 mb-2 rounded-md focus:ring-1 focus:outline-none focus:ring-blue-500"
                type="email"
                required
                placeholder="vikrant2812@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
          </div>
        </div>
        <div>
          <button
            className="w-full p-2 rounded-md text-black-700 bg-blue-400 hover:bg-blue-500 font-medium mt-3 mb-3"
            type="submit"
            onClick={loginClickHandler}
          >
            Login
          </button>
          <div>
            <button
              className=" w-full p-2 rounded-md text-black-700 bg-blue-400 hover:bg-blue-500 font-medium mt-3 mb-3"
              type="submit"
              disabled={loading && <Loader/>}
              onClick={loginDummyClickHandler}

            >
              Login with Existing Credentials
            </button>
          </div>
          <p className="text-center">
            <Link to="/signup">Create an Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Login };
