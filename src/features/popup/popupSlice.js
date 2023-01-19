import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deletePopup: false,
    cardPopup: false,
    confirmDeletePopup: false,
}

export const popupsSlice = createSlice({
    name: "popups",
    initialState,
    reducers: {
        //togglePopups
        togglePopup: (state, action) => {
            state[action.payload.popup] = !state[action.payload.popup];
        },
        //setPopupState
        setPopupState: (state, action) => {
            state[action.payload.popup] = action.payload.bool;
        }
    }
});

//export action creators
export const { togglePopup, setPopupState } = popupsSlice.actions;

export const selectPopups = (state) => state.popups;

export default popupsSlice.reducer;
