import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// const userInfo = JSON.parse(localStorage.getItem("token"));

const initialState = {
  email: "",
  isLoading: false,
  token: "",
};


// ==================================>> LOGIN <<==============================

export const loginUser = createAsyncThunk( "loginUser", async (body, { dispatch }) => {

    try {
      const response = await fetch(
        "https://fapi.epickmovies.fun/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {

        const data = await response.json();
        console.log(data);

        dispatch(setToken(data?.data?.token));
        // dispatch(setEmail(data?.user?.email));

        const info = {
          token: data?.data?.token
        //   email: data.user.email,
        };
        localStorage.setItem("user-info", JSON.stringify(info));

        toast.success("Login Success");

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

// ==================================>> Register <<==============================
export const registerUser = createAsyncThunk("registerUser", async (body) => {
  const res = await fetch( "https://fapi.epickmovies.fun/api/admin/signup",
    {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(body),
    }
  );
  console.log(res.json())
  return await res.json();
});


const userSlice = createSlice({

  name: "user",
  initialState,

  reducers: {

    addLogout: (state) => {
      state.token = null;
      state.user = null;
      state.email = null;
      localStorage.clear();
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    
    setUsername: (state, action) => {
      state.username = action.payload;
    },

  },

//   extraReducers: {
//     [loginUser.pending]: (state) => {
//       state.isLoading = true;
//     },

//     [loginUser.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload.error;
//       state.message = payload.status;
//     },

//     [loginUser.fulfilled]: (state) => {
//       state.isLoading = false;
//     },
//   },

});

export const {
  addToken,
  addEmail,
  addLogout,
  setToken,
  setEmail,
  setUsername,
  setUserId,
  setUserType,
} = userSlice.actions;
export default userSlice.reducer;