import {useState, useEffect} from "react";

const useOnline =  () => {
const [isOnline, setisOnline] = useState(true);
const onlinehandler =  () => {
    setisOnline(true);
}
const offlinehandler = () => {
    setisOnline(false);
}

useEffect(() => {
     window.addEventListener("online",onlinehandler);
     window.addEventListener("offline",offlinehandler);
     return () => {
        window.removeEventListener("online",onlinehandler);
        window.removeEventListener("offline",offlinehandler);
     }
     
},[]);
    return isOnline;
}

export default useOnline;