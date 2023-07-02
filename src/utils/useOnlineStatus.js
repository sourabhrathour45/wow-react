import { useEffect, useState } from "react";

//!Definig our custom hook
const useOnlineStatus = () => {
    const [OnlineStatus, setOnlineStatus] = useState(true);
    //logic part
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
          setOnlineStatus(true);
        });

    },[])

      //boolean value
    return OnlineStatus;
}

export default useOnlineStatus;