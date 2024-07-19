import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../types/states.model";

const initialState: ModalState = {
  isOpenDeleteModal: false
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openDeleteModal: state => {
      state.isOpenDeleteModal = true
    },
    closeDeleteModal: state => {
      state.isOpenDeleteModal = false
    }
  }
})

export const { openDeleteModal, closeDeleteModal } = modalSlice.actions;
export default modalSlice.reducer;