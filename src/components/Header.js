import { signOut } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";
import React from "react";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSingout = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      navigate("/");
    }).catch((error) => {
      console.error("Error signing out:", error);
      navigate("/error");
    })
  }

  return (
    <>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
        <img
          className="w-44"
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
        {user && <div className="flex">
          <img
            alt="user-icon"
            src={user?.photoURL}
            className="h-9 w-9 rounded-md"
          ></img>
          <button onClick={handleSingout} className="bg-red-500 rounded-md text-white font-bold px-2 ml-2">SignOut</button>
        </div>
        }
      </div>
    </>
  );
};

export default Header;
