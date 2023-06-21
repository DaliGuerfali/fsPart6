import { createContext, useContext, useReducer } from "react";

const notifReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET': 
            return action.payload;
        case 'CLEAR':
            return null;
        default:
            return state;
    }
}

export const createNotif = (notif) => {
  return {
    type: 'SET', 
    payload: notif
  }
}

export const clearNotif = () => { return {type: 'CLEAR'} }

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
    const [notif, notifDispatch] = useReducer(notifReducer, null);
  
    return (
      <NotificationContext.Provider value={[notif, notifDispatch]}>
        {props.children}
      </NotificationContext.Provider>
    )
  }

export const useNotifValue = () => {
  const notifAndDispatch = useContext(NotificationContext);
  return notifAndDispatch[0];
}

export const useNotifDispatch = () => {
  const notifAndDispatch = useContext(NotificationContext);
  return notifAndDispatch[1];
}

  
export default NotificationContext;