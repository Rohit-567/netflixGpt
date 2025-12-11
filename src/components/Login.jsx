import React, { useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_IMG } from "../utils/NetflixLog";

const Login = () => {

  const [isSignIn ,setIsSignIn] = useState(true)

  const toggleSignIn = ()=>{
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={NETFLIX_BG_IMG} alt="logo" />
      </div>

      <form className="absolute w-96 bg-black/70 rounded-lg p-12 my-40 mx-auto right-0 left-0 flex flex-col gap-4 text-white">

        <h1 className="text-3xl font-bold text-center">{isSignIn? "Sign In" :"Sign Up"}</h1>
        {!isSignIn && (<input
          type="text"
          placeholder="Enter Full Name"
          className="p-4 rounded text-white border border-gray-500 bg-black/60"
        />)}
        <input
          type="email"
          placeholder="Enter email"
          className="p-4 rounded text-white border border-gray-500 bg-black/60"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-4 rounded text-white border border-gray-500 bg-black/60"
        />
        <button className="bg-red-600 hover:bg-red-700 p-2 rounded font-bold">
          {isSignIn? "Sign In" :"Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}> {isSignIn?"New to Netflix? sign up now":"Allready registerd sign in now"}</p>
      </form>
    </div>
  );
};

export default Login;
