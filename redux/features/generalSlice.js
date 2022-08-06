import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarVisibility : false,
    isDarkMode : false
}

const generalSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        toggleVisibility : (state) => {
            state.sidebarVisibility = !state.sidebarVisibility
        },
        toggleShowMode : (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})

export const {toggleVisibility,toggleShowMode} = generalSlice.actions

export default generalSlice.reducer