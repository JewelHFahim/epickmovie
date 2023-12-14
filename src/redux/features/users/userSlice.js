import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  email: "",
  isLoading: false,
  token: "",
  message: "",
};

// ==================================>> LOGIN <<==============================

export const loginUser = createAsyncThunk(
  "loginUser",
  async (body, { dispatch }) => {
    try {
      const response = await fetch("https://fapi.epickmovies.online/api/admin/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(setToken(data?.data?.token));
        const info = { token: data?.data?.token };
        localStorage.setItem("user-info", JSON.stringify(info));
        toast.success(`Login Success`);
        return data?.data?.token;
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login Failed");
      throw error;
    }
  }
);

// ==================================>> Register <<============================
export const registerUser = createAsyncThunk(
  "registerUser",
  async (body, { dispatch }) => {
    try {
      const res = await fetch("https://fapi.epickmovies.online/api/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const registerRes = await res.json();
        dispatch(setMessage(registerRes?.message));
        console.log(registerRes);
        console.log(registerRes?.message);
        toast.success(`${registerRes?.message}`);
      } else {
        return toast.error("Register Failed");
      }
    } catch (error) {
      console.log("Register Failed");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLogout: (state) => {
      state.token = null;
      localStorage.clear();
    },

    setToken: (state, action) => {
      state.token = action.payload;

      console.log("setToken", action.payload)
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { addToken, addLogout, setToken, setMessage } = userSlice.actions;
export default userSlice.reducer;
