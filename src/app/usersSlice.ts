import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../types/user.model";

const initialState:UserState = {
  users: []
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload
    },
  }
})

export const { saveUsers } = userSlice.actions;
export default userSlice.reducer;