import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{
    id: 2,
    name: "",
    email: "",
    gender: "",
    status: ""
  }]
  
}
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  }
})

export default userSlice.reducer;