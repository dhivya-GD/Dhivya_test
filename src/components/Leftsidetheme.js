import {useContext} from "react";
import usercontx from "../Utills/UserContext";

const Leftsidetheme = () => {
    const {user,setUserlg} = useContext(usercontx);
    return (
        <>
         <div>Left : 
         <input className="border px-5 " type="text"  value={user.name} onChange={e => setUserlg({
            name: e.target.value,
         })}
         /></div>
        </>
    );
}
export default Leftsidetheme;

