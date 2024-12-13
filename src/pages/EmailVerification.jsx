import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { toast } from "react-toastify";
import axios from "axios";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  const { user } = useAuthStore();

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
    toast.info("🦄 Please Wait!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const res = await axios
      .post(
        "https://backend.lillybeautyfashion.com/api/v1/email_verification",
        {
          email: user?.email,
        }
      )
      .catch((err) => {
        errorHandle(err?.response?.data);
      });

    if (res) {
      console.log(res.data);
      toast.success("Mail Sent", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const errorHandle = (err) => {
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[450px] bg-white m-auto px-14 py-10 rounded-md">
        <br />
        <br />
        <h3 className="h3"> Account Verification</h3>
        <p className="text-black font-bold text-center">
          {" "}
          Please verify your account using the link sent to your
          <br />
          <span className="text-secondary underline cursor-pointer text-cente">
            👇🏽
          </span>
        </p>
        <span
          className="text-secondary underline cursor-pointer"
          style={{ paddingLeft: 100 }}
        >
          {user?.email}
        </span>
        <br />
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="btn_dark_rounded my-5 w-full !rounded-md"
        >
          Proceed
        </button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <form onClick={handleFormSubmit} className="mt-4">
            <p className="text-gray-600" style={{ display: "flex" }}>
              Didn't receive the email?{" "}
              <button
                id="resend"
                type="submit"
                className="ml-1 text-orange-500 underline hover:text-blue-600 transition duration-300"
              >
                Resend
              </button>
            </p>
          </form>

          <div className="mt-4" id="diV">
            {" "}
            In <b id="number"> {counter} </b> second(s)
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerification;
