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
  }
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload
    },
    saveUser: (state, action) => {
      state.currentUser = action.payload
    },
  }
})

export const { saveUsers, saveUser } = userSlice.actions;
export default userSlice.reducer;