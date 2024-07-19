import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "../types/states.model";

const initialState: ModalState = {
  isOpenDeleteModal: false,
  isOpenCreateModal: false
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
    },
    openCreateModal: state => {
      state.isOpenCreateModal = true
    },
    closeCreateModal: state => {
      state.isOpenCreateModal = false
    },
  }
})

export const {
  openDeleteModal,
  closeDeleteModal,
  openCreateModal,
  closeCreateModal,
} = modalSlice.actions;

export default modalSlice.reducer;