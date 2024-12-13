import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, isLoggedIn, setIsLoggedIn, privateData, allProduct } =
    useAuthStore();
  const [state, setState] = useState("Login");
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    retypePassword: "",
    email: "",
    dateOfBirth: "",
    mobileNumber: "",
    gender: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  }, []);
  const login = async () => {
    const res = await axios
      .post("https://backend.lillybeautyfashion.com/api/v1/user", formData)
      .catch((err) => {
        errorHandle(err?.response?.data);
      });

    if (res) {
      setUser(res.data?.user);
      console.log(res.data?.user);
      setIsLoggedIn(true);

      toast.success("Successfully logged In", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
      privateData();
      allProduct(res.data?.user?._id);
    }
  };

  const signup = async () => {
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
        "https://backend.lillybeautyfashion.com/api/v1/user/signup",
        formData
      )
      .catch((err) => {
        errorHandle(err?.response?.data);
      });

    if (res) {
      setUser(res.data);
      console.log(res.data);
      navigate("/email-verification");
    }
  };
  const validate = () => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!/^[a-zA-Z ]*$/.test(formData.fullName) || !formData.fullName) {
      errorHandle("Invalid name entered");
      setIsValid(false);
    } else if (!formData.email) {
      errorHandle("Empty email fields!");
      setIsValid(false);
    } else if (!formData.gender) {
      errorHandle("Empty gender fields!");
      setIsValid(false);
    } else if (!formData.mobileNumber) {
      errorHandle("Empty mobile-number fields!");
      setIsValid(false);
    } else if (!formData.dateOfBirth) {
      errorHandle("Empty date-Of-Birth fields!");
      setIsValid(false);
    } else if (!formData.password) {
      errorHandle("Empty password fields!");
      setIsValid(false);
    } else if (!formData.retypePassword) {
      errorHandle("Empty confirm password fields!");
      setIsValid(false);
    } else if (formData.retypePassword !== formData.password) {
      errorHandle("password does not match");
      setIsValid(false);
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errorHandle("Invalid email entered");
      setIsValid(false);
    } else if (formData.password.length < 8) {
      errorHandle("Password is too short!");
      setIsValid(false);
    } else if (!specialChars.test(formData.password)) {
      errorHandle("Password must have special character");
      setIsValid(false);
    } else {
      signup();
      console.log("Good fields");
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
      <div
        className={`max-w-[555px] h-[${
          state === "Sign Up" ? "700px" : "600px"
        }] bg-white m-auto px-14 py-10 rounded-md`}
      >
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" && (
            <input
              name="fullName"
              value={formData.fullName}
              onChange={changeHandler}
              type="text"
              placeholder="Your Full-Name"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />

          {state === "Sign Up" && (
            <>
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={changeHandler}
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile-Number-eg. +000"
                value={formData.mobileNumber}
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                onChange={changeHandler}
              />

              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
                onChange={changeHandler}
              />
            </>
          )}
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
          />
          {state === "Sign Up" && (
            <input
              name="retypePassword"
              value={formData.retypePassword}
              onChange={changeHandler}
              type="password"
              placeholder="Retype Password"
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
            />
          )}
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : validate();
          }}
          className="btn_dark_rounded my-5 w-full !rounded-md"
        >
          Continue
        </button>

        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-secondary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}

        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
