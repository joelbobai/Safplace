import React, { useState, useEffect } from "react";
import Email from "../images/Email.ico";
import { Link } from "react-router-dom";
//import { useAuthStore } from "../store/store";
//import { toast } from "react-toastify";
import "./Css/verification.css";
import axios from "axios";

function Verification() {
  const [counter, setCounter] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  //const { user, resendEmail } = useAuthStore();

  //console.log(user);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setCounter(60);
    setIsRunning((isRunning) => !isRunning);
    resendEmailVerification();
  };

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      document.getElementById("resend").style.display = "none";
      document.getElementById("diV").style.display = "block";
      intervalId = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter - 1;

          if (newCounter === 0) {
            setIsRunning(false);
            document.getElementById("resend").style.display = "block";
            document.getElementById("diV").style.display = "none";
          }

          return newCounter;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const resendEmailVerification = async () => {
    // toast.info("🦄 Please Wait!", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    const res = await axios
      .post(resendEmail, { email: user?.user?.email })
      .catch((err) => {
        // errorHandle(err?.response?.data);
        console.log(err?.response?.data);
      });

    if (res) {
      console.log(res.data);
      //   toast.success("Mail Sent", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
    }
  };
  //   const errorHandle = (err) => {
  //     toast.error(err, {
  //       position: "top-center",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="text-center">
          <img className="w-24 mx-auto mb-4" src={Email} alt="email_icon" />
          <h2 className="text-2xl font-bold font-primary">
            Account Verification
          </h2>
          <p className="text-gray-600 mt-2">
            Please verify your account using the link sent to your{" "}
            <span className="text-xl">👇🏽</span>
          </p>
          {/* <p className="font-bold text-gray-800">{user?.user?.email}</p> */}

          <Link
            to="/login"
            className="inline-block px-6 py-3 mt-4 text-white bg-blue-500 rounded-md hover:bg-secondary transition duration-300 font-primary"
          >
            Proceed
          </Link>

          <form onClick={handleFormSubmit} className="mt-4">
            <p className="text-gray-600">
              Didn't receive the email?
              <button
                id="resend"
                type="submit"
                className="ml-1 text-blue-500 underline hover:text-blue-600 transition duration-300"
              >
                Resend
              </button>
            </p>
          </form>

          <div className="mt-4" id="diV">
            In <b id="number"> {counter} </b> second(s)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
