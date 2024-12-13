import { create } from "zustand";
import { toast } from "react-toastify";
import axios from "axios";

// const domain = "http://localhost:4000";
const domain = "https://backend.lillybeautyfashion.com";
export const useAuthStore = create((set) => ({
  // Load isLoggedIn state from localStorage if available
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  user: [],
  cart: [],
  product: [],
  deyVerification: false,
  application: null,
  jobs: [],
  jobDetails: null,

  loginUrl: `${domain}/api/v1/user`,
  registrationUrl: `${domain}/api/v1/user/signup`,
  logoutUrl: `${domain}/api/v1/user/logout`,

  setIsLoggedIn: (bool) => {
    set({ isLoggedIn: bool });
    localStorage.setItem("isLoggedIn", bool.toString());
  },
  setUser: (obj) => set({ user: obj }),
  setDeyVerification: (bool) => set({ deyVerification: bool }),
  setApplication: (obj) => set({ application: obj }),
  setJobs: (obj) => set({ jobs: obj }),
  setJobDetails: (obj) => set({ jobDetails: obj }),

  privateData: async () => {
    try {
      const res = await axios.get(`${domain}/api/v1/user/private_data`, {
        withCredentials: true,
      });

      const data = res?.data;
      set({ user: data?.user });
      set({ isLoggedIn: true });
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", data?.user._id);
      console.log(data);
    } catch (err) {
      set({ isLoggedIn: false });
      localStorage.setItem("user", "");
      console.log(err, err?.response?.data);
    }
  },

  logout: async () => {
    try {
      await axios.get(`${domain}/api/v1/user/logout`, {
        withCredentials: true,
      });

      set({ isLoggedIn: false });
      localStorage.setItem("isLoggedIn", "false");
    } catch (err) {
      set({ isLoggedIn: false });
      localStorage.setItem("isLoggedIn", "false");
      console.log(err, err?.response?.data);
    }
  },

  allProduct: async () => {
    try {
      const res = await axios.get(`${domain}/api/v1/product/all`);
      set({ product: res.data });
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },

  getAProduct: async (id) => {
    try {
      const res = await axios.post(`${domain}/api/v1/product`, {
        productID: id,
      });
      set({ product: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  },
  addToMyCart: async (data) => {
    try {
      await axios.post(`${domain}/api/v1/cart`, data);

      toast.success("Added to cart successfully", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (err) {
      // console.log(err, err?.response?.data.error);
      toast.error(err?.response?.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  },
  getCart: async (id) => {
    try {
      const res = await axios.post(`${domain}/api/v1/cart/all`, {
        userID: id,
      });
      set({ cart: res.data });
      console.log(res.data);
    } catch (err) {
      console.log(err, err?.response?.data);
    }
  },
}));
