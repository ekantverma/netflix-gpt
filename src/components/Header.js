import { signOut, onAuthStateChanged } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import React from "react";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {LOGO} from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSingout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  const daa = ()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
  });

    // Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
        <img
          className="w-44"
          alt="logo"
          src={LOGO}
        ></img>
        {user && (
          <div className="flex">
            <img
              alt="user-icon"
              src={user?.photoURL}
              className="h-9 w-9 rounded-md"
            ></img>
            <button
              onClick={handleSingout}
              className="bg-red-500 rounded-md text-white font-bold px-2 ml-2"
            >
              SignOut
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
