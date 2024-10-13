import { useState, useEffect } from "react";
const useOnlineStatus = () => {
    const [onlineStatus, setonlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setonlineStatus(false);
        });
        window.addEventListener("online", () => {
            setonlineStatus(true);
        });
    }, []);
    return onlineStatus;
}
export default useOnlineStatus;


//not necessary to use use keywordbefore name of custom hook but its good practice