import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {} || null,
    toggle: false
}

const globalState = createSlice({
    name: "state",
    initialState,
    reducers: {
        mainUser: (state: any, { payload }) => {
            state.user = payload
        },
        logOut: (state: any) => {
            state.user = null
        },
        toggled: (state: any) => {
            state.toggle = true
        },
        changeToggled: (state: any) => {
            state.toggle = false
        }

    }
});

export const { logOut, mainUser, changeToggled, toggled } = globalState.actions

export default globalState.reducer