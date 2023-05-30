import {useState,useEffect} from "react";
import {Fetch_MenuURL} from "../contants";

const useRestraunt = (id) => {
    const [restraunt,setRestraunt] = useState(null);
    useEffect(() => {
        getRestrauntdetails();
    },[])
    
    async function getRestrauntdetails() {
        const data = await fetch(Fetch_MenuURL + id);
        const json = await data.json();
        setRestraunt(json.data);
    }
    return restraunt;
}

export default useRestraunt;