import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/states.model";

const initialState: UserState = {
  users: [],
  currentUser: {
    id: 0,
    email: '',
    gender: '',
    name: '',
    status: ''
  },
  formData: {
    email: '',
    gender: '',
    name: '',
    status: ''
  },
  formUserData: {
    id: 0,
    email: '',
    gender: '',
    name: '',
    status: ''
  },
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload
    },
    saveUser: (state, action) => {
      state.users = [...state.users, action.payload ]
    },
    saveCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    updateFormInfo: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    updateFormUserInfo: (state, action) => {
      const { name, value } = action.payload;
      state.formUserData[name] = value;
    },
    saveFormUserInfo: (state, action) => {
      const user = action.payload;
      state.formUserData = user;
    },
  }
})

export const {
  saveUsers,
  saveUser,
  saveCurrentUser,
  updateFormInfo,
  updateFormUserInfo,
  saveFormUserInfo,
} = userSlice.actions;
export default userSlice.reducer;