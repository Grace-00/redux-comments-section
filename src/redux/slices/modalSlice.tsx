import { createSlice } from "@reduxjs/toolkit";

interface ConfirmationModalState {
    isOpen: boolean
}

const initialConfirmationModalState: ConfirmationModalState = {
    isOpen: false

}

const modalSlice = createSlice({
    name: 'confirmationModal',
    initialState: initialConfirmationModalState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = !state.isOpen
        }
    }

})

export const {
    openModal
} = modalSlice.actions

export default modalSlice.reducer