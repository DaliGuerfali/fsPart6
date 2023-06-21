import { createSlice } from "@reduxjs/toolkit";

const notifReducer = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        notify(state, action) {
            return action.payload;
        },
        clearNotification(state, action) {
            return null;
        }
    }
});

export const { notify, clearNotification } = notifReducer.actions;

export const setNotification = (notification, seconds) => {
    return async dispatch => {
        dispatch(notify(notification));
        setTimeout(() => {
            dispatch(clearNotification());
        }, seconds*1000);
    }
}

export default notifReducer.reducer;