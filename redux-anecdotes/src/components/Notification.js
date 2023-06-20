import { useDispatch, useSelector } from "react-redux";
import { notify } from "../reducers/notifReducer";
import { useEffect } from "react";

const Notification = () => {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);

  useEffect(() => {
    if(notification) {
      const timer = setTimeout(() => dispatch(notify(null)), 5000);
      return () => {clearTimeout(timer)}
    }
  }, [notification]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return notification ?  (
    <div style={style}>
      {notification}
    </div>
  ) : null;
}

export default Notification;