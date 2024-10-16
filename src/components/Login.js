import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPass = useRef(null);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const errorMsg = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMsg);
    if (errorMsg) return;

    if (!isSignInForm) {
      if (password.current.value !== confirmPass.current.value) {
        setErrorMessage("Passwords do not match");
        return;
      }
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/133310038?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div className="relative h-[full] w-full bg-black">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          className="object-cover w-full h-[calc(100vh-40px)]" // Adjust height based on header
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full flex justify-center items-start">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-[90%] max-w-[400px] p-8 bg-black bg-opacity-80 text-white rounded-md mt-14"
        >
          <h1 className="text-3xl font-bold mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {/* Full Name Field for Sign Up */}
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full bg-gray-700 opacity-70 rounded-md"
            />
          )}

          {/* Common Fields */}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-4 w-full bg-gray-700 opacity-70 rounded-md"
          />

          {/* Password Input */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-gray-700 opacity-70 rounded-md"
          />

          {/* Confirm Password Field for Sign Up */}
          {!isSignInForm && (
            <input
              ref={confirmPass}
              type="password"
              placeholder="Confirm Password"
              className="p-3 my-2 w-full bg-gray-700 opacity-70 rounded-md"
            />
          )}

          <p className="text-red-500 font-bold text-md py-2">{errorMessage}</p>

          {/* Submit Button */}
          <button
            type="submit"
            className="p-2 my-2 bg-red-700 w-full rounded-lg"
            onClick={(e) => {
              e.preventDefault(); // Prevent page refresh
              handleButtonClick(); // Trigger login logic
            }}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="border-t border-gray-600 flex-grow mr-3"></span>
            <h2 className="text-center">OR</h2>
            <span className="border-t border-gray-600 flex-grow ml-3"></span>
          </div>

          {/* Additional options for Sign In */}
          {isSignInForm && (
            <>
              <a href="#" className="text-blue-400 hover:underline">
                Forgot Password?
              </a>
              <div className="mt-3 flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="mr-2 bg-white"
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
            </>
          )}

          {/* Toggle between Sign In and Sign Up */}
          <div className="mt-6">
            <p>
              {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
              <a
                href="#"
                className="text-white font-bold hover:underline"
                onClick={toggleSignUp}
              >
                {isSignInForm ? "Sign up now." : "Sign in here."}
              </a>
            </p>
          </div>

          {/* reCAPTCHA notice */}
          <div className="mt-4 text-sm text-gray-400">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Learn more.
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Footer Div with black background for space below the form */}
      <div className="h-[500px] bg-black"></div>
    </div>
  );
};

export default Login;
