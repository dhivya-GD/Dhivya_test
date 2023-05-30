import {useContext} from "react";
import usercontx from "../Utills/UserContext";

const Rightsidetheme = () => {
    const {user,setUserlg} = useContext(usercontx);
    return (
        <>
         <div>Right : {user.name}</div>
        </>
    );
}

export default Rightsidetheme;