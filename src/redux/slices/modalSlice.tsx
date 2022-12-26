import { createSlice } from "@reduxjs/toolkit";

interface ConfirmationModalState {
    isOpened: boolean
}

const initialConfirmationModalState: ConfirmationModalState = {
    isOpened: false
}

const modalSlice = createSlice({
    name: 'confirmationModal',
    initialState: initialConfirmationModalState,
    reducers: {
        openModal: (state, action) => {
            console.log(state, action)
        }
    }

})

export const {
    openModal
} = modalSlice.actions

export default modalSlice.reducer