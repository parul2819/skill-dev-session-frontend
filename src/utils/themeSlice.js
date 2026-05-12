import {createSlice} from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
        setLight: (state) => {
            state.isDarkMode = false;
        },
        setDark: (state) => {
            state.isDarkMode = true;
        },
    },
})

export const { toggleTheme, setLight, setDark } = themeSlice.actions;
export default themeSlice.reducer;