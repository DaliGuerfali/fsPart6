import { useContext, useEffect } from "react"
import NotificationContext, { clearNotif } from "../NotificationContext"


const Notification = () => {
  const [notif, dispatchNotif] = useContext(NotificationContext);

  useEffect(() => {
    if(notif) {
      setTimeout(() => {
        dispatchNotif(clearNotif());
      }, 5000);
    }
  }, [notif]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  return (
    notif ? 
    <div style={style}>
      {notif}
    </div>
    : null
  )
}

export default Notification;
