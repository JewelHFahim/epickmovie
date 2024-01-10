import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { base_url } from "../../../config/config";

const userInfo = JSON.parse(localStorage.getItem("user-info"));
const getUserName = localStorage.getItem("user-info");
const token = JSON.parse(getUserName)?.token;

const initialState = {
  email: "",
  isLoading: false,
  token: "",
  message: "",
  status: false,
};

// ==================================>> LOGIN <<==============================
export const loginUser = createAsyncThunk(
  "loginUser",
  async (body, { dispatch }) => {
    try {
      const response = await fetch(`${base_url}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        dispatch(setToken(data?.data?.token));
        const info = {
          token: data?.data?.token,
          user_name: data?.data?.user_name,
          user_type: data?.data?.user_status,
        };
        localStorage.setItem("user-info", JSON.stringify(info));

        data?.status === true
          ? toast.success(data?.message)
          : toast.error(data?.message);

        return data?.data?.token;
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      // console.error(error);
      toast.error("Login Failed");
      throw error;
    }
  }
);

// ==================================>> REGISTER <<============================
export const registerUser = createAsyncThunk(
  "registerUser",
  async (body, { dispatch }) => {
    try {
      const res = await fetch(`${base_url}/admin/signup`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const registerRes = await res.json();
        console.log(registerRes);

        dispatch(setMessage(registerRes?.message));
        toast.success(`${registerRes?.message}`);
      } else {
        return toast.error("Register Failed");
      }
    } catch (error) {
      console.log("Register Failed");
    }
  }
);

// ===================================>> LOGOUT <<=============================
export const logoutUser = createAsyncThunk(
  "logoutUser",
  async (body, { dispatch }) => {
    try {
      const res = await fetch(`${base_url}/admin/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
        body: JSON.stringify({}),
      });

      if (res.ok) {
        const logOut = await res.json();
        dispatch(setMessage(logOut?.message));
        // console.log(logOut);
        toast.success(`${logOut?.message}`);
      } else {
        return toast.error("Logout Failed");
      }
    } catch (error) {
      console.log("Logout Failed");
    }
  }
);

// ===============================>> RESET PASSWORD <<=========================
export const resetPassword = createAsyncThunk("resetPassword", async (body) => {
  try {
    const res = await fetch(`${base_url}/admin/password-recovery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      toast.success(`${data?.message}`);
    } else {
      return toast.error("Reset Failed");
    }
  } catch (error) {
    console.log("Reset Failed");
  }
});

// ===============================>> SET PASSWORD <<=========================
export const setPassword = createAsyncThunk(
  "resetPassword",
  async ({ body, token }, { dispatch }) => {
    console.log(body);
    console.log(token);
    try {
      const res = await fetch(`${base_url}/admin/password-set/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch(setStatus(data?.data?.staus));
        toast.success(`${data?.message}`);
      } else {
        return toast.error("Set Failed");
      }
    } catch (error) {
      console.log("Set Failed");
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
    },

    setMessage: (state, action) => {
      state.message = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { addToken, addLogout, setToken, setMessage, setStatus } =
  userSlice.actions;
export default userSlice.reducer;
