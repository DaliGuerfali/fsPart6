import { createSlice } from "@reduxjs/toolkit";

const notifReducer = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        notify(state, action) {
            return action.payload;
        }
    }
});

export const { notify } = notifReducer.actions;
export default notifReducer.reducer;